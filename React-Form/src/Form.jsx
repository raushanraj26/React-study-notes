import React, { useState } from 'react'

// const Form = () => {

//   let [fullName,setFullName]=useState("");
//   let [username,setUsername]=useState("");

//   let handleNameChange=(event)=>{
//     setFullName(event.target.value);
//   }

//   let handleUsername=(event)=>{
//     setUsername(event.target.value);
//   }


//   return (
//     <div>

//                                            {/* value={fullName}---->fulname ka initialisation useState ka initialisation hai */}
//       <label htmlFor="name">Full Name:</label>
//         <input type="text"  placeholder='Enter full name' value={fullName} onChange={handleNameChange} id='name' />


//           <br />
//         <label htmlFor="username">Username:</label>
//         <input type="username"  placeholder='Enter username' value={username} onChange={handleUsername} id='username' />
//         <button>Submit</button>

//     </div>
//   )
// }

// export default Form












// ------Handling Multiple inputs---->


// ------>we create a common handleChange() for all elements












const Form = () => {

  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password:"",
  });

  let handleInputChange = (event) => {
    // console.log(event.target.value);
    let fieldName = event.target.name;
   
    let newValue = event.target.value;
    setFormData((currData) => {
      currData[fieldName] = newValue;
      return { ...currData }
    })
  }

let handleSubmit=(event)=>{
  event.preventDefault();
  //form submit krne pe form ke reset kro
  console.log(formData);
  setFormData({
    fullName: "",
    username: "",
    password:"",
  })
}

  return (
    <form onSubmit={handleSubmit}>

      {/* value={fullName}---->fulname ka initialisation useState ka initialisation hai */}
      <label htmlFor="name">Full Name:</label>
      <input type="text" placeholder='Enter full name' value={formData.fullName} onChange={handleInputChange} id='name'
        name='fullName' />


       {/* name='fullName'===> name should be equal as initialisation value so use its key provided in (jaha usestate define hai 66-67) */}
      

      <br />
      <br />
      <label htmlFor="username">Username:</label>
      <input type="username" placeholder='Enter username' value={formData.username} onChange={handleInputChange} id='username' name="username" />
      <br />
      <br />


      
      <label htmlFor="password">password:</label>
      <input type="password" placeholder='Enter password' value={formData.password} onChange={handleInputChange} id='password' name="password" />
      
      <br />
      <br />
      <button>Submit</button>

    </form>
  )
}

export default Form
