import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, FontAwesome5, Entypo, AntDesign } from '@expo/vector-icons';

export default function ChooseTopicScreen({ navigation }) {
  const topics = [
    {
      id: 1,
      title: 'About',
      IconComponent: MaterialIcons,
      iconName: 'smart-toy',
      color: '#60a5fa',
      description: 'Learn about robots'
    },
    {
      id: 2,
      title: 'Reminder',
      IconComponent: MaterialIcons,
      iconName: 'event-note',
      color: '#f87171',
      description: 'Set reminders',
      customPadding: 30
    },
    {
      id: 3,
      title: 'Music',
      IconComponent: MaterialIcons,
      iconName: 'music-note',
      color: '#fb923c',
      description: 'Play music',
      customPadding: 30
    },
    {
      id: 4,
      title: 'Chatbot',
      IconComponent: MaterialIcons,
      iconName: 'chat-bubble-outline',
      color: '#facc15',
      description: 'Chat with AI'
    },
    {
      id: 5,
      title: 'Shop',
      IconComponent: MaterialIcons,
      iconName: 'storefront',
      color: '#4ade80',
      description: 'Shopping assistant'
    },
    {
      id: 6,
      title: 'Reviews',
      IconComponent: AntDesign,
      iconName: 'star',
      color: '#a78bfa',
      description: 'Rate and review',
      customPadding: 30
    }
  ];

  const handleTopicSelect = (topic) => {
    console.log(`Selected topic: ${topic.title}`);
    
    // Navigate to specific screens based on topic
    if (topic.title === 'About') {
      navigation.navigate('About');
    } else if (topic.title === 'Reminder') {
      navigation.navigate('Reminder');
    }
    // Add more navigation logic for other topics as needed
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Header */}
      <Text style={styles.headerText}>What brings you to the</Text>
      <Text style={styles.appNameText}>ORION ROBOT APP ?</Text>

      {/* Topics Grid */}
      <View style={styles.topicsGrid}>
        {topics.map((topic) => {
          const { IconComponent, iconName } = topic;
          return (
            <TouchableOpacity
              key={topic.id}
              style={[
                styles.topicCard, 
                { backgroundColor: topic.color },
                topic.customPadding && { paddingVertical: topic.customPadding }
              ]}
              onPress={() => handleTopicSelect(topic)}
            >
              <IconComponent 
                name={iconName} 
                size={40} 
                color="white" 
                style={styles.topicIcon}
              />
              <Text style={styles.topicTitle}>{topic.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 64,
  },
  headerText: {
    textAlign: 'left',
    color: '#6b7280',
    marginBottom: 8,
    fontSize: 19,
  },
  appNameText: {
    textAlign: 'left',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 35,
  },
  topicsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  topicCard: {
    width: '48%',
    borderRadius: 16,
    paddingVertical: 60,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicIcon: {
    marginBottom: 12,
  },
  topicTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});