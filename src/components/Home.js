import React , { useEffect,useState } from 'react';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';
import CountriesList from './CountriesList';
import useCountries from '../hooks/useCountries';
import '../sass/style.scss';

const Home = ({darkMode,AddDarkMode,RemoveDarkMode}) =>{
    const [term,setTerm] = useState('');
    const [selectedRegion,setSelectedRegion] = useState('Filter By Region')
   const[countries,search] = useCountries("all");
   const regionOptions = ['Africa','Americas','Asia','Europe','Oceania'];


      useEffect(()=>{
      
        if(darkMode)
        {
           AddDarkMode(".form-container");
           AddDarkMode(".dropdown");
           AddDarkMode(".country-container");
         return;
         
        }
        RemoveDarkMode(".form-container");
        RemoveDarkMode(".dropdown");
        RemoveDarkMode(".country-container");

       },[darkMode])

       useEffect(()=>{

        if(term && selectedRegion==='Filter By Region')
        {
          search('name',term);
           return; 
    
        }
        if(!term && selectedRegion!=='Filter By Region')
        {
          search('region',selectedRegion)
           return;  
        }
    
        if(term && selectedRegion!=='Filter By Region' )
        {
           search('name',term);
          return;
        }
        
       
        },[term,selectedRegion])


   return(
       <div className="wrapper container">
         <SearchBar 
            term = {term}
            onSubmitSearch = {setTerm} />
             
             <Dropdown
              options = {regionOptions}
              selected = {selectedRegion}
              onChangeRegion = {setSelectedRegion}

            />

             <CountriesList countries = {countries}/>
            
       </div>
   )
}
export default Home;