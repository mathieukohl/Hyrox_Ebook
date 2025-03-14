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
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonChip,
  IonBadge,
  IonCheckbox
} from '@ionic/react';
import { listOutline, trophyOutline, timeOutline, heartOutline, nutritionOutline, waterOutline } from 'ionicons/icons';

const Competition: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Préparation Course</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard className="hero-card">
          <IonCardHeader className="ion-text-center">
            <IonCardTitle>Jour de Course</IonCardTitle>
            <IonCardSubtitle>Votre Guide de Préparation</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p className="hero-text">
              Le jour de la course est le moment de donner le meilleur de vous-même.
              Suivez ce guide pour vous assurer d'être parfaitement préparé.
            </p>
            <div className="ion-text-center">
              <IonChip color="secondary">
                <IonIcon icon={timeOutline} />
                <IonLabel>Arrivez 2h avant</IonLabel>
              </IonChip>
              <IonChip color="secondary">
                <IonIcon icon={trophyOutline} />
                <IonLabel>Objectif atteignable</IonLabel>
              </IonChip>
            </div>
          </IonCardContent>
        </IonCard>

        <IonGrid className="ion-margin-top">
          <IonRow>
            <IonCol size="12">
              <h2 className="section-title">Liste de Vérification</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" sizeMd="6" className={"ion-margin-bottom"}>
              <IonCard className="checklist-card">
                <IonCardHeader>
                  <IonCardTitle>Équipement</IonCardTitle>
                  <IonCardSubtitle>À apporter</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonList>
                    <IonItem>
                      <IonCheckbox aria-label="Tenue de course">
                        <IonLabel>
                          <h3>Tenue de course</h3>
                          <p>Short, t-shirt, chaussettes</p>
                        </IonLabel>
                      </IonCheckbox>
                    </IonItem>
                    <IonItem>
                      <IonCheckbox aria-label="Chaussures">
                        <IonLabel>
                          <h3>Chaussures</h3>
                          <p>Running et cross-training</p>
                        </IonLabel>
                      </IonCheckbox>
                    </IonItem>
                  </IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" sizeMd="6" className={"ion-margin-bottom"}>
              <IonCard className="checklist-card">
                <IonCardHeader>
                  <IonCardTitle>Nutrition</IonCardTitle>
                  <IonCardSubtitle>À prévoir</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonList>
                    <IonItem>
                      <IonCheckbox aria-label="Petit-déjeuner">
                        <IonLabel>
                          <h3>Petit-déjeuner</h3>
                          <p>2-3h avant la course</p>
                        </IonLabel>
                      </IonCheckbox>
                    </IonItem>
                    <IonItem>
                      <IonCheckbox aria-label="Collation">
                        <IonLabel>
                          <h3>Collation</h3>
                          <p>1h avant la course</p>
                        </IonLabel>
                      </IonCheckbox>
                    </IonItem>
                    <IonItem>
                      <IonCheckbox aria-label="Boissons">
                        <IonLabel>
                          <h3>Boissons</h3>
                          <p>Eau et boisson énergétique</p>
                        </IonLabel>
                      </IonCheckbox>
                    </IonItem>
                    <IonItem>
                      <IonCheckbox aria-label="Gels énergétiques">
                        <IonLabel>
                          <h3>Gels énergétiques</h3>
                          <p>Pour pendant la course</p>
                        </IonLabel>
                      </IonCheckbox>
                    </IonItem>
                  </IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonCard className="ion-margin-top">
          <IonCardHeader>
            <IonCardTitle>Stratégie de Course</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonIcon slot="start" icon={timeOutline} />
                <IonLabel>
                  <h3>Pace de Course</h3>
                  <p>Maintenez un rythme régulier</p>
                  <IonBadge color="secondary">Rythme constant</IonBadge>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon slot="start" icon={heartOutline} />
                <IonLabel>
                  <h3>Gestion de l'Effort</h3>
                  <p>Répartissez votre énergie</p>
                  <IonBadge color="secondary">80% effort</IonBadge>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon slot="start" icon={nutritionOutline} />
                <IonLabel>
                  <h3>Nutrition</h3>
                  <p>Hydratation régulière</p>
                  <IonBadge color="secondary">Toutes les 20min</IonBadge>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon slot="start" icon={trophyOutline} />
                <IonLabel>
                  <h3>Objectifs</h3>
                  <p>Fixez des repères</p>
                  <IonBadge color="secondary">Par section</IonBadge>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Competition; 