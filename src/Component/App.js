import React from 'react'
import { Route } from 'react-router-dom'
import login from './login'
import home from './home'
import Poll from './Poll'
import NewQuestion from './NewQuestion'
import Leader from './Leader'

function App() {
  return (
    <div>
    <Route exact path='/' component={login} />
    <Route exact path='/home' component={home} />
    <Route exact path='/newQustion' component={NewQuestion} />
    <Route exact path='/questions/:value' component={Poll}/>
    <Route exact path='/Leader' component={Leader}/>
</div>
  );
}

export default App;
