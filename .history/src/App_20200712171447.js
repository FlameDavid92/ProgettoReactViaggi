import React, { useState, useEffect } from 'react';
import './App.css';
import MyContext from './MyContext';
import Accordion from './components/Accordion';
import * as utilita from './mappingJson';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Referente from './components/Referente/Referente';
import NavBar from './components/NavBar/NavBar';
import MyTravel from './components/MyTravel/MyTravel';



const urlJSON = 'http://51.77.82.133:86/api/quotations/QUO_5e5e2952ae57f#'

export default function App() {
	//sto creando una variabile di stato e la inizializzo ad un oggetto vuoto
	const [datiJson, setDatiJson] = useState(null);
	const [arrayCitta, setArrayCitta] = useState([]);

	//al mounting 
	useEffect(() => {
		const getDati = async () => {
			const dati$ = await fetch(urlJSON).then(res => res.json())
			console.log(dati$.results.data)

			setDatiJson(dati$.results.data)
			setArrayCitta(utilita.mapCitta(dati$.results.data.rows))

		}
		getDati()
	}, [])

	if (datiJson != null && arrayCitta.length > 0) {
		console.log(arrayCitta)

		return (
			<>
				<MyContext.Provider value={datiJson}>
					<NavBar></NavBar>
					<MyContext.Provider value={{ titolo: datiJson.title, nomeCliente: datiJson.customerName, image: datiJson.images[0].image }}>
						<Header></Header>
					</MyContext.Provider>
					<div className="container">
						<MyContext.Provider value={{ nomiCitta: arrayCitta.map(citta => citta.nome), dateFrom: datiJson.dateFrom, dateTo: datiJson.dateTo, partecipanti: datiJson.partecipants }}>
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
							<div className="col-12 col-md-10 offset-md-1">
								{
									arrayCitta.map((citta) => {
										return (
											<>

												<MyContext.Provider value={citta}>
													<Accordion key={citta.id}>
														{
															citta.giorni.map((giorno, i) => {
																return (

																	<MyContext.Provider value={{ giorno: giorno, numeroGiorni: citta.giorni.length }}>

																		<DayCard boleano={i < 1} key={giorno.id}></DayCard>
																	</MyContext.Provider>

																)
															})
														}
													</Accordion>
												</MyContext.Provider>
											</>
										)
									})

								}

							</div>
						</div>

					</div>
				</MyContext.Provider>
				<Footer></Footer>
					,
			</>
		);

	} else {
		return <></>
	}

}


