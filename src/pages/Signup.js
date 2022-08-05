import React, { useState,  useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../components/context/UserContext'
import axios from 'axios'


const Signup = () => {

  const navigate = useNavigate()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")

  const {user, setUser} = useContext(UserContext)
  

  // useEffect(()=>{
  //   if (user.username){
  //     navigate('/dashboard')
  //   }
  // })
  const onSubmit =(evt) => {
    evt.preventDefault()
    const newUser = {username, firstName, lastName, email}
    const url = 'https://jsonplaceholder.typicode.com/users'
    axios.post(url, newUser, {header:{ 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' }})// {newUser})
    .then(response => {
    
        console.log(response.data)
        
      })
    .catch(err => console.log(err))

    if(firstName === "" || firstName === null) {
     return alert('First name is required')
    }
    if(lastName === "" || firstName === null) {
     return alert('Last name is required')
    }
    if(username === "" || firstName === null) {
     return alert('Username is required')
    }
    if(email ==="" || email === null) {
     return alert('Email name is required')
    }

    setUser(newUser)
    setTimeout(()=>{
      navigate(`/dashboard`)
    }, 2000)
    alert('Registration is Successful')
    return navigate('/dashboard')
  }
  
  return (
    <div className='Signup'>
    
         <div className="form-container">
        <form className="reg">
          <h2>Register</h2>
          <label htmlFor="Name">First Name</label>
          <input type="text" required id='firstName' value={firstName} onChange={evt => setFirstName(evt.target.value) } />
          <label htmlFor="name">Last Name</label>
          <input type="text" required id='lasttName' value={lastName} onChange={evt => setLastName(evt.target.value)} />
          <label htmlFor="userName">User Name</label>
          <input type="text" required id='userName'value={username} onChange={evt => setUsername(evt.target.value)} />
          <label htmlFor="email">Email Address</label>
          <input type="text" id='email' value={email} onChange={evt => setEmail(evt.target.value)} required />
         
          <button className='btn' onClick={onSubmit}>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Signup