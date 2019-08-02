/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import InputComponent from './src/components/InputComponent'

import BundleInput from './src/components/BundleInput'

import PlaceDetailOur from './src/components/PlaceDetailOur'

class App extends React.Component {

    constructor(){
      super()

      this.state={

        arrayOfInput:[],

        objectSelected:null
      }

    } 

  //function here?

  _handleInputIntoArray =(paramPassed)=>{

    console.log('check Param :  ' + paramPassed )    


    this.setState( (prevState)=>({

        arrayOfInput:prevState.arrayOfInput.concat({

          name: paramPassed,
          key: Math.random(),
          image: {

            uri:"https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg",
          }          

        })

    }))


    console.log('check Handle :  ' +JSON.stringify(this.state.arrayOfInput) )    
  }

  //new function test, 

  _functionHandleItem_new =(keyReceived)=>{

      this.state.arrayOfInput.forEach(element => {

        if(element.key===keyReceived){

            var test ={
              key:element.key,
              name:element.name,
              image:element.image
            }

            this.setState({

                objectSelected:test //create object from value we got
            })

          }

      });

      console.log('latest '+ JSON.stringify(test))
  }


  /// tiru function test

  
  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        objectSelected: prevState.arrayOfInput.find(place => {
          return place.key === key;
        })
      };
    });

    //console.log('latest '+ JSON.stringify(this.state.objectSelected))

  };

  //function to delete modal

  _functionDeleteModal=()=>{

    this.setState( (prevState)=>({

        arrayOfInput: prevState.arrayOfInput.filter( (x)=>{

          return x.key !== prevState.objectSelected.key;
        }),

        objectSelected:null  


    }))


  }


  _functionDeleteModal_Our=(keyReceived)=>{




  }

  // function to just close modal

  _functionCloseModal = ()=>{

    this.setState({

      objectSelected:null,
    })
  }

  // end function

  render(){
  return (
    <View>
    <Text style={{alignSelf:'center', margin:10}}> App </Text>

    <PlaceDetailOur    
    selectedInput={this.state.objectSelected} //so we need variable, processed from selected.
    //we send this variable down to state, to process
    
    deleteModal={this._functionDeleteModal} //call function to handle this.
    closeModal={this._functionCloseModal}

    //modalDeleteOur={this._functionDeleteModal_Our} //call function to handle this paramater
    />

    <InputComponent inputValue={this._handleInputIntoArray}/>

    <View style={{margin:10}}></View>
    
    <BundleInput input={this.state.arrayOfInput}        //we passed the input
    clickParamPassed={this.placeSelectedHandler} //can call function 

    />
    
    
    </View>
  );

  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
