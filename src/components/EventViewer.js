
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

export default class PickerViewer extends React.Component {
  state = {
    value: undefined,
  };
  onChange = (value) => {
    this.setState({
      value,
    });
  }
  render() {
    return (

      <div>
<PickerView  className="config-provider eventView" style={style} data={availEvents}
        onChange={this.onChange}
        value={this.state.value}
        cascade={false}>
      </PickerView>

      </div>
    );
  }
}




