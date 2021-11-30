import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

import Home from './components/Homes/Home/Home';
import Intro from './components/Intro/Intro';
import Detail from './components/Detail/Detail';

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
      <Route path="/detail/:code">
        <Detail></Detail>
      </Route>
      
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
