import { useForm } from 'react-hook-form';

export const AddressForm = () => {
    const onSubmit = (data) => console.log(data);
    return (
        <form className="md:w-2/3 md:mx-auto px-2 pt-1">
        <h3 className="pt-4 text-2xl md:text-center">Address for the delivery</h3>
        <div className="mb-4">
            <label class="block mb-2 text-sm font-bold text-gray-700" for="streetAddress">
                Street Address
            </label>
            <input
                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="street address"
                type="text"
                placeholder="Card Number"
            />
        </div>
        <div className="mb-4 md:flex md:justify-between">
            <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                <label className="block mb-2 text-sm font-bold text-gray-700" for="city">City</label>
                <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="city"
                    type="text"
                    placeholder="City"
                />
            </div>
            <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                <label className="block mb-2 text-sm font-bold text-gray-700" for="state">State</label>
                <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="state"
                    type="text"
                    placeholder="State"
                />
            </div>
        </div>     
    </form>
    )
}