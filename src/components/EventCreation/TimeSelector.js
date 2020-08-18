import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, TimePicker, Select, Space } from 'antd';

import 'antd/dist/antd.css';


const { Option } = Select;

function PickerWithType({ type, onChange }) {
   if (type === 'time') return <TimePicker onChange={onChange} />;
   if (type === 'date') return <DatePicker onChange={onChange} />;
   return <DatePicker picker={type} onChange={onChange} />;
 }

export default function SwitchablePicker() {
  const [type, setType] = useState('time');
  return (
    <Space>
      <Select value={type} onChange={setType}>
        <Option value="time">Time</Option>
        <Option value="date">Date</Option>
      </Select>
      <PickerWithType type={type} onChange={value => console.log(value)} />
    </Space>
  );
}
