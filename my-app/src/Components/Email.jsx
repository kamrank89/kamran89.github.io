import React from "react";

const Email = () => {
  return (
    <div id="email">
      <form action="https://formsubmit.co/khosravi42@gmail.com" method="POST">
        <label className="label" for="fname">
          First name
        </label>
        <br />
        <input
          type="text"
          name="firstname"
          id="fname"
          placeholder="First Name"
        />
        <input type="email" name="email" placeholder="email address" />
        <input type="submit" value="Send Email" />
      </form>
    </div>
  );
};
export default Email;
