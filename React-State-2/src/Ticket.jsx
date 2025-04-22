import React from 'react'
import TicketNum from './TicketNum'
import "./Ticket.css"

export default function Ticket({ticket}){   // ticket is an array of digit
                                             //props ke form me pass ho rha
  return (
    <div className='Ticket'>
        <p>Ticket : </p>
        {ticket.map((num,idx)=>(          //jitna digit hoga utna brr print krega TicketNum
            <TicketNum num={num} key={idx}/>
        ))
            
        }
    </div>
  )
}

