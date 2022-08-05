import React from 'react'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Contact = () => {
  const innitialValues = {usercontact: ""}
  const [formValues, setFormValues] =  useState(innitialValues)
  const [formError, setFormError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  

  const navigate = useNavigate()
  const handleChange = (evt) => {
    const {name, value} = evt.target
    setFormValues({...formValues, [name]: value})
    console.log(formValues)

  }
  const handleSubmit =(evt)=> {
    evt.preventDefault()
    const errors = validate(formValues)
    if (Object.keys(errors).length > 0) {
      return alert('Username is required')
    }
    alert('successful')
    return navigate('/video')
  }

  const validate = (values)=> {
    const error = {}
    if (!values.usercontact.trim()) {
      error.usercontact = 'usercontact is required!'
      console.log(error)
    }
    return error
  }
  return (
    <div className='form-container' style={{padding: '20px 20px', marginTop: '-10rem'}}> 
  
        <form onSubmit={handleSubmit} style={{height: '230px'}}>
          
            <input className='mt-4' type="text" placeholder=' Enter your username' name='usercontact'
            value={formValues.usercontact} onChange={handleChange} />
          
          <p style={{color:'red', paddingTop: '3px'}}>{formError.usercontact}</p>
          <button className='formbtn mt-3'
            style={{
              backgroundColor:'dodgerblue',
              border: 'none', borderRadius: '10px', padding: '10px 15px', color:'white', fontSize: '20px', fontWeight:'bold' 
              }}>Submit
          </button>
        </form>
    </div>
  )
}

export default Contact
