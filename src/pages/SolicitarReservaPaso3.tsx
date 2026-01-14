import { useState } from 'react';

import {
  IonAlert,
  IonModal,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonMenuButton,
  IonContent,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonIcon
} from '@ionic/react';

import { useHistory } from 'react-router';

import {
  documentTextOutline,
  notificationsOutline,
  attachOutline
} from 'ionicons/icons';

const enviarSolicitud = () => {
  console.log('Solicitud enviada');
};

const SolicitarReservaPaso3: React.FC = () => {
  const history = useHistory();
  const [ambito, setAmbito] = useState('');
  const [tipoEvento, setTipoEvento] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
          <strong>Paso 3 de 3</strong>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
            <div style={pasoCompletado}>1</div>
            <div style={linea}></div>
            <div style={pasoCompletado}>2</div>
            <div style={linea}></div>
            <div style={pasoActivo}>3</div>
          </div>
        </div>

        <h3>Detalles de la solicitud</h3>
        <small style={{ float: 'right' }}>Obligatorio (O)</small>

        <div style={card}>

          {/* ÁMBITO */}
          <label><strong>Seleccione el ámbito y tipo de evento (O)</strong></label>

          <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
            <IonSelect
              placeholder="Interno"
              value={ambito}
              fill="outline"
              onIonChange={(e: CustomEvent<{ value: string }>) =>
                setAmbito(e.detail.value)
              }
            >
              <IonSelectOption value="interno">Interno</IonSelectOption>
              <IonSelectOption value="externo">Externo</IonSelectOption>
            </IonSelect>

            <IonSelect
              placeholder="Clase"
              value={tipoEvento}
              fill="outline"
              onIonChange={(e: CustomEvent<{ value: string }>) =>
                setTipoEvento(e.detail.value)
              }
            >
              <IonSelectOption value="clase">Clase</IonSelectOption>
              <IonSelectOption value="reunion">Taller</IonSelectOption>
              <IonSelectOption value="evento">Examen</IonSelectOption>
              <IonSelectOption value="evento">Práctica</IonSelectOption>
              <IonSelectOption value="evento">Revisión</IonSelectOption>
              <IonSelectOption value="evento">Presentación</IonSelectOption>
            </IonSelect>
          </div>

          {/* DESCRIPCIÓN */}
          <div style={{ marginTop: 15 }}>
            <strong>Descripción y equipamiento requerido</strong>
            <IonTextarea
              rows={4}
              fill="outline"
              value={descripcion}
            />
          </div>

          {/* SUBIR ARCHIVO */}
          <div style={{ marginTop: 15 }}>
            <strong>Subir oficio correspondiente</strong>
            <div style={uploadBox}>
              <IonIcon icon={attachOutline} size="large" />
            </div>
          </div>

        </div>

        {/* BOTONES */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
          <IonButton fill="outline" routerLink="/solicitar-reserva/paso2">
            Anterior
          </IonButton>

          <IonButton color="primary" onClick={() => setShowConfirm(true)}>
            Enviar
          </IonButton>
        </div>

        <IonAlert
        isOpen={showConfirm}
        header="Confirmar envío"
        message="¿Está seguro que desea enviar la solicitud de reserva?"
        buttons={[
            {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => setShowConfirm(false)
            },
            {
            text: 'Continuar',
            handler: () => {
                setShowConfirm(false);
                setShowSuccess(true);
            }
            }
        ]}
        onDidDismiss={() => setShowConfirm(false)}
        />

        <IonAlert
        isOpen={showSuccess}
        header="¡Reserva agendada con éxito!"
         message={" Puedes consultar el estado de tus reservas en la sección de Solicitudes"}
        buttons={[
            {
            text: 'Continuar',
            handler: () => {
                setShowSuccess(false);
                window.location.href = '/mis-solicitudes';
            }
            }
        ]}
        />


      </IonContent>
    </IonPage>
  );
};

export default SolicitarReservaPaso3;

/* ESTILOS */
const card = {
  border: '1px solid #ccc',
  borderRadius: 8,
  padding: 15,
  marginTop: 10
};

const uploadBox = {
  border: '1px solid #ccc',
  borderRadius: 8,
  height: 120,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 5
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

const linea = {
  width: 40,
  height: 2,
  background: '#ccc',
  marginTop: 14
};

