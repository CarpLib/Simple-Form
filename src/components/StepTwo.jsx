import React from "react";

export default function StepTwo({ name, email, password, setIsSubmited }) {
  return (
    <main className="container">
      <h1>Results</h1>
      <section>
        <div>
          <p>Name :</p> <p>{name}</p>
        </div>
        <div>
          <p>Email :</p> <p>{email} </p>
        </div>
        <div>
          <p>Password :</p> <p>{password}</p>
        </div>
      </section>
      <button
        onClick={() => {
          setIsSubmited(false);
        }}
      >
        Edit tour information
      </button>
    </main>
  );
}
