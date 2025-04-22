
import './App.css'
import {Title} from "./title.jsx"
import Product from "./product.jsx"
import ProductTab from "./productTab.jsx"



// function Title() {
//   return <h1>I am the title</h1>;
// }


// function Description() {
//   return <h3>I am the Description</h3>;
// }

// function App() {
//   // return <Title/>
//   return (
//     <div>
//        <h1> This is app component</h1>
//        <p> inside app component</p>
//        <Title/>
//        {/* <Description/> */}
//     </div>
//   );
// }


//structuring component


// function App() {
//   // return <Title/>
//   return (
//     <>
//        <Product/>
//        <Product/>
//     </>
//   );
// }



function App() {
  
  return (
    <>
       <ProductTab/>
      
    </>
  );
}








export default App;
