  
function start(){
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast
 var city =  document.getElementsByTagName("input")[0].value;

  apiWeather
    .fetch4DaysForecast(city)
    .then(function(response) {
      console.log(response.data)
      // Récupère la donnée d'une API
      const data = response.data;
      
      for(i = 0; i < 4; i++){
        htmlEl = "today";

        if(i == 1) htmlEl = "demain";
        else if(i == 2) htmlEl = 'ademain';
        else if(i == 3) htmlEl = "eademain";
       
           // On récupère l'information principal
         const main = data.list[i].weather[0].main;
         const description = data.list[i].weather[0].description;
         const temp = data.list[i].temp.day;
         const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);
   
         // Modifier le DOM
         document.getElementById(htmlEl+'-forecast-main').innerHTML = main;
         document.getElementById(htmlEl+'-forecast-more-info').innerHTML = description;
         document.getElementById(htmlEl+'-icon-weather-container').innerHTML = icon;
         document.getElementById(htmlEl+'-forecast-temp').innerHTML = `${temp}°C`;
      }
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}