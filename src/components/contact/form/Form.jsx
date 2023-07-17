import { useContext, useRef, useState } from "react";
import style from "../contact.module.css";
import Navbar from "../../nav/Navbar";
import {Link } from "react-router-dom"
import { ThemeContext } from "../../context/Context"

function Form() {
  const contextValue = useContext(ThemeContext)
  let theme = contextValue.theme


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const [validateObject, setValidateObject] = useState({
    name: false,
    email: false,
  });
  const [validatorMsj,setValidatorMsj] = useState("");

  const formRef = useRef(null);

  function handleChange(e) {
    if (e.target.id === "name") {
      const value = e.target.value;
      setName(value);
      if (value.length < 5) {
        setError("Tu nombre no puede ser inferior a 5 caracteres");
        setValidateObject((prevState) => ({
          ...prevState,
          name: false,
        }));
      } else {
        setError("");
        setValidateObject((prevState) => ({
          ...prevState,
          name: true,
        }));
      }
    }
    if (e.target.id === "email") {
      const value = e.target.value;
      setEmail(value);
      if (value.length < 3) {
        setError2("El correo debe tener al menos 3 caracteres");
        setValidateObject((prevState) => ({
          ...prevState,
          email: false,
        }));
      } else {
        setError2("");
        setValidateObject((prevState) => ({
          ...prevState,
          email: true,
        }));
      }
    }
  }
  function resetForm() {
    setName("");
    setEmail("");
    setError("");
    setError2("");
    setValidateObject({
      name: false,
      email: false,
    });
    setValidatorMsj("");
  }

  function validate(e) {
    e.preventDefault();
    if(validateObject.name && validateObject.email){
      formRef.current.reset()
      setTimeout(() => {
        setValidatorMsj("Los datos fueron enviados correctamente..")
        
      }, 500)
      resetForm()
    }
    return
  }

  return (
    <>
      <Navbar />
      <section className={`${style.bodyContact} ${style[theme]}`} >
      <h1>Insert your information</h1>
      <section className={style.formContainer}>
        <form className={style.formulario} ref={formRef} onSubmit={validate}>
          <label htmlFor="name">
            Full Name:
            <input
              type="text"
              id="name"
              value={name}
              placeholder  ="Insert your Name"
              onChange={handleChange}
            />
          </label>
          {error && <p className={style.error}>{error}</p>}
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Insert your Email"
              onChange={handleChange}
            />
          </label>
          {error2 && <p className={style.error}>{error2}</p>}
          <button type="submit" className={style.submitBTN}>
            Send
          </button>
        </form>
      </section>
      {validatorMsj ?<div> <h2>Thanks you, {validatorMsj}
      </h2> <Link to={"/"}><button>Back to Home</button></Link></div>: undefined}
      </section>
    </>
  );
}

export default Form;
