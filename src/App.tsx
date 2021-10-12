import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import UsersContextProvider from './context/UsersContextProvider';

import SideMenu from './components/SideMenu';

import CalonGebetan from './pages/CalonGebetan';
import TargetGebetan from './pages/TargetGebetan';
import Profile from './pages/Profile';

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
import './theme/custom.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <SideMenu />
      <UsersContextProvider>
        <IonRouterOutlet id="main">
          <Route exact path="/target-gebetan" component={TargetGebetan} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={CalonGebetan} />

          {/* <Redirect exact path="/" to="/calon-gebetan" /> */}
        </IonRouterOutlet>
      </UsersContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
