import { Encryptions } from "../store/encryptionSlice"
import roman from "./roman.json"

const { BINARY, OCTAL, UNICODE, HEX, MORSE, ROMAN} = Encryptions


export const getRadix = (type: Encryptions): number => {
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

export const getRoman = (number: number): string => {
    let romanNumerals: [string, number][] = Object.entries(roman).reverse()
    let result: string = ""

    for(let i: number = 0; i < romanNumerals.length; i++){
        if(romanNumerals[i][1] <= number){
            let m = Math.floor(number / romanNumerals[i][1])
            number -= (romanNumerals[i][1] * m)
            result += romanNumerals[i][0].repeat(m)
        }
    }

    return result
}