import React from 'react';
import ScrollPicker from './ScrollPicker';
import {ScrollPickerProps} from './interface/ScrollPickerProps';

export const PickerItem: any = () => {};

class Picker extends React.Component<ScrollPickerProps, {}> {
  static defaultProps = {
    children: [],
  };

  getValue() {
    if ('selectedValue' in this.props) {
      return this.props.selectedValue;
    }
    const children: any = React.Children.toArray(this.props.children);
    return children && children[0] && children[0].props.value;
  }

  shouldComponentUpdate(nextProps: any) {
    return (
      this.props.selectedValue !== nextProps.selectedValue ||
      this.props.children !== nextProps.children
    );
  }

  render() {
    return (
      <ScrollPicker {...this.props} itemStyle={{paddingVertical: 8}}>
        {React.Children.map(this.props.children, (c: any) => {
          return (
            <PickerItem
              label={c.props.children + ''}
              value={c.props.value}
              key={c.key}
            />
          );
        })}
      </ScrollPicker>
    );
  }
}

export default Picker;
