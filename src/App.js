import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

import Home from './components/Homes/Home/Home';
import Intro from './components/Intro/Intro';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route exact path="/">
         <Intro></Intro>
       </Route>
       <Route path="/intro">
         <Intro></Intro>
       </Route>
      <Route  path="/home">
        <Home></Home>
      </Route>
     
      
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
