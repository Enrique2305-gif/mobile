import { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonButton,
  IonInput,
  IonIcon
} from '@ionic/react';

import {
  personOutline,
  documentTextOutline,
  mailOutline,
  callOutline
} from 'ionicons/icons';

const SolicitarReservaPaso2: React.FC = () => {

  const [solicitante, setSolicitante] = useState('');
  const [nombreReserva, setNombreReserva] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/solicitar-reserva" />
          </IonButtons>
          <IonTitle>Solicitar Reservas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        {/* PASOS */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <strong>Paso 2 de 3</strong>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
            <div style={pasoCompletado}>1</div>
            <div style={linea}></div>
            <div style={pasoActivo}>2</div>
            <div style={linea}></div>
            <div style={pasoInactivo}>3</div>
          </div>
        </div>

        <h3>Detalles de la solicitud</h3>
        <small style={{ float: 'right' }}>Obligatorio (O)</small>

        <div style={card}>

          {/* SOLICITANTE */}
          <Campo
            icon={personOutline}
            label="Solicitante (O)"
            value={solicitante}
            />


          {/* NOMBRE */}
          <Campo
            icon={documentTextOutline}
            label="Nombre de reserva (O)"
            placeholder="Ingrese nombre"
          />

          {/* CORREO */}
          <div style={{ display: 'flex', gap: 10 }}>
            <Campo
              icon={mailOutline}
              label="Correo"
              placeholder="correo@espol.edu.ec"

            />

            <Campo
              icon={callOutline}
              label="Teléfono"
              placeholder="0999999999"

            />
          </div>

        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
          <IonButton fill="outline" routerLink="/solicitar-reserva">
            Anterior
          </IonButton>

          <IonButton color="primary" routerLink="/solicitar-reserva/paso3">
            Siguiente
          </IonButton>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default SolicitarReservaPaso2;

/* COMPONENTE CAMPO */
const Campo = ({ icon, label, placeholder, value, onIonChange }: any) => (
  <div style={{ marginBottom: 15 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <IonIcon icon={icon} />
      <strong>{label}</strong>
    </div>
    <IonInput
      value={value}
      placeholder={placeholder}
      fill="outline"
      onIonChange={onIonChange}
    />
  </div>
);

/* ESTILOS */
const card = {
  border: '1px solid #ccc',
  borderRadius: 8,
  padding: 15,
  marginTop: 10
};

const pasoActivo = {
  width: 30,
  height: 30,
  borderRadius: '50%',
  background: '#1e2d5f',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const pasoCompletado = {
  ...pasoActivo
};

const pasoInactivo = {
  ...pasoActivo,
  background: 'transparent',
  color: '#1e2d5f',
  border: '2px dashed #1e2d5f'
};

const linea = {
  width: 40,
  height: 2,
  background: '#ccc',
  marginTop: 14
};
