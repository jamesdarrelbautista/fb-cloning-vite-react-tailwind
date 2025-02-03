
const LoginPage = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-20 justify-center h-screen items-center bg-slate-100 pb-24">
        <div className="flex flex-col gap-4">
          <div className="text-5xl font-bold text-blue-600 sm:text-center lg:text-start">facebook-clone</div>
          <div className="text-3xl font-normal sm:text-center lg:text-start ">
            Connect with friends and the world<br></br> around you on Facebook.
          </div>
        </div>
        <div className="border border-slate-200 rounded-xl shadow-lg py-5 drop-shadow-md">
          <div className="flex flex-col gap-3 w-[460px]  items-center my-2">
            <div className="border bg-blue-50 border-slate-500 w-[400px] rounded-lg">
              <input
                className="text-md w-[400px] p-3 py-2"
                type="email"
                placeholder="Email address or phone number"
              />
            </div>
            <div className="border bg-blue-50 border-slate-500 w-[400px] rounded-lg">
              <input
                className="text-md w-[400px] p-3 py-2"
                type="email"
                placeholder="Password"
              />
            </div>

            <button className="bg-blue-600 w-[400px] text-white font-bold p-2 rounded-md text-lg">
              Isulod ang kuan hehe
            </button>
            <div className="text-blue-800 mx-auto text-sm mt-4">
              Forget password?
            </div>
            <div className="border-b w-[400px] border-slate-300"></div>
            <button className="bg-green-600 text-white font-bold p-2 px-4 rounded-lg">
              Create new account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
