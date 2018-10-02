import React,{Component} from 'react';

import {Text,View,StyleSheet,Image} from 'react-native';
import {priceDisplay} from '../utils';

class Dealdetail extends Component{

    state={
        deal:this.props.initialDealData,
    }

    render(){
        return(
            <View style={styles.deal}>
                <Image source={{ uri : this.state.deal.media[0]}}
                style={styles.image}/>
                <View style={styles.info}>
                    <Text style={styles.title}>{this.state.deal.title}</Text>
                    <View style={styles.footer}>
                    <Text style={styles.cause}>{this.state.deal.cause.name}</Text>
                    <Text style={styles.price}>{priceDisplay(this.state.deal.price)}</Text>
                    
                    </View>
                </View>
                <Text>...</Text>
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
    deal:{
        marginHorizontal:12,
        marginTop:50,

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



export default Dealdetail;