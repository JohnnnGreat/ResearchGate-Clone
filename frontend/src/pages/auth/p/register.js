import HeaderPage from "@/components/HeaderPage";
import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import ReactDOMServer from "react-dom/server";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import { countries } from "@/data";

const Register = () => {
  const PLACES = [
    "top",
    "top-start",
    "top-end",
    "right",
    "right-start",
    "right-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "left",
    "left-start",
    "left-end",
  ];

  const [countriesList, setCountriesList] = useState(countries);
  const [text, setText] = useState("");
  const [countriesL, setShowCountries] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    "Click to select a country"
  );

  const handleCountryChoice = (e) => {
    // setText(e.target.value);

    if (e.target.value === "") {
      setCountriesList(countries);
    } else {
      const filteredList = countriesList.filter((item) => {
        return item.name.toUpperCase().includes(e.target.value.toUpperCase());
      });
      setCountriesList(filteredList.length > 0 ? [...filteredList] : countries);
    }
  };
  return (
    <>
      <Tooltip
        // key={place}
        anchorSelect="#ins-co"
        html={ReactDOMServer.renderToStaticMarkup(
          <div className="text-[.7rem]">
            <h1 className="font-bold">
              Please use your institutional email address
            </h1>{" "}
            <hr className="mt-[.5rem]" />
            <p>
              Your institutional email is a quick way for us to <br /> verify
              that you're a researcher – enter it to gain instant <br></br>
              access to ResearchGate.
            </p>
          </div>
        )}
        place={"right"}
        style={{ backgroundColor: "#fff", color: "#222", opacity: "1" }}
      />

      <HeaderPage />

      <div className="signup">
        <div className="signup__wrapper">
          <h1
            className="font-bold text-[1.4rem] text-center"
            style={{ lineHeight: "2" }}
            id="my-tooltip-anchor"
          >
            Join 25+ million researchers, including 80 Nobel Laureates
          </h1>
          <p className="text-center text-[.8rem] mt-[.8rem]">
            Read the latest publications in your field • Discuss your work with
            other specialists • Collaborate with colleagues
          </p>
          <div className="flex items-center justify-center w-full">
            <div className="line"></div>
          </div>
          <div className="flex justify-center">
            <form className="flex flex-col mt-[3rem]">
              <label htmlFor="">First Name</label>
              <input type="text" />
              <label htmlFor="">Last Name</label>
              <input type="text" />
              <label htmlFor="">Country/Region</label>
              <button
                onClick={(e) => {
                  e.preventDefault();

                  setShowCountries(true);
                  console.log(countriesL);
                }}
                className="btn flex items-center justify-between"
              >
                {selectedCountry}
                <FaCaretDown />
              </button>
              <div
                className={`relative  bg-white ${
                  countriesL ? "block" : "hidden"
                }`}
              >
                {" "}
                <div className="p-[.7rem] overflow-y-scroll drop-cown bg-white shadow-md w-full absolute top-0 left-0 h-[200px]">
                  <input
                    type="text"
                    // value={text}
                    onChange={handleCountryChoice}
                    className="w-full rounded-md shadow-inner"
                  />

                  <ul>
                    {countriesList.map((item) => (
                      <li>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setShowCountries(false);
                            console.log(countriesL);
                            setSelectedCountry(item.name);
                          }}
                          className="p-[.2rem] mt-[.6rem] px-[.7rem] hover:text-white border-b w-full text-left hover:bg-gray-500 rounded-lg"
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <label htmlFor="">Your institution email</label>
              <input type="text" id="ins-co" />
              <div className="flex justify-between items-center">
                <label htmlFor="">Password</label>
                <button className="underline text-[.8rem] font-bold ">
                  show password
                </button>
              </div>

              <input type="password" />
              <div className="flex gap-[1rem] mt-[1.2rem]">
                <input type="checkbox" />
                <p className="text-[.8rem]">
                  {" "}
                  I agree to the <a href="/">Terms of Service </a> and
                  acknowledge the <a href="/">Privacy Policy</a>
                </p>
              </div>

              <Link
                className="w-full bg-[#0080ff] text-white font-semibold shadow-inner block py-[.4rem] text-center mt-[1.2rem]"
                href="/"
              >
                Continue
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
