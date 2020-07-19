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



## Aspetto tecnico
___
Documentazione del codice, algoritmi, interfacce API e librerie usate;

## Manuali per l'utente finale
___
Per gli amministratori del sistema e per il personale di supporto;

## Marketing
___
Come commercializzare il prodotto ed analisi sulla domanda di mercato (non serve perché il prodotto è realizzato su richiesta);


