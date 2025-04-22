import LudoBoard from './LudoBoard'
import './App.css'
import TodoList from './TodoList'
import Lottery from './Lottery'

// function App() {
 
//   return (
//     <>
//      <LudoBoard/>
//     </>
//   )
// }






//todo List


// function App() {
 
//   return (
//     <>
//      <TodoList/>
//     </>
//   )
// }

// export default App








//lottery





// export default function App() {
 
//   return (
//     <>
//    <Lottery/>
//     </>
//   )
// }


//lottery ghame me advance feature ke liye



export default function App() {
 
  return (
    <>
   <Lottery n={3} winningsum={15}/>
    </>
  )
}













// component wisae kr diye hai
// lottery me kuch component add krke functionality laaye hai


//  import TicketNum from './TicketNum' 
//  import Ticket from './Ticket' 

// export default function App() {
 
//   return (
//     <>

//    {/* <TicketNum num={5}/> */}
//    {/* <TicketNum num={0}/>
//    <TicketNum num={1}/> */}

//    <Ticket ticket={[5,1,2]}/> 
//                      {/* ticket me ek array pass kr rhe as a props in Ticket component */}
//     </>
//   )
// }