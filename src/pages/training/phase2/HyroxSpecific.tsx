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
      duration: 'env. 30 min.',
      rest: '1 min. entre les tours',
      exercises: [
        {
          name: 'Course rapide',
          sets: 4,
          reps: 400,
          note: '400 mètres'
        },
        {
          name: 'Wall Balls',
          sets: 4,
          reps: 25
        },
        {
          name: 'Rameur',
          sets: 4,
          reps: 400,
          note: '400 mètres'
        },
        {
          name: 'Farmers Carry',
          sets: 4,
          reps: 50,
          note: '50 mètres'
        }
      ]
    },
    {
      name: 'Entraînement HYROX 2',
      duration: 'env. 30 min.',
      rest: '1 min. 30 entre les tours',
      exercises: [
        {
          name: 'Course à haute intensité',
          sets: 4,
          reps: 0,
          note: '2 minutes'
        },
        {
          name: 'Fentes avec poids',
          sets: 4,
          reps: 0,
          note: '2 minutes (en alternant)'
        },
        {
          name: 'Burpees',
          sets: 4,
          reps: 0,
          note: '2 minutes'
        }
      ]
    },
    {
      name: 'Entraînement HYROX 3',
      duration: 'env. 20 min.',
      rest: 'Pas de pause entre les tours',
      exercises: [
        {
          name: 'Tour 1',
          sets: 1,
          reps: 0,
          note: '500 m de course'
        },
        {
          name: 'Tour 2',
          sets: 1,
          reps: 0,
          note: '200 m de ski erg'
        },
        {
          name: 'Tour 3',
          sets: 1,
          reps: 0,
          note: '15 burpees'
        },
        {
          name: 'Tour 4',
          sets: 1,
          reps: 0,
          note: '200 m de ski erg'
        },
        {
          name: 'Tour 5',
          sets: 1,
          reps: 0,
          note: '500 m de course'
        },
        {
          name: 'Wall Balls unbroken',
          sets: 1,
          reps: 30,
          note: 'À effectuer à la fin de l\'entraînement'
        }
      ]
    },
    {
      name: 'Entraînement HYROX 4',
      duration: 'env. 25 min.',
      rest: '1 min. 30 entre les tours',
      exercises: [
        {
          name: 'Course rapide',
          sets: 4,
          reps: 500,
          note: '500 mètres'
        },
        {
          name: 'Sled Push',
          sets: 4,
          reps: 20,
          note: '20 mètres'
        },
        {
          name: 'Fentes avec poids',
          sets: 4,
          reps: 20
        },
        {
          name: 'Sled Pull',
          sets: 4,
          reps: 20,
          note: '20 mètres'
        }
      ]
    },
    {
      name: 'Entraînement HYROX 5',
      duration: 'env. 30 min.',
      rest: '2 min. entre les tours',
      exercises: [
        {
          name: 'Course rapide',
          sets: 2,
          reps: 600,
          note: '600 mètres'
        },
        {
          name: 'Ski Erg',
          sets: 2,
          reps: 300,
          note: '300 mètres'
        },
        {
          name: 'Sled Push',
          sets: 2,
          reps: 15,
          note: '15 mètres'
        },
        {
          name: 'Sled Pull',
          sets: 2,
          reps: 15,
          note: '15 mètres'
        },
        {
          name: 'Burpees',
          sets: 2,
          reps: 15
        },
        {
          name: 'Rameur',
          sets: 2,
          reps: 300,
          note: '300 mètres'
        },
        {
          name: 'Farmers Carry',
          sets: 2,
          reps: 50,
          note: '50 mètres'
        },
        {
          name: 'Fentes marchées avec poids',
          sets: 2,
          reps: 20
        },
        {
          name: 'Wall Balls',
          sets: 2,
          reps: 20
        }
      ]
    }
  ];

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/training/phase2" />
          </IonButtons>
          <IonTitle>HYROX Spécifique - Phase 2</IonTitle>
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
                      <IonBadge >
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