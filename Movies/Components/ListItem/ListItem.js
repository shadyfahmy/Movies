import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Styles'

class ListItem extends Component {

    render() {
        const img_base = "https://image.tmdb.org/t/p/w500"
        return(
            <View style={styles.container}>
                <View style={styles.img}>
                    <Image style={styles.image}
                    source={{ 
                    uri: img_base.concat(this.props.poster_path)
                    }}/>

                </View>
                <View style={styles.txt}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.overview}>{this.props.overview}</Text>
                <Text style={styles.date}>Release date: {this.props.release_date}</Text>
                </View>
            </View>
        )
    }

}
export default ListItem