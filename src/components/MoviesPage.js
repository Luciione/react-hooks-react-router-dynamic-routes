import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import MoviesList from './MoviesList';
import MovieShow from './MovieShow';

function MoviesPage() {
  const match = useRouteMatch();

  return (
    <div>
      <MoviesList />
      <Switch>
        <Route exact path={`${match.path}/:movieId`}>
          <MovieShow />
        </Route>
        <Route path={match.path}>
          <h3>Choose a movie from the list above</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default MoviesPage;
