import React, { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
  IonTitle
} from '@ionic/react';
import { useHistory } from 'react-router';
import { registerUser } from '../firebase';
import './Login.css';

const Register: React.FC = () => {
  const history = useHistory();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    try {
      await registerUser(email, password);
      alert('Usuario creado correctamente');
      history.push('/home');
    } catch (err: any) {
      alert(err?.message || 'Error al crear usuario');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    history.push('/home');
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonToolbar>
          <IonTitle>{mode === 'login' ? 'Iniciar sesión' : 'Registrarse'}</IonTitle>
        </IonToolbar>

        <div style={{ padding: 16 }}>
          <IonSegment value={mode} onIonChange={(e) => setMode(e.detail.value as any)}>
            <IonSegmentButton value="login">Iniciar sesión</IonSegmentButton>
            <IonSegmentButton value="register">Registrarse</IonSegmentButton>
          </IonSegment>

          <IonItem>
            <IonLabel position="stacked">Correo</IonLabel>
            <IonInput value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Contraseña</IonLabel>
            <IonInput type="password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
          </IonItem>

          {mode === 'login' ? (
            <IonButton expand="block" onClick={handleLogin}>INICIAR SESIÓN</IonButton>
          ) : (
            <IonButton expand="block" onClick={handleRegister} disabled={loading}>
              {loading ? 'Creando...' : 'REGISTRARSE'}
            </IonButton>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
