
import UserContext from '../components/context/UserContext'
import React , {useContext} from 'react'
import { Col, Button, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



const Dashboard = () => {

    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)
    console.log(user.firstName)
    

  return (
    <div className='dashboard' style={{height: '100vh'}}>
    

            <h3 className="text-center mt-5" style={{fontSize:'40px', fontWeight:'bolder'}}>Welcome</h3>

                
            <Row style={{margin:'3rem auto'}}>  <Col md={4}></Col>
            <Col md={4} style={{margin:'1rem auto'}}> 
            <p style={{textAlign:'center'}}>
                <img src="./Images/avatar2.png" alt="" className="img-responsive" style={{margin:'0 auto', width:'200px'}}/>
            </p>

                <h4 className="mb-3 mt-5"><b>First Name: </b>{user.firstName}</h4>
                <h4 className="mb-3"><b>Last Name: </b>{user.lastName}</h4>
                <h4 className="mb-3"><b>Email Address: </b>{user.email}</h4>

                <div style={{display:'flex', flexDirection:'row'}}>
                <Button 
                    type="submit" 
                    className="m-2" 
                    style={{width:'100%'}}
                    onClick={() => navigate('/video')}
                    >
                    Host Meeting
                </Button>  
                <Button 
                    type="submit" 
                    className="m-2" 
                    style={{width:'100%'}}
                    onClick={() => navigate('/contact')}
                    >
                    Join Meeting
                </Button>  
                </div>

            </Col>
            <Col md={4}></Col>

            </Row>

    </div>
  )
}

export default Dashboard