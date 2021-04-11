import {useState} from 'react';

const useDarkMode = () =>{
   const[darkMode,setDarkMode] = useState(false);

   const toggleDarkMode = (element) =>{
      document.querySelector(element).classList.toggle("dark-mode");
   }

   const addDarkMode = (element) =>{
    document.querySelector(element).classList.add("dark-mode");
 }

 const removeDarkMode = (element) =>{
    document.querySelector(element).classList.remove("dark-mode");
 }


  return[darkMode,setDarkMode,toggleDarkMode,addDarkMode,removeDarkMode];

}
export default useDarkMode;
