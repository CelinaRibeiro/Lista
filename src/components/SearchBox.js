import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const InputText = styled.input`
    border: 1px solid #000000;
    border-radius: 5px;
    padding: 15px;
    font-size: 17px;
    width: 300px;
`;

function SearchBox(props) {

    const [texto, setTexto] = useState('');

    useEffect(()=>{
        if(props.onChangeText) {
            props.onChangeText(texto);
        }
    }, [texto]);

    return(
       <InputText 
            type="text" 
            value={texto}
            onChange={(e)=>setTexto(e.target.value)}
            placeholder={props.frasePadrao ?? "Digite no campo"}
        />
    );
}

export default SearchBox;