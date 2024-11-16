"use client";

import { BackgroundBeams } from "../../components/ui/background-beams";
import { ButtonX } from "../../components/ui/cvborder";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("🌟 Sending your message...");

    const formDataString = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

    try {
      // Sending an email to the user
      const userResponse = await fetch(
        "https://send-x.vercel.app/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: formData.email, // Sending email to the user
            subject: "Thank You for Reaching Out 💌",
            text: `Hi ${formData.name} 👋,\n\nThank you so much for reaching out! 💖 I&apos;ve received your message and will respond shortly. 📬\n\nYour message: \n"${formData.message}"\n\nLooking forward to connecting with you soon! 💬\n\nBest regards,\n Aditya kammati`,
          }),
        }
      );

      // Check if the user response is ok
      if (!userResponse.ok) {
        console.log("User Response Error:", await userResponse.text()); // Log the error message for debugging
        setResponseMessage(
          "Oops! 😞 Something went wrong. Please check your email address and try again."
        );
        return;
      }

      // Sending an email to you (admin)
      const adminResponse = await fetch(
        "https://send-x.vercel.app/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: "adityakammati.workspace@gmail.com", // Admin email
            subject: `${formData.name} reached out through the contact form 📨`,
            text: `🎉 You&apos;ve received a new message from ${formData.name} (${formData.email}).\n\nMessage:\n"${formData.message}"\n\nPlease check your inbox and respond accordingly. 📥`,
          }),
        }
      );

      // Check if the admin response is ok
      if (!adminResponse.ok) {
        console.log("Admin Response Error:", await adminResponse.text()); // Log the error message for debugging
        setResponseMessage(
          "Oops! 😞 Something went wrong while sending the message to the admin. Please try again later."
        );
        return;
      }

      // If both emails are successfully sent, display success message
      setResponseMessage(
        "✨ Success! Your message has been sent. I'll get back to you shortly! 🙌"
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error); // Log error details
      setResponseMessage(
        "😔 Oops! Something went wrong. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div>
        <BackgroundBeams />
      </div>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Let&apos;s Connect!
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Hey there! 👋 I&apos;d love to hear from you. Whether it’s a question,
          feedback, or a collaboration opportunity, feel free to reach out and
          let&apos;s make something awesome happen! 🚀
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="h-10 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 placeholder:p-2 text-white p-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="h-10 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 placeholder:p-2 text-white p-3"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="h-20 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 placeholder:p-2 text-white p-3"
          />
          <div style={{ paddingTop: "20px" }}>
            <ButtonX type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </ButtonX>
          </div>
        </form>
        <div className="mt-4">
          {responseMessage && <p className="text-center text-white">{responseMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
