export default function MsgBox({username,textColor}){
    let styles={color:textColor}; //jo textColor props me aayega

    return (
    <h1 style={styles}>
         Hello,{username} 
         </h1>
         )
}