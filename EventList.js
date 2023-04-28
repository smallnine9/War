// EventList.js
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const EventList = ({ day }) => {
  const [events, setEvents] = useState([]);

  const generateEvent = () => {
    const randomEvent = `你遇到了某某某，某某某告诉你了${Math.random().toString(36).substr(2, 5)}事情`;
    return randomEvent;
  };

  useEffect(() => {
    console.log(day)
    if (events.length === 0) {
      setEvents([generateEvent()]);
    } else {
      const daysSinceLastEvent = day - events.length;
      if (daysSinceLastEvent >= 1) {
        setEvents((prevEvents) => [...prevEvents, generateEvent()]);
      }
    }
  }, [day]);

  return (
    <ScrollView style={styles.eventList}>
      {events.map((event, index) => (
        <Text key={index} style={styles.eventText}>
          {event}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  eventList: {
    flexGrow: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  eventText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
});

export default EventList;
