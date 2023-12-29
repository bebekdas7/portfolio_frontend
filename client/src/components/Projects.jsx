import "../styles/project.css";

const Projects = () => {
  return (
    <section className="project mt-4 p-1 pb-4 d-flex flex-column">
      <section className="project-header mt-3 ps-3">
        <h1 className="anton text-black mb-0">PROJECTS</h1>
      </section>
      <section className="project-mid ps-2 mt-3 d-flex flex-column ">
        <div className="futurechaos d-flex justify-content-center align-items-center p-1">
          <section className="futurechaos-1 w-50 d-flex justify-content-start">
            <span className="p-1">
              <img src="/images/futurechaos.jpg" alt="" />
            </span>
          </section>
          <section className="futurechaos-2 w-50 ps-2 pe-2 d-flex flex-column justify-content-start align-items-start">
            <h2 className="anton mb-0">FUTURECHAOS</h2>
            <p className="w-75 fs-6 mt-2 text-black roboto mb-1">
              FutureChaos, an exquisite MERN stack e-commerce venture, offers a
              seamless cloth shopping experience. From user authentication to
              Razorpay-powered transactions, every detail is meticulously
              crafted for efficiency. The website, developed from scratch,
              boasts a captivating and responsive UI, ensuring a visually
              appealing and fast-paced user journey. Welcome to a future where
              chaos meets elegance in the realm of online cloth shopping.
            </p>
            <button className="trans-btn text-white bg-black roboto">
              SEE MORE
            </button>
          </section>
        </div>

        <div className="book d-flex justify-content-center align-items-center p-1 mt-5">
          <section className="book-2 w-50 ps-2 pe-2 d-flex flex-column justify-content-start align-items-start">
            <h2 className="anton mb-0">BOOK LX</h2>
            <p className="w-75 fs-6 mt-2 text-black roboto mb-1">
              FutureChaos, an exquisite MERN stack e-commerce venture, offers a
              seamless cloth shopping experience. From user authentication to
              Razorpay-powered transactions, every detail is meticulously
              crafted for efficiency. The website, developed from scratch,
              boasts a captivating and responsive UI, ensuring a visually
              appealing and fast-paced user journey. Welcome to a future where
              chaos meets elegance in the realm of online cloth shopping.
            </p>
            <button className="trans-btn text-white bg-black roboto">
              SEE MORE
            </button>
          </section>
          <section className="book-1 w-50 d-flex justify-content-start">
            <span className="p-1">
              <img src="/images/booklx.jpg" alt="" />
            </span>
          </section>
        </div>

        <div className="futurechaos d-flex justify-content-center align-items-center p-1 mt-5">
          <section className="futurechaos-1 w-50 d-flex justify-content-start">
            <span className="p-1">
              <img src="/images/fshare.jpg" alt="" />
            </span>
          </section>
          <section className="futurechaos-2 w-50 ps-2 pe-2 d-flex flex-column justify-content-start align-items-start">
            <h2 className="anton mb-0">FUTURECHAOS</h2>
            <p className="w-75 fs-6 mt-2 text-black roboto mb-1">
              FutureChaos, an exquisite MERN stack e-commerce venture, offers a
              seamless cloth shopping experience. From user authentication to
              Razorpay-powered transactions, every detail is meticulously
              crafted for efficiency. The website, developed from scratch,
              boasts a captivating and responsive UI, ensuring a visually
              appealing and fast-paced user journey. Welcome to a future where
              chaos meets elegance in the realm of online cloth shopping.
            </p>
            <button className="trans-btn text-white bg-black roboto">
              SEE MORE
            </button>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Projects;
