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
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonBadge
} from '@ionic/react';
import { arrowBackOutline, arrowForwardOutline, barbellOutline, fitnessOutline, timeOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { Week } from '../../types/training';

const Phase1: React.FC = () => {
  const history = useHistory();

  const weeks: Week[] = [
    {
      week: 1,
      days: [
        { day: 'Lundi', activity: 'Course à allure facile', duration: '30 minutes', intensity: 'Rythme de conversation', link: '' },
        { day: 'Mardi', activity: 'Renforcement du haut du corps', link: '/training/phase1/upper-body' },
        { day: 'Mercredi', activity: 'Repos', link: '' },
        { day: 'Jeudi', activity: 'Renforcement du bas du corps', link: '/training/phase1/lower-body' },
        { day: 'Vendredi', activity: 'Entraînement spécifique HYROX', link: '/training/phase1/hyrox-specific' },
        { day: 'Samedi', activity: 'Récupération active', duration: '30 minutes', type: 'Étirements, yoga, vélo, piscine', link: '' },
        { day: 'Dimanche', activity: 'Longue course à allure facile', duration: '45 minutes', intensity: 'Rythme de conversation', link: '' }
      ]
    },
    {
      week: 2,
      days: [
        { day: 'Lundi', activity: 'Course à allure facile', duration: '35 minutes', link: '' },
        { day: 'Mardi', activity: 'Renforcement du haut du corps', link: '/training/phase1/upper-body' },
        { day: 'Mercredi', activity: 'Renforcement du bas du corps', link: '/training/phase1/lower-body' },
        { day: 'Jeudi', activity: 'Repos', link: '' },
        { day: 'Vendredi', activity: 'Entraînement spécifique HYROX', link: '/training/phase1/hyrox-specific' },
        { day: 'Samedi', activity: 'Longue course à allure facile', duration: '50 minutes', link: '' },
        { day: 'Dimanche', activity: 'Récupération active', duration: '30 minutes', type: 'Étirements, yoga, vélo, piscine', link: '' }
      ]
    },
    {
      week: 3,
      days: [
        { day: 'Lundi', activity: 'Course à allure facile', duration: '40 minutes', link: '' },
        { day: 'Mardi', activity: 'Renforcement du haut du corps', link: '/training/phase1/upper-body' },
        { day: 'Mercredi', activity: 'Repos', link: '' },
        { day: 'Jeudi', activity: 'Renforcement du bas du corps', link: '/training/phase1/lower-body' },
        { day: 'Vendredi', activity: 'Entraînement spécifique HYROX', link: '/training/phase1/hyrox-specific' },
        { day: 'Samedi', activity: 'Longue course à allure facile', duration: '55 minutes', link: '' },
        { day: 'Dimanche', activity: 'Récupération active', duration: '30 minutes', type: 'Étirements, yoga, vélo, piscine', link: '' }
      ]
    },
    {
      week: 4,
      days: [
        { day: 'Lundi', activity: 'Course à allure facile', duration: '45 minutes', link: '' },
        { day: 'Mardi', activity: 'Renforcement du haut du corps', link: '/training/phase1/upper-body' },
        { day: 'Mercredi', activity: 'Renforcement du bas du corps', link: '/training/phase1/lower-body' },
        { day: 'Jeudi', activity: 'Repos', link: '' },
        { day: 'Vendredi', activity: 'Entraînement spécifique HYROX', link: '/training/phase1/hyrox-specific' },
        { day: 'Samedi', activity: 'Course à allure facile', duration: '45 minutes', link: '' },
        { day: 'Dimanche', activity: 'Repos', link: '' }
      ]
    }
  ];

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButton slot="start" fill="clear" onClick={() => history.goBack()}>
            <IonIcon icon={arrowBackOutline} />
          </IonButton>
          <IonTitle>Phase 1 : Fondation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard className="hero-card">
          <IonCardHeader className="ion-text-center">
            <IonCardTitle>Semaines 1-4</IonCardTitle>
            <IonCardSubtitle>Construction des bases</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p className="hero-text">
              Cette première phase est consacrée à la construction des bases fondamentales.
              L'accent est mis sur l'endurance de base et l'apprentissage des mouvements essentiels.
            </p>
          </IonCardContent>
        </IonCard>

        <IonGrid className="ion-margin-top">
          {weeks.map((week, weekIndex) => (
            <React.Fragment key={weekIndex}>
              <IonRow>
                <IonCol size="12">
                  <h2 className="section-title">Semaine {week.week}</h2>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <IonCard>
                    <IonCardContent>
                      <IonList>
                        {week.days.map((day, dayIndex) => (
                          <IonItem key={dayIndex}>
                            <IonLabel>
                              <h3>{day.day}</h3>
                              <p>{day.activity}</p>
                              {day.duration && day.activity !== 'Repos' && (
                                <IonBadge color="secondary">
                                  <IonIcon icon={timeOutline} />
                                  {day.duration}
                                </IonBadge>
                              )}
                              {day.intensity && (
                                <IonBadge color="tertiary">
                                  <IonIcon icon={fitnessOutline} />
                                  {day.intensity}
                                </IonBadge>
                              )}
                              {day.type && (
                                <p className="ion-text-wrap">{day.type}</p>
                              )}
                            </IonLabel>
                            {day.link && day.link !== '' && (
                              <IonButton 
                                fill="clear" 
                                slot="end"
                                onClick={() => history.push(day.link)}
                              >
                                <IonIcon icon={arrowForwardOutline} />
                              </IonButton>
                            )}
                          </IonItem>
                        ))}
                      </IonList>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </React.Fragment>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Phase1; 