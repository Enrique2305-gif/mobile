import { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonInput,
  IonTextarea,
  IonButton
} from '@ionic/react';

import { useLocation, useHistory } from 'react-router';

const EditarSolicitud: React.FC = () => {
  const location = useLocation<any>();
  const history = useHistory();
  const reserva = location.state;

  const [form, setForm] = useState({
    solicitante: reserva?.solicitante || '',
    corresponsable: reserva?.corresponsable || '',
    nombre: reserva?.nombre || '',
    recurso: reserva?.recurso || '',
    bloque: reserva?.bloque || '',
    aula: reserva?.aula || '',
    fecha: reserva?.fecha || '',
    hora: reserva?.hora || '',
    capacidad: reserva?.capacidad || '',
    duracion: reserva?.duracion || '',
    unidad: reserva?.unidad || '',
    equipamiento: reserva?.equipamiento || '',
    infoAdicional: reserva?.infoAdicional || ''
  });

  const handleInput =
    (campo: string) =>
    (e: CustomEvent<{ value: string }>) =>
      setForm({ ...form, [campo]: e.detail.value });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/mis-solicitudes" />
          </IonButtons>
          <IonTitle>Información</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <div style={grid}>

          <CampoInput
            label="Solicitante *"
            value={form.solicitante}
            onInput={handleInput('solicitante')}
          />

          <CampoInput
            label="Corresponsable"
            value={form.corresponsable}
            onInput={handleInput('corresponsable')}
          />

          <CampoInput
            label="Nombre de la reserva"
            value={form.nombre}
            onInput={handleInput('nombre')}
          />

          <CampoInput
            label="Recurso"
            value={form.recurso}
            onInput={handleInput('recurso')}
          />

          <CampoInput
            label="Bloque"
            value={form.bloque}
            onInput={handleInput('bloque')}
          />

          <CampoInput
            label="Aula"
            value={form.aula}
            onInput={handleInput('aula')}
          />

          <CampoInput
            label="Fecha"
            value={form.fecha}
            onInput={handleInput('fecha')}
          />

          <CampoInput
            label="Hora"
            value={form.hora}
            onInput={handleInput('hora')}
          />

          <CampoInput
            label="Capacidad"
            value={form.capacidad}
            onInput={handleInput('capacidad')}
          />

          <CampoInput
            label="Duración"
            value={form.duracion}
            onInput={handleInput('duracion')}
          />

          <CampoInput
            label="Unidad"
            value={form.unidad}
            onInput={handleInput('unidad')}
            full
          />

          <CampoArea
            label="Equipamiento requerido"
            value={form.equipamiento}
            onInput={handleInput('equipamiento')}
          />

          <CampoArea
            label="Información adicional"
            value={form.infoAdicional}
            onInput={handleInput('infoAdicional')}
          />

        </div>

        {/* BOTONES */}
        <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
          <IonButton
            expand="block"
            fill="outline"
            onClick={() => history.goBack()}
          >
            Cancelar
          </IonButton>

          <IonButton
            expand="block"
            color="primary"
            onClick={() => {
              console.log('Cambios guardados', form);
              history.push('/mis-solicitudes');
            }}
          >
            Guardar cambios
          </IonButton>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default EditarSolicitud;

const CampoInput = ({ label, value, onInput, full = false }: any) => (
  <div style={{ marginBottom: 12, gridColumn: full ? '1 / 3' : '' }}>
    <strong>{label}</strong>
    <IonInput
      value={value}
      fill="outline"
      onIonInput={onInput}
    />
  </div>
);

const CampoArea = ({ label, value, onInput }: any) => (
  <div style={{ marginBottom: 12 }}>
    <strong>{label}</strong>
    <IonTextarea
      value={value}
      fill="outline"
      rows={3}
      onIonInput={onInput}
    />
  </div>
);

const grid = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 12
};
