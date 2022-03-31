import morse from "./morse.json"
import { getRoman } from "./helpers"

export const encodeMorse = (message: string | number[]): string => {
    const morseCodes: any = morse
    let morseArray: string[] = []

    if(message instanceof String) message = message.toLowerCase()
    else if(message instanceof Array) message = message.join(" ")

    for(let i: number = 0; i < message.length; i++){
        if(message[i] == " ") morseArray.push("/")
        else if(message[i] in morse) morseArray.push(morseCodes[message[i]])
    }

    return morseArray.join(" ")
}

export const encodeRoman = (message: number[]): string => {
    let result: string = ""

    console.log(message)
    for(let i: number = 0; i < message.length; i++){
        result += getRoman(message[i])
        if(i !== message.length - 1) result += " "
    }
    return result
}