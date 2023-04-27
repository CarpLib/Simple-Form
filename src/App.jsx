import "./App.css";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="container">
      {!isSubmited && (
        <Form
          isSubmited={isSubmited}
          setIsSubmited={setIsSubmited}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
        />
      )}
      {isSubmited && (
        <StepTwo
          isSubmited={isSubmited}
          setIsSubmited={setIsSubmited}
          name={name}
          email={email}
          password={password}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
