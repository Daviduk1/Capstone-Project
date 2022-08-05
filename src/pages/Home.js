import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className=" text-center" id='gen-container' style={{height: '100vh'}}>
    <div className='zoom-container'>
        <div className="row">
            <div className="col-md">
                <div className="zoom-hero">
                    <img src="./Images/istockphoto33.jpg" alt="hero image" />
                </div>

            </div>

            <div className="col-md">
                <div className="zoom-item">
                    <div className="item">
                        <h1>Zoom</h1>
                    </div>
                    <div className="zoom-buttons">
                        <h2>Video conferencing</h2>
                        <button onClick={() => navigate('./contact')}>Join</button><span>connect to a meeting in progress</span><br></br>
                        <button onClick={()=> navigate('/video')}>Host</button><span>Start a meeting</span><br></br>
                        <button onClick={()=> navigate('/signup')}>Sign Up</button><span>Configure your meeting</span><br></br>
                    </div>
                </div>

            </div>

        </div>
    </div>
    
    </div>
  )
}

export default Home