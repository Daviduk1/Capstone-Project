import React from 'react'
import { useState, useEffect} from 'react'

const Nav = ({getCurrentMode}) => {
  const [mode, setMode] = useState('light')

  function toggleMode() {
    if(mode === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  
  }

  useEffect(() => {
    getCurrentMode(mode)
  }, [mode])

  return (
    <div>
      <nav style={{display: 'flex', justifyContent: 'space-between', padding: '10px 5%', boxShadow: '0 2px 15px #0004', alignItems:'center'}}>
        <h1 style={{fontSize:'35px', fontWeight:'bold', color:'dodgerblue'}}>zoom<span style={{height: '70px', width:'70px', borderRadius:'50%', backgroundColor: 'dodgerblue'}}>
        <a style={{fontSize:'25px', color:'white', paddingLeft: '10px', paddingRight:'10px'}} href="#"><i className="fa-solid fa-video"></i></a>
        </span>
        </h1>
        <button
          onClick={toggleMode} 
          style={{ border:'none', fontSize:'20px',width: '120px', padding: '6px', borderRadius: '7px'}}>Dark Mode
        </button>
      </nav>
    </div>
  )
}

export default Nav