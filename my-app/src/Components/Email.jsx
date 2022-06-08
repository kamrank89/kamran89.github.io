import React from "react";

const Email = () => {
  return (
    <div id="email">
      <div className="form">
        <form action="https://formsubmit.co/khosravi42@gmail.com" method="POST">
          <label className="label" for="fname">
            First Name
          </label>
          <br />
          <input
            type="text"
            name="firstname"
            id="fname"
            placeholder="First Name"
          />
          <br />
          <label className="label" for="lname">
            Last Name
          </label>
          <br />
          <input
            type="text"
            name="lastname"
            id="fname"
            placeholder="last Name"
          />
          <br />
          <label className="label">Email Address</label>
          <br />
          <input type="email" name="email" placeholder="email address" />
          <br />
          <label className="label">Message</label>
          <br />
          <textarea name="message" id="" cols="60" rows="5"></textarea>
          <br />
          <input type="submit" value="Send Email" />
        </form>
      </div>
    </div>
  );
};
export default Email;
