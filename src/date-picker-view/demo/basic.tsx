/* tslint:disable:no-console */
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import DatePickerView from '..';

export default class DatePickerViewExample extends React.Component {
  state = {
    value: undefined,
    value12hours: undefined,
  };
  onChange = (value: any) => {
    console.log(value);
    this.setState({value});
  };
  onValueChange = (...args: any[]) => {
    console.log(args);
  };
  render() {
    const {value = new Date()} = this.state;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.onChange(new Date());
          }}>
          <Text style={{margin: 16}}>use12Hours</Text>
          <Text style={{margin: 16}}>{JSON.stringify(value)}</Text>
        </TouchableOpacity>
        <DatePickerView
          value={value}
          onChange={(v) => this.setState({value: v})}
          use12Hours
        />
        <DatePickerView
          value={this.state.value}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
        />
        {/*<Text style={{margin: 16}}>End DateTime</Text>*/}
        {/*<DatePickerView*/}
        {/*value={this.state.value}*/}
        {/*onChange={this.onChange}*/}
        {/*onValueChange={this.onValueChange}*/}
        {/*/>*/}
      </View>
    );
  }
}
