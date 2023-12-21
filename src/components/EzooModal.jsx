import { Modal } from "react-bootstrap";

const EzooModal = ({ isOpen, onClose }) => {
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
          <h1>Ezoos.biz</h1>
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            alias magni nostrum placeat nisi repudiandae suscipit! Aspernatur
            deserunt, minus ut rerum eligendi voluptates nesciunt harum enim
            perferendis delectus, natus minima.
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EzooModal;
