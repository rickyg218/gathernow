import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined} from '@ant-design/icons';
import TextArea from "antd/lib/input/TextArea";
import SwitchablePicker from './TimeSelector'

import "../../index";
import { WhiteSpace } from "antd-mobile";



const EventForm = () => {
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


    <div className="container align">
        <Form className="site-input-group-wrapper" style={styles.formBorder}>
          <p>* Create your Event </p>
           <SwitchablePicker/>
           <WhiteSpace></WhiteSpace>
          <Form.Item>
            <Input name="event_category" placeholder="Event Category"/>
          </Form.Item>
          <Form.Item>
            <Input name="event_name" placeholder="Event Name" />
          </Form.Item>
          <Form.Item>
           <Input name="event_location" placeholder="Event Location"/>
          </Form.Item>
          <Form.Item>
           <Input  name="meeting_spot" placeholder="Meeting Spot"/>
          </Form.Item>
          <Form.Item>
            <Input maxLength={3} placeholder="Max number of people to attend"/>
          </Form.Item>
          <Form.Item>
            <Input maxLength={2} placeholder="Min age requirement"/>
          </Form.Item>
          <Form.Item>
            <TextArea rows={4} placeholder="Additional info to add.."/>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Post Your Event
            </Button>
          </Form.Item>
        </Form>
    </div>
  );
};

export default EventForm;