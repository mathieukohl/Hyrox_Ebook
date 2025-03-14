import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonChip,
  IonBadge,
  IonProgressBar,
  IonButton
} from '@ionic/react';
import { calendarOutline, barbellOutline, trophyOutline, timeOutline, fitnessOutline, heartOutline, arrowForwardOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { Phase } from '../types/training';

const TrainingProgram: React.FC = () => {
  const history = useHistory();

  const phases: Phase[] = [
    {
      title: 'Phase 1 : Fondation',
      subtitle: '4 semaines',
      description: 'Construction des bases et adaptation du corps',
      progress: 0.33,
      path: '/training/phase1'
    },
    {
      title: 'Phase 2 : Développement',
      subtitle: '4 semaines',
      description: 'Intensification et développement des compétences',
      progress: 0.66,
      path: '/training/phase2'
    },
    {
      title: 'Phase 3 : Performance',
      subtitle: '4 semaines',
      description: 'Optimisation et préparation à la compétition',
      progress: 1,
      path: '/training/phase3'
    }
  ];

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Programme d'Entraînement</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard className="hero-card">
          <IonCardHeader className="ion-text-center">
            <IonCardTitle>Programme 12 Semaines</IonCardTitle>
            <IonCardSubtitle>Préparation HYROX</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p className="hero-text">
              Un programme structuré en trois phases pour vous préparer efficacement à votre course HYROX.
              Chaque phase est conçue pour développer des aspects spécifiques de votre performance.
            </p>
          </IonCardContent>
        </IonCard>

        <IonGrid className="ion-margin-top">
          <IonRow>
            <IonCol size="12">
              <h2 className="section-title">Phases d'Entraînement</h2>
            </IonCol>
          </IonRow>
          {phases.map((phase, index) => (
            <IonRow key={index}>
              <IonCol size="12">
                <IonCard className="phase-card">
                  <IonCardHeader>
                    <IonCardTitle>{phase.title}</IonCardTitle>
                    <IonCardSubtitle>{phase.subtitle}</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>{phase.description}</p>
                    <IonProgressBar value={phase.progress}></IonProgressBar>
                    <IonButton 
                      expand="block" 
                      className="ion-margin-top"
                      onClick={() => history.push(phase.path)}
                    >
                      Voir le programme
                      <IonIcon slot="end" icon={arrowForwardOutline} />
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>

        <IonCard className="ion-margin-top">
          <IonCardHeader>
            <IonCardTitle>Planning Hebdomadaire</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonIcon slot="start" icon={timeOutline} />
                <IonLabel>
                  <h3>Lundi</h3>
                  <p>Entraînement Force</p>
                  <IonChip color="secondary">60 min</IonChip>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon slot="start" icon={timeOutline} />
                <IonLabel>
                  <h3>Mercredi</h3>
                  <p>Course + Fonctionnel</p>
                  <IonChip color="secondary">75 min</IonChip>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon slot="start" icon={timeOutline} />
                <IonLabel>
                  <h3>Vendredi</h3>
                  <p>Entraînement Force</p>
                  <IonChip color="secondary">60 min</IonChip>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon slot="start" icon={timeOutline} />
                <IonLabel>
                  <h3>Samedi</h3>
                  <p>Course Longue + Simulation</p>
                  <IonChip color="secondary">90 min</IonChip>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default TrainingProgram; 