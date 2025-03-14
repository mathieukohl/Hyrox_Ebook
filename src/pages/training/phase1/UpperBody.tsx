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
}

const UpperBody: React.FC = () => {
  const history = useHistory();
  const [selectedTraining, setSelectedTraining] = useState<TrainingOption | null>(null);

  const trainingOptions: TrainingOption[] = [
    {
      name: 'Entraînement haut du corps 1',
      rest: '90 secondes entre chaque série',
      exercises: [
        {
          name: 'Développé couché à la barre',
          sets: 3,
          reps: 15
        },
        {
          name: 'Développé incliné aux haltères',
          sets: 3,
          reps: 12
        },
        {
          name: 'Écarté à la machine',
          sets: 3,
          reps: 12
        },
        {
          name: 'Rowing horizontal à la machine',
          sets: 3,
          reps: 15
        },
        {
          name: 'Tirage vertical à la poulie haute',
          sets: 3,
          reps: 12
        }
      ]
    },
    {
      name: 'Entraînement haut du corps 2',
      rest: '90 secondes entre chaque série',
      exercises: [
        {
          name: 'Presse à pectoraux (Chest Press Machine)',
          sets: 4,
          reps: 12
        },
        {
          name: 'Développé décliné aux haltères',
          sets: 3,
          reps: 12
        },
        {
          name: 'Cable Crossover',
          sets: 4,
          reps: 12
        },
        {
          name: 'Tirage horizontal à la poulie',
          sets: 3,
          reps: 15
        },
        {
          name: 'Tirage vertical',
          sets: 3,
          reps: 15
        }
      ]
    },
    {
      name: 'Entraînement haut du corps 3',
      rest: '90 secondes entre chaque série',
      exercises: [
        {
          name: 'Développé couché à la barre',
          sets: 3,
          reps: 15
        },
        {
          name: 'Développé militaire au haltères',
          sets: 4,
          reps: 12
        },
        {
          name: 'Écarté à la machine',
          sets: 3,
          reps: 12
        },
        {
          name: 'Rowing à la barre',
          sets: 4,
          reps: 12
        },
        {
          name: 'Tractions',
          sets: 3,
          reps: 12,
          note: 'Si vous êtes débutant, utilisez la machine à tractions assistées pour progresser en force et en technique.'
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
          <IonTitle>Haut du corps - Phase 1</IonTitle>
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
                                {exercise.sets} x {exercise.reps} répétitions
                              </IonBadge>
                            )}
                            {exercise.reps === 0 && (
                              <IonBadge color="primary">
                                {exercise.sets} séries
                              </IonBadge>
                            )}
                            {exercise.note && (
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

export default UpperBody; 