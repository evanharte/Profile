import resumePDF from "../files/resume.pdf";

const Resume = () => {
  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "5px",
    border: "1px solid white",
    borderRadius: "8px",
    minWidth: "100px",
    margin: "50px 10px 50px 150px",
    maxWidth: "200px",
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <div className="resume">
      <button style={buttonStyle} onClick={downloadResume}>
        Download My Resume
      </button>
      <h1>Evan Harte</h1>
      <span>St. John's, NL A1A3C9</span>
      <span>evan.harte@keyin.com</span>
      <p>+1 709 689 6717</p>

      {/* LINKS */}
      <br />
      <h3 className="grey-header">Links</h3>
      <a href="https://github.com/evanharte">https://github.com/evanharte</a>
      <a href="https://www.linkedin.com/in/evan-harte-61529ab5/">
        <p>https://www.linkedin.com/in/evan-harte-61529ab5/</p>
      </a>

      {/* EDUCATION */}
      <br />
      <h3 className="grey-header">Education</h3>
      <hr />
      <span className="bolder">College Diploma in Software Development</span>
      <span>Keyin College - St. John's, NL</span>
      <span className="greyer">May 2023 to Present</span>
      <br />

      <span className="bolder">Bachelor in Music Education</span>
      <span>Memorial University of Newfoundland - St. John's, NL</span>
      <span className="greyer">September 2014 to December 2016</span>
      <br />

      <span className="bolder">Bachelor in Music Composition</span>
      <span>Memorial University of Newfoundland - St. John's, NL</span>
      <span className="greyer">September 2010 to May 2014</span>
      <br />

      {/* VOLUNTEERING */}
      <br />
      <h3 className="grey-header">Volunteering Experience</h3>
      <hr />
      <ul>
        <li>Tech NL: Innovation Week 2023</li>
        <li>Genesis: "How to Monetize Your Intellectual Property" Nov 2023</li>
        <li>Genesis "Pitch and Pick" Nov 2023</li>
        <li>TechNL: Oil and Gas Event Dec 2023</li>
        <li>TechNL: Holiday Social Dec 2023</li>
      </ul>

      {/* SKILLS */}
      <br />
      <h3 className="grey-header">Skills</h3>
      <hr />
      <ul>
        <li>Computer skills (10+ years)</li>
        <li>Coding (Less than 1 year)</li>
        <li>AWS Cloud Foundations</li>
        <li>Cloud Computing</li>
        <li>French (10+ years)</li>
        <li>Teaching (7 years)</li>
        <li>Organizational Skills (10+ years)</li>
        <li>Time management (10+ years)</li>
        <li>Customer service (7 years)</li>
        <li>Time management (10+ years)</li>
        <li>Retail / sales (7 years)</li>
        <li>Communication skills (10+ years)</li>
        <li>Musician (10+ years)</li>
      </ul>

      {/* WORK EXPERIENCE */}
      <br />
      <h3 className="grey-header">Work Experience</h3>
      <hr />
      <span className="bolder">Cashier and Clerk</span>
      <span className="greyer">Torbakery - Torbay, NL</span>
      <span className="greyer">June 2023 to June 2023</span>
      <ul>
        <li>
          Filled in for a few weeks while a friend of mine (who works there)
          went on vacation.
        </li>
        <li>Worked the cash register & sold bread and other sweets</li>
        <li>Store cleanup, maintenance, and closing shop</li>
      </ul>

      <span className="bolder">Music Teacher</span>
      <span className="greyer">NLESD - St. John's, NL</span>
      <span className="greyer">January 2017 to June 2023</span>
      <ul>
        <li>Classroom music (K-12)</li>
        <li>Choir (K-12)</li>
      </ul>

      <span className="bolder">Customer Experience Representative</span>
      <span className="greyer">Indigo & Chapters - St. John's, NL</span>
      <span className="greyer">September 2015 to May 2018</span>
      <ul>
        <li>Cashier, book seller, kids department worker</li>
        <li>
          {" "}
          Became "Flex" worker in 2017 as I was starting teaching around this
          time
        </li>
      </ul>

      {/* CERTS */}
      <br />
      <h3 className="grey-header">Certifications and Licenses</h3>
      <hr />
      <span className="bolder">AWS Academy Graduate - Cloud Foundations</span>
      <span className="greyer">September 2023 to December 2023</span>
      <span>
        This introductory course is intended for students who seek an overall
        understanding of cloud computing concepts, independent of specific
        technical roles. It provides a detailed overview of cloud concepts, AWS
        core services, security, architecture, pricing, and support.
      </span>
    </div>
  );
};

export default Resume;
