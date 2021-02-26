import React from 'react';
import {View} from 'react-native';
import {PickerData} from '../picker/interface/PropsType';
import Cascader from '../picker/Cascader';
import {
  CascaderDataItem,
  CascaderProps,
} from 'components/picker/interface/CascaderTypes';
import {Omit} from 'utility-types';

const innerData = require('./data.json');

export interface CityPickerProps extends Omit<CascaderProps, 'data'> {
  data: CascaderDataItem[];
}

export default class CityPicker extends React.Component<CityPickerProps, any> {
  render() {
    const {indicatorStyle = {}, data = innerData, cols, onChange} = this.props;
    return (
      <View>
        <Cascader
          data={(Array.isArray(data[0]) ? data[0] : data) as PickerData[]}
          cols={cols}
          onChange={onChange}
          indicatorStyle={indicatorStyle}
        />
      </View>
    );
  }
}
