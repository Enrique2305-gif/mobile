import { useLocation } from 'react-router';
import { notificationsOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonIcon,
  IonMenuButton,
  IonText
} from '@ionic/react';

const DetalleReserva: React.FC = () => {
  const history = useHistory();
  const location = useLocation<any>();
  const reserva = location.state;
  //const { usuario, mensaje, estado, tiempo } = location.state as any;

 if (!reserva) {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <p>No hay información de la reserva.</p>
      </IonContent>
    </IonPage>
  );
}

  return (
    <IonPage>
      <IonHeader>
              <IonToolbar className="home-toolbar">
                <IonButtons slot="start">
                  <IonBackButton defaultHref="/notificaciones" />
                  </IonButtons>
              <IonTitle>Información de la Reserva</IonTitle>
              </IonToolbar>
          </IonHeader>     

      <IonContent className="ion-padding"
        style={{ '--padding-top': '80px' }}
      >

        {/* IMAGEN */}
        <img
          src="https://teleco.uvigo.es/wp-content/uploads/2022/02/Reservas-1024x576.jpg"
          alt="Aula"
          style={{
            width: '100%',
            borderRadius: '8px',
            marginBottom: '15px'
          }}
        />

        <p><strong>Reserva:</strong> #{reserva.id}</p>

        <p>
          <strong>Descripción:</strong><br />
          El día {reserva.fecha} se realizará una actividad académica
          relacionada al uso de tecnología en el aula.
        </p>

        <p>
          <strong>Estado: </strong>
          <IonText
            color={
              reserva.estado === 'pendiente'
                ? 'warning'
                : reserva.estado === 'aprobada'
                ? 'success'
                : 'danger'
            }
          >
            {reserva.estado.toUpperCase()}
          </IonText>
        </p>

        {reserva.estado === 'pendiente' && (
          <p style={{ marginTop: '10px', color: '#555' }}>
            Su solicitud todavía está siendo procesada por los encargados,
            pronto se le enviará una notificación con la respuesta.
          </p>
        )}

      </IonContent>
    </IonPage>
  );
};

export default DetalleReserva;
