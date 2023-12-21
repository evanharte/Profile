import { useNavigate } from "react-router-dom";
import profileImg from "../images/evan.jpeg";
import awsImg from "../images/aws-badge.png";
import genesisImg from "../images/genesis.jpg";
import ezoosImg from "../images/ezoos.png";
import dogapiImg from "../images/dog-api.png";
import React, { useState } from "react";
import ContactModal from "./ContactModal";
import resumePDF from "../files/resume.pdf";

const MainPage = () => {
  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "5px",
    border: "1px solid white",
    borderRadius: "8px",
    minWidth: "100px",
    margin: "10px 10px 10px 10px",
  };

  const navigateToNewRoute = useNavigate();

  const handleButtonClick = () => {
    navigateToNewRoute("/Work");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <>
      <div className="main-page-top">
        <div className="main-page-top-top">
          <p className="welcome-text">
            Hello! I am a developer living in Newfoundland.
          </p>
          <img src={profileImg} alt="profile pic" className="profile-pic" />
        </div>
        <div>
          <p className="blurb-text">
            I am currently studying Software Development at Keyin College in St.
            John's, NL. I have just completed my second semester.
          </p>
        </div>
        <div>
          <button
            style={buttonStyle}
            onClick={() => {
              openModal();
            }}
          >
            Contact Me
          </button>
          <button style={buttonStyle} onClick={downloadResume}>
            Download My Resume
          </button>
        </div>
      </div>
      <div className="main-page-mid">
        <p className="bold-black">Recent Activity</p>
        <div>
          <button style={buttonStyle} onClick={handleButtonClick}>
            My Work
          </button>
        </div>
        <div className="square-flex">
          <button className="blue-square" onClick={handleButtonClick}>
            <h3>AWS Cloud Foundations graduate</h3>
            <img src={awsImg} alt="AWS img" width="200px" />
          </button>
          <button className="blue-square" onClick={handleButtonClick}>
            <h3>Volunteer Work</h3>
            <img
              src={genesisImg}
              alt="Genesis pic"
              width="200px"
              style={{ borderRadius: "12px", border: "4px solid black" }}
            />
          </button>
        </div>
        <div className="square-flex">
          <button className="blue-square" onClick={handleButtonClick}>
            <h3>Personal Project - 'Ezoos.biz'</h3>
            <img
              src={ezoosImg}
              alt="ezoos img"
              width="300px"
              style={{ borderRadius: "12px", border: "4px solid black" }}
            />
          </button>
          <button className="blue-square" onClick={handleButtonClick}>
            <h3>School Project - The Dog API</h3>
            <img
              src={dogapiImg}
              alt="dog api img"
              width="300px"
              style={{ borderRadius: "12px", border: "4px solid black" }}
            />
          </button>
        </div>
        <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
};

export default MainPage;
