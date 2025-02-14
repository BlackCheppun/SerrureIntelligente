import axiosClient from "../axios";

import { MMKVLoader } from "react-native-mmkv-storage";

const mmkv = new MMKVLoader().initialize();

export class lockService {
    static async addidOnfirstime() {
        try {

            const firsttime = await mmkv.getStringAsync("firsttime");
            if (firsttime == null) {
                const user_id = await this.registerUser();
                mmkv.setStringAsync("firsttime", "false");
                mmkv.setStringAsync("user_id", user_id);
                return user_id;
            }
            else {
                const user_id = await mmkv.getStringAsync("user_id");
                return user_id;
            }
        } catch (error) {
            console.log(error); // Handle error
        }
    }

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

    static async getLocks() {
        try {
            const user_id = await mmkv.getStringAsync("user_id");
            const response = await axiosClient.get("/locks", {
                params: {
                    userid: user_id
                }
            });
            return response.data.locks as string[][];
        } catch (error) {
            console.log(error); // Handle error
            return [];
        }
    }

    static async addLock(identifier: string, password: string, label: string) {
        try {
            const user_id = await mmkv.getStringAsync("user_id");
            const response = await axiosClient.post("/addlock", {
                userid: user_id,
                lockid: identifier,
                password: password,
                label: label
            });
            if (response.status == 200) {
                return true;
            }
            else {
                return false;
            }
        } catch (error) {
            console.log(error); // Handle error
        }

    }

}