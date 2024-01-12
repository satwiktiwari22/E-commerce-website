import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        For any inquiries or assistance, please feel free to reach out to us:
      </p>
      <div className="contact-container">
        <div className="contact-details">
          <h2>Phone</h2>
          <p>555-555-5555</p>
          <h2>Email</h2>
          <p>
            <a href="mailto:info@example.com">info@example.com</a>
          </p>
          <h2>Address</h2>
          <p>123 Main St, City, State 12345</p>
        </div>
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
            <br />
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <br />
            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
