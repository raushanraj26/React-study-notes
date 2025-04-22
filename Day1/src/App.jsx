

import './App.css'

import Item from './components/Item'
import ItemDate from './components/ItemDate'


// function App() {

//   return (
//     <>
//     <Item name="Nirma" ></Item>
//     <ItemDate day="20" month="June" year="2021"></ItemDate>

//     <Item name="surf" ></Item>
//     <ItemDate day="28" month="may" year="2000"></ItemDate>


//     <Item name="soap" ></Item>
//     <ItemDate day="20" month="Jly" year="2001"></ItemDate>


//     <Item name="Tide" ></Item>
//     <ItemDate day="01" month="June" year="2024"></ItemDate>

//      Hello Raushan,This is Basic Div for exmample.
//     </>
//   )
// }


                           


                            // 2nd method to pass pros





function App() {
 
  const response=[
    {
      name:"Nirma",
      day:"1",
      month:"June",
      year:"1"

    },
    {
      name:"Nirma2",
      day:"12",
      month:"June",
      year:"1"

    },
    {
      name:"Nirma3",
      day:"1",
      month:"June3",
      year:"1"

    },
    {
      name:"Nirma4",
      day:"1",
      month:"June4",
      year:"1"

    }
  ]


  return (
    <>
    <Item name={response[0].name} >  Hello jee, Mai hi Hu children (props.children)</Item>
    <ItemDate day={response[0].day} month={response[0].month} year={response[0].year}></ItemDate>

    <Item name={response[1].name} ></Item>
    <ItemDate day="28" month="may" year="2000"></ItemDate>


    <Item name={response[2].name} ></Item>
    <ItemDate day="20" month="Jly" year="2001"></ItemDate>


    <Item name={response[3].name}></Item>
    <ItemDate day="01" month="June" year="2024"></ItemDate>

     Hello Raushan,This is Basic Div for exmample.
    </>
  )
}





export default App
