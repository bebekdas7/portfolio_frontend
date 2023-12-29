import "../styles/contact.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TopicIcon from "@mui/icons-material/Topic";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";

const Contack = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    try {
      const result = await axios.post(
        "https://portfolio-bytw.onrender.com/send",
        {
          name,
          email,
          message,
        }
      );
      if (result.status === 200) {
        alert("Message sent successfully");
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="contact mt-4 p-1 ps-3 d-flex flex-column justify-content-between">
      <section className="contact-header mt-3">
        <h1 className="anton mb-0">CONTACT ME</h1>
      </section>
      <div>
        <section className="contact-mid d-flex ">
          <div className="contact-1 w-50 h-100 d-flex flex-column align-items-start justify-content-center">
            <h1 className="anton text-black mb-1">Let's talk</h1>
            <p className="text-black roboto">Ask me anything or just say hi</p>
            <br />
            <p className="mb-0 mb-1">
              <LocalPhoneIcon className="text-black" />{" "}
              <a
                className="text-decoration-none text-black fw-bold ms-1"
                href="tel:+123456789"
              >
                9130966959
              </a>
            </p>
            <p>
              <EmailIcon className="text-black" />
              <a
                className="text-decoration-none text-black fw-bold ms-1"
                href="mailto:bebekdas7@gmail.com"
              >
                bebekdas7@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-2 w-50 h-100">
            <TextField
              onChange={(e) => setName(e.target.value)}
              sx={{
                width: 240,
                maxWidth: "45%",
              }}
              label="Name"
            />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                width: 240,
                maxWidth: "45%",
              }}
              label="Email"
              className="ms-3"
              type="email"
            />
            <br />
            <TextField
              onChange={(e) => setMessage(e.target.value)}
              id="filled-multiline-flexible"
              label="Message"
              multiline
              maxRows={4}
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
              className="mt-4"
              variant="filled"
            />
            <br />
            <button
              className="trans-btn text-white mt-2 roboto d-flex align-items-center"
              onClick={handleSubmit}
            >
              Send
              <SendIcon className="fs-6 ms-2" />
            </button>
          </div>
        </section>
        <section className="footer mb-5 mt-3">
          <div className="h-100 border-black d-flex justify-content-start align-items-center">
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
              onClick={() => window.scrollTo(0, 0)}
            >
              Home
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contack;
