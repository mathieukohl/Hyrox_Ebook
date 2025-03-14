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

const Introduction: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>HYROX Training</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard className="hero-card">
          <IonCardHeader className="ion-text-center">
            <IonAvatar className="hero-avatar">
              <img src="/assets/hyrox-logo.png" alt="HYROX Logo" />
            </IonAvatar>
            <IonCardTitle className="ion-padding-top">Bienvenue dans l'Entraînement HYROX</IonCardTitle>
            <IonCardSubtitle>Votre Guide Complet vers la Réussite</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-center">
            <p className="hero-text">
              HYROX est une course d'endurance unique qui combine la course à pied avec des
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
          <IonRow>
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
                      <p>Maîtrisez chaque mouvement</p>
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
            <IonCol size="12" sizeMd="6" sizeLg="3">
              <IonCard className="feature-card">
                <IonCardContent>
                  <IonItem lines="none">
                    <IonIcon slot="start" icon={heart} className="feature-icon" />
                    <IonLabel>
                      <h3>Suivi Progression</h3>
                      <p>Mesurez vos améliorations</p>
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