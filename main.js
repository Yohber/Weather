var globaleInsee;
var codeTemps={
0:"Soleil",
1:"Peu nuageux",
2:"Ciel voilé",
3:"Nuageux",
4:"Très nuageux",
5:"Couvert",
6:"Brouillard",
7:"Brouillard givrant",
10:"Pluie faible",
11:"Pluie modérée",
12:"Pluie forte",
13:"Pluie faible verglaçante",
14:"Pluie modérée verglaçante",
15:"Pluie forte verglaçante",
16:"Bruine",
20:"Neige faible",
21:"Neige modérée",
22:"Neige forte",
30:"Pluie et neige mêlées faibles",
31:"Pluie et neige mêlées modérées",
32:"Pluie et neige mêlées fortes",
40:"Averses de pluie locales et faibles",
41:"Averses de pluie locales",
42:"Averses locales et fortes",
43:"Averses de pluie faibles",
44:"Averses de pluie",
45:"Averses de pluie fortes",
46:"Averses de pluie faibles et fréquentes",
47:"Averses de pluie fréquentes",
48:"Averses de pluie fortes et fréquentes",
60:"Averses de neige localisées et faibles",
61:"Averses de neige localisées",
62:"Averses de neige localisées et fortes",
63:"Averses de neige faibles",
64:"Averses de neige",
65:"Averses de neige fortes",
66:"Averses de neige faibles et fréquentes",
67:"Averses de neige fréquentes",
68:"Averses de neige fortes et fréquentes",
70:"Averses de pluie et neige mêlées localisées et faibles",
71:"Averses de pluie et neige mêlées localisées",
72:"Averses de pluie et neige mêlées localisées et fortes",
73:"Averses de pluie et neige mêlées faibles",
74:"Averses de pluie et neige mêlées",
75:"Averses de pluie et neige mêlées fortes",
76:"Averses de pluie et neige mêlées faibles et nombreuses",
77:"Averses de pluie et neige mêlées fréquentes",
78:"Averses de pluie et neige mêlées fortes et fréquentes",
100:"Orages faibles et locaux",
101:"Orages locaux",
102:"Orages fort et locaux",
103:"Orages faibles",
104:"Orages",
105:"Orages forts",
106:"Orages faibles et fréquents",
107:"Orages fréquents",
108:"Orages forts et fréquents",
120:"Orages faibles et locaux de neige ou grésil",
121:"Orages locaux de neige ou grésil",
122:"Orages locaux de neige ou grésil",
123:"Orages faibles de neige ou grésil",
124:"Orages de neige ou grésil",
125:"Orages de neige ou grésil",
126:"Orages faibles et fréquents de neige ou grésil",
127:"Orages fréquents de neige ou grésil",
128:"Orages fréquents de neige ou grésil",
130:"Orages faibles et locaux de pluie et neige mêlées ou grésil",
131:"Orages locaux de pluie et neige mêlées ou grésil",
132:"Orages fort et locaux de pluie et neige mêlées ou grésil",
133:"Orages faibles de pluie et neige mêlées ou grésil",
134:"Orages de pluie et neige mêlées ou grésil",
135:"Orages forts de pluie et neige mêlées ou grésil",
136:"Orages faibles et fréquents de pluie et neige mêlées ou grésil",
137:"Orages fréquents de pluie et neige mêlées ou grésil",
138:"Orages forts et fréquents de pluie et neige mêlées ou grésil",
140:"Pluies orageuses",
141:"Pluie et neige mêlées à caractère orageux",
142:"Neige à caractère orageux",
210:"Pluie faible intermittente",
211:"Pluie modérée intermittente",
212:"Pluie forte intermittente",
220:"Neige faible intermittente",
221:"Neige modérée intermittente",
222:"Neige forte intermittente",
230:"Pluie et neige mêlées",
231:"Pluie et neige mêlées",
232:"Pluie et neige mêlées",
235:"Averses de grêle"
}
var token1 = [65, 103.66666666666667, 111.66666666666667, 61, 100.33333333333333, 110.33333333333333, 110.33333333333333, 105.66666666666667, 102.33333333333333, 76.33333333333333, 101.66666666666667, 69, 68.33333333333333, 100.33333333333333, 72.33333333333333, 71, 101, 71.66666666666667, 71.66666666666667, 72.33333333333333, 102.33333333333333, 71.66666666666667, 103.66666666666667, 72.33333333333333, 100.33333333333333, 101, 101, 73, 68.33333333333333, 103.66666666666667, 68.33333333333333, 68.33333333333333, 73, 102.33333333333333, 101.66666666666667, 103.66666666666667, 73, 102.33333333333333, 70.33333333333333, 71.66666666666667, 68.33333333333333, 68.33333333333333, 61, 113.66666666666667, 109, 105.66666666666667, 113, 112.33333333333333, 76.33333333333333, 108.33333333333333, 103, 113, 111.66666666666667, 105.66666666666667, 101.66666666666667];
var token2 = [71, 101.66666666666667, 103, 67.66666666666667, 101, 100.33333333333333, 101, 103, 69.66666666666667, 101.66666666666667, 67.66666666666667, 71, 100.33333333333333, 103, 70.33333333333333, 101.66666666666667, 70.33333333333333, 102.33333333333333, 73.66666666666667, 100.33333333333333, 103.66666666666667, 72.33333333333333, 68.33333333333333, 69.66666666666667, 71, 103, 69, 73, 69.66666666666667, 73.66666666666667, 70.33333333333333, 100.33333333333333, 103, 67.66666666666667, 68.33333333333333, 70.33333333333333, 71, 101.66666666666667, 68.33333333333333, 68.33333333333333, 68.33333333333333, 71, 103, 102.33333333333333, 70.33333333333333, 100.33333333333333, 103.66666666666667, 67.66666666666667, 69.66666666666667, 71, 67.66666666666667, 71, 72.33333333333333, 103.66666666666667, 68.33333333333333, 103.66666666666667, 68.33333333333333, 102.33333333333333, 69, 70.33333333333333, 73.66666666666667, 103.66666666666667, 100.33333333333333, 103, 61, 105.66666666666667, 109, 112.33333333333333, 103, 103, 76.33333333333333];

function meteo() {
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+document.getElementById("ville").value+token(token1);
    $.get(url, GetSuccess).done(function() {
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
      });
}
var GetSuccess = function(data) {
    document.getElementById("temperature").innerHTML = "Temperature: " + data.main.temp + " °C";
    document.getElementById("pression").innerText = "Pression: "+ data.main.pressure + " hPa";
    document.getElementById("hygrometrie").innerText = "Humiditée: "+data.main.humidity + " %";
    document.getElementById("icone").src="http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
    var description;
    switch(data.weather[0].icon){
    case "01d":
    case "01n":
       description = "ciel dégagé";
    break;
    case "02d":
    case "02n":
       description = "ciel peu nuageux";
    break;
    case "03d":
    case "03n":
       description = "nuages dispersés";
    break;
    case "04d":
    case "04n":
       description = "nuageux";
    break;
    case "09d":
    case "09n":
       description = "pluie eparses";
    break;
    case "10d":
    case "10n":
       description = "pluie";
    break;
    case "11d":
    case "11n":
       description = "orage";
    break;
    case "13d":
    case "13n":
       description = "neige";
    break;
    case "50d":
    case "50n":
       description = "brouillard";
    break;
    default:
       description ="pas de correspondance";
    break;
    }
    document.getElementById("description").innerText = description;
    document.getElementById("directVent").innerText = "Vent du: "+data.wind.deg+" degrés Nord";
    document.getElementById("forceVent").innerText ="Vent à: "+data.wind.speed+" km/h";
    rechercheCodeInsee();
}
function rechercheCodeInsee() {
   var url="https://api-adresse.data.gouv.fr/search/?q="+document.getElementById("ville").value+"";
    $.get(url, adressSuccess).done(function() {
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
      });
}
var adressSuccess = function(data2) {
  console.log(data2);
    globaleInsee=(data2.features[0].properties.citycode);
    seconde();
}
function seconde(){
    var url = "https://api.meteo-concept.com/api/forecast/daily?token="+token(token2)+globaleInsee+"";
    $.get(url, callBackGetSuccess2).done(function(response) {
      })
      .fail(function() {
      console.log(status);
        alert( "error" );
      })
      .always(function() {
      });
}
var callBackGetSuccess2 = function(data3) {
   document.getElementById("temperature2").innerHTML = "Temperature entre: " + data3.forecast[0].tmin+" °C et "+data3.forecast[0].tmax+" °C";
   document.getElementById("ventMoyen").innerText = "Vent: "+ data3.forecast[0].wind10m+ " km/h";
   document.getElementById("directionVent").innerText = "Vent du: "+data3.forecast[0].dirwind10m + " degrés Nord";
   document.getElementById("pluie").innerText ="Pluie: "+data3.forecast[0].rr10+" mm";
   var indice=data3.forecast[0].weather;
   indice = indice.toString();
   var monArrayKeys = Object.keys(codeTemps);
   var index = monArrayKeys.indexOf(indice);
   var monArrayValues = Object.values(codeTemps);
   var description = monArrayValues[index];
   document.getElementById("description2").innerText = "Temp: "+description;
}
function token(unArray){
  var monArray = [];
  var response = "";
  for (var rang=0; rang<unArray.length; rang+=1){
    count = unArray[rang];
    count *= 3;
    count -= 107;
    count /= 2;
    letter = String.fromCharCode(count);
    monArray.push(letter);
    response = monArray.join("");
  }
   return response;
}