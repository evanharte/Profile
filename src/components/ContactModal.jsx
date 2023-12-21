import { Modal } from "react-bootstrap";
import { useState } from "react";

const ContactModal = ({ isOpen, onClose }) => {
  const [emailState, setEmailState] = useState(false);

  const modalStyle = {
    backgroundColor: "lightgray",
  };

  const centered = {
    textAlign: "center",
    color: "white",
    backgroundColor: "black",
    margin: "5px",
    width: "250px",
  };

  const flexBtns = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const linkDecoration = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton style={modalStyle}>
        <Modal.Title>
          <h1>Contact Me</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={modalStyle}>
        <div style={flexBtns}>
          <button style={centered}>
            <a
              href="https://github.com/evanharte"
              target="_blank"
              rel="noreferrer"
              style={linkDecoration}
            >
              GitHub Profile
            </a>
          </button>

          <button style={centered}>
            <a
              href="https://www.linkedin.com/in/evan-harte-61529ab5/"
              target="_blank"
              rel="noreferrer"
              style={linkDecoration}
            >
              LinkedIn Profile
            </a>
          </button>

          <button style={centered} onClick={() => setEmailState(!emailState)}>
            Email Me @:
          </button>

          {emailState && <h4>evan.harte@keyin.com</h4>}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
