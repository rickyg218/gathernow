import React from "react";
import "antd/dist/antd.css";
import Avatar from "./ProfilePic";
import { Descriptions, Card, Row, Col, Divider } from "antd";
import "./index.css";
import gridStyle from "./EventCard";




function Container(props) {

  return (
    <>
      {
        props.currentUser ?
          <container>
            <Descriptions title="User Information" layout="vertical">
              < Descriptions.Item label="Name" >{props.currentUser.first_name}</Descriptions.Item >
              <Descriptions.Item label="Age" >{props.currentUser.age}</Descriptions.Item>
              <Descriptions.Item label="Email">{props.currentUser.email}</Descriptions.Item>
              <Descriptions.Item label="Bio" span={4}>{props.currentUser.bio}</Descriptions.Item>
            </Descriptions >
          </container>
          : null
      }
    </>
  );
}
export default Container;