import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BiLogoGmail } from "react-icons/bi/index.esm";
import { BsPhoneVibrate } from "react-icons/bs/index.esm";
import { FaGithub, FaLinkedin } from "react-icons/fa/index.esm";
import { SiMinutemailer } from "react-icons/si/index.esm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const successMessage = () => {
    toast.success("Message has been sent!", {
      position: toast.POSITION.TOP_CENTER
    });
  };

  const errorMessage = () => {
    toast.error("Something went wrong! Please try another option", {
      position: toast.POSITION.TOP_CENTER
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          successMessage();
        },
        (error) => {
          console.log(error.text);
          errorMessage();
        }
      );
  };

  return (
    <div
      className="px-8 py-6 lg:px-28 lg:py-12 mt-10 bg-neutral-900 text-white font-playfair"
      id="contact"
    >
      <div className="flex items-center justify-center lg:justify-normal gap-3 text-3xl lg:text-5xl font-normal mb-4">
        <SiMinutemailer></SiMinutemailer>
        <h2>Get in Touch</h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-7">
        <div className="lg:w-1/2">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              {/* <label className="block">Name</label> */}
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                required
                className="rounded-md bg-neutral-800 w-full px-3 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-400"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="from_email"
                placeholder="Email"
                required
                className="rounded-md bg-neutral-800 w-full px-3 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-400"
              />
            </div>
            <div className="mb-3">
              {/* <label>Message</label> */}
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                required
                className="rounded-md bg-neutral-800 w-full px-3 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-400"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Send"
                className="w-full font-medium text-xl px-5 py-1 rounded-md bg-orange-500 hover:bg-orange-600 cursor-pointer"
              />
              <ToastContainer />
            </div>
          </form>
        </div>
        <div>
          <p className="text-2xl mb-5">
            Please feel free to reach me at the contact information below
          </p>
          <div>
            <a
              href="mailto:aminulislamrahat134@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xl hover:text-orange-400 mb-2"
            >
              <BiLogoGmail></BiLogoGmail> aminulrahat63@gmail.com
            </a>
            <a
              href="tel:+8801324184222"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xl hover:text-orange-400 mb-2"
            >
              <BsPhoneVibrate></BsPhoneVibrate> +8801324184222
            </a>
            <a
              href="https://www.linkedin.com/in/md-aminul"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xl hover:text-orange-400 mb-2"
            >
              <FaLinkedin></FaLinkedin> Md. Aminul Islam
            </a>
            <a
              href="https://github.com/Aminul667"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xl hover:text-orange-400 mb-2"
            >
              <FaGithub></FaGithub> Aminul667
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
