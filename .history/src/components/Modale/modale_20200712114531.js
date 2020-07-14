import React, {useState} from 'react';

export default function Modale({click}){
    const [opened, setOpened] = useState(false);

    const chiudiModale = ()=>{
        setOpened(false);
    }
    useEffect(() => {
        setOpened(true);
    }, [click]);
    return(<></>)
}