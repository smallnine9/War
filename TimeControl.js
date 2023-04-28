// TimeControl.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TimeControl = ({ onTimeChange }) => {
  const [date, setDate] = useState({ year: 1, month: 1, day: 1 });
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    if (!isPaused) {
      const timer = setTimeout(() => {
        setDate((prevState) => {
          let newDay = prevState.day + 1;
          let newMonth = prevState.month;
          let newYear = prevState.year;

          if (newDay > 30) {
            newDay = 1;
            newMonth++;
          }

          if (newMonth > 12) {
            newMonth = 1;
            newYear++;
          }
          onTimeChange({ year: newYear, month: newMonth, day: newDay });
          return { year: newYear, month: newMonth, day: newDay };
        });
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [date, isPaused]);

  const toggleTime = () => {
    setIsPaused(!isPaused);
  };

  const hanzi = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

  const toHanziNumber = (num) => {
    if (num < 11) {
      return hanzi[num];
    } else if (num < 20) {
      return '十' + hanzi[num - 10];
    } else if (num % 10 === 0) {
      return hanzi[num / 10] + '十';
    } else {
      return hanzi[Math.floor(num / 10)] + '十' + hanzi[num % 10];
    }
  };

  return (
    <View style={styles.timeControl}>
      <Text style={styles.dateText}>{`元狩${toHanziNumber(date.year)}年${toHanziNumber(date.month)}月${toHanziNumber(date.day)}日`}</Text>
      <TouchableOpacity style={styles.button} onPress={toggleTime}>
        <Text style={styles.buttonText}>{isPaused ? '启动' : '暂停'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  timeControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  dateText: {
    fontSize: 18,
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

export default TimeControl;
