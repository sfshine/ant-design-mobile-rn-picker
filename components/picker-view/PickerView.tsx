import React from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import Cascader from '../picker/Cascader';
import MultiPicker from '../picker/MultiPicker';
import RMCPicker, {PickerItem} from '../picker/Picker';
import {PickerData} from '../picker/interface/PropsType';

function getDefaultProps() {
  return {
    cols: 3,
    cascade: true,
    value: [],
    onChange() {},
  };
}

export interface PickerViewProps {
  cols?: number;
  cascade?: boolean;
  value?: any[];
  data?: PickerData[] | PickerData[][];
  styles?: any;
  onChange?: (value?: any) => void;
  onScrollChange?: (value?: any) => void;
  indicatorStyle?: StyleProp<ViewStyle>;
  itemStyle?: StyleProp<TextStyle>;
}

export default class PickerView extends React.Component<PickerViewProps, any> {
  static defaultProps = getDefaultProps();

  getCol = () => {
    const {data, indicatorStyle, itemStyle} = this.props;
    return (data as PickerData[][]).map((col, index) => {
      return (
        <RMCPicker
          key={index}
          style={{flex: 1}}
          indicatorStyle={indicatorStyle}
          itemStyle={itemStyle}>
          {col.map((item) => {
            return (
              <PickerItem key={item.value} value={item.value}>
                {item.label}
              </PickerItem>
            );
          })}
        </RMCPicker>
      );
    });
  };
  render() {
    // tslint:disable-next-line:no-this-assignment
    const {props} = this;
    let picker;
    if (props.cascade) {
      picker = (
        <Cascader
          data={props.data as PickerData[]}
          value={props.value}
          onChange={props.onChange}
          onScrollChange={props.onScrollChange}
          cols={props.cols}
          indicatorStyle={props.indicatorStyle}
          pickerItemStyle={props.itemStyle}
        />
      );
    } else {
      picker = (
        <MultiPicker
          selectedValue={props.value}
          onValueChange={props.onChange}
          onScrollChange={props.onScrollChange}
          style={{flexDirection: 'row'}}>
          {this.getCol()}
        </MultiPicker>
      );
    }
    return picker;
  }
}