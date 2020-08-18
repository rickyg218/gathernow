
import React from 'react';
import { PickerView } from 'antd-mobile';
import {Select} from 'antd';
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


const style = { width: 200 };

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

      <div className="config-provider">
<Select style={style} data={availEvents}    className="eventView"
        onChange={this.onChange}
        value={this.state.value}
        cascade={false}>
      {/* <PickerView
     
      >
      </PickerView> */}


      
      </Select>
      </div>
    );
  }
}




