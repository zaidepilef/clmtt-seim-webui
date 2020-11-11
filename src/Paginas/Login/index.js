import React from 'react';
import styles from './login.module.css';
import Button from "@material-ui/core/Button";

function Login(props) {

  const routeChange = () => {
    // ENV 
    window.location.href = "http://localhost:8080/openid-connect-server-webapp/authorize?response_type=code&client_id=client&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fverificaclaveunica&scope=openid+email&state=uFEuiLeCJta86RGZtyQwTwEtLU2x2W&nonce=Y6I6hHvF0xzSKn6yEmLl"
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>

        <Button onClick={routeChange} variant="contained" color="primary">Ingresar con Clave unica </Button>

      </div>
    </div>
  );
}

export default Login;