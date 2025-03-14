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
}

const UpperBody: React.FC = () => {
  const history = useHistory();
  const [selectedTraining, setSelectedTraining] = useState<TrainingOption | null>(null);

  const trainingOptions: TrainingOption[] = [
    {
      name: 'Entraînement haut du corps 1',
      rest: '1 min. 30 à 2 min. entre chaque série',
      exercises: [
        {
          name: 'Développé couché à la barre',
          sets: 4,
          reps: '12-10-8-6',
          note: 'Série pyramidale : 1e série : 12 répétitions - 2e série : 10 - 3e série : 8 - 4e série : 6'
        },
        {
          name: 'Développé incliné à la barre',
          sets: 4,
          reps: 10,
          note: 'Charges lourdes. Après chaque série, enchaîner avec 500 m de course rapide sur tapis pour simuler la transition d\'effort.'
        },
        {
          name: 'Tirage dos vertical (Lat Pulldown)',
          sets: 4,
          reps: 10,
          note: 'Charges lourdes'
        },
        {
          name: 'Tirage dos horizontal à la machine',
          sets: 4,
          reps: 10,
          note: 'Sans pause, suivi de 200 m de ski erg pour maintenir un rythme cardio élevé.'
        },
        {
          name: 'Wall Ball unbroken',
          sets: 4,
          reps: 0,
          note: 'Effectuez le maximum de répétitions sans interruption pour travailler la résistance musculaire du haut du corps.'
        }
      ]
    },
    {
      name: 'Entraînement haut du corps 2',
      rest: '1 min. 30 à 2 min. entre chaque série',
      exercises: [
        {
          name: 'Développé couché à la barre',
          sets: 4,
          reps: '12-10-8-6',
          note: 'Série pyramidale : 1e série : 12 répétitions - 2e série : 10 - 3e série : 8 - 4e série : 6'
        },
        {
          name: 'Développé incliné aux haltères',
          sets: 4,
          reps: 10,
          note: 'Après chaque série, enchaîner avec 500 m de course rapide sur tapis pour simuler la transition d\'effort.'
        },
        {
          name: 'Tirage dos vertical (Lat Pulldown)',
          sets: 4,
          reps: 10,
          note: 'Charges lourdes'
        },
        {
          name: 'Tirage dos horizontal à la machine',
          sets: 4,
          reps: 10,
          note: 'Entre les séries, récupérer activement avec 200 m de rameur.'
        },
        {
          name: 'Battle Ropes (corde ondulatoire)',
          sets: 4,
          reps: 0,
          note: '45 secondes par série'
        }
      ]
    },
    {
      name: 'Entraînement haut du corps 3',
      rest: '1 min. 30 à 2 min. entre chaque série',
      exercises: [
        {
          name: 'Développé couché à la barre',
          sets: 4,
          reps: 10,
          note: 'Charges lourdes. Après chaque série, effectuer 200 m de course rapide sur tapis.'
        },
        {
          name: 'Développé incliné à la machine',
          sets: 4,
          reps: 10,
          note: 'Sans pause, immédiatement suivi de 200 m de ski erg pour maintenir une intensité élevée.'
        },
        {
          name: 'Tractions (assistées ou classiques)',
          sets: 4,
          reps: '8-10',
          note: 'Entre les séries, récupérer activement avec 200 m de rameur.'
        },
        {
          name: 'Rowing à la barre',
          sets: 4,
          reps: 10,
          note: 'Charges lourdes. Sans pause, suivi de 300 m de course rapide pour continuer l\'effort cardio.'
        },
        {
          name: 'Wall Ball unbroken',
          sets: 4,
          reps: 0,
          note: 'Effectuez le maximum de répétitions sans interruption pour travailler la résistance musculaire du haut du corps.'
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
          <IonTitle>Haut du corps - Phase 3</IonTitle>
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
                                {exercise.sets} séries de {exercise.reps} répétitions
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