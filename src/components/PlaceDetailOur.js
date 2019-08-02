import React, { Component } from 'react'
import { Text, View, Modal,Image,Button,StyleSheet } from 'react-native'

export default class PlaceDetailOur extends Component {
    
    constructor(){
        super()

        this.state={
            modalContent:null,
        }
    }
    
    render() {

        //////// calculation to view    

        if(this.props.selectedInput){ //exist here, since render is called

            this.state.modalContent=( //jsx return view

                <View>

                    <Image source={this.props.selectedInput.image} style={styles.placeImage}></Image>
                    <Text style={styles.placeName}>{this.props.selectedInput.name}</Text>
                
                
                </View>    

            )

        }

        console.log('check ObjectSelected '+ JSON.stringify(this.props.selectedInput));
        //////// calculation to view
        return (

            

            <Modal
                visible={this.props.selectedInput!==null} //this return true
                animationType='slide'
                >
                <View style={styles.modalContainer}>
                {this.state.modalContent}
                <Text> textInComponent update </Text>

                    <View>
                
                        <Button title='Delete' style={{margin:5}} 
                        onPress={this.props.deleteModal}></Button>
                        <Button title='Close' style={{margin:5}}
                        onPress={this.props.closeModal}
                        ></Button>
                        <Button title='Delete Our' style={{margin:5}}
                        onPress={()=>this.props.modalDeleteOur(this.props.selectedInput.key)} //we return key
                        ></Button>

                    </View>


                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modalContainer: {
      margin: 22
    },
    placeImage: {
      width: "100%",
      height: 200
    },
    placeName: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 28
    }
  });
