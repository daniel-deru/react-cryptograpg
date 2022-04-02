import { Encryptions } from "../store/encryptionSlice"
import roman from "./roman.json"
import { GenericObject } from "../interfaces"


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

export const romanToUnicode = (numeral: string): number => {
    let unicode: number = 0
    const romanNumerals: [string, number][] = Object.entries(roman).reverse()

    for(let romanNumeral of romanNumerals){
        const regex: RegExp = constructRomanRegex(romanNumeral[0])
        const match: RegExpMatchArray | null = numeral.match(regex)
        if(match){
            unicode += (romanNumeral[1] * match.length)
            numeral = numeral.replace(regex, "")
        }
    }
    
    return unicode
}

const constructRomanRegex = (numeral: string): RegExp => {
    if(numeral.length == 2) return new RegExp(`${numeral}`, "g")

    let lookBehindChar: string | null = null
    
    if(numeral === "M" || numeral === "D") lookBehindChar = "C"
    if(numeral === "C" || numeral === "L") lookBehindChar = "X"
    if(numeral === "X" || numeral === "V") lookBehindChar = "I"

    if(lookBehindChar) return new RegExp(`(?<!${lookBehindChar})${numeral}`, "g")

    return new RegExp(`${numeral}`, 'g')
}




export const swapObj = (object: GenericObject): GenericObject => {
    let result: GenericObject = {}
    for(let key in object){
        result[object[key]] = key
    }

    return result
}