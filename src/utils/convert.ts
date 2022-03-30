import { Encryptions } from "../store/encryptionSlice"
import CryptoJS from 'crypto-js'
const {RAW, BINARY, OCTAL, UNICODE, HEX, MORSE, ROMAN} = Encryptions


export const Encode = (target: string, type: Encryptions, key: string | undefined): string => {
    let message: string = ""

    if(key) message = CryptoJS.AES.encrypt(target, key).toString()
    if(key && type === RAW) return message

    let output: string = ""
    let radix: number = getRadix(type)


    for(let i: number = 0; i < target.length; i++){
        let result: string = target.charCodeAt(i).toString(radix)
        if(i !== target.length - 1) result += " "
        output += result
    }
    // Make functions to convert morse and roman and add unicode
    return output
}

const getRadix = (type: Encryptions): number => {
    let radix: number = 10

    switch(type){
        case BINARY: 
            radix = 2
            break
        case OCTAL:
            radix = 8
            break
        case UNICODE:
            radix = 10
            break
        case HEX:
            radix = 16
            break
        default:
            radix = 10
    }

    return radix
}