import React, { useState, useEffect } from 'react'
import { Text } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomEmail = () => {

const [email, setEmail] = useState('');

AsyncStorage.getItem('EMAIL').then((email) =>{
    setEmail(email)
})


    return (
        <Text>
            {email}
        </Text>
    )
}

export default CustomEmail;
