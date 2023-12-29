import React from "react";
import "../styles/home.css";
import About from "./About";
import Projects from "./Projects";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TopicIcon from "@mui/icons-material/Topic";
import Contack from "./Contack";

const Home = () => {
  return (
    <main className="hero-main p-3">
      <section className="hero d-flex flex-column justify-content-between">
        <section className="hero-header d-flex justify-content-between align-items-center mt-3">
          <h1 className="anton ms-4 mb-0">BEBEK</h1>
          <div className="me-4">
            <p className="d-inline me-3 fw-semibold">Available for work</p>
            <span className="roboto fw-semibold text-white bg-black">
              <p className="mb-0" onClick={() => window.scrollTo(0, 2500)}>
                Lets Talk
              </p>
            </span>
          </div>
        </section>
        <div>
          <section className="hero-middle d-flex justify-content-between align-items-center">
            <span className="w-50 ps-3 d-flex align-items-center h-100">
              <h1 className="anton text-black ms-2">
                FRONTEND DEVELOPER.
                <br />
                BACKEND DEVELOPER.
              </h1>
            </span>
            <span className=" d-flex d-flex align-items-center p-5 h-100">
              <p className="mb-0 roboto text-black">
                MERN Full-Stack Developer crafting seamless user experiences
                with React and building robust server-side solutions with
                Node.js and MongoDB
              </p>
            </span>
          </section>
          <section className="footer mb-5 mt-3">
            <div className="ps-3 h-100 border-black d-flex justify-content-start align-items-center">
              <button
                onClick={() =>
                  (window.location.href =
                    "https://www.linkedin.com/in/bebekdas7/")
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
                onClick={() => window.scrollTo(0, 680)}
              >
                About Me
              </button>
            </div>
          </section>
        </div>
      </section>
      <About />
      <Projects />
      <Contack />
    </main>
  );
};

export default Home;
