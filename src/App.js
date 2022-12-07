import "./App.css";

function App() {
  return (
    <div>
      <div className="navbar flex items-center justify-between mt-2 mx-3">
        <div className="flex items-center justify-center md:order-2">
          <div className="hamburger mr-2 md:hidden">
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
          </div>
        </div>

        <div className="logo text-center flex md:order-1 ">
          <div>
            <img src="/microsoft.png" style={{ width: 25 }} />
          </div>
          <div className="features md:px-2  md:bg-white bg-slate-600 md:static md:w-auto w-fit absolute inset-0 md:flex md:mx-4 md:space-x-3 md:-translate-x-0 -translate-x-full">
            <div className="fitem">Microsoft 365</div>
            <div className="fitem">Office</div>
            <div className="fitem">Windows</div>
            <div className="fitem">Surface</div>
            <div className="fitem">Xbox</div>
          </div>
        </div>

        <div className="cart text-center md:order-3 flex">
          <div>
            <img src="/cart.png" style={{ width: 25 }} />
          </div>
        </div>
      </div>

      <div className="slider flex flex-col-reverse md:justify-around md:flex-row bg-slate-50 mx-2 my-2">
        <div className="left flex flex-col justify-center items-center md:items-baseline py-10">
          <h1 className="text-4xl mx-5">Surface Laptop 4</h1>
          <p className="w-3/4 mx-5 text-center md:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry'
          </p>
          <button className="bg-black py-2 px-2 text-cyan-50 font-bold my-4 mx-5">
            Shop Now
          </button>
        </div>
        <div className="right flex justify-center">
          <img src="laptop.png" style={{ width: 250 }} />
        </div>
      </div>
    </div>
  );
}

export default App;
