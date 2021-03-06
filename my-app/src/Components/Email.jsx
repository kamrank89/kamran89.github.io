import React from "react";

const Email = () => {
  return (
    <div id="email">
      <h1>Contact Me!</h1>
      <div className="form">
        <form action="https://formsubmit.co/khosravi42@gmail.com" method="POST">
          <label className="label">First Name</label>
          <br />
          <input type="text" name="firstname" placeholder="First Name" />
          <br />
          <label className="label">Last Name</label>
          <br />
          <input type="text" name="lastname" placeholder="Last Name" />
          <br />
          <label className="label">Email Address</label>
          <br />
          <input type="email" name="email" placeholder="Email address" />
          <br />
          <label className="label">Message</label>
          <br />
          <textarea
            name="message"
            id=""
            cols="60"
            rows="5"
            required
            spellCheck="true"
            maxLength={500}
          ></textarea>
          <br />
          <input type="submit" value="Send Email" />
        </form>
      </div>
    </div>
  );
};
export default Email;
