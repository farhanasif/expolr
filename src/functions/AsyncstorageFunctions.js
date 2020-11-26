import { AsyncStorage } from 'react-native';

const storData = async (key, value) =>{
    try{
        await AsyncStorage.setItem(key,value);
        alert("Data Storage Successfully!");
    } catch (error){
        alert(error);
    }
};

const storDataJSON = async (key, value) =>{
    try{
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
        alert("Data Storage Successfully!");
    }catch (error){
        alert(error);
    }
};

const getData = async(key)=>{
    try {
        let data = await AsyncStorage.getItem(key);
        if (data != null) {
            return data;
        } else {
            alert("No data with this key");
        }
    } catch (error) {
        alert(error);
    }
};

const getDataJSON = async (key)=>{
    try {
        let data = await AsyncStorage.getItem(key);
        if (data != null) {
            const jsonData = JSON.parse(data);
            return data;
        } else {
            alert("No data with this key");
        }
    } catch (error) {
        alert(error);
    }
};

const removeData = async (key) =>{
    try {
        await AsyncStorage.removeItem(key);
        alert("Data Removed Successfully!");
    } catch (error) {
        alert(error);
    }
};

export {storData, storDataJSON, getData, getDataJSON, removeData};