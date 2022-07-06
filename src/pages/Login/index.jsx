import { useForm } from 'react-hook-form';
import Button from '../../components/elements/Button';
import Text from '../../components/elements/Text';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
