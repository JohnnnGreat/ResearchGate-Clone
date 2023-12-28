import React from "react";
import ProfileContainer from "@/components/ProfileContainer";
import HeaderPage from "@/components/HeaderPage";

const SignUp = () => {
  return (
    <>
      <HeaderPage />
      <div className="main">
        <div className="main__wrapper">
          <h1 className="p-h">
            Join 25+ million researchers, including 80 Nobel Laureates
          </h1>
          <p className="p-d">What type of researcher are you?</p>

          <div className="profile-container mt-[1rem]">
            <ProfileContainer
              header="Corporate, Government, or NGO"
              text=" Technology or product developers, R&D specialists, and government or NGO employees in scientific roles "
            />

            <ProfileContainer
              header="Corporate, Government, or NGO"
              text=" Technology or product developers, R&D specialists, and government or NGO employees in scientific roles "
            />
            <ProfileContainer
              header="Corporate, Government, or NGO"
              text=" Technology or product developers, R&D specialists, and government or NGO employees in scientific roles "
            />
            <ProfileContainer
              header="Corporate, Government, or NGO"
              text=" Technology or product developers, R&D specialists, and government or NGO employees in scientific roles "
            />
          </div>

          <div className="last-i">
            <h1>Links researchers from around the world.</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
