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
          sets: 4,
          reps: 10,
          note: 'Augmentez légèrement la charge par rapport à la phase 1.'
        },
        {
          name: 'Développé incliné à la barre',
          sets: 4,
          reps: 10,
          note: 'après chaque série, enchaînez immédiatement avec 500 m de course en EF sur tapis pour simuler la transition d\'effort.'
        },
        {
          name: 'Tirage dos vertical',
          sets: 4,
          reps: 10
        },
        {
          name: 'Tirage dos horizontal à la machine',
          sets: 4,
          reps: 10
        },
        {
          name: 'Wall Ball unbroken (= sans interruption)',
          sets: 2,
          reps: 0,
          note: 'Effectuez le maximum de répétitions sans interruption pour travailler la résistance musculaire du haut du corps.'
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
          reps: 10,
          note: 'Augmentez légèrement la charge par rapport à la phase 1.'
        },
        {
          name: 'Développé décliné aux haltères',
          sets: 4,
          reps: 10
        },
        {
          name: 'Cable Crossover',
          sets: 4,
          reps: 12,
          note: 'Sans pause, enchaînez avec 200 m de ski erg pour accentuer la transition vers l\'effort cardio.'
        },
        {
          name: 'Elévation latérale + Elévation frontale (Bi-set)',
          sets: 4,
          reps: 20,
          note: '10 répétitions + 10 répétitions'
        },
        {
          name: 'Tirage vertical',
          sets: 4,
          reps: 20,
          note: '8 répétitions lourdes + 12 répétitions légères'
        }
      ]
    },
    {
      name: 'Entraînement haut du corps 3',
      rest: '90 secondes entre chaque série',
      exercises: [
        {
          name: 'Développé couché à la barre',
          sets: 4,
          reps: 10
        },
        {
          name: 'Tractions (assistées ou classiques)',
          sets: 4,
          reps: 10,
          note: 'Entre les séries, intégrez 200 m de rameur pour maintenir un rythme élevé.'
        },
        {
          name: 'Développé militaire',
          sets: 4,
          reps: 10
        },
        {
          name: 'Rowing à la poulie',
          sets: 4,
          reps: 10
        },
        {
          name: 'Tirage horizontal à la poulie + Rowing à la barre (Bi-set)',
          sets: 4,
          reps: 22,
          note: '12 répétitions + 10 répétitions'
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
          <IonTitle>Haut du corps - Phase 2</IonTitle>
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
                      <IonBadge >
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
                              <IonBadge >
                                {exercise.sets} x {exercise.reps} répétitions
                              </IonBadge>
                            )}
                            {exercise.reps === 0 && (
                              <IonBadge >
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