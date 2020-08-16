
import React from 'react';
import { PickerView } from 'antd-mobile';
import "../index.css";







const availEvents = [
  [
    {
      label: 'hiking',
      value: 'hiking',
    },
    {
      label: 'kayaking',
      value: 'kayaking',
    },
    {
      label: 'biking',
      value: 'biking',
    },
    {
      label: 'drinking',
      value: 'drinking',
    },
  
    
  ],
];

export default class eventViewer extends React.Component {
  state = {
    value: undefined,
  };
  onChange = (value: any) => {
    this.setState({
      value,
    });
  }
  render() {
    return (

      <PickerView
        className="eventView"
        onChange={this.onChange}
        value={this.state.value}
        data={availEvents}
        cascade={false}
      ></PickerView>
    );
  }
}




