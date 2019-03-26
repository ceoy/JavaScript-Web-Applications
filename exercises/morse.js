var alphabetString =
    "a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;" +
    "m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;" +
    "y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..;!=-.-.--";

let mappedMorseCodes = alphabetString.split(";").map(stringToMap => ({
        key: stringToMap.substring(0, 1),
        value: stringToMap.substring(2, stringToMap.length)
    })
)

/**
 * Parses a single char to a morse code from the [alphabetString]
 * @param {char} charToParse the char to parse
 * @returns {string} the morse code of the char 
 */
var charToMorseCode = (charToParse) => {
    return mappedMorseCodes.find(pair => pair.key === charToParse).value
}

/**
 * Converts a String to morse code
 * @param {string} stringToParse the string to parse to morse code
 */
var convertToMorse = (stringToParse) => {
    return stringToParse.split("").map(x => charToMorseCode(x)).join(" ")
}

/**
 * decodes a morse string that represents a single morse key
 * @param {string} morseString the morse representation of a key
 * @returns {char} the key to the morse string
 */
var decodeMorseChar = (morseString) => {
    return mappedMorseCodes.find(x => x.value === morseString).key
}

/**
 * decodes a morse string
 * @param {string} morseString a complete morse string
 * @returns {string} a string representation of the morse code
 */
var decodeMorse = (morseString) => {
    return morseString.split(" ").map(x => decodeMorseChar(x)).join("")
}

console.log(convertToMorse("dr tim isch e js god"))
console.log(decodeMorse(".. -. -.. . . -.."))