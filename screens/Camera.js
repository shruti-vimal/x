import React from 'react';
import {Text,View,Button,Platform,StatusBar,SafeAreaView} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';


export default class Camera extends React.Component{
    state={
        image:null,
    }
    render(){
        let {image}=this.state;
        return(
            <View>
                <Button title="pick an image from camera"  onPress={this.pickImage}/>
            </View>
        )
    }


    componentDidMount(){
     this.getPermissionsAsync();
    }

    getPermissionsAsync=async()=>{
        if(Platform.OS!==web){
            const {status}=await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if(status!== "granted"){
                alert("sorry we need camera roll permissions")
            }
        }
    }

    pickImage=async()=>{
        try{
            let result=await ImagePicker.launchImageLibraryAsyn({
                mediaTypes:ImagePicker.mediaTypeOptions.All,
                allowsEditing:true,
                aspect:[4,3],
                quality:1
            })

            if(!result.cancelled){
                this.setState({ image:result.data})
                console.log(result.uri)
                this.uploadImage(result.uri)
            }
        }
        catch(E){
            console.log(E)
        }

    }

    uploadImage=async(uri)=>{
        const data=new FormData();
        let file=""
    }
}
