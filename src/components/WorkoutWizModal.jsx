import { Modal } from "react-bootstrap";

const WorkoutWizModal = ({ isOpen, onClose }) => {
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
          <h1>Workout Wizard</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={modalStyle}>
        <div style={flexBtns}>
          <p style={centerText}>
            My most recent work on which I collaborated with three of my
            classmates
          </p>
          <button style={centered}>
            <a
              href="https://github.com/infuriated-mink/Semester2-FinalSprint"
              target="_blank"
              rel="noreferrer"
              style={linkDecoration}
            >
              GitHub Link
            </a>
          </button>
          <iframe
            src="https://keyincollege289-my.sharepoint.com/personal/evan_harte_keyin_com/_layouts/15/embed.aspx?UniqueId=9e93aaa0-0efc-4b4f-93d5-ea65e0891373&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
            width="500"
            height="500"
            frameborder="0"
            scrolling="no"
            allowfullscreen
            title="Test-20231221_001324-Meeting Recording.mp4"
          ></iframe>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default WorkoutWizModal;
