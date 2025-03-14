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
  IonBadge
} from '@ionic/react';
import { barbellOutline, heartOutline, ribbonOutline, trophyOutline, timeOutline, speedometerOutline } from 'ionicons/icons';

const Understanding: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Comprendre HYROX</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard className="hero-card">
          <IonCardHeader className="ion-text-center">
            <IonCardTitle>Qu'est-ce que HYROX ?</IonCardTitle>
            <IonCardSubtitle>Une Course d'Endurance Fonctionnelle Unique</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p className="hero-text">
              HYROX est une course d'endurance fonctionnelle qui combine la course à pied avec
              des exercices fonctionnels. La course comprend 8 tours de course
              (1km chacun) suivis d'une station d'exercice fonctionnel. Ce format unique
              teste à la fois votre endurance et votre force fonctionnelle.
            </p>
            <div className="ion-text-center">
              <IonChip color="secondary">
                <IonIcon icon={timeOutline} />
                <IonLabel>60-90 minutes</IonLabel>
              </IonChip>
              <IonChip color="secondary">
                <IonIcon icon={speedometerOutline} />
                <IonLabel>8 km total</IonLabel>
              </IonChip>
            </div>
          </IonCardContent>
        </IonCard>

        <IonGrid className="ion-margin-top">
          <IonRow>
            <IonCol size="12">
              <h2 className="section-title">Composantes Clés</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" sizeMd="6">
              <IonCard className="feature-card">
                <IonCardContent>
                  <IonItem lines="none">
                    <IonIcon slot="start" icon={barbellOutline} className="feature-icon" />
                    <IonLabel>
                      <h3>Force Fonctionnelle</h3>
                      <p>
                        Développer la force dans des mouvements qui se transfèrent aux
                        activités de la vie quotidienne
                      </p>
                      <IonBadge color="secondary">8 stations</IonBadge>
                    </IonLabel>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" sizeMd="6">
              <IonCard className="feature-card">
                <IonCardContent>
                  <IonItem lines="none">
                    <IonIcon slot="start" icon={heartOutline} className="feature-icon" />
                    <IonLabel>
                      <h3>Endurance</h3>
                      <p>
                        Construire la condition physique cardiovasculaire à travers la course
                        et l'effort soutenu
                      </p>
                      <IonBadge color="secondary">8 km</IonBadge>
                    </IonLabel>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" sizeMd="6">
              <IonCard className="feature-card">
                <IonCardContent>
                  <IonItem lines="none">
                    <IonIcon slot="start" icon={ribbonOutline} className="feature-icon" />
                    <IonLabel>
                      <h3>Technique</h3>
                      <p>
                        Maîtriser la bonne forme pour des mouvements efficaces et sûrs
                      </p>
                      <IonBadge color="secondary">Optimisation</IonBadge>
                    </IonLabel>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" sizeMd="6">
              <IonCard className="feature-card">
                <IonCardContent>
                  <IonItem lines="none">
                    <IonIcon slot="start" icon={trophyOutline} className="feature-icon" />
                    <IonLabel>
                      <h3>Force Mentale</h3>
                      <p>
                        Développer la résilience et la force mentale pour surmonter
                        les défis
                      </p>
                      <IonBadge color="secondary">Mental</IonBadge>
                    </IonLabel>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Understanding; 