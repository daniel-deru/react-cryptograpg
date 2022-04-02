import { Encryptions } from "../store/encryptionSlice"
import { swapObj, romanToUnicode } from "./helpers"
import morse  from "./morse.json"
import roman from "./roman.json"
import { GenericObject } from "../interfaces"
 
export const decodeMorse = (message: string, key: string | undefined): string => {
    let output: string = ""
    const reverseMorse: GenericObject = swapObj(morse)

    let wordArray: string[] | string[][] = message.split(" / ")
    wordArray = wordArray.map(char => char.split(" "))
    
    for(let [i, word] of wordArray.entries()){
        word = word.map(char => char = reverseMorse[char])
        output += word.join("")
        if(i !== wordArray.length - 1) output += " " 
    }

    if(key) {
        let unicodeArray: string[] = output.split(" ")
        let charArray: string[] = unicodeArray.map(code => String.fromCharCode(parseInt(code)))
        return charArray.join("")
    }

    return output
}

export const decodeRoman = (message: string): string => {
    let output: string[] = []
    let romanArray: string[] = message.split(" ")

    for(let numeral of romanArray){
        output.push(String.fromCharCode(romanToUnicode(numeral)))
    }

    return output.join("")
}