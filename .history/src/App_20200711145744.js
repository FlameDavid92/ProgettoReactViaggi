import React, { useState, useEffect } from 'react';
import './App.css';
import MyContext from './MyContext';
import Accordion from './components/Accordion';
import * as utilita from './mappingJson';
import TopTitledImage from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Referente from './components/Referente/Referente';
import LeafletMap from './components/Leaflet/Leaflet';



const urlJSON = 'http://51.77.82.133:86/api/quotations/QUO_5e5e2952ae57f#'

export default function App() {
	//sto creando una variabile di stato e la inizializzo ad un oggetto vuoto
	const [datiJson, setDatiJson] = useState(null)
	const [arrayCitta, setArrayCitta] = useState([])
	

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

	if (datiJson != null && arrayCitta.length>0) {
		console.log(arrayCitta)

		return (
			<>
				<MyContext.Provider value={datiJson}>
					<TopTitledImage></TopTitledImage>
					<div className="container">
						<LeafletMap></LeafletMap>
						<MyContext.Provider value={{operator: datiJson.operator, agency: datiJson.agency}}>
							<Referente></Referente>
						</MyContext.Provider>

						<div className="row">
							<div className="col-12 col-md-10 offset-md-1">
								{
									arrayCitta.map((citta) => {
										return (
											<>

											<MyContext.Provider value={citta}>
												<Accordion key={citta.id}>
												
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


