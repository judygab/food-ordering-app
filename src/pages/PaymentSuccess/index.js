import Alert from "../../components/elements/Alert";

const PaymentSuccess = () => {
    return (
        <div className="max-w-lg mx-auto p-4">
            <Alert variant="success"><span>Payment was successfull. Thank you for your order!</span></Alert>
        </div>
    )
}

export default PaymentSuccess;