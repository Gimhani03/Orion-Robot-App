import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, FontAwesome5, Entypo, AntDesign } from '@expo/vector-icons';
import { useProfile } from '../context/ProfileContext';

export default function ChooseTopicScreen({ navigation }) {
  const { profileImage } = useProfile();
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
    } else if (topic.title === 'Reviews') {
      navigation.navigate('Reviews');
    }
    // Add more navigation logic for other topics as needed
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>What brings you to the</Text>
          <Text style={styles.appNameText}>ORION ROBOT APP ?</Text>
        </View>
        <TouchableOpacity 
          style={styles.profileButton}
          onPress={() => navigation.navigate('Profile')}
        >
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <MaterialIcons name="account-circle" size={40} color="#6b7280" />
          )}
        </TouchableOpacity>
      </View>

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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 35,
  },
  headerTextContainer: {
    flex: 1,
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
  },
  profileButton: {
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#6b7280',
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