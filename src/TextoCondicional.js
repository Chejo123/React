import React, {useState} from 'react';

const App =() =>{
const[mostrarTexto, setMostrarTexto]=useState(false);
return(
<div>
<button onClick={()=>setMostrarTexto(!mostrarTexto)}>
{mostrarTexto ? 'Ocultar Texto' : 'Mostrar Texto'}
</button>
{mostrarTexto && <p> Este es el texto que se va mostrar condicionalmente</p>}
</div>
);
};

export default App; 