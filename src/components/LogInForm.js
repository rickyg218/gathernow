import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import API from "../utils/API";


import "../index.css";

const styles = {
  formBorder: {
    margin: `${200}px`,
    padding: `${100}px`,
    border: `${2}px`,
    borderColor: `black`,
    borderStyle: `solid`,
    color: `red`,
  }}

function LogInForm() {
  let history = useHistory();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: ""
  })



  const loginInputChange = event => {
    const { name, value } = event.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value
    })
  }

  const handleLoginFormSubmit = e => {
    e.preventDefault();
    API.login(loginFormData).then(res => {
      console.log(res.data)
      history.push("/MyAccount");
      setLoginFormData({
        email: "",
        password: ""
      })
    }).catch(err => {
      alert("login failed")
    })
  }




  return (
    <div className="container">
      <div className="align">
        <Form
          style={styles.formBorder}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        ><p>* Login to your account</p>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              name = "email"
              value = {loginFormData.email}
              onChange={loginInputChange}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              name="password"
              value={loginFormData.password}
              onChange={loginInputChange}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Link className="login-form-forgot" href="">
              Forgot password
            </Link>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={handleLoginFormSubmit}
            >
              Log in
            </Button>
            Or <Link href="">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default LogInForm;
