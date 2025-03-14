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
  reps: number | string;
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
      rest: '90 secondes entre chaque série',
      exercises: [
        {
          name: 'Squat à la barre',
          sets: 4,
          reps: 10
        },
        {
          name: 'Soulevé de terre classique',
          sets: 3,
          reps: 10,
          note: 'Sans pause, suivi immédiatement de 400 m de course en EF'
        },
        {
          name: 'Fente bulgare',
          sets: 4,
          reps: 10,
          note: 'par jambe'
        },
        {
          name: 'Presse à cuisses',
          sets: 4,
          reps: '8 lourdes + 12 légères',
          note: 'Bi-set : 8 répétitions lourdes suivies de 12 répétitions légères'
        },
        {
          name: 'Extension des mollets debout',
          sets: 4,
          reps: 15
        },
        {
          name: 'Course vitesse Hyrox',
          sets: 1,
          reps: 0,
          note: '10 minutes'
        }
      ]
    },
    {
      name: 'Entraînement bas du corps 2',
      rest: '90 secondes entre chaque série',
      exercises: [
        {
          name: 'Squat à la barre',
          sets: 4,
          reps: 10
        },
        {
          name: 'Soulevé de terre jambes tendues',
          sets: 3,
          reps: 15,
          note: 'Après chaque série, 500 m de course en EF sur tapis'
        },
        {
          name: 'Fentes marchées avec haltères',
          sets: 4,
          reps: 20
        },
        {
          name: 'Leg curl à la machine',
          sets: 4,
          reps: 10
        },
        {
          name: 'Extensions de jambes',
          sets: 4,
          reps: '8 lourdes + 12 légères',
          note: 'Bi-set : 8 répétitions lourdes suivies de 12 répétitions légères'
        }
      ]
    },
    {
      name: 'Entraînement bas du corps 3',
      rest: '90 secondes entre chaque série',
      exercises: [
        {
          name: 'Escaliers',
          sets: 1,
          reps: 0,
          note: '10 minutes'
        },
        {
          name: 'Fentes bulgares',
          sets: 4,
          reps: 12,
          note: 'par jambe'
        },
        {
          name: 'Squat sauté + chaise',
          sets: 3,
          reps: 15,
          note: '1 minute de chaise (chaise = la pause)'
        },
        {
          name: 'Soulevé de terre tendus',
          sets: 4,
          reps: 10
        },
        {
          name: 'Extension des mollets debout',
          sets: 3,
          reps: 15
        },
        {
          name: 'Presse à cuisse',
          sets: 1,
          reps: 50,
          note: 'Partez de votre poids le plus lourd, faites le maximum de répétitions que vous pouvez, baissez le poids, faites le maximum que vous pouvez, baissez le poids, et continuez jusqu\'à atteindre les 50 répétitions'
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
          <IonTitle>Bas du Corps - Phase 2</IonTitle>
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
                              {typeof exercise.reps === 'number' && exercise.reps > 0 && (
                                <IonBadge>
                                  {exercise.sets} x {exercise.reps} répétitions
                                </IonBadge>
                              )}
                              {typeof exercise.reps === 'string' && (
                                <IonBadge>
                                  {exercise.sets} x {exercise.reps}
                                </IonBadge>
                              )}
                              {typeof exercise.reps === 'number' && exercise.reps === 0 && (
                                <IonBadge>
                                  {exercise.sets} séries
                                </IonBadge>
                              )}
                            </div>
                            {exercise.note && exercise.reps !== 0 && (
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