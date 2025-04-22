
import './Product.css'

import Price from './Price'

// export default function Product({ title, price = 1 }) {

//     let isDiscount=price>3000?"Discount of 5%" : "No Discount,(price is less than 3000)"
    
//      let styles={backgroundColor:price>3000? "Aqua":""}

//         return (
//             <div className="Product" style={styles}>
//                 <h3> {title} </h3>
//                 <h5>price : {price}</h5>
//                 <p>{isDiscount}</p>
//             </div>
//         )
// }





    //idx and title jo producttab se aa rha hai,usi idx ke according prices array ke value pass hoga
export default function Product({ title,idx }) {
 let oldprices=["12,985","87,568","58,896" ,"67,568"];
 let newprices=["82,985","27,568","68,896" ,"69,568"];
 let description=["8,000 DPi","intuitive Surface","designed for ipad pro","wireless"];
  

        return (
            <div className="Product" >
               <h4>{title}</h4>
               <p>{description[idx]}</p> 

                               {/* oldprice me idx index wala val pass kro,idx jo props se aa rha hai */}
               <Price oldprice={oldprices[idx]} newprice={newprices[idx]}/>    
            </div>
        );
}










