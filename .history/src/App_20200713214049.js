import React, { useState, useEffect } from 'react';
import './App.css';
import MyContext from './MyContext';
import Accordion from './components/Accordion';
import * as utils from './utils';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Referente from './components/Referente/Referente';
import NavBar from './components/NavBar/NavBar';
import MyTravel from './components/MyTravel/MyTravel';
import DayCard from './components/DayCard/DayCard';

const urlJSON = 'http://51.77.82.133:86/api/quotations/QUO_5e5e2952ae57f#'

export default function App() {
	//sto creando una variabile di stato e la inizializzo ad un oggetto vuoto
	const [datiJson, setDatiJson] = useState(null);
	const [arrayCitta, setArrayCitta] = useState([]);
	const travelGeoCenter = [37.483616, 14.105787]; //Caltanissetta - centro per la Sicilia
	/*travelGeocenter è un dato fittizio non presente nel json, 
	si potrebbe chiedere al backend di fornirlo per ogni pacchetto.
	Diversamente si potrebbe fare una funzione che ritorni un punto medio tra le varie coordinate fornite 
	ed anche un valore di zoom per la mappa in base alla distanza maggiore tra le coordinate ^_^.
	*/
	
	useEffect(() => {
		const getDati = async () => {
			const dati$ = await fetch(urlJSON).then(res => res.json());
			setDatiJson(dati$.results.data);
			setArrayCitta(utils.mapCitta(dati$.results.data.rows));
		}
		getDati();
	}, [])

	return (
		(datiJson != null && arrayCitta.length > 0) ?
			<>
				<MyContext.Provider value={datiJson}>
					<NavBar></NavBar>
					<MyContext.Provider value={{ titolo: datiJson.title, nomeCliente: datiJson.customerName, image: datiJson.images[0].image }}>
						<Header></Header>
					</MyContext.Provider>
					<div className="container-fluid mx-3">
						<MyContext.Provider value={{travelGeoCenter: travelGeoCenter, citta: arrayCitta.map(citta => { return {nome: citta.nome, posizione: citta.coordinate} }), dateFrom: datiJson.dateFrom, dateTo: datiJson.dateTo, partecipanti: datiJson.partecipants }}>
							<div id="id1">
								<MyTravel></MyTravel>
							</div>
						</MyContext.Provider>
						<MyContext.Provider value={{ operator: datiJson.operator, agency: datiJson.agency }}>
							<div id="id2">
								<Referente></Referente>
							</div>
						</MyContext.Provider>

						<div className="row" id="id3">
							<div className="col col-12">
								{
									arrayCitta.map((citta, i) => {
										return (
											<div key={i + "div"}>

												<MyContext.Provider value={citta}>
													<Accordion key={citta.id} tipo="citta">
														{
															citta.giorni.map((giorno, i) => {
																return (
																	<div key={i + "div"}>
																		<MyContext.Provider value={{ giorno: giorno, numeroGiorni: citta.giorni.length }}>
																			<DayCard boleano={i < 1} key={giorno.id}></DayCard>
																		</MyContext.Provider>
																	</div>

																)
															})
														}
													</Accordion>
												</MyContext.Provider>
											</div>
										)
									})

								}

							</div>
						</div>

						<div className="row" id="id4">
							<div className="col col-12">
								<MyContext.Provider value={{nome: "TARIFFE"}}>
									<Accordion tipo="info"></Accordion>
								</MyContext.Provider>
								<MyContext.Provider value={{nome: "NOTE"}}>
									<Accordion tipo="info"></Accordion>
								</MyContext.Provider>
								<MyContext.Provider value={{nome: "DOCUMENTI RICHIESTI"}}>
									<Accordion tipo="info"></Accordion>
								</MyContext.Provider>
								<MyContext.Provider value={{nome: "ASSICURAZIONE"}}>
									<Accordion tipo="info"></Accordion>
								</MyContext.Provider>
								<MyContext.Provider value={{nome: "CONDIZIONI DI CANCELLAZIONE"}}>
									<Accordion tipo="info"></Accordion>
								</MyContext.Provider>
								<MyContext.Provider value={{nome: "CONDIZIONI DI PAGAMENTO"}}>
									<Accordion tipo="info"></Accordion>
								</MyContext.Provider>
							</div>
						</div>

					</div>
				</MyContext.Provider>
				<Footer></Footer>
			</>
			: <></>
	);

}


