import { Encryptions } from "../store/encryptionSlice"
import CryptoJS from 'crypto-js'
import { getRadix } from "./helpers"
import { encodeMorse, encodeRoman } from "./encode"
import { decodeMorse } from "./decode"

const { BINARY, OCTAL, UNICODE, HEX, MORSE, ROMAN} = Encryptions

export const encode = (target: string, type: Encryptions, key: string | undefined): string => {
    let message: string = target
    let output: string = ""
    let radix: number = getRadix(type)
    
    let unicodeArray: number[] = []

    if(key) message = CryptoJS.AES.encrypt(target, key).toString()
    
    unicodeArray = message.split("").map((char: string) => char.charCodeAt(0))

    if(type === MORSE){
        const input = key ? unicodeArray : message
        output = encodeMorse(input)
    }
    else if(type === ROMAN){
        output = encodeRoman(unicodeArray)
    }
    else {
        for(let i: number = 0; i < message.length; i++){
            let result: string = message.charCodeAt(i).toString(radix)
            if(i !== message.length - 1) result += " "
            output += result
        }
    }
    
    return output
}

export const decode = (target: string, type: Encryptions, key: string | undefined): string => {
    let output: string | CryptoJS.lib.CipherParams = ""
    const radix = getRadix(type)
    let targetArray: string[] = target.split(" ")

    if(type === MORSE){
        output = decodeMorse(target, key)
    }
    else if(type === ROMAN){

    }
    else {
        let stringArr: string[] = targetArray.map(item => {
          return  String.fromCharCode(parseInt(item.toString(), radix))
        })
        output = stringArr.join("")

    }

    if(key) output = CryptoJS.AES.decrypt(output, key).toString(CryptoJS.enc.Utf8)

    return output
}

