import React from 'react';
import DeviceInfo from 'react-native-device-info';

import {View, TouchableOpacity, Text} from 'react-native';

export default function getdeviceinfo() {
  const getDeviceInfo = () => {
    const info = DeviceInfo.getUniqueId();
    console.log(info);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={getDeviceInfo}
        style={{
          width: 80,
          height: 40,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#3CB371',
        }}>
        <Text style={{color: '#FFF'}}>Get Info</Text>
      </TouchableOpacity>
    </View>
  );
}
