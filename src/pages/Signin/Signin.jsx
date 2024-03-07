import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import s from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import Input from "components/Input.jsx/Input";
import AuthLayout from "layouts/AuthLayout/AuthLayout";
import { useState } from "react";
import { AuthAPI } from "api/auth";
import { setUser } from "store/auth/auth-slice";
import { useDispatch } from "react-redux";
import { toast } from "utils/sweet-alert";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    console.log('submited: ',email, password );
  try{    
    const user = await AuthAPI.signin(email, password)
    dispatch(setUser(user))
    await toast('success', `Auth succeed`)
    navigate('/')
  } catch (error) {
    await toast('error', `Invalid credentials ${error.message}`)
  }
  };

  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        Sign in <br />
        to access your team notes
      </h2>
      <form onSubmit={submit} className={s.formGroup}>
        <Input placeholder={"Email"} onTextChange={setEmail} />
        <Input
          placeholder={"Password"}
          type={"password"}
          onTextChange={setPassword}
        />
        <ButtonPrimary type={'submit'} className={s.button}>Sign in!</ButtonPrimary>
        <span>
          Don't have an account yet? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
    </div>
  );
  return <AuthLayout>{form}</AuthLayout>;
}

export default Signin;
