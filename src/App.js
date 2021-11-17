import './App.css';
import Welcome from './pages/Welcome';
import PlanLayout from './pages/Layouts/PlanLayout';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import AppLayout from './pages/Layouts/AppLayout';
import Home from './pages/Home';
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Activity from './pages/Activity';
import Upcoming from './pages/Upcoming';
//on home route, Welcome page is visible
//similarly, on route/invite, PhoneConfirmation page is visible

function App() {
  return (
    <BrowserRouter>
    <Route exact path={[
      '/',
      '/invite',
      '/get_username',
      '/code_confirm',
      '/allow_notification',
    ]}
    >

    <PlanLayout>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/invite" component={PhoneConfirmation} />
      <Route exact path="/code_confirm" component={CodeConfirm} />
      <Route exact path="/allow_notification" component={AllowNotification} />
    </Switch>
    </PlanLayout>
    </Route>
    <Route exact path={['/home', '/explore', '/profile', '/activity', '/upcoming']}>
      <AppLayout>
        <Switch>
          <Route exact path="/home" component={() => <Home />} />
          <Route exact path="/explore" component={() => <Explore />} />
          <Route exact path="/profile" component={() => <Profile />} />
          <Route exact path="/activity" component={() => <Activity />} />
          <Route exact path="/upcoming" component={() => <Upcoming />} />
        </Switch>
      </AppLayout>
    </Route>
    </BrowserRouter>
  );
}

export default App;
