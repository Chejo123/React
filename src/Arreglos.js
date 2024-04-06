import React from 'react';



function App() {
  const nombres = ['sergio', 'rene'];

  return (
    <div>
      <h1>Lista de nombres</h1>
      <ul>
        {nombres.map((nombre, index) => (
          <li key={index}>{nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;