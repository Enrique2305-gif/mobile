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
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonModal,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption
} from '@ionic/react';

import {
  calendarOutline,
  chevronDownOutline,
  closeOutline
} from 'ionicons/icons';

interface Disponible {
  dia: number;
  hora: string;
}

const Calendario: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [disponibles, setDisponibles] = useState<Disponible[]>([]);

  const horas = [
    '7 AM','8 AM','9 AM','10 AM','11 AM',
    '12 PM','1 PM'
  ];

  const dias = [
    { id: 1, nombre: 'DO', fecha: '21' },
    { id: 2, nombre: 'LU', fecha: '22' }
  ];

  // SIMULA FILTRADO
  const aplicarFiltros = () => {
    setDisponibles([
      { dia: 1, hora: '7 AM' },
      { dia: 1, hora: '8 AM' },
      { dia: 2, hora: '9 AM' }
    ]);
    setShowModal(false);
  };

  const esDisponible = (dia: number, hora: string) => {
    return disponibles.some(
      d => d.dia === dia && d.hora === hora
    );
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/reservas" />
          </IonButtons>
          <IonTitle>Calendario</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        {/* FILTROS */}
        <IonButton
          expand="block"
          fill="outline"
          onClick={() => setShowModal(true)}
        >
          Seleccionar filtros
          <IonIcon icon={chevronDownOutline} slot="end" />
        </IonButton>

        {/* HOY */}
        <div style={{ marginTop: 15, display: 'flex', alignItems: 'center', gap: 6 }}>
          <IonIcon icon={calendarOutline} />
          <strong>Hoy</strong>
        </div>

        {/* CALENDARIO */}
        <IonGrid style={{ marginTop: 10 }}>
          <IonRow>
            <IonCol size="2"></IonCol>
            {dias.map(d => (
              <IonCol key={d.id}>
                <strong>{d.nombre}<br />{d.fecha}</strong>
              </IonCol>
            ))}
          </IonRow>

          {horas.map(hora => (
            <IonRow key={hora} style={{ minHeight: 50 }}>
              <IonCol size="2" style={{ fontSize: 12, color: '#666' }}>
                {hora}
              </IonCol>

              {dias.map(dia => (
                <IonCol
                  key={dia.id}
                  style={{
                    border: '1px solid #eee',
                    background: esDisponible(dia.id, hora)
                      ? '#35c14a'
                      : 'transparent',
                    color: esDisponible(dia.id, hora)
                      ? 'white'
                      : 'transparent',
                    textAlign: 'center',
                    fontSize: 12,
                    fontWeight: 'bold'
                  }}
                >
                  {esDisponible(dia.id, hora) && 'Disponible'}
                </IonCol>
              ))}
            </IonRow>
          ))}
        </IonGrid>

        {/* MODAL */}
        <IonModal isOpen={showModal}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Seleccionar filtros</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)}>
                  <IonIcon icon={closeOutline} />
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>

          <IonContent className="ion-padding">

            <IonItem>
              <IonLabel>Aula</IonLabel>
              <IonSelect placeholder="Aula">
                <IonSelectOption value="aula1">Aula 1</IonSelectOption>
                <IonSelectOption value="aula2">Aula 2</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Capacidad</IonLabel>
              <IonSelect placeholder="Capacidad">
                <IonSelectOption value="20">20</IonSelectOption>
                <IonSelectOption value="40">40</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Unidades</IonLabel>
              <IonSelect placeholder="Unidades">
                <IonSelectOption value="fiec">FIEC</IonSelectOption>
                <IonSelectOption value="fcnm">FCNM</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Bloque</IonLabel>
              <IonSelect placeholder="Bloque">
                <IonSelectOption value="a">A</IonSelectOption>
                <IonSelectOption value="b">B</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Ubicación</IonLabel>
              <IonSelect placeholder="Ubicación">
                <IonSelectOption value="campus">Campus</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonButton
              expand="block"
              color="success"
              style={{ marginTop: 20 }}
              onClick={aplicarFiltros}
            >
              Filtrar
            </IonButton>
          </IonContent>
        </IonModal>

      </IonContent>
    </IonPage>
  );
};

export default Calendario;
