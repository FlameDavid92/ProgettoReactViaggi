import React from "react";
import MyContext from "../../MyContext";
import "./referente.css";

export default function Referente() {
    const contesto = React.useContext(MyContext);
    const iconaAzienda =
        "https://media-cdn.tripadvisor.com/media/photo-s/19/5e/9c/2c/this-is-our-business.jpg";
    return (
        <div className="reference-card shadow p-4 mb-4">
            <div className="row align-items-center">
                <div className="col-12 col-lg-5">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-6 col-lg-4">
                            <img
                                alt="immagine"
                                className="tiny-img"
                                src={contesto.operator.image}
                            ></img>
                        </div>
                        <div className="col-6 col-lg-4">
                            <p className="tinyText">
                                Il tuo referente è{" "}
                                <span className="mycolor-orange">{contesto.operator.name}</span>
                                <br />
                                <br />
                                <span className="tinyText">
                                    Tel: {contesto.operator.contact.phone}
                                </span>
                                <br />
                                <span className="tinyText">
                                    Email: {contesto.operator.contact.email}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-1 separatore-card"></div>
                <div className="col-12 col-lg-6">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12">
                            <img alt="immagine" className="tiny-icon" src={iconaAzienda}></img>
                        </div>
                        <div className="col-12">
                            <p className="tinyText">
                                {contesto.agency.name}
                                <br />
                                {contesto.agency.contact.address}
                                <br />
                                {contesto.agency.contact.website}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
