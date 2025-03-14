import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendarOutline, trophyOutline, fitnessOutline } from 'ionicons/icons';
import Introduction from './pages/Introduction';
import Understanding from './pages/Understanding';
import TrainingProgram from './pages/TrainingProgram';
import Competition from './pages/Competition';
import Phase1 from './pages/training/Phase1';
import Phase2 from './pages/training/Phase2';
import Phase3 from './pages/training/Phase3';
import UpperBodyPhase1 from './pages/training/phase1/UpperBody';
import LowerBodyPhase1 from './pages/training/phase1/LowerBody';
import HyroxSpecificPhase1 from './pages/training/phase1/HyroxSpecific';
import UpperBodyPhase2 from './pages/training/phase2/UpperBody';
import LowerBodyPhase2 from './pages/training/phase2/LowerBody';
import HyroxSpecificPhase2 from './pages/training/phase2/HyroxSpecific';
import UpperBodyPhase3 from './pages/training/phase3/UpperBody';
import LowerBodyPhase3 from './pages/training/phase3/LowerBody';
import HyroxSpecificPhase3 from './pages/training/phase3/HyroxSpecific';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/introduction" component={Introduction} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/training" component={TrainingProgram} />
          <Route exact path="/training/phase1" component={Phase1} />
          <Route exact path="/training/phase1/upper-body" component={UpperBodyPhase1} />
          <Route exact path="/training/phase1/lower-body" component={LowerBodyPhase1} />
          <Route exact path="/training/phase1/hyrox-specific" component={HyroxSpecificPhase1} />
          <Route exact path="/training/phase2" component={Phase2} />
          <Route exact path="/training/phase2/upper-body" component={UpperBodyPhase2} />
          <Route exact path="/training/phase2/lower-body" component={LowerBodyPhase2} />
          <Route exact path="/training/phase2/hyrox-specific" component={HyroxSpecificPhase2} />
          <Route exact path="/training/phase3" component={Phase3} />
          <Route exact path="/training/phase3/upper-body" component={UpperBodyPhase3} />
          <Route exact path="/training/phase3/lower-body" component={LowerBodyPhase3} />
          <Route exact path="/training/phase3/hyrox-specific" component={HyroxSpecificPhase3} />
          <Route exact path="/competition" component={Competition} />
          <Route exact path="/">
            <Redirect to="/introduction" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="introduction" href="/introduction">
            <IonIcon icon={calendarOutline} />
            <IonLabel>Introduction</IonLabel>
          </IonTabButton>
          <IonTabButton tab="understanding" href="/understanding">
            <IonIcon icon={fitnessOutline} />
            <IonLabel>Comprendre</IonLabel>
          </IonTabButton>
          <IonTabButton tab="training" href="/training">
            <IonIcon icon={fitnessOutline} />
            <IonLabel>Entraînement</IonLabel>
          </IonTabButton>
          <IonTabButton tab="competition" href="/competition">
            <IonIcon icon={trophyOutline} />
            <IonLabel>Course</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App; 