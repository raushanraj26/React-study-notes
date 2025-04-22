function handleFormSubmit(event){
    event.preventDefault();  //ye ni rhne pe console bhut fast aakr dlt ho jaata tha,ab persistent rhega console log
    console.log("Form was Submitted");
}

export default function Form(){
    return (
        <form onSubmit={handleFormSubmit}>
            <input placeholder="Type something" />
            {/* <button onClick={handleFormSubmit}>Submit</button> */}
            <button>Submit</button>
        </form>
    )
}