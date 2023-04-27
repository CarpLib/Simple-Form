import React, { useState } from "react";

export default function Form({
  isSubmited,
  setIsSubmited,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}) {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPass, setErrorConfirmPass] = useState(false);
  const [identic, setIdentic] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      setErrorName(true);
      return;
    } else if (!email) {
      setErrorName(false);
      setErrorEmail(true);
      return;
    } else if (!password) {
      setErrorEmail(false);
      setErrorPassword(true);
      return;
    } else if (!confirmPassword) {
      setErrorPassword(false);
      setErrorConfirmPass(true);
      return;
    }
    setErrorConfirmPass(false);

    if (password !== confirmPassword) {
      console.log("différent");
      setIdentic(true);
      return;
    } else {
      setIdentic(false);
    }

    setIsSubmited(true);
  };

  return (
    <main>
      <h1>Create account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            className={errorName && "error"}
            type="text"
            placeholder="Jean Dupont"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          />
        </label>
        {errorName && <p style={{ color: "red" }}>Le nom est manquant</p>}
        <label>
          Email
          <input
            className={errorEmail && "error"}
            type="email"
            placeholder="jeandupont@lereacteur.io"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />
        </label>
        {errorEmail && <p style={{ color: "red" }}>L'email est manquant</p>}
        <label>
          Password
          <input
            className={errorPassword ? "error" : identic && "error"}
            type="password"
            placeholder="azerty"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          />
        </label>
        {errorPassword && (
          <p style={{ color: "red" }}>Le password est manquant</p>
        )}
        <label>
          Confirm your password
          <input
            className={errorConfirmPass ? "error" : identic && "error"}
            type="password"
            placeholder="azerty"
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
            value={confirmPassword}
          />
        </label>
        {errorConfirmPass && (
          <p style={{ color: "red" }}>
            La confirmation du password est manquant
          </p>
        )}
        {identic && (
          <p style={{ color: "red" }}>
            Les mots de passe ne sont pas identiques
          </p>
        )}
        <button type="submit" value="Submit">
          Register
        </button>
      </form>
    </main>
  );
}
