import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonAvatar
} from '@ionic/react';
import { arrowForward, fitness, trophy, time, heart } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import hyroxLogo from '../assets/hyrox_logo.png';

const Introduction: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle style={{ marginLeft: '30px' }}>HYROX Training</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard className="hero-card">
          <IonCardHeader className="ion-text-center">
            <IonAvatar className="hero-avatar">
              <img src={hyroxLogo} alt="HYROX Logo" />
            </IonAvatar>
            <IonCardSubtitle className='ion-margin-top'>Votre Guide Complet vers la Réussite</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-center">
            <p className="hero-text" style={{ marginTop: '20px' }}>
              L'HYROX est une course d'endurance unique qui combine la course à pied avec des
              exercices fonctionnels. Ce guide complet vous aidera à vous préparer et à
              exceller dans votre parcours HYROX.
            </p>
            <IonButton
              expand="block"
              className="action-button ion-margin-top"
              onClick={() => history.push('/understanding')}
            >
              Commencer
              <IonIcon slot="end" icon={arrowForward} />
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonGrid className="ion-margin-top">
          <IonRow>
            <IonCol size="12">
              <h2 className="section-title">Ce que Vous Apprendrez</h2>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="6" sizeLg="3">
              <IonCard className="feature-card">
                <IonCardContent>
                  <IonItem lines="none">
                    <IonIcon slot="start" icon={fitness} className="feature-icon" />
                    <IonLabel>
                      <h3>Programme Structuré</h3>
                      <p>12 semaines d'entraînement progressif</p>
                    </IonLabel>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" sizeMd="6" sizeLg="3">
              <IonCard className="feature-card">
                <IonCardContent>
                  <IonItem lines="none">
                    <IonIcon slot="start" icon={trophy} className="feature-icon" />
                    <IonLabel>
                      <h3>Techniques Avancées</h3>
                      <p>Maîtrisez chaque mouvement parfaitement</p>
                    </IonLabel>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" sizeMd="6" sizeLg="3">
              <IonCard className="feature-card">
                <IonCardContent>
                  <IonItem lines="none">
                    <IonIcon slot="start" icon={time} className="feature-icon" />
                    <IonLabel>
                      <h3>Planning Flexible</h3>
                      <p>Adaptez à votre emploi du temps</p>
                    </IonLabel>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Introduction; 