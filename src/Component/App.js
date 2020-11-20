import React from 'react'
import { Route,Switch } from 'react-router-dom'
import login from './login'
import home from './home'
import Poll from './Poll'
import NewQuestion from './NewQuestion'
import Leader from './Leader'
import Error404 from './Error404'
function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={login} />
      <Route exact path='/home' component={home} />
      <Route exact path='/add' component={NewQuestion} />
      <Route exact path='/questions/:value' component={Poll}/>
      <Route exact path='/Leader' component={Leader}/>
      <Route component={Error404}/>
    </Switch>
</div>
  );
}

export default App;
