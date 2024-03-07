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

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    if(password === password2){
      try{    
        const user = await AuthAPI.signup(email, password)
        dispatch(setUser(user))
        await toast('success', `Signup succeed, you are now logged in`)
        navigate('/')
      } catch (error) {
        console.log(error.message);
        await toast('error', `Invalid credentials ${error.message}`)
      }
    }else{
      await toast('error', `Passwords doesn't match`)
    }  
  };

  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        Sign up <br />
        to access your team notes
      </h2>
      <form onSubmit={submit} className={s.formGroup}>
        <Input placeholder={"Email"} onTextChange={setEmail} />
        <Input
          placeholder={"Password"}
          type={"password"}
          onTextChange={setPassword}
        />
        <Input
          placeholder={"Password repeat"}
          type={"password"}
          onTextChange={setPassword2}
        />
        <ButtonPrimary type={'submit'} className={s.button}>Sign up!</ButtonPrimary>
        <span>
          Already have an account? <Link to={"/signin"}>Signin</Link>
        </span>
      </form>
    </div>
  );
  return <AuthLayout>{form}</AuthLayout>;
}

export default Signup;
