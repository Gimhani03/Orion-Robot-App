import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Alert, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function ReviewsScreen({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      title: 'Great Learning Experience',
      content: 'The robot lessons are very interactive and engaging. My child loves learning with Orion!',
      rating: 5,
      author: 'Sarah Johnson',
      date: '2025-08-05',
    },
    {
      id: 2,
      title: 'Excellent Educational Tool',
      content: 'Perfect for STEM education. The programming concepts are explained in a fun way.',
      rating: 4,
      author: 'Mike Chen',
      date: '2025-08-03',
    },
    {
      id: 3,
      title: 'Kids Love It!',
      content: 'Both my kids are obsessed with Orion. Great way to introduce them to robotics.',
      rating: 5,
      author: 'Emily Davis',
      date: '2025-08-01',
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [editingReview, setEditingReview] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    rating: 5,
    author: '',
  });

  const openAddModal = () => {
    setEditingReview(null);
    setFormData({
      title: '',
      content: '',
      rating: 5,
      author: '',
    });
    setModalVisible(true);
  };

  const openEditModal = (review) => {
    setEditingReview(review);
    setFormData({
      title: review.title,
      content: review.content,
      rating: review.rating,
      author: review.author,
    });
    setModalVisible(true);
  };

  const handleSaveReview = () => {
    if (!formData.title.trim() || !formData.content.trim() || !formData.author.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const currentDate = new Date().toISOString().split('T')[0];

    if (editingReview) {
      // Update existing review
      setReviews(reviews.map(review => 
        review.id === editingReview.id 
          ? { ...review, ...formData, date: currentDate }
          : review
      ));
    } else {
      // Add new review
      const newReview = {
        id: Date.now(),
        ...formData,
        date: currentDate,
      };
      setReviews([newReview, ...reviews]);
    }

    setModalVisible(false);
    setFormData({
      title: '',
      content: '',
      rating: 5,
      author: '',
    });
  };

  const handleDeleteReview = (reviewId) => {
    Alert.alert(
      'Delete Review',
      'Are you sure you want to delete this review?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: () => setReviews(reviews.filter(review => review.id !== reviewId))
        },
      ]
    );
  };

  const renderStars = (rating, onPress = null) => {
    return (
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => onPress && onPress(star)}
            disabled={!onPress}
          >
            <Ionicons
              name={star <= rating ? 'star' : 'star-outline'}
              size={20}
              color={star <= rating ? '#FFD700' : '#ccc'}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reviews</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={openAddModal}
        >
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.statsContainer}>
          <Text style={styles.totalReviews}>{reviews.length} Reviews</Text>
          <View style={styles.averageRating}>
            <Text style={styles.averageText}>
              {reviews.length > 0 
                ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
                : '0.0'
              }
            </Text>
            {renderStars(Math.round(reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length))}
          </View>
        </View>

        <ScrollView style={styles.reviewsList} showsVerticalScrollIndicator={false}>
          {reviews.map((review) => (
            <View key={review.id} style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <View style={styles.reviewInfo}>
                  <Text style={styles.reviewTitle}>{review.title}</Text>
                  <View style={styles.ratingContainer}>
                    {renderStars(review.rating)}
                    <Text style={styles.ratingText}>({review.rating}/5)</Text>
                  </View>
                </View>
                <View style={styles.reviewActions}>
                  <TouchableOpacity 
                    style={styles.actionButton}
                    onPress={() => openEditModal(review)}
                  >
                    <Ionicons name="pencil" size={18} color="#666" />
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.actionButton}
                    onPress={() => handleDeleteReview(review.id)}
                  >
                    <Ionicons name="trash" size={18} color="#ff4444" />
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={styles.reviewContent}>{review.content}</Text>

              <View style={styles.reviewFooter}>
                <Text style={styles.authorName}>- {review.author}</Text>
                <Text style={styles.reviewDate}>{formatDate(review.date)}</Text>
              </View>
            </View>
          ))}

          {reviews.length === 0 && (
            <View style={styles.emptyState}>
              <Ionicons name="chatbubbles-outline" size={64} color="#ccc" />
              <Text style={styles.emptyTitle}>No Reviews Yet</Text>
              <Text style={styles.emptySubtitle}>Be the first to add a review!</Text>
            </View>
          )}
        </ScrollView>
      </View>

      {/* Add/Edit Review Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {editingReview ? 'Edit Review' : 'Add Review'}
              </Text>
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Ionicons name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.modalForm}>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                  style={styles.input}
                  value={formData.title}
                  onChangeText={(text) => setFormData({...formData, title: text})}
                  placeholder="Enter review title"
                  maxLength={100}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Rating</Text>
                {renderStars(formData.rating, (rating) => setFormData({...formData, rating}))}
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Review</Text>
                <TextInput
                  style={[styles.input, styles.textArea]}
                  value={formData.content}
                  onChangeText={(text) => setFormData({...formData, content: text})}
                  placeholder="Write your review here..."
                  multiline
                  numberOfLines={6}
                  textAlignVertical="top"
                  maxLength={500}
                />
                <Text style={styles.charCount}>{formData.content.length}/500</Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Your Name</Text>
                <TextInput
                  style={styles.input}
                  value={formData.author}
                  onChangeText={(text) => setFormData({...formData, author: text})}
                  placeholder="Enter your name"
                  maxLength={50}
                />
              </View>
            </ScrollView>

            <View style={styles.modalActions}>
              <TouchableOpacity 
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.saveButton}
                onPress={handleSaveReview}
              >
                <Text style={styles.saveButtonText}>
                  {editingReview ? 'Update' : 'Save'} Review
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
   
  },
  addButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 30,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  totalReviews: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  averageRating: {
    alignItems: 'center',
  },
  averageText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  reviewsList: {
    flex: 1,
  },
  reviewCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#000',
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  reviewInfo: {
    flex: 1,
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 6,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
  },
  reviewActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  reviewContent: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 12,
  },
  reviewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authorName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
  },
  reviewDate: {
    fontSize: 12,
    color: '#999',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#999',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '90%',
    maxHeight: '80%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  closeButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalForm: {
    padding: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    backgroundColor: '#f9f9f9',
  },
  textArea: {
    height: 100,
    paddingTop: 10,
  },
  charCount: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
    marginTop: 4,
  },
  modalActions: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  saveButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 8,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
