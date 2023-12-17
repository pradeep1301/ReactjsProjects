import React from "react";

function ContactUs(props) {
  let { intro, intro2, no, email, btnName } = props;
  return (
    <div className="contact-container bg-grey">
      <h2 className="div-title">Contact Us</h2>
      <div className="contact-form">
        <div id="sect1">
          <p>{intro}</p>
          <span>
            <i className="fas fa-map-marker-alt"></i>
            {intro2}
          </span>
          <span>
            <i className="fas fa-mobile-alt"></i>
            {no}
          </span>
          <br />
          <span>
            <i className="far fa-envelope"></i>
            {email}
          </span>
        </div>

        <div id="sect2">
          <label htmlFor="Contact">Contact</label>
          <br />
          <input
            type="email"
            placeholder="email address"
            className="input-field"
          />
          <br />
          <textarea
            name="comment"
            cols="5"
            rows="5"
            placeholder="comment"
          ></textarea>
          <br />
          <button type="button" className="contact-btn">
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
