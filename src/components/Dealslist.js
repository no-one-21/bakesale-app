import React from 'react'

import {Text,View,StyleSheet,FlatList} from 'react-native';
import DealItem from './DealItem';

class Dealslist extends React.Component{
    render()
    {
        return(
            <View style={styles.list}>
             
             <FlatList
                data={this.props.deals}
                 renderItem={({item}) =>(<DealItem deals={item}/> )}
                />
                
           </View>
            
                
        
        )
    }
}

const styles=StyleSheet.create({
    list:{
        backgroundColor:'#eee',
        flex:1,
        width:'100%',
        paddingTop:50,
    }
})


export default Dealslist;