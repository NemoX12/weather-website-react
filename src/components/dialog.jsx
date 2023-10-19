import { useState } from "react";

function Dialog() {
  const [show, setShow] = useState(true);

  let centerAbsolute = `top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`;

  return (
    <>
      {show && (
        <div
          className={`absolute ${centerAbsolute} w-full h-[100vh] bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center`}
        >
          <div className="rounded-md lg:w-[480px] md:w-[465px] sm:w-[420px] w-[290px] h-[80%] bg-gray-400 flex flex-col items-center justify-center gap-[4rem]">
            <h1 className="font-bold text-[16px] sm:text-[24px]">
              Weather Info React + TailwindCSS
            </h1>
            <p className="text-center  max-w-[20rem] text-[14px] sm:text-[16px]">
              <span>Hello, thank you for visiting.</span>
              <br /> <br />{" "}
              <span>
                This is a simple web application that will help you find the
                current weather in your city.
              </span>
              <br /> <br />{" "}
              <span className="font-bold text-red-500">
                Application supports only ENGLISH!.
              </span>{" "}
              <br /> <br /> <span>The website was created by NemoX12.</span>{" "}
              <br />
              <br />
              <a
                href="https://github.com/NemoX12"
                className="px-3 py-2 bg-gray-700 text-white rounded-md"
              >
                GitHUB
              </a>
            </p>
            <button
              className="px-4 py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-md text-white"
              onClick={() => {
                setShow(false);
              }}
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Dialog;
