import React, { useState } from 'react';
import { View, Text, SafeAreaView, Animated, StyleSheet, PanResponder, Image, TouchableOpacity, Switch } from 'react-native';
import { out } from 'react-native/Libraries/Animated/Easing';
import Draggable from 'react-native-draggable';
import ToggleSwitch from 'toggle-switch-react-native'
const DragTest = ({ navigation }) => {
    const [imagesData, setImagesData] = useState([]);
    const [toggle, settoggle] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const pushImage = (name,id) => {
        console.log('image pushed');
        const obj = {
            "Id":id,
            "x": 100,
            "y": 250,
            "img": name,
            "isOn":false,
        }
        setImagesData(data => [...data, obj]);
    }
    const removeImage = (name) => {
        console.log(name);
        console.log('Before ', imagesData);
        const newData = [...imagesData];
        const prevIndex = imagesData.findIndex(item => item.img == name);
        newData.splice(prevIndex, 1);
        console.log('After ', newData);
        setImagesData(newData);
    }

    const onChangeValue = (itemSelected) => {
        const newData = imagesData.map(item => {
            if (item.Id == itemSelected.Id) {
                return {
                    ...item,
                    isOn: !item.isOn,
                }
            }
            return {
                ...item,
                isOn: item.isOn
            }
        })
        setImagesData(newData);
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'gray' }} >
            <View style={{ height: 70, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'center', }}>
                <TouchableOpacity onPress={() => pushImage(require('../assets/OR_.png'),1)}>
                    <Image source={require('../assets/OR_.png')} style={styles.workImage} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => pushImage(require('../assets/and_.png'),2)}>
                    <Image source={require('../assets/and_.png')} style={styles.workImage} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => pushImage(require('../assets/NOT_.png'),3)}>
                    <Image source={require('../assets/NOT_.png')} style={styles.workImage} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => pushImage(require('../assets/NOR_.png'),4)}>
                    <Image source={require('../assets/NOR_.png')} style={styles.workImage} />
                </TouchableOpacity>
            </View>
            <View style={{ height: 70, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'center', }}>
                <TouchableOpacity onPress={() => pushImage(require('../assets/Nand_.png'),5)}>
                    <Image source={require('../assets/Nand_.png')} style={styles.workImage} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => pushImage(require('../assets/XOR_.png'),6)}>
                    <Image source={require('../assets/XOR_.png')} style={styles.workImage} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => pushImage(require('../assets/XNOR_.png'),7)}>
                    <Image source={require('../assets/XNOR_.png')} style={styles.workImage} />
                </TouchableOpacity>
                {/* 
                <ToggleSwitch
                    isOn={false}
                    onColor="green"
                    offColor="red"
                    // label="Example label"
                    // labelStyle={{ color: "black", fontWeight: "700" }}
                    // size="small"
                    onToggle={isOn => {pushImage(true) }}
                /> */}
                <TouchableOpacity onPress={() => pushImage(true,8)}>
                  <Text>Switch</Text>
                </TouchableOpacity>
            </View>
            <View>
                {imagesData.map(img => {
                    return (
                        <Draggable x={img.x} y={img.y}
                            maxX={350}
                            maxY={540}
                            minX={10}
                            minY={16}
                            onDragRelease={console.log('drag realsed')}
                            onLongPress={() => console.log('long press')}
                            onShortPressRelease={() => console.log('press drag')}
                            onPressIn={() => console.log('in press')}
                            onPressOut={() => console.log('out press')}
                        >
                            <View>
                                <TouchableOpacity onLongPress={() => removeImage(img.img)}>
                                    {
                                        img.img == true ? (
                                            <View style={{height:50,width:50,justifyContent:'center'}}> 
                                            <Switch
                                              trackColor={{ false: "#008B8B", true: "#81b0ff" }}
                                              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                              ios_backgroundColor="#3e3e3e"
                                              onValueChange={()=>onChangeValue(img)}
                                              value={img.isOn}
                                            />
                                          </View>
                                        ) : (<Image source={img.img}
                                            key={1}
                                            style={{ height: 100, width: 100 }}
                                            resizeMode='contain' />)
                                    }
                                </TouchableOpacity>
                            </View>
                        </Draggable>
                    );
                })}
            </View>
        </View>
    );
}
export default DragTest;
const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        paddingTop: 35,
        paddingBottom: 50,
        alignSelf: 'center',
        fontSize: 35,
        color: '#008B8B',
    },
    lineInput: {
        marginLeft: 20,
        marginTop: 15,
        marginRight: 20,
        height: 60,
        flex: 0.8,
        borderBottomWidth: 1,
    },

    text1: {
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 30,
        paddingBottom: 25,
        fontSize: 30,
        color: '#008B8B',
    },
    text2: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 22
    },
    buttonStyle: {
        marginTop: 50,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        alignItems: 'center',
        backgroundColor: '#008B8B',
        borderRadius: 10,
        borderWidth: 1,
    },
    workImage: {
        height: 40,
        width: 70,
        margin: 10,

    },
    img: {
        height: 40,
        width: 100,
        margin: 10,
        resizeMode: 'cover'
    }
})
