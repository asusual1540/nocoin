import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { animated } from "react-spring";

import * as authAction from "../src/reducers/auth/actionTypes"


const HelixAuthentication = ({ style, closeAuthModal, logInUser, signUpUser }: any) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleSignUp = (e: any) => {
    e.preventDefault();
    const payload = { "username" : username, "password": password }
    console.log("request sign up", payload)
    dispatch({type : authAction.SIGNUP_DEVICE_REQUEST, payload})
  }


  return (
    <animated.div style={{ ...style, translateX: '-50%', translateY: '-50%' }} className="w-1/2 h-auto bg-helix-dark p-6 absolute z-101 top-[50%] left-[50%] flex flex-col">
      <h3 className="font-bold text-3xl text-white">{logInUser && 'Connect Wallet' || signUpUser && 'Sign Up'}</h3>
      {signUpUser ? 
      <form className="shadow-md my-4">
        
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2 text-white" htmlFor="username">
            Username
          </label>
          <input value={username} onChange={e => setUsername(e.target.value)} className="shadow appearance-none border w-full py-2 px-3 caret-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2 text-white" htmlFor="password">
            Email
          </label>
          <input value={password} onChange={e => setPassword(e.target.value)} className="shadow appearance-none border border-red-500 w-full py-2 px-3 caret-black mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />

        </div>

      </form>
      :
      <form className="shadow-md my-4">
        
      <div className="mb-4">
        <label className="block text-black text-sm font-bold mb-2 text-white" htmlFor="username">
          Public Key
        </label>
        <input value={username} onChange={e => setUsername(e.target.value)} className="shadow appearance-none border w-full py-2 px-3 caret-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
      </div>
      
      <div className="mb-4">
        <label className="block text-black text-sm font-bold mb-2 text-white" htmlFor="password">
          Private Key
        </label>
        <input value={password} onChange={e => setPassword(e.target.value)} className="shadow appearance-none border border-red-500 w-full py-2 px-3 caret-black mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />

      </div>

    </form>
      }
      <div className="flex">
        <button className="modal-close-button m-1" onClick={closeAuthModal}>
          Close
        </button>
        <button type="submit" className="modal-close-button m-1" onClick={(e) => handleSignUp(e)}>
          {logInUser ? 'Connect' : 'Sign Up'}
        </button>
      </div>
    </animated.div>
  )
}

export default HelixAuthentication;