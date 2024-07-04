const today = new Date();
const year = today.getFullYear();
const yearText = document.getElementById('currentyear');
yearText.innerHTML=today.getFullYear();

let LastModif = new Date(document.lastModified);
const lastModified = document.getElementById('lastModified')
lastModified.innerHTML="Last Modafied: "+ LastModif


CalculateWindChill = (temperature, wind) =>{
    if(temperature <= 10 && wind > 4.8){
        return (13.12+0.6215*temperature-11.37*Math.pow(wind, 0.16)+0.3965*temperature*Math.pow(wind,0.16)).toFixed(1);
    }
    else{
        return "N/A"
    }
    
}

const windChill = document.getElementById('windchill');
windChill.innerHTML=CalculateWindChill(5,6);
