import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';

function App(){

  const [ searchText, setSearchText ] = useState('');
  const [ list, setList ] = useState([]);

  useEffect(()=>{
    setList([
      {title:'Arroz', done:false},
      {title:'Feijão', done: true},
      {title:'Óleo', done: true},
      {title:'Açúcar', done: false},
      {title:'Macarrão', done: false},
      {title:'Farinha', done: true}
    ]);
  }, []);

  function handleSearchInput(novoTexto) {
    setSearchText(novoTexto)
  }

  return (
    <>
      <h1>Lista de Itens</h1>
      <SearchBox 
        frasePadaro="Faça sua busca..."
        onChangeText={handleSearchInput}
      />

     <hr/>

    <ul>
      {list.map((item, index) =>(
        <li key={index}>{item.title} - {item.done.toString()}</li>
      ))}
     </ul>
    </>
  );
}

export default App;
