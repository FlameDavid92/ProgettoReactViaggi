import React, {useState, useEffect} from 'react';
import './modale.css';

export default function Modale({click}){
    const [opened, setOpened] = useState(false);

    const chiudiModale = ()=>{
        setOpened(false);
    }
    useEffect(() => {
        click && setOpened(true);
    }, [click]);

    return(
        opened ? (
            <div className="modale">
                <button className="btn btn-danger" onClick={chiudiModale}>X</button>
            </div>
        )
        : <></>)
}