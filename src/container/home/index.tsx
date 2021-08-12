import React from 'react';
import {Text,Button,View,TouchableOpacity,SafeAreaView,ScrollView} from 'react-native';
import {styles} from './style';

interface Props{
    navigation?:any
}

const Home = ({navigation}:Props) =>{
    return(
        <SafeAreaView>
            <ScrollView>
                <Text style = {{fontSize:30,color:'red'}}>Hello , Welcome to home page </Text>
                <Button
      title="Go to app's profile screen"
      onPress={() =>
        navigation.navigate('Profile')
      }
    />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;
