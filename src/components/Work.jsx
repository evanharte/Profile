import profileImg from "../images/evan.jpeg";
import awsImg from "../images/aws-badge.png";
import genesisImg from "../images/genesis.jpg";
import ezoosImg from "../images/ezoos.png";
import dogapiImg from "../images/dog-api.png";
import React, { useState } from "react";
import AWSModal from "./AWSModal";
import VolModal from "./VolModal";
import EzooModal from "./EzooModal";
import DogModal from "./DogModal";
import WorkoutWizModal from "./WorkoutWizModal";
import workoutWizard from "../images/workoutwizard.png";
import funWing from "../images/funwing.png";
import FunWingModal from "./FunWingModal";

const Work = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVolModalOpen, setIsVolModalOpen] = useState(false);
  const [isEzooModalOpen, setIsEzooModalOpen] = useState(false);
  const [isDogModalOpen, setIsDogModalOpen] = useState(false);
  const [isWizModalOpen, setIsWizModalOpen] = useState(false);
  const [isFunModalOpen, setIsFunModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openVolModal = () => {
    setIsVolModalOpen(true);
  };

  const closeVolModal = () => {
    setIsVolModalOpen(false);
  };

  const openEzooModal = () => {
    setIsEzooModalOpen(true);
  };

  const closeEzooModal = () => {
    setIsEzooModalOpen(false);
  };

  const openDogModal = () => {
    setIsDogModalOpen(true);
  };

  const closeDogModal = () => {
    setIsDogModalOpen(false);
  };

  const openWizModal = () => {
    setIsWizModalOpen(true);
  };

  const closeWizModal = () => {
    setIsWizModalOpen(false);
  };

  const openFunModal = () => {
    setIsFunModalOpen(true);
  };

  const closeFunModal = () => {
    setIsFunModalOpen(false);
  };

  return (
    <div className="main-page-mid-2">
      <img src={profileImg} alt="profile pic" className="profile-pic-sm" />
      <h5 className="more-details-h5">Click Below For More Details</h5>

      <div className="square-flex">
        <button className="blue-square" onClick={openWizModal}>
          <h3>Workout Wizard</h3>
          <img
            src={workoutWizard}
            alt="wiz img"
            width="200px"
            height="200px"
            style={{ borderRadius: "12px", border: "none" }}
          />
        </button>
        <button className="blue-square" onClick={openFunModal}>
          <h3>Fun Wing Vacations</h3>
          <img
            src={funWing}
            alt="funwing img"
            width="210px"
            style={{ borderRadius: "12px", border: "none" }}
          />
        </button>
      </div>

      <div className="square-flex">
        <button className="blue-square" onClick={openModal}>
          <h3>AWS Cloud Foundations graduate</h3>
          <img src={awsImg} alt="AWS img" width="200px" />
        </button>
        <button className="blue-square" onClick={openVolModal}>
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
        <button className="blue-square" onClick={openEzooModal}>
          <h3>Personal Project - 'Ezoos.biz'</h3>
          <img
            src={ezoosImg}
            alt="ezoos img"
            width="300px"
            style={{ borderRadius: "12px", border: "4px solid black" }}
          />
        </button>
        <button className="blue-square" onClick={openDogModal}>
          <h3>School Project - The Dog API</h3>
          <img
            src={dogapiImg}
            alt="dog api img"
            width="300px"
            style={{ borderRadius: "12px", border: "4px solid black" }}
          />
        </button>
      </div>

      <AWSModal isOpen={isModalOpen} onClose={closeModal} />
      <VolModal isOpen={isVolModalOpen} onClose={closeVolModal} />
      <EzooModal isOpen={isEzooModalOpen} onClose={closeEzooModal} />
      <DogModal isOpen={isDogModalOpen} onClose={closeDogModal} />
      <WorkoutWizModal isOpen={isWizModalOpen} onClose={closeWizModal} />
      <FunWingModal isOpen={isFunModalOpen} onClose={closeFunModal} />
    </div>
  );
};

export default Work;
