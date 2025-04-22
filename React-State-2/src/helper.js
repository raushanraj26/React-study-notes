 function genTicket(n){
    let arr=new Array(n);   //n random number geberate krke return kr do
    for(let i=0;i<n;i++){
        arr[i]=Math.floor(Math.random()*10);     //10 is the range 0-10
    }
    return arr;

}
  

//array ka sum return krega for checking array sum==15 or not
 function sum(arr){
    return arr.reduce((sum,curr)=>sum+curr,0);
}


export {genTicket,sum}