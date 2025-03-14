import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
  IonBackButton,
  IonButtons
} from '@ionic/react';
import { arrowBackOutline, checkmarkCircleOutline, timeOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

interface Exercise {
  name: string;
  sets: number;
  reps: number;
  rest?: string;
  note?: string;
}

interface TrainingOption {
  name: string;
  exercises: Exercise[];
  rest: string;
  duration?: string;
}

const HyroxSpecific: React.FC = () => {
  const history = useHistory();
  const [selectedTraining, setSelectedTraining] = useState<TrainingOption | null>(null);

  const trainingOptions: TrainingOption[] = [
    {
      name: 'Entraînement HYROX 1',
      duration: 'env. 20 min.',
      rest: '1 min. 30 entre chaque tour',
      exercises: [
        {
          name: 'Course rapide',
          sets: 3,
          reps: 400,
          note: '400 mètres'
        },
        {
          name: 'Rameur',
          sets: 3,
          reps: 300,
          note: '300 mètres'
        },
        {
          name: 'Burpees',
          sets: 3,
          reps: 15
        },
        {
          name: 'Wall Balls',
          sets: 3,
          reps: 20
        }
      ]
    },
    {
      name: 'Entraînement HYROX 2',
      duration: 'env. 20 min.',
      rest: 'Pas de pause entre les tours',
      exercises: [
        {
          name: 'Tour 1',
          sets: 1,
          reps: 0,
          note: '200 m de course rapide, 10 burpees, 10 fentes'
        },
        {
          name: 'Tour 2',
          sets: 1,
          reps: 0,
          note: '300 m de course, 15 burpees, 15 fentes'
        },
        {
          name: 'Tour 3',
          sets: 1,
          reps: 0,
          note: '400 m de course, 20 burpees, 20 fentes'
        },
        {
          name: 'Tour 4',
          sets: 1,
          reps: 0,
          note: '500 m de course, 25 burpees, 25 fentes'
        }
      ]
    },
    {
      name: 'Entraînement HYROX 3',
      duration: 'env. 20 min.',
      rest: '1 min. entre les tours',
      exercises: [
        {
          name: 'Course rapide',
          sets: 4,
          reps: 300,
          note: '300 mètres'
        },
        {
          name: 'Burpees',
          sets: 4,
          reps: 15
        },
        {
          name: 'Farmers Carry',
          sets: 4,
          reps: 30,
          note: '30 mètres'
        },
        {
          name: 'Fentes',
          sets: 4,
          reps: 10
        },
        {
          name: 'Wall Balls unbroken',
          sets: 1,
          reps: 15,
          note: 'À effectuer à la fin de l\'entraînement'
        }
      ]
    },
    {
      name: 'Entraînement HYROX 4',
      duration: 'env. 20 min.',
      rest: '1 min. 30 entre chaque tour',
      exercises: [
        {
          name: 'Course rapide',
          sets: 3,
          reps: 300,
          note: '300 mètres'
        },
        {
          name: 'Ski Erg',
          sets: 3,
          reps: 200,
          note: '200 mètres'
        },
        {
          name: 'Squats sautés',
          sets: 3,
          reps: 10
        },
        {
          name: 'Burpees',
          sets: 3,
          reps: 10
        }
      ]
    }
  ];

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/training/phase1" />
          </IonButtons>
          <IonTitle>HYROX Spécifique - Phase 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {!selectedTraining ? (
          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <h2 className="section-title">Choisissez votre entraînement</h2>
              </IonCol>
            </IonRow>
            {trainingOptions.map((option, index) => (
              <IonRow key={index}>
                <IonCol size="12">
                  <IonCard className="training-card" onClick={() => setSelectedTraining(option)}>
                    <IonCardHeader>
                      <IonCardTitle>{option.name}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonBadge>
                        <IonIcon icon={timeOutline} />
                        {option.rest}
                      </IonBadge>
                      <IonBadge>
                        {option.exercises.length} exercices
                      </IonBadge>
                      {option.duration && (
                        <IonBadge color="tertiary">
                          {option.duration}
                        </IonBadge>
                      )}
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
        ) : (
          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <IonButton fill="clear" onClick={() => setSelectedTraining(null)}>
                  <IonIcon icon={arrowBackOutline} slot="start" />
                  Retour aux options
                </IonButton>
                <h2 className="section-title">{selectedTraining.name}</h2>
                <p className="rest-info">
                  <IonIcon icon={timeOutline} />
                  {selectedTraining.rest}
                </p>
                {selectedTraining.duration && (
                  <p className="duration-info">
                    Durée estimée : {selectedTraining.duration}
                  </p>
                )}
                <p className="rounds-info">
                  {selectedTraining.exercises[0].sets} tours
                </p>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
                <IonCard>
                  <IonCardContent>
                    <IonList>
                      {selectedTraining.exercises.map((exercise, index) => (
                        <IonItem key={index}>
                          <IonLabel>
                            <h3>{exercise.name}</h3>
                            {exercise.reps > 0 && (
                              <IonBadge color="primary">
                                {exercise.reps} {exercise.name.includes('mètres') ? 'm' : 'répétitions'}
                              </IonBadge>
                            )}
                            {exercise.reps === 0 && (
                              <IonBadge color="primary">
                                {exercise.note?.includes('minutes') ? exercise.note : 'Séries'}
                              </IonBadge>
                            )}
                            {exercise.note && !exercise.note.includes('minutes') && (
                              <p className="ion-text-wrap note">
                                <IonIcon icon={checkmarkCircleOutline} />
                                {exercise.note}
                              </p>
                            )}
                          </IonLabel>
                        </IonItem>
                      ))}
                    </IonList>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default HyroxSpecific; 