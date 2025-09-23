import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import './Header.css'
import { Link } from 'react-router-dom';
import { ContextData } from '../Hooks/Formcontext';


const Topheader = () => {
  const {user, token, logout} = ContextData()

  return (
    <>
      <div className='topheader'>
         <div className='smalllefttext'>
             <div className='signintext'>
                <div className='textandiconleft'>
                <div className='english'>English <FaAngleDown size={12}/></div>
                <div className='pipe1'></div>
                <div className='usd'>USD <FaAngleDown size={12}/></div>
                <div className='pipe1'></div>
            </div>
             <div className='helo'>Hello - 
            {/*<Link to="/signin">Login</Link>*/}

             {!user || !token ? <Link to="/signin">Login</Link>: ""}
             {!user || !token ? <Link to="/register">register</Link>: 
                ""}
               {
                !user || !token ? "" :
                 <div className='logprocess'>
                   <div className='login'>welcome {user.firstname}</div>
                   <div className='logout' onClick={logout}>Logout</div>
                </div>
               }

             </div>
          </div>
           
         </div>

         <div className='smallrighttext'>
            <div className='textandiconright'>
                <div className='location'><FaAngleDown size={12}/> location</div>
                <div className='pipe1'></div>
                <div className='track'><FaAngleDown size={12}/> Track order</div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Topheader
