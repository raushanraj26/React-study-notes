//  product.jsx ko import  krega then issko export krega
// jo kamm product ko App.js me kr rhe the wo yaha kr rhe hai
import Product from "./product.jsx"


// function productTab(){
//     return (
//         <>
//              <Product/>
//              <Product/>
//              <Product />

//         </>
//     );
// }



//   --React Props---



// function productTab(){
//     return (
//         <>
//              <Product title="phone"  price={3000} />
//              <Product title="laptop" price={60000} />
//              <Product  title="computer"  />

//         </>
//     );
// }



//passing array to props



// function productTab(){

//     let option =["a","b","c"];
//     let option2=["d","e","f"];
//     return (
//         <>
//              <Product title="phone"  price={3000} features={option} features2={option2} />
//              {/* <Product title="laptop" price={60000} />
//              <Product  title="computer" price={60000} /> */}

//         </>
//     );
// }









//Rendering Arrays






// function productTab(){

//     // let option =[<li>abc</li>,<li>def</li>,<li>Here ,noty passing any string,bt passing html code</li> ];
                 
//     // for map concept
//      let option =["abc","def","ghi" ];
  
//     return (
//         <>
//              <Product title="phone"  price={3000} features={option} />
             

//         </>
//     );
// }







//for conditional 



function productTab(){

   
  
    return (
        <>
             <Product title="phone"  price={3000}  />
             <Product title="laptop"  price={50000}  />
             <Product title="pencil"  price={1000} />
             

        </>
    );
}


export default productTab;