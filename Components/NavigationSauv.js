import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './HomeScreen.js';
import MessageScreen from './MessageBox.js';
import AddPostScreen from './HomeScreen.js';
import NotificationScreen from './Notification.js';
import ProfileScreen from './Notification.js';

//Screen names
const homeName = "Home";
const messageName = "Message";
const addPostName = "Settings";
const notificationName = "Notification";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === messageName) {
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';

            } else if (rn === addPostName) {
              iconName = focused ? 'add' : 'add-outline';

            } else if (rn === notificationName) {
              iconName = focused ? 'notifications' : 'notifications-outline';

            } else if (rn === profileName) {
                iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        
        tabBarOptions={{
          activeTintColor: 'cyan',
          inactiveTintColor: 'grey',
          labelStyle: {display: 'none' },
            style: {height: 60, backgroundColor: '#1C1C1C', borderTopWidth: 0, elevation: 0, shadowOpacity: 0, shadowOffset: {height: 0}, shadowRadius: 0, paddingBottom: 10, paddingTop: 10}
        }}

        >

        <Tab.Screen name={homeName} component={HomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name={messageName} component={MessageScreen} options={{headerShown: false}} />
        <Tab.Screen name={addPostName} component={AddPostScreen} options={{headerShown: false}} />
        <Tab.Screen name={notificationName} component={NotificationScreen} options={{headerShown: false}} />
        <Tab.Screen name={profileName} component={ProfileScreen} options={{headerShown: false}} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;