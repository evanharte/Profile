import { Document, Page } from "react-pdf";

const PDFViewer = () => {
  return (
    <div>
      <Document file="../files/resume.pdf">
        <Page pageNumber={1} width={600} />
      </Document>
    </div>
  );
};

export default PDFViewer;
