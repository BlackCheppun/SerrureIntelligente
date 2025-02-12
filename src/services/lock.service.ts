import axiosClient from "../axios";

import { MMKVLoader } from "react-native-mmkv-storage";

const mmkv = new MMKVLoader().initialize();

export class lockService {

    static async registerUser() {
        try {

            const response = await axiosClient.post("/RegisterUser");
            if (response.status == 200) {
                return response.data.userid;
            }
            console.log(response);
        } catch (error) {
            console.log(error); // Handle error
        }
    }

}