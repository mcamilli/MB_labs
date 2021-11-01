import React from "react";
import { InputsContainer, ScreenContainer, SignUpButtonContainer } from "./styled";
import useForm from "../../hooks/useform"
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import {goToSignup} from "../../router/coordinator"
import {useHistory} from "react-router-dom"



const SignUpPage = () => {
  const [form, onChange, clear] = useForm({name: "", email:"", password:""})
  const history = useHistory ()

  const onSubmitForm = (event) => {
      event.preventDefault ()
      console.log (form)     
  }

  return (
    <ScreenContainer>
      <h1> Login page </h1>
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
        <TextField
          name ={"name"}
          value ={form.value}
          onChange={onChange}
          label={"Name"}
          variant={"outlined"}
          fullWidth
          margin = {"normal"} 
          required
          type={"name"}
        />
        <TextField
          name ={"email"}
          value ={form.value}
          onChange={onChange}
          label={"E-mail"}
          variant={"outlined"}
          fullWidth
          margin = {"normal"} 
          required
          type={"email"}
        />
        <TextField
          name ={"password"}
          value ={form.password}
          onChange={onChange}
          label={"Senha"}
          variant={"outlined"}
          fullWidth
          margin = {"normal"} 
          required
          type ={"password"}
        />

        <Button
          type={"submit"}
          fullWidth
          variant={"contained"}
          color ={"primary"}
        > 
        Cadastre-se
        </Button>
        </form>
        </InputsContainer>

    </ScreenContainer>
  );
}

export default SignUpPage;
