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

const Phase2: React.FC = () => {
  const history = useHistory();

  const weeks: Week[] = [
    {
      week: 5,
      days: [
        { day: 'Lundi', activity: 'Intervalles', duration: '30 minutes', intensity: 'Modérée', description: '5 x 400m à effort modéré (essoufflé mais capable de parler en phrases courtes)', rest: '90s de récupération à l\'arrêt', link: '' },
        { day: 'Mardi', activity: 'Renforcement du haut du corps', duration: '60 minutes', intensity: 'Modérée', link: '/training/phase2/upper-body' },
        { day: 'Mercredi', activity: 'Entraînement spécifique HYROX', duration: '60 minutes', intensity: 'Modérée', link: '/training/phase2/hyrox-specific' },
        { day: 'Jeudi', activity: 'Repos', duration: '0 minute', intensity: 'Récupération', link: '' },
        { day: 'Vendredi', activity: 'Intervalles longs', duration: '30 minutes', intensity: 'Modérée', description: '3 x 1km à effort modéré', rest: '2 minutes de récupération, marche tranquille', link: '' },
        { day: 'Samedi', activity: 'Récupération active', duration: '30 minutes', intensity: 'Légère', link: '' },
        { day: 'Dimanche', activity: 'Renforcement du bas du corps', duration: '60 minutes', intensity: 'Modérée', link: '/training/phase2/lower-body' }
      ]
    },
    {
      week: 6,
      days: [
        { day: 'Lundi', activity: 'Renforcement du haut du corps', duration: '60 minutes', intensity: 'Modérée', link: '/training/phase2/upper-body' },
        { day: 'Mardi', activity: 'Longue course', duration: '65 minutes', intensity: 'Facile', description: 'Course à allure facile', link: '' },
        { day: 'Mercredi', activity: 'Repos', duration: '0 minute', intensity: 'Récupération', link: '' },
        { day: 'Jeudi', activity: 'Entraînement spécifique HYROX', duration: '60 minutes', intensity: 'Modérée', link: '/training/phase2/hyrox-specific' },
        { day: 'Vendredi', activity: 'Renforcement du bas du corps', duration: '60 minutes', intensity: 'Modérée', link: '/training/phase2/lower-body' },
        { day: 'Samedi', activity: 'Récupération active', duration: '30 minutes', intensity: 'Légère', link: '' },
        { day: 'Dimanche', activity: 'Intervalles', duration: '30 minutes', intensity: 'Élevée', description: '6 x 400m à effort élevé (la respiration est difficile, vous ne pouvez parler qu’en mots très courts. Les jambes commencent à brûler)', rest: '90s de récupération à l\'arrêt', link: '' }
      ]
    },
    {
      week: 7,
      days: [
        { day: 'Lundi', activity: 'Renforcement du haut du corps', duration: '60 minutes', intensity: 'Modérée', link: '/training/phase2/upper-body' },
        { day: 'Mardi', activity: 'Récupération active', duration: '30 minutes', intensity: 'Légère', link: '' },
        { day: 'Mercredi', activity: 'Intervalles', duration: '30 minutes', intensity: 'Modérée', description: '5 x 600m à effort modéré', rest: '90s de récupération à l\'arrêt', link: '' },
        { day: 'Jeudi', activity: 'Entraînement spécifique HYROX', duration: '60 minutes', intensity: 'Modérée', link: '/training/phase2/hyrox-specific' },
        { day: 'Vendredi', activity: 'Renforcement du bas du corps', duration: '60 minutes', intensity: 'Modérée', link: '/training/phase2/lower-body' },
        { day: 'Samedi', activity: 'Repos', duration: '0 minute', intensity: 'Récupération', link: '' },
        { day: 'Dimanche', activity: 'Intervalles longs', duration: '30 minutes', intensity: 'Modérée', description: '4 x 1km à effort modéré', rest: '2 minutes de récupération, marche', link: '' }
      ]
    },
    {
      week: 8,
      days: [
        { day: 'Lundi', activity: 'Renforcement du haut du corps', duration: '60 minutes', intensity: 'Modérée', link: '/training/phase2/upper-body' },
        { day: 'Mardi', activity: 'Longue course', duration: '70 minutes', intensity: 'Facile', description: 'Course à allure facile', link: '' },
        { day: 'Mercredi', activity: 'Repos', duration: '0 minute', intensity: 'Récupération', link: '' },
        { day: 'Jeudi', activity: 'Entraînement spécifique HYROX', duration: '60 minutes', intensity: 'Modérée', link: '/training/phase2/hyrox-specific' },
        { day: 'Vendredi', activity: 'Renforcement du bas du corps', duration: '60 minutes', intensity: 'Modérée', link: '/training/phase2/lower-body' },
        { day: 'Samedi', activity: 'Récupération active', duration: '30 minutes', intensity: 'Légère', link: '' },
        { day: 'Dimanche', activity: 'Intervalles', duration: '30 minutes', intensity: 'Élevée', description: '6 x 600m à effort élevé', rest: '90s de récupération à l\'arrêt', link: '' }
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
          <IonTitle>Phase 2 : Intensification</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard className="hero-card">
          <IonCardHeader className="ion-text-center">
            <IonCardTitle>Semaines 5-8</IonCardTitle>
            <IonCardSubtitle>Intensification</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p className="hero-text">
              Cette deuxième phase marque une intensification de l'entraînement.
              Les séances sont plus longues et plus intenses pour développer votre endurance et votre force.
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
                              {day.duration && !day.link && (
                                <IonBadge>
                                  <IonIcon icon={timeOutline} />
                                  {day.duration}
                                </IonBadge>
                              )}
                              {day.intensity && !day.link && (
                                <IonBadge color="tertiary">
                                  <IonIcon icon={fitnessOutline} />
                                  {day.intensity}
                                </IonBadge>
                              )}
                              {day.description && (
                                <p className="ion-text-wrap">{day.description}</p>
                              )}
                              {day.rest && (
                                <p className="ion-text-wrap">Récupération : {day.rest}</p>
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

export default Phase2; 