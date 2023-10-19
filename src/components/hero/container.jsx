// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
import { useState } from "react";
import axios from "axios";

function Container() {
  let centerAbsolute = `top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`;
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[a-z\s]+$/;
    const convertedName = input.toLowerCase();
    const reTest = regex.test(convertedName);
    if (reTest && convertedName) {
      axios
        .get(
          // eslint-disable-next-line no-undef
          `https://api.openweathermap.org/data/2.5/weather?q=${convertedName}&appid=${process.env.API_KEY}`
        )
        .then((res) => {
          setData(res.data);
          setErr(null);
        })
        .catch((err) => {
          setErr(err.response);
        });
    }
  };

  return (
    <>
      {/* container */}
      <div
        className={`lg:w-[480px] md:w-[465px] sm:w-[420px] w-[290px] h-[90%] absolute ${centerAbsolute} bg-gray-300 bg-opacity-70 flex flex-col items-center justify-center gap-9 p-4 rounded-lg`}
      >
        {/* header */}
        <div className="flex flex-col items-center px-3">
          <div className="flex items-center gap-2">
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="/"
              className="w-[64px] h-[64px] opacity-100"
            />
            <h3 className="text-[24px]">
              {data ? data?.weather[0].main : "Enter city name:"}
            </h3>
          </div>
          <h1 className="text-[20px]">
            {data ? `${data?.sys.country}, ${data?.name}` : `___`}
          </h1>
        </div>

        {/* main */}
        <div className="flex flex-col items-center">
          <h1 className="text-[52px] font-bold">
            {data ? Math.floor(data?.main.temp - 273.15) : "--"} &deg;C
          </h1>
          <div>
            <p className="text-[20px]">
              Feels Like:{" "}
              {data ? Math.floor(data?.main.feels_like - 273.15) : "--"} &deg;C
            </p>
            <p className="text-[20px]">
              Humidity: {data ? data?.main.humidity : "--"} %
            </p>
            <p className="text-[20px]">
              Description:{" "}
              <span className="capitalize">
                {data ? data?.weather[0].description : "--"}
              </span>
            </p>
          </div>
        </div>

        {/* form */}
        <form
          className="flex flex-col items-center gap-3"
          onSubmit={handleSubmit}
        >
          <p className="text-red-600 text-[18px]">
            {err?.status === 404 && "Entered city isn't found."}
          </p>
          <input
            type="text"
            className="px-2 py-1 h-10 focus:outline-none"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            type="submit"
            className="px-3 py-2 w-[120px] bg-blue-500 rounded-md text-white"
          >
            Hello
          </button>
        </form>
      </div>
    </>
  );
}

export default Container;
