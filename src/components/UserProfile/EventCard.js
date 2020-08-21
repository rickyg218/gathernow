import React from 'react';
import 'antd/dist/antd.css';
import '../../index';
import { Card, Button, Row, Divider} from 'antd';
import { WhiteSpace } from 'antd-mobile';




export default function gridStyle() {
 
 const gridStyle = {
     width: '{50}%',
        textAlign: 'center',
      
     }

     
return(
 
<Card>
  <Row align='bottom' justify='center'>
  <Card name='event_name' title="Event Name">
    <Card.Grid  name='event_time'>perfect</Card.Grid>
    <Card.Grid name='event_location' type='vertical'>ok</Card.Grid>
    <Card.Grid name='meeting_spot' type='vertical'>wow</Card.Grid>
     
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




