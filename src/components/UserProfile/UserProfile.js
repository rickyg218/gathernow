import React from "react";
import "antd/dist/antd.css";
import "../../index.css";
import { Descriptions } from "antd";

export default class Container extends React.Component{
  render(){
  return (
    // <container>
    <Descriptions  title="User Info" layout="vertical">
    <Descriptions.Item label="name"></Descriptions.Item>
    <Descriptions.Item label="age" ></Descriptions.Item>
    <Descriptions.Item label="location"></Descriptions.Item>
    <Descriptions.Item label="bio" span={4}>empty</Descriptions.Item>
  </Descriptions>
  // </container>
  );
  }
}
