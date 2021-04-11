import React,{useState} from 'react';


const Header = ({darkMode,SetDarkMode,toggleDarkMode}) =>{
  
    const colorThemeConfig = {
        dark:{
               text:'Dark Mode',
               icon:'fa-moon-o'
           },
           light:{
               text:'Light Mode',
               icon:'fa-sun-o'
           }      
       
   };

   const setThemeMode = () =>{
      
       if(!darkMode)
       {
           setMode(colorThemeConfig.light);
           SetDarkMode(!darkMode);
           toggleDarkMode("body");
           toggleDarkMode(".main-header");
           
           return ;  
       }
       
        setMode(colorThemeConfig.dark);
       SetDarkMode(!darkMode);
       toggleDarkMode("body");
       toggleDarkMode(".main-header");
       
   }
   
    const[mode,setMode] = useState(colorThemeConfig.dark);
    
    
   
   return(
        <div className="main-header shadow">
            <div className="container">
              <h1>Where in the World?</h1>
              <button className="toggle-dark-light-btn toggle-btn" onClick={()=> setThemeMode()} > <i class={`fa ${mode.icon}`} aria-hidden="true"></i> {mode.text}</button>  
            </div>
        </div>
    )
}

export default Header;
