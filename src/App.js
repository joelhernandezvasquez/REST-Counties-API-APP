import React ,{useState}from 'react';
import Header from './components/Header';
import Home from './components/Home';
import DetailPage from './components/DetailPage';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import useDarkMode from './hooks/useDarKMode';
import './sass/style.scss';

const App = () =>{
    

   const [darkMode,setDarkMode,toggleDarkMode,addDarkMode,removeDarkMode] = useDarkMode();
  
  return(
       <Router>
         <div>
           <Header darkMode = {darkMode} SetDarkMode = {setDarkMode} toggleDarkMode ={toggleDarkMode} />
           <Switch>
    
             <Route exact path='/'
                
              render={(props)=>(
                <Home{...props} darkMode = {darkMode} AddDarkMode = {addDarkMode} RemoveDarkMode = {removeDarkMode} />
              )} 
              />

              <Route path='/detail'  
              render={(props)=>(
                <DetailPage{...props} darkMode = {darkMode} toggleDarkMode={toggleDarkMode} RemoveDarkMode={removeDarkMode} />
              )}
              />
 

           </Switch>
         </div>
       </Router>
     
    )
}


export default App;