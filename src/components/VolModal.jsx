import { Modal } from "react-bootstrap";
import genesisImg from "../images/genesis.jpg";

const VolModal = ({ isOpen, onClose }) => {
  const modalStyle = {
    backgroundColor: "lightgray",
  };

  // const centered = {
  //   textAlign: "center",
  //   color: "white",
  //   backgroundColor: "black",
  //   margin: "5px",
  //   width: "250px",
  // };

  const flexBtns = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton style={modalStyle}>
        <Modal.Title>
          <h1>Recent Volunteer Work</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={modalStyle}>
        <div style={flexBtns}>
          <ul>
            <li>Tech NL: Innovation Week 2023</li>
            <li>
              Genesis: "How to Monetize Your Intellectual Property" Nov 2023
            </li>
            <li>Genesis "Pitch and Pick" Nov 2023</li>
            <li>TechNL: Oil and Gas Event Dec 2023</li>
            <li>TechNL: Holiday Social Dec 2023</li>
          </ul>
          <br />
          <h5>(Can you spot me??)</h5>
          <img src={genesisImg} alt="genesis img" width="500px" />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default VolModal;
