import React from 'react';

import IdeaInput from '../containers/idea_input';
import IdeaList from '../containers/idea_list';

const App = () => (
  <div>
    <h1> Stormbrain </h1>
    <IdeaInput />
    <IdeaList />
  </div>
);

export default App;
