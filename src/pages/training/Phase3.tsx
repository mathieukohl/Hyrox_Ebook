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

const Phase3: React.FC = () => {
  const history = useHistory();

  const weeks: Week[] = [
    {
      week: 9,
      days: [
        { day: 'Lundi', activity: 'Renforcement du haut du corps Force', duration: '60 minutes', intensity: 'Élevée', link: '/training/phase3/upper-body' },
        { day: 'Mardi', activity: 'Longue course', duration: '75 minutes', intensity: 'Facile', description: 'Course à allure facile', link: '' },
        { day: 'Mercredi', activity: 'Entraînement spécifique HYROX', duration: '60 minutes', intensity: 'Modérée', link: '/training/phase3/hyrox-specific' },
        { day: 'Jeudi', activity: 'Repos', duration: '0 minute', intensity: 'Récupération', link: '' },
        { day: 'Vendredi', activity: 'Intervalles à haute intensité', duration: '30 minutes', intensity: 'Élevée', description: '4 x 800m à effort élevé', rest: '2 minutes de récupération, marche', link: '' },
        { day: 'Samedi', activity: 'Récupération active', duration: '30 minutes', intensity: 'Légère', link: '' },
        { day: 'Dimanche', activity: 'Renforcement du bas du corps Force', duration: '60 minutes', intensity: 'Élevée', link: '/training/phase3/lower-body' }
      ]
    },
    {
      week: 10,
      days: [
        { day: 'Lundi', activity: 'Course à allure facile', duration: '45 minutes', intensity: 'Facile', description: 'Course à allure facile', link: '' },
        { day: 'Mardi', activity: 'Renforcement du haut du corps', duration: '60 minutes', intensity: 'Modérée', link: '/training/phase3/upper-body' },
        { day: 'Mercredi', activity: 'Intervalles à haute intensité', duration: '30 minutes', intensity: 'Élevée', description: '5 x 800m à effort élevé', rest: '2 minutes de récupération, marche', link: '' },
        { day: 'Jeudi', activity: 'Repos', duration: '0 minute', intensity: 'Récupération', link: '' },
        { day: 'Vendredi', activity: 'Entraînement spécifique HYROX', duration: '60 minutes', intensity: 'Modérée', link: '/training/phase3/hyrox-specific' },
        { day: 'Samedi', activity: 'Récupération active', duration: '30 minutes', intensity: 'Légère', link: '' },
        { day: 'Dimanche', activity: 'Renforcement du bas du corps Force', duration: '60 minutes', intensity: 'Élevée', link: '/training/phase3/lower-body' }
      ]
    },
    {
      week: 11,
      days: [
        { day: 'Lundi', activity: 'Course à allure facile', duration: '30 minutes', intensity: 'Facile', description: 'Course à allure facile', link: '' },
        { day: 'Mardi', activity: 'Renforcement du haut du corps Force', duration: '60 minutes', intensity: 'Élevée', link: '/training/phase3/upper-body' },
        { day: 'Mercredi', activity: 'Repos', duration: '0 minute', intensity: 'Récupération', link: '' },
        { day: 'Jeudi', activity: 'Intervalles à haute intensité', duration: '30 minutes', intensity: 'Élevée', description: '5 x 800m à effort élevé', rest: '90s de récupération à l\'arrêt', link: '' },
        { day: 'Vendredi', activity: 'Entraînement spécifique HYROX', duration: '60 minutes', intensity: 'Modérée', link: '/training/phase3/hyrox-specific' },
        { day: 'Samedi', activity: 'Récupération active', duration: '30 minutes', intensity: 'Légère', link: '' },
        { day: 'Dimanche', activity: 'Renforcement du bas du corps Force', duration: '60 minutes', intensity: 'Élevée', link: '/training/phase3/lower-body' }
      ]
    },
    {
      week: 12,
      days: [
        { day: 'Lundi', activity: 'Entraînement spécifique HYROX', duration: '60 minutes', intensity: 'Modérée', link: '/training/phase3/hyrox-specific' },
        { day: 'Mardi', activity: 'Entraînement full body Force', duration: '60 minutes', intensity: 'Élevée', link: '/training/phase3/full-body' },
        { day: 'Mercredi', activity: 'Repos', duration: '0 minute', intensity: 'Récupération', link: '' },
        { day: 'Jeudi', activity: 'Entraînement spécifique HYROX (léger)', duration: '45 minutes', intensity: 'Légère', link: '/training/phase3/hyrox-specific' },
        { day: 'Vendredi', activity: 'Étirements et récupération', duration: '30 minutes', intensity: 'Légère', link: '' },
        { day: 'Samedi', activity: 'Repos / Course d\'activation', duration: '25 minutes', intensity: 'Légère', description: 'Course d\'activation (allure footing)', link: '' },
        { day: 'Dimanche', activity: 'Jour de course !', duration: 'Variable', intensity: 'Compétition', description: 'Exécutez votre plan Hyrox avec confiance', link: '' }
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
          <IonTitle>Phase 3 : Performance</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard className="hero-card">
          <IonCardHeader className="ion-text-center">
            <IonCardTitle>Semaines 9-12</IonCardTitle>
            <IonCardSubtitle>Performance</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p className="hero-text">
              Cette phase finale est conçue pour maximiser votre performance.
              Les séances sont optimisées pour la compétition avec une attention particulière
              portée à la force et à l'endurance spécifique à HYROX.
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
                                <IonBadge color="secondary">
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

export default Phase3; 