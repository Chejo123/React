import React, { useState } from 'react';

const ListaElementos = () => {
  const [elementos, setElementos] = useState([
    { id: 1, nombre: 'Elemento 1' },
    { id: 2, nombre: 'Elemento 2' },
    { id: 3, nombre: 'Elemento 3' },
  ]);
  const [editandoId, setEditandoId] = useState(null);
  const [textoEditado, setTextoEditado] = useState('');

  const handleEditar = (id, nombre) => {
    setEditandoId(id);
    setTextoEditado(nombre);
  };

  const handleGuardar = (id) => {
    const nuevosElementos = elementos.map((elemento) =>
      elemento.id === id ? { ...elemento, nombre: textoEditado } : elemento
    );
    setElementos(nuevosElementos);
    setEditandoId(null);
  };

  const handleEliminar = (id) => {
    const nuevosElementos = elementos.filter((elemento) => elemento.id !== id);
    setElementos(nuevosElementos);
  };

  return (
    <div>
      <h2>Lista de Elementos</h2>
      <ul>
        {elementos.map((elemento) => (
          <li key={elemento.id}>
            {editandoId === elemento.id ? (
              <input
                type='text'
                value={textoEditado}
                onChange={(e) => setTextoEditado(e.target.value)}
              />
            ) : (
              elemento.nombre
            )}
            {editandoId === elemento.id ? (
              <button onClick={() => handleGuardar(elemento.id)}>Guardar</button>
            ) : (
              <button onClick={() => handleEditar(elemento.id, elemento.nombre)}>Editar</button>
            )}
            <button onClick={() => handleEliminar(elemento.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaElementos;