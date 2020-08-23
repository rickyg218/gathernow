import React from "react";
import Avatar from "./ProfilePic";
import { Descriptions, Card, Row, Col} from "antd";
import "./index.css";
import EventCard from "./EventCard";





function UserInfo(props) {
  return (
    <>
      <div className="cardCenter" >
        {props.currentUser ? (
          <Card className="size">
            <Row justify="start" align="top">
              <Col  className="userStyle">
                <Avatar/>
                <Row>
                <Card >
                  <Descriptions className="userStyle">
                  <Descriptions.Item label="Name">
                    {props.currentUser.first_name}
                  </Descriptions.Item>
                  </Descriptions>
                  </Card>
                </Row>
               </Col>
                <Col className="userStyle">
                  <Card>
                    <Descriptions>
                  <Descriptions.Item  label="Age" span={5}>
                    {props.currentUser.age}
                  </Descriptions.Item>
                  <Descriptions.Item label="Email" >
                    {props.currentUser.email}
                  </Descriptions.Item>
                  </Descriptions>
                </Card>
                <Card>
                  <Descriptions className='bioCont'>
                    <Descriptions.Item label="Bio" >
                      {props.currentUser.bio}
                    </Descriptions.Item>
                  </Descriptions>
                </Card>
              </Col>
            </Row>
            <div>
          <Row>
          <EventCard/>
          </Row>
          </div>
          </Card>
      
        ) : null};
          </div>
    </>
  );
}
export default UserInfo;
