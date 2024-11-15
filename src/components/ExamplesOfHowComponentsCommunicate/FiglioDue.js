import React from "react";

const FiglioDue = ({messaggioFratello, onInviaMessaggioFrattelloUno}) => {

    const inviaMessaggioFratelloUno = () => {
        onInviaMessaggioFrattelloUno("Ciao ti ringrazio")
    }
    return (


        <div>
            {/*<p style={{border:'1px solid blue'}}>{`Messaggio da tuo fratello: ${messaggioFratello}`}</p>*/}
            <p>{`Messaggio da tuo fratello: ${messaggioFratello}`}</p>
            <button onClick={inviaMessaggioFratelloUno}>Invia Messaggio al fratello Uno</button>
        </div>

    );

}

export default FiglioDue;