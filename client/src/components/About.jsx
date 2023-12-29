import "../styles/about.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TopicIcon from "@mui/icons-material/Topic";

const About = () => {
  return (
    <section className="about mt-4 p-1 d-flex flex-column justify-content-end  align-items-start">
      <div className="about-middle w-100 d-flex justify-content-between align-items-center">
        <span className="w-50 h-100 d-flex flex-column justify-content-start align-items-start ps-3">
          <h1 className="anton mb-0 text-black">ABOUT ME</h1>
          <p className="mb-0 mt-2 text-black roboto">
            Passionate MERN stack developer with multiple projects. Eager to
            embrace new challenges and continually enhance skills. Enthusiastic
            about learning and committed to staying at the forefront of the
            ever-evolving world of development
          </p>
        </span>
        <span className="w-50 h-100 d-flex flex-column justify-content-start align-items-start ps-3">
          <h1 className="anton text-black mb-0">SKILLS</h1>
          <div className="skills mt-2 d-flex flex-wrap">
            <span className="roboto text-black">HTML</span>
            <span className="roboto text-black ms-2">CSS</span>
            <span className="roboto text-black ms-2">JAVASCRIPT</span>
            <span className="roboto text-black ms-2">NODE.JS</span>
            <br />
            <span className="roboto text-black mt-1">REACT.JS</span>
            <span className="roboto text-black ms-2 mt-1">MONGODB</span>
            <span className="roboto text-black ms-2 mt-1">REDUX.JS</span>
            <span className="roboto text-black ms-2 mt-1">AWS S3</span>
          </div>
        </span>
      </div>
      <section className="footer mb-5 mt-3">
        <div className="ps-2 h-100 d-flex justify-content-start align-items-center">
          <button
            onClick={() =>
              (window.location.href = "https://www.linkedin.com/in/bebekdas7/")
            }
          >
            <LinkedInIcon className="i" />
          </button>
          <button
            onClick={() =>
              (window.location.href = "https://www.instagram.com/24.9_02")
            }
          >
            <InstagramIcon className="i" />
          </button>
          <button
            onClick={() => (window.location.href = "https://github.com/")}
          >
            <TopicIcon className="i" />
          </button>
          <button
            className="ms-3 trans-btn text-white bg-black roboto"
            onClick={() => window.scrollTo(0, 1360)}
          >
            Projects
          </button>
        </div>
      </section>
    </section>
  );
};

export default About;
