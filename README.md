# ORION Robot App 🤖

A comprehensive React Native mobile application built with Expo, featuring modern UI/UX design, user authentication, profile management, and interactive robot-themed features. Perfect for STEM education and robot enthusiasts.

## ✨ Features

### 🔐 Authentication & Onboarding

- **Splash Screen**: Animated welcome screen with ORION branding
- **Authentication Flow**: Complete sign in and sign up screens with social login options
- **Home Dashboard**: Welcome screen with illustrated robot graphics

### 👤 Profile Management

- **Complete Profile System**: Full user profile with image upload functionality
- **Image Picker**: Camera and gallery integration with cropping capabilities
- **Profile Picture Display**: Dynamic profile images shown across the app
- **Data Validation**: Email validation and required field checking
- **Real-time Updates**: Instant profile updates with global state management

### 🎯 Interactive Features

- **Topic Selection Hub**: Interactive grid of robot-themed features
- **About Section**: Learn about robots and STEM education
- **Smart Reminders**: Advanced time picker with AM/PM selection
- **Review System**: Complete CRUD operations for user reviews and ratings
- **Music Integration**: Audio features for robot interactions
- **AI Chatbot**: Conversational AI interface
- **Shopping Assistant**: E-commerce integration

### 🎨 Modern UI/UX

- **Responsive Design**: Optimized for all screen sizes
- **Dark/Light Themes**: Consistent color scheme with black headers and white content
- **Smooth Animations**: Fluid navigation and interactions
- **Touch-Friendly**: Large buttons and intuitive gestures

## 🛠 Tech Stack

- **React Native** - Cross-platform mobile development
- **Expo SDK 53** - Development platform and native APIs
- **React Navigation v6** - Stack-based navigation system
- **React Context API** - Global state management
- **Expo Vector Icons** - Comprehensive icon library
- **Expo Image Picker** - Camera and gallery integration
- **StyleSheet API** - Native styling solution
- **JavaScript ES6+** - Modern JavaScript features

## 📱 Screens Overview

| Screen                | Description         | Features                                |
| --------------------- | ------------------- | --------------------------------------- |
| **SplashScreen**      | App entry point     | Branding, navigation to auth            |
| **SignInScreen**      | User authentication | Email/password login, social auth       |
| **SignUpScreen**      | User registration   | Form validation, privacy policy         |
| **HomeScreen**        | Main dashboard      | Welcome message, navigation hub         |
| **ChooseTopicScreen** | Feature selection   | 6 interactive topic cards with icons    |
| **AboutScreen**       | Information hub     | Robot education content                 |
| **ReminderScreen**    | Task management     | Advanced time picker, reminder setting  |
| **ReviewsScreen**     | Review system       | Add, edit, delete, rate (1-5 stars)     |
| **ProfileScreen**     | User management     | Profile editing, image upload, settings |

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or later) - [Download here](https://nodejs.org/)
- **Expo CLI** - Install globally: `npm install -g @expo/cli`
- **Mobile device** with Expo Go app OR **Android/iOS emulator**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Gimhani03/Orion-Robot-App.git
   cd orion
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npx expo start
   ```

4. **Run on your preferred platform:**
   ```bash
   npx expo start --android  # For Android
   npx expo start --ios      # For iOS
   npx expo start --web      # For web browser
   ```

### 📱 Testing on Device

1. Install **Expo Go** from App Store/Google Play
2. Scan the QR code from the terminal/browser
3. The app will load on your device

## 📁 Project Structure

```
orion/
├── src/
│   ├── screens/
│   │   ├── SplashScreen.js      # Welcome/landing screen
│   │   ├── SignInScreen.js      # User authentication
│   │   ├── SignUpScreen.js      # User registration
│   │   ├── HomeScreen.js        # Main dashboard
│   │   ├── ChooseTopicScreen.js # Topic selection grid
│   │   ├── AboutScreen.js       # Information and education
│   │   ├── ReminderScreen.js    # Time management features
│   │   ├── ReviewsScreen.js     # Review and rating system
│   │   └── ProfileScreen.js     # User profile management
│   ├── context/
│   │   └── ProfileContext.js    # Global state management
│   └── components/              # Reusable UI components
├── App.js                       # Main navigation container
├── package.json                 # Dependencies and scripts
└── README.md                    # Project documentation
```

## 🎨 Design System

### Color Palette

- **Primary**: `#000000` (Black headers and buttons)
- **Background**: `#FFFFFF` (White content areas)
- **Secondary**: `#6B7280` (Gray text and icons)
- **Accent Colors**:
  - Blue: `#60A5FA` (About)
  - Red: `#F87171` (Reminders)
  - Orange: `#FB923C` (Music)
  - Yellow: `#FACC15` (Chatbot)
  - Green: `#4ADE80` (Shop)
  - Purple: `#A78BFA` (Reviews)

### Typography

- **Headers**: Bold, 24px
- **Body Text**: Regular, 16px
- **Captions**: Regular, 14px

### Components

- **Buttons**: Rounded corners, 12px padding
- **Cards**: Rounded 16px, shadow effects
- **Input Fields**: Bordered, rounded 8px
- **Profile Images**: Circular with border

## 🔧 Development Guide

### Adding New Features

1. **Create New Screen:**

   ```javascript
   // src/screens/NewScreen.js
   import React from "react";
   import { View, Text, StyleSheet } from "react-native";

   export default function NewScreen({ navigation }) {
     return (
       <View style={styles.container}>
         <Text>New Feature</Text>
       </View>
     );
   }
   ```

2. **Add to Navigation:**

   ```javascript
   // App.js
   <Stack.Screen name="NewScreen" component={NewScreen} />
   ```

3. **Update Context (if needed):**
   ```javascript
   // src/context/ProfileContext.js
   const [newFeature, setNewFeature] = useState(null);
   ```

### Styling Guidelines

- Use StyleSheet API for consistent styling
- Follow the established color scheme
- Maintain 24px horizontal padding for screens
- Use TouchableOpacity for all interactive elements
- Add proper loading states and error handling

### Testing Checklist

- [ ] Test on both Android and iOS
- [ ] Verify navigation flow
- [ ] Test image picker permissions
- [ ] Validate form inputs
- [ ] Check responsive design
- [ ] Test offline behavior

## 📖 Feature Documentation

### Profile Management

- **Image Upload**: Supports camera and gallery with 1:1 aspect ratio cropping
- **Data Persistence**: Profile data synced across all screens
- **Validation**: Email format and required field validation
- **Permissions**: Automatic camera and media library permission handling

### Review System

- **CRUD Operations**: Create, read, update, delete reviews
- **Star Ratings**: 1-5 star rating system with visual feedback
- **Data Management**: Local state management with form validation

### Time Management

- **Advanced Picker**: Custom time picker with AM/PM selection
- **User Experience**: Intuitive scroll interface for time selection
- **Validation**: Proper time format handling

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Commit your changes:** `git commit -m 'Add amazing feature'`
5. **Push to the branch:** `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Contribution Guidelines

- Follow existing code style and patterns
- Add proper error handling and validation
- Test on multiple devices/screen sizes
- Update documentation for new features
- Include meaningful commit messages

## 🐛 Troubleshooting

### Common Issues

**Expo Image Picker Not Working:**

```bash
npm install expo-image-picker@~16.1.4
npx expo start --clear
```

**Metro Bundler Issues:**

```bash
npx expo start --clear
# or
rm -rf node_modules && npm install
```

**Permission Errors:**

- Ensure proper permissions in app.json
- Test on physical device for camera access
- Check expo-image-picker version compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Expo Team** for the amazing development platform
- **React Native Community** for comprehensive documentation
- **Vector Icon Libraries** for beautiful iconography
- **STEM Education Community** for inspiration and guidance

---

**Built with ❤️ for robot enthusiasts and STEM learners**

For questions or support, please open an issue or contact the development team.
