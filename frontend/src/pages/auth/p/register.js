import HeaderPage from "@/components/HeaderPage";
import React from "react";
import { Tooltip } from "react-tooltip";
import ReactDOMServer from "react-dom/server";
import Link from "next/link";

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
              <input type="text" />
              <label htmlFor="">Your institution email</label>
              <input type="text" id="ins-co" />
              <div className="flex justify-between items-center">
                <label htmlFor="">Password</label>
                <button className="underline text-[.8rem] font-bold">
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
                className="w-full bg-[#0080ff] shadow-lg shadow-inner block py-[.4rem] text-center mt-[1.2rem]"
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
