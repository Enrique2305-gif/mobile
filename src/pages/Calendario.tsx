import { useState } from 'react';
import { notificationsOutline } from 'ionicons/icons';

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
  IonMenuButton,
  IonSelect,
  IonSelectOption
} from '@ionic/react';

import { useHistory } from 'react-router';

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
  const history = useHistory();

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

  // 👉 NAVEGA A SOLICITAR RESERVA
  const irASolicitud = (dia: number, hora: string) => {
    history.push('/solicitar-reserva', {
      recurso: 'Aula',
      ubicacion: 'A103',
      capacidad: 15,
      fecha: dia === 1 ? '11/04/2025' : '12/04/2025',
      inicio: hora,
      fin: '10:30'
    });
  };

  return (
    <IonPage>
      <IonHeader>
              <IonToolbar className="home-toolbar">
                <IonButtons slot="start">
                  <IonBackButton defaultHref="/reservas" />
                  </IonButtons>
              <IonTitle>Calendario</IonTitle>
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

      <IonContent className="ion-padding"
        style={{ '--padding-top': '80px' }}
      >

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

              {dias.map(dia => {
                const disponible = esDisponible(dia.id, hora);

                return (
                  <IonCol
                    key={dia.id}
                    onClick={() =>
                      disponible && irASolicitud(dia.id, hora)
                    }
                    style={{
                      border: '1px solid #eee',
                      background: disponible ? '#35c14a' : 'transparent',
                      color: disponible ? 'white' : 'transparent',
                      textAlign: 'center',
                      fontSize: 12,
                      fontWeight: 'bold',
                      cursor: disponible ? 'pointer' : 'default'
                    }}
                  >
                    {disponible && 'Disponible'}
                  </IonCol>
                );
              })}
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
              <IonSelect interface="action-sheet" placeholder="Aula">
                <IonSelectOption value="aula1">Aula 1</IonSelectOption>
                <IonSelectOption value="aula2">Aula 2</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Capacidad</IonLabel>
              <IonSelect interface="action-sheet" placeholder="Capacidad">
                <IonSelectOption value="20">20</IonSelectOption>
                <IonSelectOption value="40">40</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Unidades</IonLabel>
              <IonSelect interface="action-sheet" placeholder="Unidades">
                <IonSelectOption value="fiec">FIEC</IonSelectOption>
                <IonSelectOption value="fcnm">FCNM</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Bloque</IonLabel>
              <IonSelect interface="action-sheet" placeholder="Bloque">
                <IonSelectOption value="a">A</IonSelectOption>
                <IonSelectOption value="b">B</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Ubicación</IonLabel>
              <IonSelect interface="action-sheet" placeholder="Ubicación">
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
