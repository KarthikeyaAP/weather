const key='XwL1GSCotS8cdzpO1pXQSqLLlRGwnnkH';


const getCity= async(city) =>{
    const base='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`;

    const details= await fetch(base+query);
    const data= await details.json();
    return data[0];
};

const getWeather= async(id) =>{
    const base='http://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${id}?apikey=${key}`;
    
    const details=await fetch(base+query);
    const data=await details.json();
    return data[0];
};