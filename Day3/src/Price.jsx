export default function Price({oldprice,newprice}){
    let oldstyle={
        textDecoration:"line-through",
    };
    let newstyle={
        fontWeight:"bold",
    };

    let styles={
        backgroundColor:"yellow",
        height:"30px",
        borderBottomRightRadius:"14px",
        borderBottomleftRadius:"14px",
    };
    return(
        <div style={styles}>
        <span style={oldstyle}>{oldprice}</span>
        &nbsp;  &nbsp;  &nbsp;
       <span style={newstyle}>{newprice}</span>
        </div>
        
    );
}