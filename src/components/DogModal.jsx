import { Modal } from "react-bootstrap";

const DogModal = ({ isOpen, onClose }) => {
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
          <h1>The Dog API</h1>
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
              GitHub Link
            </a>
          </button>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
            sapiente maiores, optio, debitis praesentium deserunt quidem animi
            quia incidunt unde illum! Corporis aut velit minima illum eveniet
            iure perspiciatis quo.
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DogModal;
