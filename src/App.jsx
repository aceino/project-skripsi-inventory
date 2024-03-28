function App() {
  return (
    <div className="flex justify-center items-start mx-auto lg:p-10 h-screen">

      <div className="flex flex-col justify-start items-center lg:w-1/5 bg-red-400 rounded-tl-lg rounded-bl-lg min-h-full p-5">
     
        <div className="flex flex-col justify-center w-full h-60">

          <div className="w-20 mx-auto lg:w-28">
            <img src="/image/logo.jpg" alt="logo" />
          </div>

          <div className="mt-10">
            <h1 className="font-bold text-lg">Admin</h1>
            <h1 className="font-base text-md">Marcell</h1>
          </div>

        </div>

        <div className="flex flex-col justify-center  w-full h-72">
          <h1 className="text-left font-semibold text-lg">Items</h1>
          <h1 className="text-left font-semibold text-lg">Item In</h1>
          <h1 className="text-left font-semibold text-lg">Item Out</h1>
          <h1 className="text-left font-semibold text-lg">Suppliers</h1>
        </div>

      </div>

      <div className="flex justify-center items-center w-full lg:w-3/4 rounded-tr-lg rounded-br-lg bg-red-200 min-h-full">
        ini datanya
      </div>
    </div>
  );
}

export default App;
