import React from 'react';
import RCDatePicker from './datepicker';
import {DatePickerProps} from './PropsType';
export default class DatePickerView extends React.Component<
  DatePickerProps,
  any
> {
  static defaultProps = {
    mode: 'datetime',
    // extra: '请选择',
    minuteStep: 1,
    use12Hours: false,
  };

  render() {
    // tslint:disable-next-line:no-this-assignment
    const {props, context} = this;
    // DatePicker use `defaultDate`, maybe because there are PopupDatePicker inside? @yiminghe
    // Here Use `date` instead of `defaultDate`, make it controlled fully.
    return (
      <RCDatePicker
        {...props}
        date={props.value}
        onDateChange={props.onChange}
        onValueChange={props.onValueChange}
        onScrollChange={props.onScrollChange}
      />
    );
  }
}
