import React, {useState, useEffect} from 'react';
import API from "../../utils/API"
import 'antd/dist/antd.css';
import '../../index';
import { Card, Button, Row, Divider} from 'antd';
import { WhiteSpace } from 'antd-mobile';




export default function EventCard() {

   const [userEvent, setUserEvent] = useState([])
   useEffect(() => {
      API.getUserEvent().then(res => {
         setUserEvent(res.data);

         console.log(res.data);
      })
   }, [])
 
 const gridStyle = {
     width: '{50}%',
        textAlign: 'center',
      
     }

   const renderEvents = () => {
      return (
         userEvent.map((event) => {
            return(
               <div>
               <Card.Grid  name='event_time'>{event.event_category}</Card.Grid>
               <Card.Grid name='event_location' type='vertical'>{event.event_location}</Card.Grid>
               <Card.Grid name='meeting_spot' type='vertical'>{event.meeting_spot}</Card.Grid> 
               </div>
            )


         })
      )
   
   }

    const  deleteEvent= (event) =>{
       const eventId=JSON.parse( event.currentTarget.id )
        const eventsCopy = [...userEvent];

      const myEventsFinal = []
   for (let i = 0; i < userEvent.length; i++) {
      if(userEvent[i].id !== eventId){
         myEventsFinal.push(userEvent[i])
      }
      
   }
      setUserEvent(myEventsFinal)
      // update you database with what you have in userEvent
      
      
//         const filteredEvents = eventsCopy.filter(userEvent=>{
//            if(userEvent.id == eventId){
//               console.log(eventId);
//               const indexToRemove = userEvent.toString().indexOf(eventId)
//               console.log(indexToRemove)
//             console.log("Inside if");
//             ;
              
//            }else{
//             //   return false
//             console.log("inside else");
//             ;
//            }
//         }) 
//   console.log(eventId);
 
      }
return(
// UserEvent.map(e =>{
//    e.event_category
// }

<Card>
   {userEvent.map(event =>{
      return(
      <Row align='bottom' justify='center'>
         <Card name='event_name'>{event.event_category}

            <div>
               <Card.Grid name='event_time'>{event.event_category}</Card.Grid>
               <Card.Grid name='event_location' type='vertical'>{event.event_location}</Card.Grid>
               <Card.Grid name='meeting_spot' type='vertical'>{event.meeting_spot}</Card.Grid>
            </div>

            <Divider></Divider>
            <Button style={gridStyle}>Edit Event</Button>
            <Button style={gridStyle}>Chat</Button>
            <Button onClick={deleteEvent} id={event.id} style={gridStyle}>Delete Event</Button>
            <WhiteSpace />


         </Card>
      </Row>
      )

   })}
  {/* <Row align='bottom' justify='center'>
  <Card name='event_name' title="Event Name">

   {renderEvents()} */}


         {/* {UserEvent.map(e =>{
           <h1> e.event_category</h1>
         })}  */}
    {/* <Card.Grid  name='event_time'>{event_category}</Card.Grid> */}
    {/* <Card.Grid name='event_location' type='vertical'>{event_location}</Card.Grid> */}
    {/* <Card.Grid name='meeting_spot' type='vertical'>{meeting_spot}</Card.Grid> */}
     
 {/* <Divider></Divider>
    <Button style={gridStyle}>Edit Event</Button>
    <Button style={gridStyle}>Chat</Button>
    <Button style={gridStyle}>Delete Event</Button>
   <WhiteSpace/>  
 

  </Card>
  </Row> */}

 

  </Card>
)
}






