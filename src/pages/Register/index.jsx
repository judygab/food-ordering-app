import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/elements/Button';
import Text from '../../components/elements/Text';
import { app } from '../../firebase-config';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from '../../components/elements/Spinner';

const Register = () => {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    const authentication = getAuth();
    let uid = '';
    createUserWithEmailAndPassword(authentication, data.email, data.password)
    .then((response) => {
      uid = response.user.uid;
      sessionStorage.setItem('User Id', uid);
      sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      window.dispatchEvent(new Event("storage"));
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Email Already in Use');
      }
    })

    fetch('http://localhost:8080/api/create-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: data.email,
        name: data.name,
        _id: uid
      })}).then((response) => {
        if (response.status === 200) {
          setLoading(false);
          navigate('/');
        } else {
          console.log(response.json());
        }
      }).catch((error) => {
        setLoading(false);
        console.log(error);
      })

  };

  return (
    <div className="h-screen bg-black flex  items-center justify-center">
      <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
        {/* absolute div with gradient in the backend will act as the border */}
        <div className="absolute inset-0 transition duration-300 animate-pink blur  gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
        <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
          <Text variant="hero">Register</Text>
          <div className="h-5"></div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
            <div className="">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-200 "
              >
                Name
              </label>
              <input
                {...register('name')}
                id="name"
                type={'text'}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
              />
            </div>
            <div className="">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-200 "
              >
                Email address
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
                className="block text-lg font-medium text-gray-200 "
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
            <Button size="large">{loading ? <Spinner /> : 'Register'}</Button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;
