Prima_Prova

Prima Prova

# Documentazione software progetto: Sicily Travel


## Requisiti
*Requisiti: descrizione di ciò che il software fa o che farà (attributi, capacità, caratteristiche, ambiente di lavoro distribuito);*
___
Il software commisionato deve poter far visionare al cliente, il proprio pacchetto viaggio acquistato. Il viaggio è completamente personalizzato in base alle scelte dell'utente. Per conoscerle il software utilizza un API fornito dal committente.
Le informazioni ricevute dalle API riguardano in dettaglio ogni aspetto del viaggio e comprendono immagini delle tappe da visitare, brevi presentazioni dei luoghi. 

L'itinerario è raccontato attraverso delle sezioni in base alla città e divise in base al giorno di riferimento. 
Ogni aspetto trova poi la sua descrizione più approfondita attraverso delle modali specifiche. 

Le informazioni sono consultabili dall'utente in base a specifiche sezioni che suddividono le tappe in giorni 




I mezzi impiegati sono caratterizzati da una legenda a colori in modo che il cliente possa riconoscerli a primo sguardo. 
I mezzi sono individuati in base alle esigenze e si distinguono grazie ad un colore dedicato.








## Architettura e Design
_Presentare i componenti visivi che riguardano l'interfaccia utente;_
___

La descrizione seguirà una logica top - down 

<!-- Porco mondo Andrea ti odio -->

#### Navbar
Contenente vari bottoni che racchiundono le scorcatoglie per gli hotpoint del viaggio, implementa anche il bottone che gestisce il logout dell' utente.

#### Header
<!-- Porco Mondo Davide ti odio -->
<!-- Simone a te ti odio perché sei di Bari e omertoso-->

Contiene un' immagine caratteristica del viaggio oltre alle informazione dell' acquirente e il nome del pacchetto scelto.

#### Mappa
Grazie all' API di Leaflet illustra le varie tappe del viaggio, viene sempre centrata da una media sulle latitudini e longitudini.
Sotto vengono specificati i giorni di inizio e fine ed il numero di partecipanti.  
<!-- Andrea te siento -->

#### Referente e Agenzia 
Qui sono illustrate tutte le informazioni relative al referente asseganto al cliente e all'Agenzia.

#### Città
<img src="http://t0.gstatic.com/images?q=tbn:ANd9GcRJLDTVj7bXDkRg4PQwBs0tzdxfUX0GjCLSk_i-2xjhT-32qSib3sqOOHf_d6CVwwX2szT4GRybM88U5WHSOqo" style="width:100px; height:100px;"><img src="https://media1.giphy.com/media/l41YoUIRqzcdAQmli/200.gif" style="width:100px; height:100px;">

Ogni citta mostra la data di arrivo e la data di partenza da essa, se l'utente clicca sulla freccia a destra, gli verrà mostrato in dettaglio ogni giorno ad essa dedicato. In particolare una breve presentazione dell'attività giornaliera, alloggi e trasporti con annesse foto.

<h4>
	 Informazioni Importanti
</h4>

Qui verranno mostrate le informazioni importanti che l'utente può consultare grazie alla suddivisione per agomento 

#### Piè di Pagina
Un comodo piè di pagina per segnalare la fine della pagina

- [x] Pattern SPA - Single Page Application
- [x] CRA - create-react-app & react-scripts 
- [x] Best practices (filesystem, patterns etc)
- [x] Gestione delle viste e del routing
- [x] Autenticazione e routing condizionale
- [ ] Stilizziamo i componenti (module.css, styled components e librerie UI)
- [x] Usare la Context API come uno store generale
- [ ] Testing & Usability
- [ ] Fase di build
- [ ] Esercitazione

- [ ] List item

## Aspetto tecnico
Documentazione del codice, algoritmi, interfacce API e librerie usate;


Le tecnologia di sviluppo utilizzate sono *React-JavaScript*, *HTML5*, *CSS3* e *Bootstrap*.
L'applicazione è stata pensata come Single Page Application, inizializzata tramite il comando *npx create-react-app reactprogettotravel* 
Le dipendenze nel package.json della nostra app sono:

```    "bootstrap": "^4.5.0",
    "js-sha512": "^0.8.0",
    "leaflet": "^1.6.0",
    "prop-types": "^15.7.2",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-leaflet": "^2.7.0",
    "react-router-dom": "^5.2.0",
    "react-router-hash-link": "^1.2.2",
    "react-scripts": "3.4.1",
    "react-visibility-sensor": "^5.1.1",
    "typeface-roboto": "0.0.75"
```

L'app è accessibile previa autenticazione, la navigazione sarà accessibile solo una volta autenticati. Essendo una spa abbiamo gestito il routing principalemente per l'autenticazione, nonostante sia comunque disponibile la navigazione interna della pagina gestita tramite anchor accessibili da una navbar
```ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {(JSON.parse(window.sessionStorage.getItem('user')) !== null) ? (<Route const contesto = React.useContext(MyContext); path="/" component={App}/>)
      :(<Route exact path="/" component={Login}/>)}
      <Route path="**" component={NoPage}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

```


Login
![screenLogin.PNG](../_resources/bcb1682981cb45f4890509881e984711.PNG)


NavBar
![navBar.PNG](../_resources/857714d50f044f039f38d7af9cedf12e.PNG)

L'app è divisa in componenti, ciascuno ha accesso ai dati che sono necessari alla sua rendereizzazione. Questo è stato fatto avvolgendo ogni componente in un *Provider* al cui value è stato passato il contesto.
 
```
import MyContext from '../../MyContext'
...
const contesto = React.useContext(MyContext)
...
<MyContext.Provider value={contesto.giorno.activities}>
    <Attivita></Attivita>
</MyContext.Provider>
 ```


*La ricezione dei dati del json è stata gestita in modo da garantire una chiarezza e una praticità ausiliaria nello sviluppo, ovviando così ad una non previsione lato Back-End; piu specificamente non era prevista una suddivisione in città visitate per le giornate di viaggio*
```
class Citta { //si passa in app
	constructor(id, nome, latitudine, longitudine, giorni) {
		this.id = id;
		this.nome = nome;
		this.coordinate = { latitudine: latitudine, longitudine: longitudine };
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
			if (currentId !== righe[i + 1].place.id) {
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

/*******************GESTIONE VISUALIZZAZIONE DATE E NUM ADULTI/BAMBINI*****************************/
export function getDateDalAl(dateFrom,dateTo){
    const nomiMesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    let dataPartenza = new Date(dateFrom);
    let dataArrivo = new Date(dateTo);
    let annoPartenza = (dataPartenza.getFullYear() !== dataArrivo.getFullYear()) ? " "+dataPartenza.getFullYear() : "";
    let mesePartenza = (dataPartenza.getMonth() !== dataArrivo.getMonth()) ? " "+nomiMesi[dataPartenza.getMonth()] : "";
    return `dal ${dataPartenza.getDate()}${mesePartenza}${annoPartenza} al ${dataArrivo.getDate()} ${nomiMesi[dataArrivo.getMonth()]} ${dataArrivo.getFullYear()}`;
}

export function getDateDalAlNoYear(dateFrom,dateTo){
    const nomiMesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    let dataPartenza = new Date(dateFrom);
    let dataArrivo = new Date(dateTo);
    let mesePartenza = (dataPartenza.getMonth() !== dataArrivo.getMonth()) ? " "+nomiMesi[dataPartenza.getMonth()] : "";
    return `dal ${dataPartenza.getDate()}${mesePartenza} al ${dataArrivo.getDate()} ${nomiMesi[dataArrivo.getMonth()]}`;
}
//funzione analoga 
export function getDayMonth(date){
    const nomiMesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    let retDate = new Date(date);
    return `${retDate.getDate()} ${nomiMesi[retDate.getMonth()]}`;
}

export function calcolaNumAdultiBambini(partecipanti){
    let numeroAdulti = 0
    let numeroBambini = 0
    partecipanti.forEach( p => {
        p.type==="adulto" && (numeroAdulti++);
        p.type==="bambino" && (numeroBambini++);
    });
    return [numeroAdulti,numeroBambini];
}


/*************************GESTIONE MODALE*****************************/
export function funzioneApriModale(funzioneSet,parametro){
	funzioneSet(parametro+1);
}

/*************************CREAZIONE UTENTE DEFAULT*****************************/
class Utente{
	constructor(email,hash,salt){
		this.email=email;
		this.hash=hash;
		this.salt=salt;
	}
}
export var sha512 = require('js-sha512');
export function creaUtenteDef(){
	const utente = JSON.parse(window.localStorage.getItem('user'));
	if(utente === null){
		const marco = new Utente("marcoaiello@gmail.com",sha512('aaaa'+49),49);
		window.localStorage.setItem('user',JSON.stringify(marco));
		return marco;
	}else{
		return utente;
	}
}```


## Manuali per l'utente finale
___
Per gli amministratori del sistema e per il personale di supporto;

## Marketing
___
Come commercializzare il prodotto ed analisi sulla domanda di mercato (non serve perché il prodotto è realizzato su richiesta);


