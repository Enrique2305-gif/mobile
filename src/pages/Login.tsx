import {
  IonPage,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonCheckbox
} from '@ionic/react';
import { useHistory } from 'react-router';
import './Login.css';

const Login: React.FC = () => {
  const history = useHistory();

  const iniciarSesion = () => {
    history.push('/home');
  };

  return (
    <IonPage>
  <IonContent fullscreen className="login-page">

    {/* Fondo con imagen */}
    <div className="login-background"></div>

    {/* Contenido */}
    <div className="login-container">

      <h1 className="login-title">
        Bienvenidos a la <br /> ESPOL
      </h1>

      <div className="login-logo">
        <img src="https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/logo-espol.gif" alt="ESPOL" />
      </div>

      <IonItem className="login-input">
        <IonLabel position="stacked">Usuario</IonLabel>
        <IonInput />
      </IonItem>

      <IonItem className="login-input">
        <IonLabel position="stacked">Contraseña</IonLabel>
        <IonInput type="password" />
      </IonItem>

      <div className="login-options">
        <IonCheckbox />
        <span>Recordarme</span>
        <a href="#">¿Aún no tienes una cuenta?</a>
      </div>

      <IonButton
        expand="block"
        className="login-button"
        onClick={iniciarSesion}
        >
        INICIAR SESIÓN
        </IonButton>

      <p className="login-footer">
        Servicio proporcionado por GTSI
      </p>

    </div>

  </IonContent>
</IonPage>

  );
};

export default Login;
