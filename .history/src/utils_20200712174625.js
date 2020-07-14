class Giorno {
	constructor(id, data, accomodations, activities, day, transports, included, notIncluded) {
		this.id = id;
		this.data = data;
		this.accomodations = accomodations;
		this.activities = activities;
		this.day = day;
		this.transports = transports;
		this.included = included;
		this.notIncluded = notIncluded;
	}
}

class Citta { //si passa in app
	constructor(id, nome, latitudine, longitudine, giorni) {
		this.id = id;
		this.nome = nome;
		this.cordinate = { latitudine: latitudine, longitudine: longitudine };
		this.giorni = giorni;
	}
}

export function mapCitta(righe) { // ci creiamo il json 
	const arrayCitta = [];
	let currentId = null;
	let id,nome, latitudine, longitudine, giorni = [];

	righe.forEach((riga, i) => {
		if (currentId == null) {
			currentId = riga.place.id;
		}

		if (currentId === riga.place.id) {
			id = currentId;
			nome = riga.place.name;
			latitudine = riga.place.latitude;
			longitudine = riga.place.longitude;
			let idGiorno = riga.id;
			let date = riga.dayDate;
			let accomodations = riga.accomodations;
			let activities = riga.activities;
			let day = riga.days[0]; //TODO chiedere a Nunzio
			let transports = riga.transports;
			let included = riga.included;
			let notIncluded = riga.notIncluded;

			giorni.push(new Giorno(idGiorno, date, accomodations, activities, day, transports, included, notIncluded))
		}

		if (i + 1 < righe.length) {
			if (currentId != righe[i + 1].place.id) {
				currentId = null
				arrayCitta.push(new Citta(id, nome, latitudine, longitudine, giorni))
				giorni = [];
			}

		} else {
			arrayCitta.push(new Citta(id, nome, latitudine, longitudine, giorni))
		}


	})
	return arrayCitta;
}

/*   *************************Giorno****************************  

Giorno {id: 8, data: "2020-04-01", accomodations: Array(1), activities: Array(1), day: {…}, …}
accomodations: [{…}]
activities: [{…}]
data: "2020-04-01"
day: {id: 8, name: "Benvenuti a Catania!", language: {…}, description: "Benvenuti a Catania, antica città portuale sulla c…giro in centro per assaporare la movida catenese!", tags: Array(2), …}
id: 8
included: null
notIncluded: null
transports: [{…}]
__proto__: Object

*/

/* ****************************** CITTA******************************
Citta {id: 21, nome: "Catania", cordinate: {…}, giorni: Array(3)}
cordinate: {latitudine: "37.502236", longitudine: "15.087380"}
giorni: (3) [Giorno, Giorno, Giorno]
id: 21
nome: "Catania"
__proto__: Object


*/