import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Fade, Slide } from "react-reveal"; // Assuming you're using react-reveal for the Slide animation

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send the email
    emailjs
      .sendForm("service_hf16lp7", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("Error sending email:", error.text);
          alert("Failed to send email");
        }
      );
  };

  return (
    <section id="contact">
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span className="">Get In Toasdsadasduch.</span>
            </h1>
          </div>
        </div>
      </Fade>
      <div className="row">
        <Slide left duration={1000}>
          <div className="twelve columns">
            <form id="contactForm" onSubmit={handleSubmit}>
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    size="35"
                    id="contactName"
                    name="name" // name field here must match the formData state field
                    value={formData.name} // binding the value to formData
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    size="35"
                    id="contactEmail"
                    name="email" // name field here must match the formData state field
                    value={formData.email} // binding the value to formData
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    size="35"
                    id="contactSubject"
                    name="subject" // name field here must match the formData state field
                    value={formData.subject} // binding the value to formData
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="message" // name field here must match the formData state field
                    value={formData.message} // binding the value to formData
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div>
                  <button type="submit" className="submit">
                    Submit
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default ContactForm;
