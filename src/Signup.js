import React, { useState } from 'react'
import cart from '../src/cart.png'
import { useNavigate } from "react-router-dom";

const Signup = () => {


  const [formValues, setFormValues] = useState({
    username: "",
    password: ""
  })

  let navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault()
    setFormValues({ username: '', password: '' }) //clear input after submittion
    //window.localStorage.setItem("id", JSON.stringify(formValues))


    if (formValues.username === "") {
      alert("Please fill out this fields as it is required. ")
    } else if (formValues.password === "") {
      alert("Please fill out this fields as it is required. ")
    } else {
      navigate('/home2')
    }
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setFormValues({ ...formValues, [name]: value }) //(...formValues) -> whatever the user is, its going to be assigned in the name/value
  }



  return (
    <div class="overall">
      <img src={cart} class="cartimg" alt="cart image" />
      <div class="FormControl">
        <form onSubmit={submitHandler} >
          <h2 class="signup">SIGN UP</h2>
          <p class="loginn">Please enter your login and password</p>
          <div class="inputstyle">
            <input type="text" name="username" value={formValues.username} onChange={handleChange} placeholder="EMAIL" />
            <input type="password" name="password" value={formValues.password} onChange={handleChange} placeholder="PASSWORD" />
            <input type="submit" name="submit" value="SIGN UP" class="subbtn" />
          </div>
        </form>
        <a href='/home' class="signupLink">Continue Without Signing In</a>
      </div>

    </div>
  )
}

export default Signup