import React from "react";

const Email = () => {
  return (
    <div id="email">
      <form>
        <label className="label" for="fname">
          First name
        </label>
        <input
          type="text"
          name="firstname"
          id="fname"
          placeholder="First Name"
        />
      </form>
    </div>
  );
};
export default Email;
