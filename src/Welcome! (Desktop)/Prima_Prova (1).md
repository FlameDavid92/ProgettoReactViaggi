Prima_Prova

# Relazione sul progetto Travel React App per TreeSchool

## Requisiti 

* * *

Il software si propone di illustrare al cliente il proprio pacchetto viaggio acquistato. Il viaggio è completamente personalizzato in base alle scelte dell'utente. Per conoscerle il software utilizza un' API fornita dal committente.  
Le informazioni ricevute dalla API riguardano in dettaglio ogni aspetto del viaggio (immagini, attività, pernottamento, brevi presentazioni dei luoghi).

L'itinerario è raccontato attraverso delle sezioni per ciascuna città visitata, suddivise in base al giorno di riferimento.  
Ogni aspetto trova poi la sua descrizione più approfondita attraverso delle modali specifiche.
## Architettura e Design

* * *

#### Navbar

Contiene voci cliccabili che permettono di visualizzare agevolmente le varie sezioni principali, implementa anche la voce che gestisce il logout dell' utente.

#### Header

Contiene un' immagine caratteristica del viaggio oltre alle informazione dell' acquirente e il nome del pacchetto scelto.

#### Mappa

Grazie all' API di Leaflet illustra le varie tappe del viaggio, viene sempre centrata da una media sulle latitudini e longitudini.  
Sotto vengono specificati i giorni di inizio e fine ed il numero di partecipanti.

#### Referente e Agenzia

Qui sono illustrate tutte le informazioni relative all'agenzia e al  referente asseganto al cliente.

#### Città

Ogni città mostra la data di arrivo e la data di partenza da essa. Se l'utente espande il contenuto cliccandoci, gli verrà mostrato in dettaglio ogni giorno ad essa dedicato. In particolare una breve presentazione dell'attività giornaliera, alloggi e trasporti con annesse foto.

#### Informazioni Importanti

Qui verranno mostrate le informazioni importanti

#### Piè di Pagina

Un comodo piè di pagina per segnalare la fine della pagina

## Aspetto tecnico

* * *

Le tecnologia di sviluppo utilizzate sono *React-JavaScript*, *HTML5*, *CSS3* e *Bootstrap*.  
L'applicazione è stata pensata come Single Page Application, inizializzata tramite il comando *npx create-react-app reactprogettotravel*  
Le dipendenze nel package.json della nostra app sono:

```    "js-sha512": "^0.8.0",
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

L'app è accessibile previa autenticazione, la navigazione sarà accessibile solo una volta autenticati. Essendo una SPA abbiamo gestito il routing solamente per l'autenticazione, nonostante sia comunque disponibile la navigazione interna della pagina gestita tramite anchor accessibili da una navbar.

*Ecco un breve estratto della gestione del Login*
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

L'app è divisa in componenti, ciascuno ha accesso ai dati che sono necessari alla sua rendereizzazione. Questo è stato fatto avvolgendo ogni componente in un *Provider* al cui value è stato passato il contesto.


*Ecco un esempio di un componente che utilizza il contesto*
```
[Attivita.js]

import MyContext from '../../MyContext'
...
const contesto = React.useContext(MyContext)

[App.js]
...
<MyContext.Provider value={contesto.giorno.activities}>
    <Attivita></Attivita>
</MyContext.Provider>
```

*La ricezione dei dati del json è stata gestita in modo da garantire una chiarezza e una praticità ausiliaria nello sviluppo, ovviando così ad una non previsione lato Back-End; piu specificamente non era prevista una suddivisione in città visitate per le giornate di viaggio*

#### Testing

Durante la fase di sviluppo sono stati utilizzati: terminale, VisualStudio-Code, gli strumenti per sviluppatori dei browser Chrome, Firefox ed inoltre l'estensione React-Dev-Tools. La nostra applicazione in fase finale è stata testata su

- [x] Safari ✅mobile
- [x] Chrome ✅mobile
- [x] Brave
- [x] Firefox ✅mobile
- [x] Opera
- [x] Edge
- [x] Elephant

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


```