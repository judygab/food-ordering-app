import { useForm } from 'react-hook-form';
import { CardElement, useElements, useStripe , Elements} from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import Button from './elements/Button';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, getProductsCart } from '../stores/cart/cartSlice';
import { getAddress, clearAddress } from '../stores/userInfo/addressSlice';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export const StripeWrapper = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    )
}

const PaymentForm = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const cart = useSelector(getProductsCart);
    const address = useSelector(getAddress);
    const navigate = useNavigate();
    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let uid = sessionStorage.getItem('User Id');
        if (!stripe || !elements || !cart?.products.length || !uid || !address) {
            return;
        }
        setLoading(true);
        try {
            console.log('here');
        // Create payment intent on the server
        const { error: backendError, clientSecret } = await fetch('http://localhost:8080/create-payment-intent', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                paymentMethodType: 'card',
                currency: 'usd',
                orderItems: cart.products,
                userId: uid,
                shippingAddress: address
            })}).then(r => r.json());
            console.log(clientSecret);

        // Confirm the payment on the client
        const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
            clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                }
            }
        )

        if (backendError || stripeError) {
            setError(backendError || stripeError);
        }  else if (paymentIntent.status === 'succeeded') {
            // clear cart and address
            dispatch(clearAddress());
            dispatch(clearCart());
            navigate('/payment-success');
        }
        } catch (err) {
            console.log(err);
        }
        setLoading(false);

    }

    return (
        <form className="md:w-2/3 md:mx-auto px-2 pt-1" id="payment-form" onSubmit={handleSubmit}>
            <label htmlFor="card-element" className="pt-4 text-2xl md:text-center">Please enter your card details</label>
            <div className="my-4">
                <CardElement id="card-element" />
            </div>
            <div className="flex justify-center p-2">
                <Button type="submit" disabled={loading}>{
                    loading ? 'Loading...' : 'Pay Now'
                }</Button>
            </div>
        </form>
    )
}