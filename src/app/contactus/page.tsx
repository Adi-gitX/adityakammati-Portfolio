"use client";

import { BackgroundBeams } from "../../components/ui/background-beams";
import { ButtonX } from "../../components/ui/cvborder";
import { useState, ChangeEvent, FormEvent } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle input changes with proper event type
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission with proper event type
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("🌟 Sending your message...");
  
    if (!formData.name || !formData.email || !formData.message) {
      setResponseMessage("🚨 Please fill out all fields!");
      setIsSubmitting(false);
      return;
    }
  
    try {
      const payloadUser = {
        recipient: formData.email, // Ensure backend expects `recipient`
        subject: "Thank You for Reaching Out 💌",
        body: `Hi ${formData.name},\n\nThank you so much for reaching out! 💖\n\nYour message: "${formData.message}"\n\nI'll respond shortly!\n\nBest regards,\nAditya Kammati`,
      };
  
      const payloadAdmin = {
        recipient: "adityakammati.workspace@gmail.com", // Adjust to backend expectations
        subject: `${formData.name} reached out through the contact form 📨`,
        body: `🎉 New message from ${formData.name} (${formData.email}):\n\n"${formData.message}"\n\nPlease respond at your earliest convenience.`,
      };
  
      // Send to the user
      const userResponse = await fetch("https://send-x.vercel.app/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payloadUser),
      });
  
      if (!userResponse.ok) {
        const errorText = await userResponse.text();
        console.error("User Response Error:", errorText);
        setResponseMessage(
          "Oops! 😞 Something went wrong while sending your confirmation email. Please check your email address and try again."
        );
        return;
      }
  
      // Send to admin
      const adminResponse = await fetch("https://send-x.vercel.app/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payloadAdmin),
      });
  
      if (!adminResponse.ok) {
        const errorText = await adminResponse.text();
        console.error("Admin Response Error:", errorText);
        setResponseMessage(
          "Oops! 😞 Something went wrong while sending the message to the admin. Please try again later."
        );
        return;
      }
  
      setResponseMessage(
        "✨ Success! Your message has been sent. I'll get back to you shortly! 🙌"
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("😔 Oops! Something went wrong. Please try again later.");
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
