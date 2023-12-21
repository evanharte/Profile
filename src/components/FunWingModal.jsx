import { Modal } from "react-bootstrap";

const FunWingModal = ({ isOpen, onClose }) => {
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

  const centerText = {
    textAlign: "center",
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton style={modalStyle}>
        <Modal.Title>
          <h1>Fun Wing Vacations</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={modalStyle}>
        <div style={flexBtns}>
          <p style={centerText}>
            A project finished in November 2023 on which I collaborated with two
            of my classmates
          </p>
          <button style={centered}>
            <a
              href="https://github.com/laurenwilson27/travel-agency"
              target="_blank"
              rel="noreferrer"
              style={linkDecoration}
            >
              GitHub Link
            </a>
          </button>
          <iframe
            src="https://keyincollege289-my.sharepoint.com/personal/evan_harte_keyin_com/_layouts/15/embed.aspx?UniqueId=11072b7e-907d-4061-893d-f05dce5c04d5&nav=%7B%22playbackOptions%22%3A%7B%22startTimeInSeconds%22%3A9%7D%7D&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
            width="500"
            height="500"
            frameborder="0"
            scrolling="no"
            allowfullscreen
            title="Test-20231221_005406-Meeting Recording.mp4"
          ></iframe>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default FunWingModal;
