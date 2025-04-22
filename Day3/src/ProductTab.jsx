import Product from './Product'


// export default function ProductTab(){
//     return (
//         <>
//              <Product title="phone"  price={3000}  />
//              <Product title="laptop"  price={50000}  />
//              <Product title="pencil"  price={1000} />
             

//         </>
//     );
// }





// Activity->rendering amazzon like comnponent



export default function ProductTab(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"cenetr"
    }
    return (
        <div style={styles}>
             
             <Product title="Dell LAptop" idx={0} />
             <Product title="Hp thinkpad" idx={1}  />
             <Product title="MAcBook Air M2" idx={2} />
             <Product title="LEnovo 360 Move" idx={3} />
             

        </div>
    );
}



