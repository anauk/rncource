import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
// import firebase from 'firebase';

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import imagePlace from "./src/assets/rat.jpg";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index'
import Header from "./src/components/Header/Header";
const url = "https://uifaces.co/api?limit=10&emotion[]=happiness";
class App extends Component {
  state = {
    data: []
  }
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  }
  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  }
  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  }
  placeClosedHandler = () => {
    this.props.onDeselectPlace();
  }
//   componentWillMount(){
//     var firebaseConfig = {
//       apiKey: "AIzaSyDP4oRSB8VDYYpSherbHm5is7kMtQlms9E",
//       authDomain: "rncourse-51c4c.firebaseapp.com",
//       databaseURL: "https://rncourse-51c4c.firebaseio.com",
//       projectId: "rncourse-51c4c",
//       storageBucket: "",
//       messagingSenderId: "284156950972",
//       appId: "1:284156950972:web:cc385f94e85d3c23"
//     };
//     // Initialize Firebase
//     firebase.initializeApp(firebaseConfig);
//     console.log('firabase========', firebase);
//     firebase.database().ref('/cards/001').set(
//   {
//       title: "My works",
//       image: require('https://cdn.serif.com/affinity/img/photo/home/0619/og-affinity-photo-200520190824.jpg'),
//       logo: require('https://cdn.serif.com/affinity/img/photo/home/0619/og-affinity-photo-200520190824.jpg'),
//       caption: "Tttttt",
//       subtitle: "nhmjmmm"
//   }
// ).then(()=>{
//     console.log('-------INSERTED!')
// }).catch((e) => {
//     console.log(e)
// });
//   }

  componentDidMount = async()=> {
    try {
      const response = await fetch(url, {
        headers: new Headers({
          "X-API-KEY": "063725014070af3ae20f3ae8adb051"
        }) });
      const data = await response.json();
      this.setState({data});
    } catch (e) {
      throw e
    }
  }

  render() {
    console.log(this.state , '------data');
    return (
      <View>
        <View>
        <Header title="List of item"/>
        </View>
      <View>
        <PlaceDetail selectedPlace={this.props.selectedPlace}
                     onItemDeleted={this.placeDeletedHandler}
                     onModalClosed={this.placeClosedHandler}/>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);