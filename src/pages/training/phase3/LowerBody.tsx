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
      rest: '2 min. entre chaque série',
      exercises: [
        {
          name: 'Squat à la barre',
          sets: 4,
          reps: '12-10-8-6',
          note: 'Pyramide : 12, 10, 8, 6 répétitions'
        },
        {
          name: 'Soulevé de terre classique',
          sets: 4,
          reps: 10,
          note: 'Charges lourdes. Sans pause, immédiatement 400 m de course rapide pour travailler la résistance musculaire sous fatigue'
        },
        {
          name: 'Fente bulgare',
          sets: 4,
          reps: '12-10-8-6',
          note: 'Pyramide : 12, 10, 8, 6 répétitions par jambe'
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
          reps: 20
        }
      ]
    },
    {
      name: 'Entraînement bas du corps 2',
      rest: '2 min. entre chaque série',
      exercises: [
        {
          name: 'Squat à la barre',
          sets: 4,
          reps: 10,
          note: 'Charges lourdes'
        },
        {
          name: 'Soulevé de terre jambes tendues',
          sets: 4,
          reps: 10,
          note: 'Charges lourdes. Sans pause, puis 400 m de course rapide pour solliciter la chaîne postérieure sur la durée'
        },
        {
          name: 'Fentes marchées avec haltères',
          sets: 4,
          reps: 20,
          note: 'Entre les séries, intégrer 200 m de ski erg pour accentuer l\'effort cardio et musculaire'
        },
        {
          name: 'Extension des mollets à la presse',
          sets: 4,
          reps: 20,
          note: 'Sans pause, avec 300 m de course vitesse Hyrox sur tapis pour induire une forte fatigue au niveau des mollets'
        }
      ]
    },
    {
      name: 'Entraînement bas du corps 3',
      rest: '2 min. entre chaque série',
      exercises: [
        {
          name: 'Soulevé de terre classique',
          sets: 4,
          reps: '12-10-8-6',
          note: 'Pyramide : 12, 10, 8, 6 répétitions'
        },
        {
          name: 'Fentes bulgares sautées',
          sets: 3,
          reps: 15,
          note: 'Poids de corps, par jambe'
        },
        {
          name: 'Hip trust',
          sets: 4,
          reps: '12-10-8-6',
          note: 'Pyramide : 12, 10, 8, 6 répétitions (pont fessiers)'
        },
        {
          name: 'Presse à cuisses',
          sets: 1,
          reps: 100,
          note: 'Partez de votre poids le plus lourd, faites le maximum de répétitions que vous pouvez, baissez le poids, faites le maximum que vous pouvez, baissez le poids, et continuez jusqu\'à atteindre les 100 répétitions'
        },
        {
          name: 'Extension des mollets debout',
          sets: 3,
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
            <IonBackButton defaultHref="/training/phase3" />
          </IonButtons>
          <IonTitle>Bas du Corps - Phase 3</IonTitle>
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
                            {typeof exercise.reps === 'number' && exercise.reps > 0 && (
                              <IonBadge color="primary">
                                {exercise.sets} x {exercise.reps} répétitions
                              </IonBadge>
                            )}
                            {typeof exercise.reps === 'string' && (
                              <IonBadge color="primary">
                                {exercise.sets} x {exercise.reps}
                              </IonBadge>
                            )}
                            {exercise.reps === 0 && (
                              <IonBadge color="primary">
                                {exercise.note}
                              </IonBadge>
                            )}
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