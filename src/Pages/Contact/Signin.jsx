import { useState, useContext } from 'react'
import '../Contact/Contacting.css'
import toast from 'react-hot-toast'
import axios from 'axios'
import { ContextData } from '../../Hooks/Formcontext'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
   const Navigate = useNavigate()
 const {addUser, setMytoken} = ContextData()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  
 //  await addUser(response.data.user)
 // await setMytoken(response.data.token)

  const handchange = (e) =>{
    const {name, value} = e.target;
    setFormData({
     ...formData,
      [name] : value
    })
  }

  const loginlogic = async() =>{
    try{
      const empty = []
    if(!formData.email || formData.email.trim() === ""){
      empty.push("email is required")
    }

    if(!formData.password || formData.password.trim() === ""){
      empty.push("password is required")
    }

    if(empty.length > 0){
      empty.forEach((item) =>{
        toast.error(item)
      })
      return;
    }

       
const response =  await axios.post("http://localhost:2233/api/v1/login", formData, {
  headers: { "Content-Type": "application/json" }
});

       if(response && response.status === 200 && response.data){
        await addUser(response.data.user)
        await setMytoken(response.data.token)
        toast.success("login successful")
        Navigate("/")
       }else{
        toast.error("error occurred")
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
      <div className='signinpage'>
       
       <form>
       <div className='d-flex align-item-center justify-content-left text-align-center'><h5>Login</h5></div>
      <div className='container'>
       
       <form className='form-control' action="">
           <input type='email' 
           className='form-control' 
           name='email' placeholder='email' value={formData.email} onChange={handchange}/>

           <input type='password' 
           className='form-control' 
           name='password' placeholder='password' value={formData.password} onChange={handchange}/>      
          
           <div className='button' onClick={loginlogic}>Login</div>
           <div>You dont have an account? <Link to={"/Register"}>register</Link></div>
       </form>
       </div>
       </form>
     </div>
    </>
  )
}

export default Signin
