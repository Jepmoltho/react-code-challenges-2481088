import { useState } from "react";

export default function FormValidator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function checkEmpty() {
    if (
      email.length == 0 ||
      password.length == 0 ||
      passwordConfirm.length == 0
    ) {
      return false;
    }
  }

  function checkEmail() {
    if (!email.includes("@")) {
      return false;
    }
  }

  function checkPwdLength() {
    console.log(password.length);
    if (password.length < 9) {
      console.log(false);
      return false;
    } else {
      console.log(true);
      return true;
    }
  }

  function checkPwdConfirm() {
    if (password != passwordConfirm) {
      return false;
    }
  }

  function checkInputHandler(e) {
    switch (true) {
      case checkEmpty() == false:
        e.preventDefault();
        document.getElementsByClassName("input-warning-message")[0].innerHTML =
          "<p>Your must fill out all fields</p>";
        break;
      case checkEmail() == false:
        e.preventDefault();
        document.getElementsByClassName("input-warning-message")[0].innerHTML =
          "<p>Not a valid email</p>";
        break;
      case checkPwdLength() == false:
        e.preventDefault();
        document.getElementsByClassName("input-warning-message")[0].innerHTML =
          "<p>Must be above 8</p>";
        break;
      case checkPwdConfirm() == false:
        e.preventDefault();
        document.getElementsByClassName("input-warning-message")[0].innerHTML =
          "<p>Must be same password</p>";
        break;
      default:
        document.getElementsByClassName("input-warning-message")[0].innerHTML =
          "<p></p>";
      //e.submit();
    }
  }

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
    </form>
  );
}
