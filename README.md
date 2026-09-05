# MediSectors

MediSectors is a cross platform React Native mobile application built to support AI powered learning, personalized academic progress tracking, and online tutoring.

The application helps students learn according to their curriculum, identify knowledge gaps, practice through AI generated content, communicate with tutors, and manage their learning journey from one place.

## Features

* AI powered personalized learning assistance
* Curriculum based learning tasks
* AI generated flashcards
* Exam simulations based on subject, grade, and learning level
* Learning progress tracking
* Skill map for identifying strengths and weaknesses
* AI based learning prognosis and recommendations
* Class assignment and document analysis
* Online tutoring and live meetings
* Individual and group chat support
* Document sharing between students and tutors
* Push notifications
* User profile management
* Multi language support with English and German translations
* Persistent login and app state management

## Tech Stack

| Technology                      | Purpose                                                   |
| ------------------------------- | --------------------------------------------------------- |
| React Native 0.73               | Cross platform mobile application development             |
| React Navigation                | Stack and bottom tab navigation                           |
| Redux Toolkit and Redux Persist | Global state and persistent user sessions                 |
| Firebase                        | Authentication, Firestore, Cloud Messaging, and analytics |
| Axios                           | REST API communication                                    |
| Socket.IO                       | Real time chat and online user status                     |
| i18next                         | Multi language support                                    |
| React Native Paper              | UI components and theming                                 |
| AsyncStorage                    | Local device storage                                      |

## Requirements

Before running the project, make sure the following tools are installed:

* Node.js 18 or later
* npm or Yarn
* Android Studio for Android development
* Xcode and CocoaPods for iOS development on macOS
* React Native development environment configured correctly

For complete environment setup, please follow the official [React Native environment setup guide](https://reactnative.dev/docs/environment-setup).

## Installation

Clone the repository:

```bash
git clone https://github.com/Mirza0125/MediSectors.git
```

Move into the project directory:

```bash
cd MediSectors
```

Install dependencies:

```bash
npm install
```

For iOS, install CocoaPods dependencies:

```bash
cd ios
pod install
cd ..
```

## Configuration

Before running the application, configure the required services:

1. Add your Firebase Android configuration file:

```text
android/app/google-services.json
```

2. Add your Firebase iOS configuration file:

```text
ios/GoogleService-Info.plist
```

3. Update Firebase configuration values in:

```text
firebase.js
```

4. Update the backend API base URL in:

```text
src/services/apiServices.js
```

5. Update Socket.IO server URLs if required:

```text
src/services/SocketServcies.js
src/services/userStatusSocket.js.js
```

## Run the Application

Start the Metro bundler:

```bash
npm start
```

Run the Android application:

```bash
npm run android
```

Run the iOS application:

```bash
npm run ios
```

## Available Scripts

```bash
npm start
```

Starts the Metro bundler.

```bash
npm run android
```

Runs the app on an Android emulator or connected Android device.

```bash
npm run ios
```

Runs the app on an iOS simulator.

```bash
npm test
```

Runs the Jest test suite.

```bash
npm run lint
```

Runs ESLint to check code quality.

## Project Structure

```text
MediSectors/
├── android/                 # Android native project
├── ios/                     # iOS native project
├── src/
│   ├── assets/              # Images, icons, and fonts
│   ├── redux/               # Redux store, actions, and reducers
│   ├── routers/             # App navigation
│   ├── screens/             # Application screens
│   ├── services/            # APIs, sockets, notifications, and utilities
│   └── translation/         # English and German translations
├── App.js                   # Main application entry point
├── firebase.js              # Firebase configuration
└── package.json             # Dependencies and scripts
```

## Security Note

Do not commit production API keys, Firebase credentials, signing keys, or sensitive server URLs to a public repository. Use secure environment configuration for production builds.

## Developer

Developed by [Jahanzaib Ali](https://github.com/Mirza0125)

## License

This project is private and intended for authorized use only.
