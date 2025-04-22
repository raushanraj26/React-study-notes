//counter app by js


// export default function Counter(){


//     let count=0;
//     function inCount(){
//         count+=1;
//         console.log(count);

//     } 

// return (
//     <div>

//         {/* but line 19 me count ka value show nii hoga ,isiliye useSATE USE KRNGE KI UI ME V SHOW HO */}
//         <h3>Count: {count}</h3>
//         <button onClick={inCount}>Increase Count</button>
//     </div>
// )


// }



// update UI by using useState()






// import { useState } from "react"

// export default function Counter(){
//     let [count,setCount]=useState(0);   //declaration of useState,kaise work krta ,reference padh lo
//                 //  setCount me value kisi function se aayega set krne ko

//     let incCount= ()=>{
//         setCount(count + 1);  //setCount me count+1 value diye hai count ko set krne ko
//         // console.log(count);
//     };



// return (
//     <div>
//         <h3>Count: {count}</h3>
//         <button onClick={incCount}>Increase Count</button>
//     </div>
// )


// }




//  callack in state function




// import { useState } from "react"

// export default function Counter() {
//     let [count, setCount] = useState(0);

//     // count ke value pahle wale pe depend hai,
//     // multiple time likha hai yaha count+1 bt change ek brr hi hoga

//     // let incCount = () => {
//     //     setCount(count + 1);
//     //     setCount(count + 1);
//     //     setCount(count + 1);
//     //     setCount(count + 1);
//     // };


// //    "return " lg jaane se jitna brr likh rhega utna brr change hoga

// let incCount = () => {
//     setCount((count)=>{
//             return  count=count+1
//     });
//     setCount((count)=>{
//         return  count=count+1
// });
// setCount((count)=>{
//     return  count=count+1
// });
    
// };


// // setCount(25);    //25 hi rhega qki fixed hai,depend ni hao count pe


//     return (
//         <div>
//             <h3>Count: {count}</h3>
//             <button onClick={incCount}>Increase Count</button>
//         </div>
//     )


// }






//more about states





import { useState } from "react"



function init(){
    return Math.random();
}

export default function Counter() {
    let [count, setCount] = useState(init());    //initialisation with random value,init function pass hua toh ye brr brr render hoga so direct pass kro

    let incCount=()=>{
        setCount((count)=>{
            return count+1;
        })
    }
    
    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )


}