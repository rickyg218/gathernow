import React from "react";
import "antd/dist/antd.css";
import Avatar from "./ProfilePic";
import { Descriptions, Card, Row, Col } from "antd";
import "./index.css";

export default class Container extends React.Component {
  render() {
    return (
      <>
        <Row align="top">
          <Col >
          <Avatar span={2} justify="start" />
</Col>
          <Card className="userStyle" justify="center">
            <Descriptions title="User Info" column={1}>
              <Descriptions.Item label="name"></Descriptions.Item> 
              <Descriptions.Item label="age"></Descriptions.Item>
              <Descriptions.Item label="location"></Descriptions.Item>
              <Descriptions.Item label="bio" span={4}></Descriptions.Item>
            </Descriptions>
          </Card>
        </Row>

        <Row justify="start" align="middle" >
          <Col type="flex" span={8}>
            <Card  align="left">
              <Descriptions title="Bio:" >
                <Descriptions.Item name="bio" className="bioStyle"></Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
