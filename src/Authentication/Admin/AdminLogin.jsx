import "./adminLogin.css";
const AdminLogin = () => {
  return (
    <div className="p-10 h-screen flex justify-center items-center">
      <div className="w-11/12 max-w-[500px] mx-auto mb-10 rounded-xl bg-background p-5">
        <div className="w-full lg:w-[80%] mx-auto mt-8">
          <h1 className="text-center pt-3 titleStyle poppins">
            Admin <span>Login</span>
          </h1>
        </div>
        <div className="poppins w-full lg:w-[80%] mx-auto mt-8">
          <form className="w-full lg:w-[100%] mx-auto mt-8 pb-5 ps-0 pe-0">
            <div className="lg:grid lg:grid-cols-1 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1 gap-2 w-full">
              <div className="flex flex-col w-full justify-start pb-1">
                <label className="poppins">
                  Email or Phone
                  <span className="">
                    <i className="fa-solid fa-asterisk text-sm w-[8px] ms-1 pb-1 text-primary"></i>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Email or phone"
                  name="name"
                  className="poppins border border-slate-500 mt-2 ps-3 bg-background text-inherit w-full h-[50px] rounded focus:outline-none pr-2"
                />
              </div>

              <div className="flex flex-col w-full justify-start">
                <label className="poppins">
                  Password
                  <span className="">
                    <i className="fa-solid fa-asterisk text-sm w-[8px] ms-1 pb-1 text-primary"></i>
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="telephone"
                  className="poppins border border-slate-500 mt-2 ps-3 bg-background text-inherit w-full h-[50px] rounded focus:outline-none pr-2"
                />
              </div>
            </div>

            <button
              type="submit"
              className="cursor-pointer bg-primary w-48 p-3 rounded-full mt-8 mb-3"
            >
              <p className="poppins font-medium">Login</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
