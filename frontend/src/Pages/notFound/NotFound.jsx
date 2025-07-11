function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-[100%] mt-[17%] max-sm:mt-[60%] max-md:mt-[30%] max-lg:mt-[25%]">
      <h1 className="text-[40px] font-bold">404</h1>
      <p className="why-us-p">Oops! Page not Found</p>
      <a
        href="/"
        className="mt-10 underline cursor-pointer text-[rgb(52,85,193)] text-lg hover:opacity-70"
      >
        Back to Home
      </a>
    </div>
  );
}

export default NotFound;
