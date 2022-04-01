import { Encryptions } from "../store/encryptionSlice"
import { swapObj } from "./helpers"
import morse  from "./morse.json"
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

    return output
}