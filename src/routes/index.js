import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import EditMeetup from '../pages/Meetup/EditMeetup';
import DetailMeetup from '../pages/Meetup/DetailMeetup';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/meetup/detail/:id" component={DetailMeetup} isPrivate />
      <Route path="/meetup/:id" component={EditMeetup} isPrivate />
      <Route path="/meetup" component={EditMeetup} isPrivate />
    </Switch>
  );
}
