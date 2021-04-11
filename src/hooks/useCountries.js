import {useState,useEffect} from 'react'; 
import axios from 'axios';


const useCountries = () =>{
   
    const[countries,setCountries] = useState([]);
   
    useEffect(()=>{
      search("all",'');
    },[])

    const search = async (endpoint,term) =>{
        try{
           
           if(term)
           {
            const {data} = await  axios.get(`https://restcountries.eu/rest/v2/${endpoint}/${term}`)
             setCountries(data);
             return;
           }
           const {data} = await  axios.get(`https://restcountries.eu/rest/v2/${endpoint}`)
           setCountries(data);
          }
          catch(err)
          {
            console.log(err);
          }
    }
   return [countries,search];
  
}

export default useCountries;
