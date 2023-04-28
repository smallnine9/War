import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TimeControl from './TimeControl';
import EventList from './EventList';

const App = () => {
  const [day, setDay] = useState(1);

  const handleTimeChange = (newDay) => {
    setDay(newDay);
  };
  return (
    <View style={styles.container}>
      {/* 时间控制组件 */}
      <TimeControl onTimeChange={handleTimeChange} />

      {/* 内容组件 */}
      <EventList day={day} />
      {/* 按钮组件 */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>任务</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>设置</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  timeControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  dateText: {
    fontSize: 18,
  },
  content: {
    flex: 1,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default App;
