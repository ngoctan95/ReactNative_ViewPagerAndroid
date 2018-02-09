import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ViewPagerAndroid
} from 'react-native';

export default class ViewPagerEx extends Component{
    render(){
        return(
            <ViewPagerAndroid style={{flex:1}}
                                initialPage={2}
                                // onPageScroll={(event)=>{
                                //     console.log(`offset= ${event.nativeEvent.offset}`)}}
                                // onPageScrollStateChanged={(state)=>{
                                //   console.log(`state=${state}`)  
                                // }}
                                onPageSelected={(page)=>{
                                    console.log(`page=${page.nativeEvent.position}`)
                                }}>
                    <View style={{backgroundColor:'lightseagreen'}}>
                        <Text> Man hinh 1</Text>
                    </View>
                    <View style={{backgroundColor:'palevioletred'}}>
                        <Text> Man hinh 2</Text>
                    </View>
                    <View style={{backgroundColor:'salmon'}}>
                        <Text> Man hinh 3</Text>
                    </View>
            </ViewPagerAndroid>
        );
    }
}