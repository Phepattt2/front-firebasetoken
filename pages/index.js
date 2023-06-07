import {auth} from '../config/firebase'
import {useAuthState } from "react-firebase-hooks/auth"
import { useEffect, useState } from 'react'
import  { signInWithPopup ,
          signInWithRedirect ,
          signOut ,
          GoogleAuthProvider } from 'firebase/auth' 
import axios from 'axios'


console.log('tom ')

export default function Home() {
  const [user,loading] = useAuthState(auth)
  const googleAuth = new GoogleAuthProvider() ; 

  // loging in
  const login = async(res)=> {
        console.log('login button is clicked');
        const result = await signInWithPopup(auth,googleAuth);
  }

  
  useEffect(()=> {
    console.log('hellworld ')
  } , []) 

  // loging out
  const logout =async()=> {
    await auth.signOut() ; 
  }

  const checkUsertoekn = async () => {
    let a = user['accessToken']
    let b = user.getIdToken() ; 
    console.log(b)
  }


  const sendToBackend = async () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${user['accessToken']}`;
    // token content on header  
    const a =  await axios.get("http://localhost:9000/transaction/getAllTransactions", { headers: { 'authorization': 'Bearer '+ user['accessToken'] } })
    .then((res)=>{
      console.log("backend respond : ",res)
    })

  }


  // const getTransaction = async () => {
  //   const b = await axios.get("http://localhost:9000/transaction/getAllTransactions").then((res)=>{
  //     console.log("transaction data : ",res)
  //   })

  // }
  const checkUser =()=> {
    console.log('that user' ,user)
  }


  useEffect(()=> {
    console.log('this is from useeffect')
    console.log(user)
s
  },[user])



  return (
    <>
      <h1>login w/ google </h1>
      <br></br>
      <div>
        <button className='googleLoginButton' onClick={login}> 
          Login with Google
        </button>
      </div>
      <div>
      <button className='googleLogoutButton' onClick={logout}>
          logout
      </button>
      </div>
      <div>
      <button className='checkUser' onClick={checkUser}>
          checkuser
      </button>
      </div>
      <div>
      <button className='checkUserToken' onClick={checkUsertoekn}>
          checkusertoken
      </button>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <div>
      <button className='sendTokenToBackend' onClick={sendToBackend}>
          SendTokenToBackend
      </button>
      </div>

    
      
    </>
  )
}
