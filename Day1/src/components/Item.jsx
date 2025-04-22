function Item(props){
   const itemName=props.name;  //name jo paramaeters se sned hua hai,name="Nirma"
   return (
     <div>
      <p>{itemName}</p>
      {props.children }     
     </div>
   )
}

export default Item;
 