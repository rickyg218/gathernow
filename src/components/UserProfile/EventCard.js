
import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Card, Button, Col, Space, Divider, Descriptions, Row } from "antd";
import { WhiteSpace } from "antd-mobile";

export default function EventCard() {
  return (
    <div className="cardCenter" >
      <Card className="size" align="top" justify="start">
        <Row justify="end">
          <Col >
            <Card className="cardCenter size" name="event_name" title="Event Name" >
              <Col >
                <Row>
                  <Space>
                    <Descriptions>
                      <Descriptions.Item span={5} name="event_time">Time:</Descriptions.Item>
                      <Descriptions.Item span={5} name="event_location" >Location:
            </Descriptions.Item>
                      <Descriptions.Item span={5} name="meeting_spot" >Meeting Spot:
            </Descriptions.Item>
                    </Descriptions>
                  </Space>
                </Row>
              </Col>
              <Divider />
              <Space>
                <Button>Edit Event</Button>
                <Button>Chat</Button>
                <Button>Delete Event</Button>
              </Space>
              <WhiteSpace />
            </Card>
          </Col>
        </Row>
      </Card>
      <Row>
        <Col>
          <h1>You currently have no events.</h1>
        </Col>
      </Row>
    </div>
  )
}
