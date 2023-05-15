import { useState } from "react";

export default function FormValidator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = [];

  const checkErrors = () => {
    //make errors array
    const errors = [];
    if (!email || !password || !passwordConfirm) {
      errors.push("You must fill out all fields");
    }
    if ([...email].filter((c) => c === "@").length !== 1) {
      errors.push("Ypu must include a @ in email");
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = checkErrors();
    setErrors(errors.length ? errors.join(", ") : "User created");
  };

  return (
    <form onSubmit={(e) => checkInputHandler(e)}>
      <h2>Sign Up!</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password-confirm">Confirm Password </label>
      <input
        type="password"
        name="password-confirm"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <div className="input-warning-message"></div>
      <input
        type="submit"
        value="Submit"
        /*onClick={(e) => checkInputHandler(e)}*/
      />
      {errors}
    </form>
  );
}
