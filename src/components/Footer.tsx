function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Me</h2>
          <p className="mb-4">
          I am a B.Tech student at Newton School of Technology with a deep passion for technology and coding. I enjoy developing creative web applications alongside my academic studies and aspire to keep learning and evolving in the field of technology.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/kammatiaditya"
                className="hover:text-white transition-colors duration-300"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="mailto:adityakammati.workspace@gmail.com"
                className="hover:text-white transition-colors duration-300"
              >
                Gmail
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Adi-gitX"
                className="hover:text-white transition-colors duration-300"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1uJLx-g5O-EuFi-Q6TnAw_HJq4lQbaSFs/view?usp=sharing"
                className="hover:text-white transition-colors duration-300"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Me</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/kammatiaditya"
              className="hover:text-white transition-colors duration-300"
            >
              Linkedin
            </a>
            <a
              href="https://www.instagram.com/aditya_88899/"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://github.com/Adi-gitX"
              className="hover:text-white transition-colors duration-300"
            >
              Github
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
          <p>Delhi NCR , India</p>
          <p>Delhi 131001</p>
          <p>Email: adityakammati.workspace@gmail.com</p>
        </div>
      </div>
      <p className="text-center text-lg pt-8 font-semibold text-white">
        ⚡© Aditya kammati™ ⚡
      </p>
    </footer>
  );
}

export default Footer;
