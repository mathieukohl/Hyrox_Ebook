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
      rest: '1 min. 30 entre les tours',
      exercises: [
        {
          name: 'Course rapide',
          sets: 4,
          reps: 1000,
          note: '1000 mètres (vitesse Hyrox)'
        },
        {
          name: 'Wall Balls',
          sets: 4,
          reps: 20
        },
        {
          name: 'Sled Push',
          sets: 4,
          reps: 50,
          note: '50 mètres'
        },
        {
          name: 'Fentes avec poids',
          sets: 4,
          reps: 20,
          note: '20 kg'
        }
      ]
    },
    {
      name: 'Entraînement HYROX 2',
      duration: 'env. 30 min.',
      rest: 'Sans pause',
      exercises: [
        {
          name: 'Course rapide',
          sets: 1,
          reps: 0,
          note: '2 minutes'
        },
        {
          name: 'Ski Erg',
          sets: 1,
          reps: 500,
          note: '500 mètres'
        },
        {
          name: 'Course rapide',
          sets: 1,
          reps: 0,
          note: '2 minutes'
        },
        {
          name: 'Rameur',
          sets: 1,
          reps: 500,
          note: '500 mètres'
        },
        {
          name: 'Course rapide',
          sets: 1,
          reps: 0,
          note: '2 minutes'
        },
        {
          name: 'Burpees',
          sets: 1,
          reps: 0,
          note: '2 minutes'
        }
      ]
    },
    {
      name: 'Entraînement HYROX 2 - Partie 2',
      duration: 'env. 30 min.',
      rest: '1 min. entre les tours',
      exercises: [
        {
          name: 'Chaise contre un mur',
          sets: 3,
          reps: 0,
          note: '45 secondes'
        },
        {
          name: 'Fentes',
          sets: 3,
          reps: 0,
          note: '45 secondes'
        },
        {
          name: 'Squats',
          sets: 3,
          reps: 0,
          note: '45 secondes'
        },
        {
          name: 'Course rapide',
          sets: 3,
          reps: 0,
          note: '45 secondes'
        }
      ]
    },
    {
      name: 'Entraînement HYROX 3',
      duration: 'env. 35 min.',
      rest: '1 min. 30 entre les tours',
      exercises: [
        {
          name: 'Course rapide',
          sets: 3,
          reps: 800,
          note: '800 mètres'
        },
        {
          name: 'Burpees',
          sets: 3,
          reps: 25
        },
        {
          name: 'Sled Pull',
          sets: 3,
          reps: 50,
          note: '50 mètres'
        },
        {
          name: 'Farmers Carry',
          sets: 3,
          reps: 100,
          note: '100 mètres'
        },
        {
          name: 'Fentes',
          sets: 3,
          reps: 20
        },
        {
          name: 'Wall Balls unbroken',
          sets: 1,
          reps: 50,
          note: 'À effectuer à la fin de l\'entraînement'
        }
      ]
    },
    {
      name: 'Entraînement HYROX 4',
      duration: 'env. 45 min.',
      rest: '1 min. 30 entre les tours',
      exercises: [
        {
          name: 'Course rapide',
          sets: 3,
          reps: 500,
          note: '500 mètres'
        },
        {
          name: 'Ski Erg',
          sets: 3,
          reps: 400,
          note: '400 mètres'
        },
        {
          name: 'Burpees',
          sets: 3,
          reps: 20
        },
        {
          name: 'Rameur',
          sets: 3,
          reps: 400,
          note: '400 mètres'
        }
      ]
    },
    {
      name: 'Entraînement HYROX 4 - Partie 2',
      duration: 'env. 45 min.',
      rest: '1 min. entre les tours',
      exercises: [
        {
          name: 'Fentes',
          sets: 3,
          reps: 0,
          note: '1 minute'
        },
        {
          name: 'Chaise contre un mur',
          sets: 3,
          reps: 0,
          note: '1 minute'
        },
        {
          name: 'Course rapide',
          sets: 3,
          reps: 0,
          note: '1 minute'
        },
        {
          name: 'Wall Balls unbroken',
          sets: 1,
          reps: 50,
          note: 'À effectuer à la fin de l\'entraînement'
        }
      ]
    },
    {
      name: 'Entraînement HYROX 5',
      duration: 'env. 45 min.',
      rest: 'Pas de pause entre les tours',
      exercises: [
        {
          name: 'Tour 1',
          sets: 1,
          reps: 0,
          note: '400 m de course'
        },
        {
          name: 'Tour 2',
          sets: 1,
          reps: 0,
          note: '20 burpees'
        },
        {
          name: 'Tour 3',
          sets: 1,
          reps: 0,
          note: '600 m de course'
        },
        {
          name: 'Tour 4',
          sets: 1,
          reps: 0,
          note: '40 Wall Balls'
        },
        {
          name: 'Tour 5',
          sets: 1,
          reps: 0,
          note: '800 m de course'
        },
        {
          name: 'Tour 6',
          sets: 1,
          reps: 0,
          note: '60 fentes'
        },
        {
          name: 'Tour 7',
          sets: 1,
          reps: 0,
          note: '1000 m de course'
        },
        {
          name: 'Tour 8',
          sets: 1,
          reps: 0,
          note: '60 fentes'
        },
        {
          name: 'Tour 9',
          sets: 1,
          reps: 0,
          note: '800 m de course'
        },
        {
          name: 'Tour 10',
          sets: 1,
          reps: 0,
          note: '40 Wall Balls'
        },
        {
          name: 'Tour 11',
          sets: 1,
          reps: 0,
          note: '600 m de course'
        },
        {
          name: 'Tour 12',
          sets: 1,
          reps: 0,
          note: '20 burpees'
        },
        {
          name: 'Tour 13',
          sets: 1,
          reps: 0,
          note: '400 m de course'
        }
      ]
    }
  ];

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/training/phase3" />
          </IonButtons>
          <IonTitle>HYROX Spécifique - Phase 3</IonTitle>
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
                      <IonBadge color="secondary">
                        <IonIcon icon={timeOutline} />
                        {option.rest}
                      </IonBadge>
                      <IonBadge color="primary">
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
                                {exercise.note?.includes('minutes') || exercise.note?.includes('secondes') ? exercise.note : 'Séries'}
                              </IonBadge>
                            )}
                            {exercise.note && !exercise.note.includes('minutes') && !exercise.note.includes('secondes') && (
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