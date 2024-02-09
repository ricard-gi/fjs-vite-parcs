
import {useContext} from 'react';
import Contexte from './Contexte';


function TriaIdioma(){

    const {idioma, setIdioma} = useContext(Contexte);


    return (
        <>

        <button disabled={idioma=="ca"} className="p-4 border mr-4" onClick={()=>setIdioma("ca")} >CA</button>
        <button disabled={idioma=="es"} className="p-4 border" onClick={()=>setIdioma("es")} >ES</button>
        
        </>
    )
}

export default TriaIdioma;

