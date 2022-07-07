import { Link } from 'react-router-dom';
import foody from '../assets/images/foody.png';
import cartIcon from '../assets/icons/cart.svg';

export const Header = ({ cartCount }) => {
  return (
    <nav id="header" className="bg-black  text-white ">
      <div className="w-full  mx-auto flex flex-wrap items-center justify-between mt-0 py-2 ">
        <div className="pl-4 flex items-center">
          <Link
            to="/"
            className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          >
            <img src={foody} alt="" className="w-40 h-40 object-cover" />
          </Link>
        </div>
        {/* Desktop */}

        {/* <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div> */}
        {/* Mobile */}
        <div className="hidden lg:flex items-center justify-between space-x-10">
          <Link to="/" className="text-xl">
            Home
          </Link>
          <a href="#about" className="text-xl">
            About
          </a>
        </div>
        {/* Desktop */}
        {/* margin on the right as as logo is transparent so to make it look even */}
        <div className="hidden lg:flex items-center justify-center space-x-4 mr-10">
          <Link to="/cart" className="mr-4 relative">
            <img src={cartIcon} alt="" />
            {cartCount > 0 ? <div className="rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-full absolute -top-1 -right-1">{cartCount}</div> : null}
          </Link>
          <Link to="/login">Log In</Link>
          <Link to="/register" className="bg-gold p-4 rounded">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};
