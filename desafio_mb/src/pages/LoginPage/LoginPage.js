import React from "react";
import { InputsContainer, ScreenContainer, SignUpButtonContainer } from "./styled";
import useForm from "../../hooks/useform"
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import {goToSignup} from "../../router/coordinator"
import {useHistory} from "react-router-dom"



const LoginPage = () => {
  const [form, onChange, clear] = useForm({email:"", password:""})
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
        Fazer login 
        </Button>
        </form>
        </InputsContainer>
        <SignUpButtonContainer>
          <Button
                  onClick={() => goToSignup(history)}
                 type={"submit"}
                 fullWidth
                 variant={"text"}
                 color ={"primary"}
          >
            Cadastre-se
            </Button>
        </SignUpButtonContainer>
    </ScreenContainer>
  );
}

export default LoginPage;
