import JSZip from "jszip";
import CryptoJS from "crypto-js";

export const getSHA256 = async (value) => {
    return await CryptoJS.SHA256(value).toString();
}

export const getKey = async (key) => {
    return await getSHA256(key);
}


