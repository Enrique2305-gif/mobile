import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent
} from '@ionic/react';
import { useHistory } from 'react-router';


import './Notificaciones.css';

interface Notificacion {
  id: number;
  usuario: string;
  mensaje: string;
  estado: 'aprobada' | 'rechazada';
  tiempo: string;
}

const Notificaciones: React.FC = () => {
  const history = useHistory();

  const notificaciones: Notificacion[] = [
    {
      id: 1,
      usuario: 'JAHIR CAJAS',
      mensaje: 'aprobó la reserva “Reserva1”',
      estado: 'aprobada',
      tiempo: 'Hace 8 horas'
    },
    {
      id: 2,
      usuario: 'JAHIR CAJAS',
      mensaje: 'aprobó la reserva “Reserva2”',
      estado: 'aprobada',
      tiempo: 'Hace 10 horas'
    },
    {
      id: 3,
      usuario: 'JAHIR CAJAS',
      mensaje: 'rechazó la reserva “Reserva3”',
      estado: 'rechazada',
      tiempo: 'Hace 16 horas'
    }
  ];

  const irADetalle = (notificacion: Notificacion) => {
  history.push('/detalle-reserva', {
    usuario: notificacion.usuario,
    mensaje: notificacion.mensaje,
    estado: notificacion.estado,
    tiempo: notificacion.tiempo
  });
};


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="home-toolbar">
            <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Notificaciones</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding"
        style={{ '--padding-top': '80px' }}
      >
        <p className="noti-count">
          Tiene {notificaciones.length} notificaciones
        </p>

        {notificaciones.map(n => (
          <div
            key={n.id}
            className="noti-card"
            onClick={() => irADetalle(n)}
            style={{ cursor: 'pointer' }}
          >
            <p>
              <strong className="noti-user">{n.usuario}</strong>{' '}
              <span className={n.estado === 'rechazada' ? 'rechazada' : 'aprobada'}>
                {n.mensaje}
              </span>
            </p>

            <small>{n.tiempo}</small>

          </div>
        ))}

      </IonContent>
    </IonPage>
  );
};

export default Notificaciones;
