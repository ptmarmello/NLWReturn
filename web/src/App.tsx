import { useState } from 'react'
import { Widget } from './components/Widget'

// uma forma de criar um componente com typescript:

// interface Buttonprops{
//   text: string,
//   onClick: () => void,
//   as?: string // nesse caso a interrogação indica que o atributo pode ser omitido
// }

function App() {
  
  return (
    <>
      <Widget/>
    </>
  )
}

export default App
