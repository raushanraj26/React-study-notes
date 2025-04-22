import React from 'react'
import "./Lottery.css"
import { useState } from 'react'
import {genTicket,sum} from "./helper"   //for genrating random no


// export default function Lottery () {
//   let [ticket,setTicket]=useState(genTicket(3));   //setTicket ke liye alg file me function likhe hai ,
//                                                           //  genTicket(3) ,3 random number chaheye ,jo function me pass kre hai helper.js file me
 


//    //ticket ek 3 size ka array hai and isWinning me boolean val store hoga
// let isWinning=sum(ticket)==15;



// // button click krne pe random number gebnearte krenge by genTicket() fun from helper.js File
// // ang us no ko render krne ke liye setTicket me assign krneg then update ho jaayega
// function buyTicket(){
//                                        // generate krke update kr do
//   setTicket(genTicket(3));    
// }

//  return (
//     <div>
//       <h1>Lottery Game!!</h1>
//       <div className='ticket'>
//                                         {/* //ticket 3 size rray h so index wizse print kro */}
//         <span>{ticket[0]}</span>
//         <span>{ticket[1]}</span>
//         <span>{ticket[2]}</span>

//       </div>

// <br />
//           <button onClick={buyTicket}>Buy new Ticket</button>

//       {/* <h3>{isWinning &&"Congrats,you Won (ur lottery digits sum is equal to 15)"}</h3> */}
      
//        { isWinning
//         ? <h3 style={{ color: "yellow" }}>Congrats,you Won (ur lottery digits sum is equal to 15)</h3>
//         : <h2 >"try !! Lottery digit  sum is not equal to 15"</h2>
//        } 
      
//     </div>
//   )
// }

















//advance features in lottery game









import Ticket from './Ticket'



// n->size of Lottery,winning sum->kitna sum hone pe win hoga
export default function Lottery ({n,winningsum}) {
  let [ticket,setTicket]=useState(genTicket(n));   //setTicket ke liye alg file me function likhe hai ,
                                                          //  genTicket(3) ,3 random number chaheye ,jo function me pass kre hai helper.js file me
 


   //ticket ek 3 size ka array hai and isWinning me boolean val store hoga
   //sum helper.js file me likha hai
let isWinning=sum(ticket)===winningsum;



// button click krne pe random number gebnearte krenge by genTicket() fun from helper.js File
// ang us no ko render krne ke liye setTicket me assign krneg then update ho jaayega
function buyTicket(){
                                       // generate krke update kr do
  setTicket(genTicket(n));    
}

 return (
    <div>
      <h1>Lottery Game!!</h1>
                                             {/* //passing ticket array */}
     <Ticket ticket={ticket}/>    

<br />
          <button onClick={buyTicket}>Buy new Ticket</button>

      <h3>{isWinning &&"Congrats,you Won !"}</h3>
      
       {/* { isWinning
        ? <h3 style={{ color: "yellow" }}>Congrats,you Won (ur lottery digits sum is equal to 15)</h3>
        : <h2 >"try !! Lottery digit  sum is not equal to 15"</h2>
       }  */}
      
    </div>
  )
}