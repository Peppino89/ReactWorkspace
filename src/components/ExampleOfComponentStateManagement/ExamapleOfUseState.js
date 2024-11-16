import React, { useState } from 'react';

const ExampleOfUseStatet = () => {
  // Dichiarazione di uno stato con il valore iniziale
  const [count, setCount] = useState(0);

  // Funzione per incrementare il contatore
  const increment = () => {
    setCount(count + 1);
  };

  // Funzione per decrementare il contatore
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Gestione dello Stato in React</h2>
      <p>Contatore: {count}</p>
      <button onClick={increment}>Incrementa++</button>
      <button onClick={decrement}>decrementa</button>
    </div>
  );
};

export default ExampleOfUseStatet;
