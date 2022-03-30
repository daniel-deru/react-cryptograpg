import morse from "./morse.json"

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
    return "message"
}