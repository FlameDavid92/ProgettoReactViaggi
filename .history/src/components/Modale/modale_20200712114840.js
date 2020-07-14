import React, {useState} from 'react';

export default function Modale({click}){
    const [opened, setOpened] = useState(false);

    const chiudiModale = ()=>{
        setOpened(false);
    }
    useEffect(() => {
        setOpened(true);
    }, [click]);

    return(
        opened ? (<>
            <div>
                <button className="btn btn-danger" onClick={chiudiModale}>X</button>
            </div>
        </>) 
        
        : <></>)
}