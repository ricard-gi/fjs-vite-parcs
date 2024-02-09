
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


function Detall(props) {

    const {nom} = useParams()

    const parc = props.dades.find(e => e.nom===nom)

    return (
        <>
            <h1 className="text-xl pb-4">{parc.titol}</h1>
            <p className="pb-4">{parc.text}</p>
            <img className="w-2/3 m-auto" src={parc.imatge} />
         
        </>
    )
}


export default Detall;
