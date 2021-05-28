import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import styles from './Styles'
import ListItem from '../ListItem/ListItem'
import axios from 'axios';

class ListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          Movies: [],
          refreshing: false,
          pageNumber:1,
          total_pages: 1
        };
      }


    isCloseToBottom ({layoutMeasurement, contentOffset, contentSize}){
      const paddingToBottom = 20;
      return layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom;
    };

    getMovies() {
      if(this.state.pageNumber <= this.state.total_pages) {
        this.setState({refreshing: true})
        axios.get('http://api.themoviedb.org/3/discover/movie?api_key=acea91d2bff1c53e6604e4985b6989e2', {
            params: {
              page: this.state.pageNumber
            }
          })
            .then((response) => {
              this.setState((prevState) => ({Movies: prevState.Movies.concat(response.data.results)}))

              this.setState((prevState) => ({pageNumber: prevState.pageNumber + 1}))
              this.setState({refreshing: false})
              this.setState({total_pages: response.data.total_pages})


            })
            .catch(() => {
              this.setState({refreshing: false})

            });
          }
    }

    componentDidMount(){
        this.getMovies()
    }  

    render() {
        return(
          <ScrollView style={{width: "100%"}}
          onScroll={({nativeEvent}) => {
            if (this.isCloseToBottom(nativeEvent)) {
            if(!this.state.refreshing) {
               this.getMovies()
            }
           }
           }}
           scrollEventThrottle={400}
           >
            {this.state.Movies.map((item) => (
            <ListItem
            title={item.title}
            poster_path={item.poster_path}
            overview={item.overview}
            release_date={item.release_date}
          />        
          ))
        }
        {this.state.refreshing == false  ? null :(<ActivityIndicator size="large" color="#0000ff"/>)}
        </ScrollView>
        )
    }

}
export default ListContainer