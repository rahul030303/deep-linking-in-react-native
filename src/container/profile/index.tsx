import React from 'react';
import {Text,View,TouchableOpacity,SafeAreaView,ScrollView} from 'react-native';
import {styles} from './style';

const Profile = () =>{
    return(
        <SafeAreaView>
            <ScrollView>
                <Text style = {{fontSize:30,color:'red'}}>Hello, This is the Profile Page</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile;

