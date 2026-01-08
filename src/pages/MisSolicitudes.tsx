import { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon
} from '@ionic/react';

import {
  informationCircle,
  pencil,
  trash
} from 'ionicons/icons';

type Estado = 'pendiente' | 'aprobada' | 'rechazada';

interface Reserva {
  id: string;
  fecha: string;
  hora: string;
  lugar: string;
  estado: Estado;
}

const MisSolicitudes: React.FC = () => {
  const [segment, setSegment] = useState<Estado>('pendiente');

  const reservas: Reserva[] = [
    { id: 'RI4254', fecha: '01/07/25', hora: '12:00', lugar: 'Aula', estado: 'pendiente' },
    { id: 'RI6572', fecha: '17/08/25', hora: '10:00', lugar: 'Aula', estado: 'pendiente' },
    { id: 'RI8899', fecha: '20/06/25', hora: '08:00', lugar: 'Auditorio', estado: 'aprobada' },
    { id: 'RI9901', fecha: '22/06/25', hora: '09:00', lugar: 'Laboratorio', estado: 'rechazada' }
  ];

  const reservasFiltradas = reservas.filter(
    r => r.estado === segment
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Sistema de Reservas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>
          Historial de reservas
        </h2>

        {/* SEGMENTOS */}
        <IonSegment
          value={segment}
          onIonChange={e => setSegment(e.detail.value as Estado)}
        >
          <IonSegmentButton value="pendiente">
            <IonLabel color="warning">Pendientes</IonLabel>
          </IonSegmentButton>

          <IonSegmentButton value="aprobada">
            <IonLabel color="success">Aprobadas</IonLabel>
          </IonSegmentButton>

          <IonSegmentButton value="rechazada">
            <IonLabel color="danger">Rechazadas</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/* TABLA */}
        <IonGrid
          style={{
            marginTop: '15px',
            background: '#f4f4f4',
            borderRadius: '8px'
          }}
        >
          <IonRow>
            <IonCol size="2"><strong>Reserva</strong></IonCol>
            <IonCol size="3"><strong>Fecha</strong></IonCol>
            <IonCol size="2"><strong>Hora</strong></IonCol>
            <IonCol size="2"><strong>Lugar</strong></IonCol>
            <IonCol size="3"><strong>Acciones</strong></IonCol>
          </IonRow>

          {reservasFiltradas.map(reserva => (
            <IonRow key={reserva.id}>
              <IonCol size="2">{reserva.id}</IonCol>
              <IonCol size="3">{reserva.fecha}</IonCol>
              <IonCol size="2">{reserva.hora}</IonCol>
              <IonCol size="2">{reserva.lugar}</IonCol>
              <IonCol size="3">
                <IonButton fill="clear" size="small">
                  <IonIcon icon={informationCircle} />
                </IonButton>
                <IonButton fill="clear" size="small">
                  <IonIcon icon={pencil} />
                </IonButton>
                <IonButton fill="clear" size="small" color="danger">
                  <IonIcon icon={trash} />
                </IonButton>
              </IonCol>
            </IonRow>
          ))}

          {reservasFiltradas.length === 0 && (
            <IonRow>
              <IonCol style={{ textAlign: 'center', padding: '15px' }}>
                No hay reservas en este estado
              </IonCol>
            </IonRow>
          )}
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default MisSolicitudes;
