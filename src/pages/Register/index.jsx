import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-screen flex  items-center justify-center">
      <div className="border-4 p-10 rounded-lg max-w-md w-full flex flex-col items-center justify-center">
        <p className="text-5xl text-white">Register</p>
        <div className="h-5"></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-6  rounded-lg"
        >
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
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-daintree focus:border-daintree sm:text-lg"
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
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-daintree focus:border-daintree sm:text-lg"
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
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-100 sm:text-lg"
            />
          </div>
          <div className="h-2"></div>
          <input
            type="submit"
            className="bg-white w-full py-2 rounded-lg cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
