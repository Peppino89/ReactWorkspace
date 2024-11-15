import React, { useState } from 'react';
import Figlio from './Figlio';
import FiglioDue from "./FiglioDue";

const Padre = () => {
    const [messaggioFiglio, setMessaggioFiglio] = useState('');

    const [messaggioPadre, setMessaggioPadre] = useState('');

    const [messaggioFratello, setMessaggioFratello] = useState('');

    const [messaggioDalFratelloDue, setMessaggioFratelloDue] = useState('');

    //il padre riceve dal figlio
    const riceviMessaggioFiglio = (msg) => {
        setMessaggioFiglio(msg);
    };

    //il padre invia al figlio
    const inviaMessaggioAlFiglio = () => {
        setMessaggioPadre('Ciao dal componente padre!');
    };


    //Comunico con il fratello ovvero il componente Figlio invia un messaggio al componente  FiglioDue
    const inviaMessaggioAlFratello = (msgFratello)=>{
        setMessaggioFratello(msgFratello);
    }

    // il componente FiglioDue comunica al componente Figlio
    const riceviMessaggioDalFratelloDue = (msg) => {
        setMessaggioFratelloDue(msg);
    }


    return (
        <div>
            <h1>Componente Padre</h1>
            <p>Messaggio dal figlio: {messaggioFiglio}</p>
            <p>Messaggio al figlio: {messaggioPadre}</p>
            <button onClick={inviaMessaggioAlFiglio}>Invia Messaggio al Figlio</button>

            <Figlio
                onInviaMessaggioFratello={inviaMessaggioAlFratello}
                onInviaMessaggio={riceviMessaggioFiglio}
                messaggioPadre={messaggioPadre}
                messaggioDalFratelloDue={messaggioDalFratelloDue}
            />
            <FiglioDue messaggioFratello={messaggioFratello} onInviaMessaggioFrattelloUno={riceviMessaggioDalFratelloDue} />

        </div>
    );
};

export default Padre;
