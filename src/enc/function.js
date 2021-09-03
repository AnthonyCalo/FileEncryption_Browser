import CryptoJS from 'crypto-js';


const getSHA256 = async (value) => {
    return await CryptoJS.SHA256(value).toString();
}
export const getKey = async (key) => {
    return await getSHA256(key);
}

export const encrypt=async (input, password)=> {
    var file = input;
    var reader = new FileReader();
    reader.onload = async () => {
        var key = await getKey(password);
        console.log(key);
        var wordArray = CryptoJS.lib.WordArray.create(reader.result);           // Convert: ArrayBuffer -> WordArray
        var encrypted = CryptoJS.AES.encrypt(wordArray, key).toString();        // Encryption: I: WordArray -> O: -> Base64 encoded string (OpenSSL-format)

        var fileEnc = new Blob([encrypted]);                                    // Create blob from string

        var a = document.createElement("a");
        var url = window.URL.createObjectURL(fileEnc);
        var filename = file.name + ".crypt";
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
    };
    reader.readAsArrayBuffer(file);
}
function convertWordArrayToUint8Array(wordArray) {
    var arrayOfWords = wordArray.hasOwnProperty("words") ? wordArray.words : [];
    var length = wordArray.hasOwnProperty("sigBytes") ? wordArray.sigBytes : arrayOfWords.length * 4;
    var uInt8Array = new Uint8Array(length), index=0, word, i;
    for (i=0; i<length; i++) {
        word = arrayOfWords[i];
        uInt8Array[index++] = word >> 24;
        uInt8Array[index++] = (word >> 16) & 0xff;
        uInt8Array[index++] = (word >> 8) & 0xff;
        uInt8Array[index++] = word & 0xff;
    }
    return uInt8Array;
}
export function decrypt(input, password) {
    var file = input;
    var reader = new FileReader();
    reader.onload = async () => {
        var key = "1234567887654321";
        //Hash the password to add a level of security
        var key = await getKey(key)  

        var decrypted = CryptoJS.AES.decrypt(reader.result, key);               // Decryption: I: Base64 encoded string (OpenSSL-format) -> O: WordArray
        var typedArray = convertWordArrayToUint8Array(decrypted);               // Convert: WordArray -> typed array

        var fileDec = new Blob([typedArray]);                                   // Create blob from typed array

        var a = document.createElement("a");
        var url = window.URL.createObjectURL(fileDec);
        console.log(file.name, "PRENAME");
        var filename = file.name.substr(0, file.name.length - 6);
        console.log(filename, "<-UPdated")
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
    };
    reader.readAsText(file);
}