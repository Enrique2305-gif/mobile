import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonMenuButton,
  IonIcon
} from '@ionic/react';
import { notificationsOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';
import './Home.css';

const Reservas: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
              <IonToolbar className="home-toolbar">
                <IonButtons slot="start">
                  <IonBackButton defaultHref="/home" />
                  </IonButtons>
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

      <IonContent className="ion-padding"
        style={{ '--padding-top': '80px' }}
      >

        <IonCard routerLink="/calendario">
          <IonImg src="https://www.espol.edu.ec/sites/default/files/clase1.jpg" />
          <IonCardHeader>
            <IonCardTitle className="card-title-center">Aulas</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard routerLink="/calendario">
          <IonImg src="https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/DPXDCWAE4RHZ5KHI53FWTGL7IE.jpg" />
          <IonCardHeader>
            <IonCardTitle className="card-title-center">Espacios deportivos</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard routerLink="/calendario">
          <IonImg src="https://www.espol.edu.ec/sites/default/files/NOTA%20TRABAJADORES%20ESPOL%206.jpg" />
          <IonCardHeader>
            <IonCardTitle className="card-title-center">Auditorios</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard routerLink="/calendario">
          <IonImg src="https://www.fcnm.espol.edu.ec/sites/default/files/2023-09/FCNM%20Sistemas03.webp" />
          <IonCardHeader>
            <IonCardTitle className="card-title-center">Laboratorios</IonCardTitle>
          </IonCardHeader>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Reservas;
