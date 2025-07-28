import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xxxxxxx", // Replace with your EmailJS service ID
        "template_xxxxxxx", // Replace with your template ID
        form.current,
        "your_user_id" // Replace with your EmailJS public key
      )
      .then(() => {
        toast.success("📬 Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        toast.error("❌ Failed to send message. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-primary text-light">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-accent mb-10 text-center"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            <p className="text-light/80">
              I'm currently open to internship and entry-level web development roles.
              Let’s build something great together!
            </p>

            <div className="flex items-center gap-4 text-light">
              <FaPhoneAlt className="text-accent" />
              <span>8600379880</span>
            </div>

            <div className="flex items-center gap-4 text-light">
              <FaEnvelope className="text-accent" />
              <span>musaddique.webdev@gmail.com</span>
            </div>

            <div className="flex gap-6 mt-4">
              <a href="https://github.com/Musaddique12" target="_blank" rel="noreferrer">
                <FaGithub className="text-2xl hover:text-accent transition" />
              </a>
              <a
                href="https://www.linkedin.com/in/musaddique-momin-a4900a270/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-2xl hover:text-accent transition" />
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-[#1e293b] border border-accent/30 text-light outline-none"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded bg-[#1e293b] border border-accent/30 text-light outline-none"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded bg-[#1e293b] border border-accent/30 text-light outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-accent text-white px-6 py-3 rounded hover:bg-blue-600 transition text-sm font-semibold"
            >
              📩 Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
