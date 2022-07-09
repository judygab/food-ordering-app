import { useForm } from 'react-hook-form';

export const PaymentForm = () => {
    const onSubmit = (data) => console.log(data);
    return (
        <form>
            <h3 className="pt-4 text-2xl text-center">Please enter your card details</h3>
            <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">First Name</label>
                    <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                    />
                </div>
                <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="lastName">Last Name</label>
                    <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        placeholder="First Name"
                    />
                </div>
            </div>     
            <div className="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="cardNumber">
                    Card Number
                </label>
                <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Card Number"
                />
            </div>
        </form>
    )
}