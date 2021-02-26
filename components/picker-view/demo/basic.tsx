import React from 'react';
import PickerView from '..';
import {
    View,
} from 'react-native';

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
];

export default class PickerViewExample extends React.Component {
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
        <View>
          <PickerView
              onChange={this.onChange}
              value={this.state.value}
              data={seasons}
              cascade={false}/>
          <PickerView
              onChange={this.onChange}
              value={this.state.value}
              data={seasons}
              cascade={true}/>
        </View>
    );
  }
}
