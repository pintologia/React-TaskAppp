import * as C from './App.styles';
import {useState} from 'react';
import { Item } from './types/Item';
import { ListItem } from './components/listItem';
import { AddArea } from './components/AddArea'

function App()  {

  const [list, setList] = useState <Item[]>([
    {id: 1, name:'Comprar pão', done: false},
    { id: 1, name: 'Comprar pão', done: false }
  ])

  const handleAddText = (taskName: string) => {
    // Clonando a list
    let newList = [...list]
    // acionando o clone
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }
  return (
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de Tarefas
        </C.Header>
        {/* Add área deve receber essa props */}
        <AddArea onEnter={handleAddText} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App
