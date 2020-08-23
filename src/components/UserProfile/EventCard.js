import React from 'react';
import 'antd/dist/antd.css';
import '../../index';
import { Card, Button, Row, Divider} from 'antd';
import { WhiteSpace } from 'antd-mobile';




export default function gridStyle(props) {
 
 const gridStyle = {
     width: '{50}%',
        textAlign: 'center',
      
     }

     
return(
 
<Card>
  <Row align='bottom' justify='center'>
  <Card name='event_name' title="Event Name">
    <Card.Grid  name='event_time'>{props.event_time}</Card.Grid>
    <Card.Grid name='event_location' type='vertical'>{props.event_location}</Card.Grid>
    <Card.Grid name='meeting_spot' type='vertical'>{props.meeting_spot}</Card.Grid>
     
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






