import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/elements/Button';
import Text from '../../components/elements/Text';
import { app } from '../../firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    const authentication = getAuth();
    signInWithEmailAndPassword(authentication, data.email, data.password)
    .then((response) => {
      setLoading(false);
      navigate('/')
      sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      window.dispatchEvent(new Event("storage"));
    })
    .catch((error) => {
      console.log(error.code)
      if (error.code === 'auth/wrong-password') {
        toast.error('Please check the Password');
      }
      if (error.code === 'auth/user-not-found') {
        toast.error('Email not found, please register');
      }
      setLoading(false);
    })
  };

  const toastTest = () => {
    toast.success('Account created successfully!🎉', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark'
      });
  }

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
        {/* absolute div with gradient in the backend will act as the border */}
        <div className="absolute inset-0 transition duration-300 animate-pink blur  gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
        <div className="p-10 rounded-xl z-10 bg-black w-full h-full flex flex-col items-center justify-center">
          <Text variant="hero">Login</Text>
          <div className="h-10"></div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
            <div className="">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-200 "
              >
                Email
              </label>
              <input
                {...register('email')}
                id="email"
                type={'email'}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
              />
            </div>
            <div className="">
              <label
                htmlFor="email"
                className="block  font-medium text-gray-200 "
              >
                Password
              </label>
              <input
                {...register('password')}
                id="password"
                type={'password'}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-100"
              />
            </div>
            <div className="h-2"></div>

            <Button size="large">Sign In</Button>
            <button onClick={toastTest}>throw toast</button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
