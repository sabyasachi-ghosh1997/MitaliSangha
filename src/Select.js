import React, {useState} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Select = ({selectFn}) => {
  const [Open, setOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState();

  const items = [
    {label: 'Player', value: 1},
    {label: 'Member', value: 2},
    {label: 'Supporter', value: 3},
  ];
  const handleSelectItem = item => {
    setCurrentValue(item.value);

    if (typeof selectFn === 'function') {
      selectFn(item); // Pass the selected item to the callback
    } else {
      console.warn('selectFn is not a function');
    }
  };
  return (
    <View>
      <DropDownPicker
        onSelectItem={handleSelectItem}
        items={items}
        open={Open}
        setOpen={() => setOpen(!Open)}
        value={currentValue}
        setValue={value => setCurrentValue(value)}
        placeholder="Role in the club"
        placeholderStyle={{fontSize: 18}}
        style={{
          backgroundColor: 'white', // Set dropdown background color to yellow
        }}
        labelStyle={{
          fontSize: 18, // Increase font size of dropdown items
        }}
      />
    </View>
  );
};
export default Select;
