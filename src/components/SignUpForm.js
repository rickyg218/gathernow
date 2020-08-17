import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined} from '@ant-design/icons';
import TextArea from "antd/lib/input/TextArea";

import "../index.css";



const SignUpForm = () => {
const styles = {
  formBorder: {
  margin: `${200}px`,
  padding: `${100}px`,
  border: `${2}px`,
  borderColor: `black`,
  borderStyle: `solid`,
  color: 'red',
},
}

  return (


    <div className="container">
      <div className="align ">
        <Form className="site-input-group-wrapper" style={styles.formBorder}>
          <p>* Build your user Profile here</p>
          <Form.Item>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="username" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="name" />
          </Form.Item>
          <Form.Item>
            <Input className="site-form-item-icon" maxLength={15} placeholder="password"/>
          </Form.Item>
          <Form.Item>
            <Input className="site-form-item-icon" maxLength={2} placeholder="age"/>
          </Form.Item>
          <Form.Item>
            <Input className="site-form-item-icon" placeholder="city, state"/>
          </Form.Item>
          <Form.Item>
            <TextArea className="site-form-item-icon" rows={4} placeholder="bio"/>
          </Form.Item>
          <Form.Item>
            <Input className="site-form-item-icon" placeholder="additional info" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Create Account
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
