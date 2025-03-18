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
import { arrowBackOutline, checkmarkCircleOutline, timeOutline, barbellOutline } from 'ionicons/icons';
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

const LowerBody: React.FC = () => {
  const history = useHistory();
  const [selectedTraining, setSelectedTraining] = useState<TrainingOption | null>(null);

  const trainingOptions: TrainingOption[] = [
    {
      name: 'Entraînement bas du corps 1',
      rest: '90 secondes de pause entre chaque série',
      exercises: [
        {
          name: 'Squat à la barre',
          sets: 3,
          reps: 12
        },
        {
          name: 'Soulevé de terre classique',
          sets: 3,
          reps: 12
        },
        {
          name: 'Presse à cuisses',
          sets: 3,
          reps: 15
        },
        {
          name: 'Fentes statiques',
          sets: 3,
          reps: 12,
          note: 'par jambe'
        },
        {
          name: 'Mollets debout',
          sets: 3,
          reps: 15,
          note: 'à la machine ou sur une marche - avec ou sans poids'
        }
      ]
    },
    {
      name: 'Entraînement bas du corps 2',
      rest: '90 secondes de pause entre chaque série',
      exercises: [
        {
          name: 'Squat à la barre',
          sets: 3,
          reps: 12
        },
        {
          name: 'Soulevé de terre jambes tendues',
          sets: 3,
          reps: 12
        },
        {
          name: 'Fentes bulgares',
          sets: 3,
          reps: 12,
          note: 'par jambe'
        },
        {
          name: 'Leg curl à la machine',
          sets: 3,
          reps: 12
        },
        {
          name: 'Extensions de jambes',
          sets: 3,
          reps: 15,
          note: 'machine'
        }
      ]
    },
    {
      name: 'Entraînement bas du corps 3',
      rest: '90 secondes de pause entre chaque série',
      exercises: [
        {
          name: 'Squat à la barre',
          sets: 3,
          reps: 12
        },
        {
          name: 'Soulevé de terre classique',
          sets: 3,
          reps: 12
        },
        {
          name: 'Hip Thrusts (pont fessier)',
          sets: 3,
          reps: 15,
        },
        {
          name: 'Fentes marchées',
          sets: 3,
          reps: 20
        },
        {
          name: 'Mollets à la presse ou debout',
          sets: 3,
          reps: 15,
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
          <IonTitle>Bas du Corps - Phase 1</IonTitle>
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
                      <IonIcon icon={barbellOutline} />
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
                            <div className="exercise-details">
                              {exercise.reps > 0 && (
                                <IonBadge>
                                  {exercise.sets} x {exercise.reps} répétitions
                                </IonBadge>
                              )}
                              {exercise.reps === 0 && (
                                <IonBadge>
                                  {exercise.sets} séries
                                </IonBadge>
                              )}
                            </div>
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

export default LowerBody; 