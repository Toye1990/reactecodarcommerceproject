import { useState, useContext } from 'react'
import '../Contact/Contacting.css'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { ContextData } from '../../Context/useContext'

const Signin = () => {
  const navigate = useNavigate()
  const { addUser, setMyToken } = useContext(ContextData) // ✅ use useContext properly

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  // handle input change
  const handchange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // handle login
  const loginlogic = async (e) => {
    e.preventDefault() // ✅ prevent form reload
    try {
      const empty = []
      if (!formData.email.trim()) empty.push("Email is required")
      if (!formData.password.trim()) empty.push("Password is required")

      if (empty.length > 0) {
        empty.forEach((item) => toast.error(item))
        return
      }

      const response = await axios.post("http://localhost:2233/api/v1/login", formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // ✅ include cookies if backend sends them
      })

      if (response && response.status === 200 && response.data) {
        await addUser(response.data.user)
        await setMyToken(response.data.token)
        toast.success("Login successful ✅")
        navigate("/") // ✅ redirect after login
      } else {
        toast.error("Error occurred")
      }
    } catch (err) {
      if (err.response) {
        console.log("Error response data:", err.response.data)
        toast.error(err.response.data.message || "Login failed")
      } else {
        console.log("Error:", err.message)
        toast.error("Network or server error")
      }
    }
  }

  return (
    <div className='signinpage'>
      <div className='container'>
        <form className='form-control p-4' onSubmit={loginlogic}>
          <div className='text-center mb-4'>
            <h5>Login</h5>
          </div>

          <input
            type='email'
            className='form-control mb-3'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handchange}
          />

          <input
            type='password'
            className='form-control mb-3'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handchange}
          />

          <button type='submit' className='btn btn-primary w-100'>
            Login
          </button>

          <div className='text-center mt-3'>
            <span>Don’t have an account? </span>
            <Link to='/Register'>Register</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin
