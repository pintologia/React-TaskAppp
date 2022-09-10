import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

type Props = {
    onEnter: (taskName: string)=> void
}

export const AddArea = ({onEnter}: Props) => {
    const [inputText, setInputText] = useState('')

    // e: KeyboardEvent evnto que nos permite capturar entered keyboard

    const handleKeyUp = (e: KeyboardEvent) =>{
        /* console.log(e.code); */
        if (e.code === 'Enter' && inputText !== ''){
            onEnter(inputText)
            setInputText('')
        }
    }
    return (
        
        <C.Container>
            <div className='image' >+</div>
            <input 
                type="text" 
                placeholder='Adicionar uma tarefa'
                value={inputText}
                onChange={e=> setInputText(e.target.value)}
                onKeyUp= {handleKeyUp}
            />
        </C.Container>
    );
}




/* 
'React' refers to a UMD global, but the current file is a module.Consider adding an import instead. */
//! import React from 'react'; 