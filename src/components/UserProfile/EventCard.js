import React, {useState, useEffect} from 'react';
import API from "../../utils/API"
import 'antd/dist/antd.css';
import '../../index';
import { Card, Button, Row, Divider} from 'antd';
import { WhiteSpace } from 'antd-mobile';




export default function EventCard() {

   const [UserEvent, setUserEvent] = useState({})
   useEffect(() => {
      API.getUserEvent().then(res => {
         setUserEvent(res.data);

         console.log(res.data);
      })
   })
 
 const gridStyle = {
     width: '{50}%',
        textAlign: 'center',
      
     }

     
return(
// UserEvent.map(e =>{
//    e.event_category
// }
 
<Card>
  <Row align='bottom' justify='center'>
  <Card name='event_name' title="Event Name">
         {/* {UserEvent.map(e =>{
           <h1> e.event_category</h1>
         })}  */}
    {/* <Card.Grid  name='event_time'>{event_category}</Card.Grid> */}
    {/* <Card.Grid name='event_location' type='vertical'>{event_location}</Card.Grid> */}
    {/* <Card.Grid name='meeting_spot' type='vertical'>{meeting_spot}</Card.Grid> */}
     
 <Divider></Divider>
    <Button style={gridStyle}>Edit Event</Button>
    <Button style={gridStyle}>Chat</Button>
    <Button style={gridStyle}>Delete Event</Button>
   <WhiteSpace/>  
 

  </Card>
  </Row>

 

  </Card>
)
}






