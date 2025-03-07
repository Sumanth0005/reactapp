import { FaYoutube, FaLinkedin, FaDiscord, FaInstagram, FaFacebook, } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer">
      <div className="f1">
        <img className="f1img" src="/tl.svg" alt="logo" />

        <div className="f1list">
          <h3>PLUS</h3>
          <h3>SPACES</h3>
          <h3>GET CERTIFED</h3>
          <h3>FOR TEACHERS</h3>
          <h3>FOR BUSINESS</h3>
          <h3>CONTACT US</h3>
        </div>
      </div>
      <div className="f2">
        <p>
          Terralogic is optimized for learning and training. Examples might be
          simplified to improve reading and learning.<br></br>
          Tutorials, references, and examples are constantly reviewed to avoid
          errors, but we cannot warrant full correctness<br></br>
          of all content. While using TerraLogic, you agree to have read and
          accepted our terms of use, cookie and privacy policy.
        </p>
        <div className="f4">
      <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
        <li>
          <a href="https://www.youtube.com/@Terralogic.academy/shorts" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={30} color="red" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} color="purple" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/terralogic/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="blue" />
          </a>
        </li>
        <li>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FaDiscord size={30} color="blue" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} color="blue" />
          </a>
        </li>
        <li>
          Forum 
        </li>
        <li>
          About
        </li>
        <li>
          Acadamey
        </li>
      </ul>
    </div>
      </div>
      <div className="f3">
        <p>
          Copyright 2024-2044 by Refsnes Data. All Rights Reserved. Terralogic
          is Powered by Terralogic.CSS.
        </p>
      </div>
    </div>
  );
}
