import React from 'react'

import './App.css'

import Products from './components/Products';






function App() {

  const products=[
    {
      id:'p1',
      title:'Nirma',
      amount:100,
      date:new Date(2021,8,10)
    },
    {
      id:'p2',
      title:'Nirma2',
      amount:1001,
      date:new Date(2021,8,10)
    },
    {
      id:'p3',
      title:'Nirma3',
      amount:1003,
      date:new Date(2021,8,10)
    },
    {
      id:'p4',
      title:'Nirma4',
      amount:1004,
      date:new Date(2021,8,10)
    }
  ];

  return (
   <div>
    <Products item={products} />
   </div>
  )
}

export default App
