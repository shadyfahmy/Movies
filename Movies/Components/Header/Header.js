import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles'

class Header extends Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Movies</Text>
            </View>
        )
    }

}
export default Header;