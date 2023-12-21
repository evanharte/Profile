import { Modal } from "react-bootstrap";

const AWSModal = ({ isOpen, onClose }) => {
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
          <h1>AWS Academy Cloud Foundations Graduate</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={modalStyle}>
        <div style={flexBtns}>
          <button style={centered}>
            <a
              href="https://aws.amazon.com/training/awsacademy/"
              target="_blank"
              rel="noreferrer"
              style={linkDecoration}
            >
              AWS Academy Link
            </a>
          </button>
          <br />
          <p>
            I recently completed the 10 module Cloud Foundations course offered
            by AWS Academy.
          </p>
          <p>
            I gained an overall understanding of cloud computing concepts, a
            detailed overview of cloud concepts, AWS core services, security,
            architecture, pricing, and support.
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AWSModal;
