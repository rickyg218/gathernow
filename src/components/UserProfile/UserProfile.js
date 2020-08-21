import React from "react";
import "antd/dist/antd.css";
import Avatar from "./ProfilePic";
import { Descriptions, Card, Row, Col, Divider } from "antd";
import "./index.css";
import gridStyle from "./EventCard";

const style = {
  display: "flex",
  width: `${70}%`,
  justifyContent: "center",
  alignItems: "center",
};

export default class Container extends React.Component {
  render() {
    return (
      <Card style={style}>
        <Row justify="center" align="top">
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

        <Row justify='center' align="middle">
          <Col type="flex" span={10}>
            <Card align="left">
              <Descriptions title="Bio:">
                <Descriptions.Item name="bio"></Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
        </Row>
      </Card>
    );
  }
}
