import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import CreateMeetup from '../pages/Meetup/Create';
import EditMeetup from '../pages/Meetup/Edit';
import DetailsMeetup from '../pages/Meetup/Details';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/meetup" exact component={CreateMeetup} isPrivate />
      <Route path="/meetup/:id" exact component={DetailsMeetup} isPrivate />
      <Route path="/meetup/:id/edit" exact component={EditMeetup} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
