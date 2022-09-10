import * as S from './styles'
import { Item } from '../../types/Item'
import { useState } from 'react';

// All components that receives  props must be typed.
type Props ={
    item: Item
}

export const ListItem = ({item}: Props)=>{
    const [isChecked, setIsChecked] = useState(item.done);

    return(
        <S.Container done={isChecked}>
            <input 
                type="checkbox"
                checked={isChecked}
                onChange= {e=> setIsChecked(e.target.checked)}
            />

            <label>{item.name}</label>
        </S.Container>
    );
}

