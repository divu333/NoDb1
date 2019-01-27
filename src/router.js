import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ViewRecipe from './components/ViewRecipe/ViewRecipe';
import DeleteRecipe from './components/DeleteRecipe';
import CreateRecipe from './components/CreateRecipe';
<<<<<<< HEAD
import UpdateRecipe from  './components/UpdateRecipe/UpdateRecipe';
=======
import UpdateRecipe from './components/Updaterecipe';
>>>>>>> 9e94f940372d4b7ba07bed39503f6ce11475f2ac

export default (
  <Switch>
    <Route path='/CreateRecipe' component={ CreateRecipe } />
<<<<<<< HEAD
    <Route path='/UpdateRecipe' component={ UpdateRecipe } />
=======
    <Route path='/updateRecipe' component={ UpdateRecipe } />
>>>>>>> 9e94f940372d4b7ba07bed39503f6ce11475f2ac
    <Route path='/ViewRecipe' component={ ViewRecipe } />
    <Route path='/DeleteRecipe' component={ DeleteRecipe } />
  </Switch>
)
