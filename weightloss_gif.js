import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-simple-modal";



export default class Scissor extends React.Component{


    static navigationOptions = {
        header: null,
        headerVisible: false,
        headerMode: 'none',
        headerStyle: {
            backgroundColor: 'red'
        },

    }
   constructor(){
       super()
           this.state={
               open:false

       }
   }
    modalDidOpen = () => console.log("Modal did open.");

    modalDidClose = () => {
        this.setState({ open: false });
        console.log("Modal did close.");
    };
    render(){
        return(
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity>
                    <Text>Open modal</Text>
                </TouchableOpacity>
                <Modal
                    offset={this.state.offset}
                    open={this.state.open}
                    modalDidOpen={this.modalDidOpen}
                    modalDidClose={this.modalDidClose}
                    style={{ alignItems: "center" }}
                >
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 20, marginBottom: 10 }}>Hello world!</Text>
                        <TouchableOpacity style={{ margin: 5 }} onPress={this.moveUp}>
                            <Text>Move modal up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ margin: 5 }}
                            onPress={this.resetPosition}
                        >
                            <Text>Reset modal position</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ margin: 5 }} onPress={this.closeModal}>
                            <Text>Close modal</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        )
    }
}