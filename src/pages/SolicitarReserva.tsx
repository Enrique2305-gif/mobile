import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonMenuButton,
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon
} from '@ionic/react';

import { useLocation, useHistory } from 'react-router';

import {
  businessOutline,
  locationOutline,
  peopleOutline,
  notificationsOutline,
  calendarOutline
} from 'ionicons/icons';

const SolicitarReserva: React.FC = () => {
  const history = useHistory();
  const location = useLocation<any>();
  const datos = location.state;

  return (
    <IonPage>
      <IonHeader>
              <IonToolbar className="home-toolbar">
                <IonButtons slot="start">
                  <IonBackButton defaultHref="/calendario" />
                  </IonButtons>
              <IonTitle>Solicitar Reservas</IonTitle>
              <IonButtons slot="end">
              <IonIcon
                 icon={notificationsOutline}
                  className="home-icon"
                  onClick={() => history.push('/notificaciones')}
                />
                 <IonMenuButton />
               </IonButtons>
              </IonToolbar>
          </IonHeader>

      <IonContent className="ion-padding">

        {/* PASOS */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <strong>Paso 1 de 3</strong>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
            <div style={pasoActivo}>1</div>
            <div style={linea}></div>
            <div style={pasoInactivo}>2</div>
            <div style={linea}></div>
            <div style={pasoInactivo}>3</div>
          </div>
        </div>

        <h3>Detalles de la solicitud</h3>

        <IonCard>
          <IonCardContent>

            <Fila icon={businessOutline} label="Recurso" value={datos?.recurso || 'Aula'} />
            <Fila icon={locationOutline} label="Ubicación" value={datos?.ubicacion || 'A103'} />
            <Fila icon={peopleOutline} label="Capacidad" value={datos?.capacidad || '15'} />
            <Fila icon={calendarOutline} label="Inicio" value={datos?.inicio || '11/04/2025 - 08:30'} />
            <Fila icon={calendarOutline} label="Fin" value={datos?.fin || '11/04/2025 - 10:30'} />

          </IonCardContent>
        </IonCard>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
          <IonButton fill="outline" routerLink="/calendario">
            Anterior
          </IonButton>

          <IonButton color="primary" routerLink="/solicitar-reserva/paso2">
            Siguiente
          </IonButton>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default SolicitarReserva;

/* COMPONENTE FILA */
const Fila = ({ icon, label, value }: any) => (
  <div style={fila}>
    <IonIcon icon={icon} />
    <div>
      <strong>{label}:</strong> {value}
    </div>
  </div>
);

/* ESTILOS */
const fila = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  marginBottom: 10
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

const pasoInactivo = {
  ...pasoActivo,
  background: '#ccc'
};

const linea = {
  width: 40,
  height: 2,
  background: '#ccc',
  marginTop: 14
};
