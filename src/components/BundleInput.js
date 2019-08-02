import React, { Component } from 'react'
import { Text, View, FlatList, } from 'react-native'

import ListItem from './ListItem'

export default class BundleInput extends Component {
    


    render() {

        console.log('check BundleInput :  ' +JSON.stringify(this.props.inputValue) )    

        return (
            <FlatList        
            style={{margin:2,marginHorizontal:10, backgroundColor:'#f2f9fe'}}        
            data={this.props.input}
            renderItem={ (info)=>(

                //<Text style={{width:'80%'}}>{info.item.name}</Text>    
                <ListItem
                 textHere={info.item.name} 
                 index={info.item.key}  
                 imageSet={info.item.image}
                 onItemPressed={()=>{this.props.clickParamPassed(info.item.key)}} //declare function to return param to props
                />

            )
            }
            
            >
                
            </FlatList>
        )
    }
}
