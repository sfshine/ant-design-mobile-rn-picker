import React from 'react';
import {View} from 'react-native';
import CityPicker from '../CityPicker';
const data = require('../data.json');

export default class CityPickerExample extends React.Component {
  state = {
    value: undefined,
  };
  render() {
    return (
      <View>
        <CityPicker
          data={data}
          onChange={(v) => {
            console.warn('onChange', v);
          }}
        />
      </View>
    );
  }
}
