import {Link} from 'react-router-dom'
import foody from '../assets/icons/foody.png'
import cartIcon from '../assets/icons/cart.svg'

export const Header = () => {
    return (
        <nav id="header" className="fixed w-full z-30 top-0 text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="pl-4 flex items-center">
                    <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" >
                        <img src={foody} alt="" className='w-40 h-40 object-cover' />
                    </Link>
                </div>
                <div className="block lg:hidden pr-4">
                    <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="flex items-center justify-between space-x-10">
                    <Link to="/" className='text-xl'>
                        Home
                    </Link>
                    <Link to="/" className='text-xl'>
                        About
                    </Link>
                    <Link to="/" className='text-xl'>
                        Categories
                    </Link>
                    <Link to="/" className='text-xl'>
                        Order
                    </Link>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <Link to="/cart">
                    <img src={cartIcon} alt="" />
                    
                    </Link>
                    <Link to="/login">
                        Log In
                    </Link>
                    <Link to="/register" className='bg-gold p-4 rounded'>
                      Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    )
};