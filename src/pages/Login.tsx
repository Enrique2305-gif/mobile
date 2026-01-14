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
    <div className="login-background"></div>
    <div className="login-overlay">

      <h1 className="login-title">
        Bienvenidos a la <br /> ESPOL
      </h1>

      <div className="login-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/92/Espol_Logo_2023.png" alt="ESPOL" />
      </div>

      <div className="login-form">

        <label>Usuario:</label>
        <div className="input-group">
          <input type="text" />
          <span>@espol.edu.ec</span>
        </div>

        <label>Contraseña:</label>
        <input type="password" />

        <div className="login-options">
          <label>
            <input type="checkbox" />
            Recordarme
          </label>
          <a>¿Aún no tienes una cuenta? Crear una cuenta </a>
        </div>

         <IonButton
        expand="block"
        className="login-button"
        onClick={iniciarSesion}
        >
        INICIAR SESIÓN
        </IonButton>

        <p className="login-warning">
          <strong>Atención:</strong><br />
          En caso de que no tenga usuario, o su usario se encuentre bloqueado dirigirse a la pagina del GTSI, y esocger la opción del menú Cuenta ELectronica.
          <p> Por razones de seguridad, por favor cierre su sesión y su navegador web cuando haya terminado de acceder a los servicios que requieren autenticación.</p>        
        </p>

        <div className="login-lang">
          <span>English</span> | <span>Spanish</span>
        </div>

        <p className="login-footer">
          Servicio proporcionado por GTSI
        </p>

      </div>
    </div>
  </IonContent>
</IonPage>

  );
};

export default Login;
