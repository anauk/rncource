import React from 'react'
import {Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const placeDetail = props => {
  let modalContent = null;
  if (props.selectedPlace) {
    modalContent = (<View>
      <Image
        source={props.selectedPlace.image}
        style={styles.placeImage}/>
      <Text>{props.selectedPlace.name}</Text>
    </View>)
  }
  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide">
      <View style={styles.containerModal}>
        {modalContent}
        <View>
          <TouchableOpacity onPress={props.onItemDeleted}>
            <View style={styles.deleteIcon}>
              <Icon size={30} name="ios-trash" color="red"/>
            </View>
          </TouchableOpacity>
          {/*<Button title="Delete" onPress={props.onItemDeleted}/>*/}
          <Button title="Close" onPress={props.onModalClosed}/>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  containerModal: {
    margin: 42
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  deleteIcon: {
    alignItems: 'center'
  }
})
export default placeDetail