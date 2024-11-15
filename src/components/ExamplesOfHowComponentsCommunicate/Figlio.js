import React from 'react';

const Figlio = ({ onInviaMessaggio,onInviaMessaggioFratello ,messaggioPadre,messaggioDalFratelloDue }) => {

    const inviaMessaggio = () => {
        onInviaMessaggio('Ciao dal componente figlio!');
    };

    const inviaMessaggioFratello = () => {
        onInviaMessaggioFratello("Ciao da tuo Fratello");
    }



    return (
        // <div style={{border: '1px solid red'}}>
        <div>
            <h2>Componente Figlio</h2>
            <p>Messaggio dal padre: {messaggioPadre}</p>
            <button onClick={inviaMessaggio}>Invia Messaggio al Padre</button>
            <button onClick={inviaMessaggioFratello}>Invia un messaggio a tuo fratello</button>
            <p>{`Messaggio dal fratello due: ${messaggioDalFratelloDue}`}</p>
        </div>
    );
};

export default Figlio;
