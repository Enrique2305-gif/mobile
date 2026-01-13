 /* import {
  IonPage,
  IonContent,
  IonButton,
  IonIcon
} from '@ionic/react';
import { personCircleOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';

const Home: React.FC = () => {
  const history = useHistory();

  const salir = () => {
    history.replace('/login');
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Bienvenido de nuevo</h2>

        <IonIcon icon={personCircleOutline} size="large" />

        <h3>USUARIO</h3>

        <IonButton onClick={() => history.push('/reservas')}>
        Reserva
        </IonButton>

        <IonButton routerLink="/mis-solicitudes" expand="block">
        Ver mis solicitudes
        </IonButton>


        <IonButton expand="block" color="danger" onClick={salir}>
          Salir
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Home;
*/

import {
  IonPage,
  IonContent,
  IonButton,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton
} from '@ionic/react';
import { personCircleOutline, notificationsOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();

  const salir = () => {
    history.replace('/login');
  };

  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar className="home-toolbar">
          <IonTitle>Sistema de Reservas</IonTitle>
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

      <IonContent>
        <div className="home-container">
          {/* Logo ESPOL */}
          <div className="home-logo">
            <h1>ESPOL</h1>
          </div>

          {/* Bienvenida */}
          <div className="home-welcome">
            <h2>Bienvenido de nuevo</h2>

            <div className="home-avatar">
              <IonIcon icon={personCircleOutline} />
            </div>

            <h1>USUARIO</h1>
          </div>

          {/* Botones */}
          <div className="home-actions">
            <IonButton expand="block" onClick={() => history.push('/reservas')}>
              Reservar
            </IonButton>

            <IonButton expand="block" onClick={() => history.push('/mis-solicitudes')}>
              Ver solicitudes
            </IonButton>

            <IonButton expand="block" fill="outline" color="danger" onClick={salir}>
              Salir
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;