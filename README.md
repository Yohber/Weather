# Prévision météorologique

## Visuel

![Exemple d'utilisation](https://github.com/Yohber/Weather/blob/master/weather.png "Ma petite appli météo")

## Pourquoi

Parce qu'i ne sert à rien de réinventer la roue et si des gens trés qualifés ont créé des APIs, autant s'en servir! Mais quel API et pourquoi faire? C'est en y réfléchissant que je me suis orienté vers la métérologie, qui collecte vraiment énormément de données!!! &#x1F326;&#xFE0F;

## Comment

cette même page pourrait être codé plus simplement, mais mon but était de découvrir le fonctionnement des APIs, comment effectuer une demande? et que recoit on en échange? C'est pourquoi je ne me suis pas servit d'Une mais de Trois APIs.

## Premiére API

Il s'agit de openweathermap.org qui va me donner les conditions climatiques actuelles de la ville demandé.

## Deuxiéme API

Il s'agit de api.meteo-concept.com qui va me revoyer les prévisions pour la durée que j'ai choisit, ici ce sera pour les 24 heures à venir. Mais cette demande ne peut se faire uniquement avec le code insee de la ville que vous choisissez, et non le code postale ce qui serait beaucoup trop facile! &#x1F609; C'est pourquoi il y a la troisième API:

## Troisième API

Il s'agit de api-adresse.data.gouv.fr qui contient toutes les villes de France et qui fournit des détails sur celles-ci dont le fameux code Insee.
La demande prend en argument le nom de la ville.

## Les retours

### OpenWeatherMap

Voici un exemple de fichier retourné pour la ville de Bordeaux:

```json
{coord: {…}, weather: Array(1), base: "stations", main: {…}, visibility: 10000, …}
coord:
	lon: -0.58
	lat: 44.84
	__proto__: Object
weather: Array(1)
	0: {id: 803, main: "Clouds", description: "broken clouds", icon: "04n"}
	length: 1
	__proto__: Array(0)
base: "stations"
main:
	temp: 8.99
	feels_like: 4.52
	temp_min: 8.89
	temp_max: 9.44
	pressure: 1015
	humidity: 45
	__proto__: Object
visibility: 10000
wind:
	speed: 3.1
	deg: 50
	__proto__: Object
clouds:
	all: 55
	__proto__: Object
dt: 1585698619
sys:
	type: 1
	id: 6450
	country: "FR"
	sunrise: 1585719741
	sunset: 1585765768
	__proto__: Object
timezone: 7200
id: 3031582
name: "Bordeaux"
cod: 200
__proto__: Object
```

`### Meteo Concept

Voici un exemple de fichier retourné pour la ville de Bordeaux:

```json
{city: {…}, update: "2020-03-31T14:29:08+0200", forecast: Array(14)}
	city:
	insee: "33063"
	cp: 33000
	name: "Bordeaux"
	latitude: 44.8572
	longitude: -0.5737
	altitude: 9
	__proto__: Object
update: "2020-03-31T14:29:08+0200"
forecast: Array(14)
	0: {insee: "33063", latitude: 44.8572, longitude: -0.5737, day: 0, datetime: "2020-04-01T02:00:00+0200", …}
	1: {insee: "33063", latitude: 44.8572, longitude: -0.5737, day: 1, datetime: "2020-04-02T02:00:00+0200", …}
	2: {insee: "33063", latitude: 44.8572, longitude: -0.5737, day: 2, datetime: "2020-04-03T02:00:00+0200", …}
	3: {insee: "33063", latitude: 44.8572, longitude: -0.5737, day: 3, datetime: "2020-04-04T02:00:00+0200", …}
	4: {insee: "33063", latitude: 44.8572, longitude: -0.5737, day: 4, datetime: "2020-04-05T02:00:00+0200", …}
	5: {insee: "33063", latitude: 44.8572, longitude: -0.5737, day: 5, datetime: "2020-04-06T02:00:00+0200", …}
	6: {insee: "33063", latitude: 44.8572, longitude: -0.5737, day: 6, datetime: "2020-04-07T02:00:00+0200", …}
	7: {insee: "33063", latitude: 44.8572, longitude: -0.5737, day: 7, datetime: "2020-04-08T02:00:00+0200", …}
	8: {insee: "33063", latitude: 44.8572, longitude: -0.5737, day: 8, datetime: "2020-04-09T02:00:00+0200", …}
	9: {insee: "33063", latitude: 44.8572, longitude: -0.5737, day: 9, datetime: "2020-04-10T02:00:00+0200", …}
	10: {insee: "33063", latitude: 44.8572, longitude: -0.5737, day: 10, datetime: "2020-04-11T02:00:00+0200", …}
	11: {insee: "33063", latitude: 44.8572, longitude: -0.5737, day: 11, datetime: "2020-04-12T02:00:00+0200", …}
	12: {insee: "33063", latitude: 44.8572, longitude: -0.5737, day: 12, datetime: "2020-04-13T02:00:00+0200", …}
	13: {insee: "33063", latitude: 44.8572, longitude: -0.5737, day: 12, datetime: "2020-04-13T02:00:00+0200", …}
	length: 14
	__proto__: Array(0)
__proto__:
	constructor: ƒ Object()
	__defineGetter__: ƒ __defineGetter__()
	__defineSetter__: ƒ __defineSetter__()
	hasOwnProperty: ƒ hasOwnProperty()
	__lookupGetter__: ƒ __lookupGetter__()
	__lookupSetter__: ƒ __lookupSetter__()
	isPrototypeOf: ƒ isPrototypeOf()
	propertyIsEnumerable: ƒ propertyIsEnumerable()
	toString: ƒ toString()
	valueOf: ƒ valueOf()
	toLocaleString: ƒ toLocaleString()
	get __proto__: ƒ __proto__()
	set __proto__: ƒ __proto__()
```

### Adresse Data Gouv

Voici un exemple de fichier retourné pour la ville de Bordeaux:

```json
{type: "FeatureCollection", version: "draft", features: Array(5), attribution: "BAN", licence: "ETALAB-2.0", …}
	type: "FeatureCollection"
	version: "draft"
	features: Array(5)
		0:
			type: "Feature"
			geometry: {type: "Point", coordinates: Array(2)}
			properties:
				label: "Bordeaux"
				score: 0.9606306486281344
				id: "33063"
				type: "municipality"
				name: "Bordeaux"
				postcode: "33000"
				citycode: "33063"   <= numéro qui nous intérrésse!
				x: 416635.22
				y: 6423573.47
				population: 252040
				city: "Bordeaux"
				context: "33, Gironde, Nouvelle-Aquitaine"
				importance: 0.5669371349094802
			__proto__: Object
		__proto__: Object
	1: {type: "Feature", geometry: {…}, properties: {…}}
	2: {type: "Feature", geometry: {…}, properties: {…}}
	3: {type: "Feature", geometry: {…}, properties: {…}}
	4: {type: "Feature", geometry: {…}, properties: {…}}
	length: 5
	__proto__: Array(0)
attribution: "BAN"
licence: "ETALAB-2.0"
query: "Bordeaux"
limit: 5
__proto__: Object
```

## Synthèse

Une fois toutes ces données recueillit, il faut les ordonner, c'est pourquoi j'ai regroupé les informations dans trois cadres, un pour la localité, un pour les conditions métérologiques actuelles et un troisiéme cadre pour les prévisions à 24 heures.

## Fabriqué avec

Cette horloge a été créé en partie sur smartphone grace à l'application anWritterFree, puis finalisé sur sublime Text.

## Versions

Il s'agit de la version 2, car la version 1 ne comporté que les conditions météorologiques actuelles. Mais cette version 2 évoluera surement, car les données reçues sont tellement importantes que les façons de les restituer, sont quasiment infinit. Il serait par exemple possible de choisir la durée des prévisions, de calculer le changement de temps, et pourquoi pas d'ajouter une carte de la région avec des icônes comme à la télé! 	&#x1F4FA;

## Auteur

Bernard Yohann, web developpeur junior.

## Autres créations

vous pouvez voir mes autres codes sur [Mon Github](https://github.com/Yohber "BERNARD Yohann"), ou sur [Mon Codepen](https://codepen.io/Yohber2 "BERNARD Yohann") .