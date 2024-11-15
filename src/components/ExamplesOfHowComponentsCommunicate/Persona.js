import React from 'react';

const Persona = ({nome,cognome,anni}) => {

    return(
     <>
         <h1>{`Benvenuto ${nome} ${cognome}`}</h1>
         <p>{`Ecco la tua età: ${anni}`}</p>
     </>
    );
}

export default Persona;