import { useState, useContext } from 'react'
import '../Contact/Contacting.css'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
//import { ContextData } from '../../Context/useContext'
import Loader from '../../component/Loader/Loader'




const Register = () => {

  const navigate = useNavigate()
 //const {addUser, setMytoken} = ContextData()

 const [Loader, setLoader] = useState(false)

  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    password: "",
    confirmpassword: ""
  })

  const [showData, setData] = useState({
    firstname: "",
    email: "",
    password: "",
    confirmpassword: "",
  })

  const showMe = () =>{
    setData({...formData})
    setFormData({
     firstname: "",
    email: "",
    password: "",
    confirmpassword: "",
    })
  }



  const handchange = (e) =>{
    const {name, value} = e.target;
    setFormData({
     ...formData,
      [name] : value
    })
  }

  const createAct = async() =>{
    setLoader(true)
    try{
        const emptyfield = []

    if(!formData.firstname || formData.firstname.trim() === ""){
      emptyfield.push("first name")
    }

      if(!formData.email || formData.email.trim() === ""){
      emptyfield.push("email")
    }
    
      if(!formData.password || formData.password.trim() === ""){
      emptyfield.push("password")
    }

      if(!formData.confirmpassword || formData.confirmpassword.trim() === ""){
      emptyfield.push("confirm password")
    }

    if(emptyfield.length > 0){
      emptyfield.forEach((item)=>{
        toast.error(`${item} cannot be empty`)
      })
       setLoader(false)
      return;
    }

    if(formData.password !== formData.confirmpassword){
      toast.error("password do not match")
    }

const response =  await axios.post("http://localhost:2233/api/v1/register", formData, {
  headers: { "Content-Type": "application/json" }
});

    /*const response =  await axios.post("https://nodecodarproject.onrender.com/api/v1/register", formData, {
  headers: { "Content-Type": "application/json" }
});*/

   console.log("response:", response.data)
     
if(response && response.status === 200 && response.data){

  //await addUser(response.data.user)
  //await setMytoken(response.data.token)

  toast.success("register successfully")
  navigate("/Signin")
    return;
}else{
  toast.error("error occurred while creating registration")
   setLoader(false)
  return
}
    
   
    }catch(err){
      if(err.response){
        console.log("Error response data:", err.response.data)
        console.log("Error response status:", err.response.status)
        console.log("Error response header:", err.response.headers)

        toast.error(` ${err.response.data.message} || ${err.message}`)
      }else{
        console.log("error:", err.message)
        toast.error("error occurred")
      }
    }
  
  }


  return (
    <>
    
      <div className='register'>
      <div className='d-flex align-item-center justify-content-left text-align-center'><h5>Register</h5></div>
      <div className='container'>
       
       <form className='form-control'  method='post'>
           <input type='text' className='form-control' name='firstname' placeholder='your name'
            value={formData.firstname} onChange={handchange}
           />
           <input type='email' className='form-control' name='email' placeholder='email'
            value={formData.email} onChange={handchange}
           />
           <input type='password' className='form-control' name='password' placeholder='password'
            value={formData.password} onChange={handchange}
           />      
           <input type='password' className='form-control' name='confirmpassword' placeholder='confirm password'
            value={formData.confirmpassword} onChange={handchange}
           />
           
           {Loader? (
            <div className='button'>
            submit
           </div>
           ) : (
            <div className='button' onClick={createAct}>
            submit
           </div>
           )}

       </form>
    
       </div>

      {/*<div>Name: {showData.firstname}</div>
       <div>Email: {showData.email}</div>
        <div>password: {showData.password}</div>
         <div>confirmpassword: {showData.confirmpassword}</div>*/}
     </div>
    </>
  )
}

export default Register
