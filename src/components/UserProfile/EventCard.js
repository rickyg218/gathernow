import React from 'react';
import 'antd/dist/antd.css';
import '../../index';
import { Card, Button } from 'antd';


export default function gridStyle() {
 
 const gridStyle = {
     width: '{25}%',
        textAlign: 'center',
     }

     
return(
  <Card className="container" name='event_name' style={gridStyle} title="Event Name">
    <Card.Grid name='event_category'style={gridStyle}>content</Card.Grid>
    <Card.Grid name='event_time' style={gridStyle}>content</Card.Grid>
    <Card.Grid name='event_location' >Content</Card.Grid>
    <Card.Grid name='meeting_spot'style={gridStyle}>Content</Card.Grid>
    <Button style={gridStyle}>Join Event</Button>
    <Button style={gridStyle}>Chat</Button>
    <Button style={gridStyle}>Delete Event</Button>
  </Card>
)
}



