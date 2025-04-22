import React, { useState } from 'react'

export default function  LudoBoard() {
    // individual move ke liye use state bnaao ya Object bnaa do
    let [moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0});   //object bnaa ke chaaro moves ko 0 se initialise kiye hai
   

    
    let updateBlue=()=>{
        // setMoves({...moves,blue:moves.blue+1});   //Ab UI pe render hoga qki state me detect hoga becoz address change ho rha 
             //purani value me count depends hai so use callback
        setMoves((prevMoves)=>{
           return  {...prevMoves,blue:prevMoves.blue + 1}
        })
    };

    let updateYellow=()=>{
        
        setMoves((prevMoves)=>{
           return  {...prevMoves,yellow:prevMoves.yellow + 1}
        })
    };

    let updateGreen=()=>{
        
        setMoves((prevMoves)=>{
           return  {...prevMoves,green:prevMoves.green + 1}
        })
    };

    let updateRed=()=>{
        
        setMoves((prevMoves)=>{
           return  {...prevMoves,red:prevMoves.red + 1}
        })
    };
  
  
    return (
    <div>
        <p>Games Begins!</p>
        <div>
            <p>Blue moves={moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>

            <p>yellow moves={moves.yellow}</p>
            <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateYellow}>+1</button>

            <p>Green moves={moves.green}</p>
            <button style={{backgroundColor:"green" }} onClick={updateGreen}>+1</button>

            <p>Red moves={moves.red}</p>
            <button style={{backgroundColor:"red"}} onClick={updateRed }>+1</button>
        </div>
    </div>
  )
}
