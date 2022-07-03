import { Button } from "./elements/Button";

export const Banner = () => {
    return (
        <div className="banner container-lg px-7 mx-auto sm:mx-7">
            <div className="banner-description w-full md:w-1/2 p-3">
                <h2 className="mb-6 text-4xl font-bold text-white">
                    Food Ordering Made Easy
                </h2>
                <p className="font-semibold text-lg text-red-600 py-2">
                    Get Started Today!
                </p>
                <div className="btn-container">
                    <Button variant="secondary">Order Now</Button>
                    <a href="/" className="text-yellow-400 hover:text-yellow-500 text-decoration-line px-3">See Menu</a>
                </div>
            </div>
            <div className="banner-image w-full md:w-1/2 p-3">

            </div>
        </div>
    )
}