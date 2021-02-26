import React from 'react';
import {View} from 'react-native';
import MultiPicker from '../MultiPicker';
import {PickerData, PickerPropsType} from '../interface/PropsType';
import RMCPicker, {PickerItem} from '../Picker';

export interface PickerProps extends PickerPropsType {
  pickerPrefixCls?: string;
  popupPrefixCls?: string;
}

export default class PickerViewExample extends React.Component<
  PickerProps,
  any
> {
  getPickerCol = () => {
    const {data, itemStyle = {}, indicatorStyle = {}} = this.props;
    return ((Array.isArray(data[0]) ? data : [data]) as PickerData[][]).map(
      (col, index) => {
        return (
          <RMCPicker
            key={index}
            style={{flex: 1}}
            itemStyle={itemStyle}
            indicatorStyle={indicatorStyle}>
            {col.map((item) => {
              return (
                <PickerItem key={item.value} value={item.value}>
                  {item.label}
                </PickerItem>
              );
            })}
          </RMCPicker>
        );
      },
    );
  };
  setScrollValue = (v: any) => {
    console.warn('setScrollValue', v);
  };
  onPickerChange = (v: any) => {
    console.warn('onPickerChange', v);
  };
  render() {
    return (
      <View>
        <MultiPicker
          style={{flexDirection: 'row', alignItems: 'center'}}
          onScrollChange={this.setScrollValue}
          onValueChange={this.onPickerChange}>
          {this.getPickerCol()}
        </MultiPicker>
      </View>
    );
  }
}
