import React,{useState} from 'react'

const Form = (props) => {
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const[errors,setErrors]=useState("");

    const validation =(e) => {
        const newErrors ={};
        if (firstName.length< 2){newErrors.firstName="First Name must at least 2 characters";}
        if (lastName.length< 2){newErrors.lastName="Last Name must at least 2 characters";}
        if (email.length< 8){newErrors.email="Email must at least 8 characters";}
        if (password.length<8){newErrors.password="Password must at least 8 characters";}
        if (confirmPassword != password){newErrors.confirmPassword="Password must much";}

        setErrors(newErrors);
        console.log(newErrors);

    }
    const notvalid={
        color:"red",
        fontSize:"20px",
    }
    const formDataDivStyle = {
        color: "green",
        
        textAlign: "left", 
        width: "450px", 
        margin: "auto",
      }
    
      const inputDataDivStyle = {
        color: "blue",
        borderRadius: "5px",
        backgroundColor: "light",
        border: "5px solid darkgrey",
        textAlign: "center",
        padding: "20px 10px",
        margin: "10px",
      }

  return (
    <div>
        <form style={{ marginTop: "20px" }}>
        <div style={inputDataDivStyle}>
          <label >First Name  </label>
          <input type="text" name="firstName" onChange={ (e) => setFirstName(e.target.value) }/> 
          {errors.firstName && <p style={notvalid}>{errors.firstName}</p>}
        </div>
        <div style={inputDataDivStyle}>
          <label >Last Name  </label>
          <input  type="text" name="lastName"  onChange={ (e) => setLastName(e.target.value) } />
          {errors.lastName && <p style={notvalid}>{errors.lastName}</p>}
        </div>
        <div style={inputDataDivStyle}>
          <label >Email   </label>
          <input type="text" name="email"  onChange={ (e) => setEmail(e.target.value) } />
          {errors.email && <p style={notvalid}>{errors.email}</p>}
        </div>
        <div style={inputDataDivStyle}>
          <label >Password   </label>
          <input type="password" name="password" onChange={ (e) => setPassword(e.target.value) } />
          {errors.password && <p style={notvalid}>{errors.password}</p>}
        </div>
        <div style={inputDataDivStyle}>
          <label >Confirm Password   </label>
          <input type="password" name="confirmPassword"  onChange={ (e) => setConfirmPassword(e.target.value) }/>
          {errors.confirmPassword && <p style={notvalid}>{errors.confirmPassword}</p>}
        </div>
        <button type="button" onClick={validation} > submit </button>
      </form>

    </div>
  )
}

export default Form;
