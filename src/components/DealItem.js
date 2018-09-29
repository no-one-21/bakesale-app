import React,{Component} from 'react';

import {Text,View,StyleSheet,Image} from 'react-native';
import {priceDisplay} from '../utils';

class DealItem extends Component{
    render(){
        return(
            <View>
                <Image source={{ uri : this.props.deals.media[0]}}
                style={styles.image}/>
                <View style={styles.info}>
                    <Text style={styles.title}>{this.props.deals.title}</Text>
                    <View style={styles.footer}>
                    <Text style={styles.cause}>{this.props.deals.cause.name}</Text>
                    <Text style={styles.price}>{priceDisplay(this.props.deals.price)}</Text>
                    
                    </View>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    image:{
        height:150,
        width:'100%',
        backgroundColor:'#ccc',
    },
    info:{
        padding:10,
        backgroundColor:'#fff',
        borderColor:'#bbb',
        borderWidth:3,
        borderTopWidth:0,
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:5,
    },
    footer:{
        flexDirection:'row',
    },
    cause:{
        flex:2,
    },
    price:{
        flex:1,
        textAlign:'right',
    },
})



export default DealItem;