import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPagePage/LoginPage';
import InProgress from 'pages/InProgressPage/InProgessPage';
import PrivateRoute from 'navigation/PrivateRoutes/PrivateRoute';
import NavMenu from 'components/NavMenu/NavMenu';
import NotFound from 'pages/NotFoundPage/NotFound';
import UserSettings from 'pages/UserSettingsPage/UserSettings';
import WeatherPage from 'pages/WeatherPage/WeatherPage';

const Routing : React.FC = () => {
    return <Router>
      <NavMenu />
    <Switch>
      <PrivateRoute exact path="/" component={HomePage} />
      <PrivateRoute exact path="/login" component={LoginPage} redirectPath="/"/> 
      <PrivateRoute exact path="/inprogress" component={InProgress} />
      <PrivateRoute exact path="/usersettings" component={UserSettings} />
      <PrivateRoute exact path="/weather" component={WeatherPage} />
      <Route path="*"><NotFound /></Route>
    </Switch>
  </Router>
}  

export default Routing;