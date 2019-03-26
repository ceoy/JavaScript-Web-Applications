var alphabetString =
    "a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;" +
    "m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;" +
    "y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..;!=-.-.--";

/**
 * Creates a Char that contains the char value and its string representation
 * @param {String} value the value of the char
 * @param {String} string the string representation of the char
 */
function Char(value, string) {
    this.value = value
    this.string = string
}

/**
 * Creates a Font
 * @param {String} name of the font 
 * @param {Char array} chars array with the chars
 */
function Font(name, chars) {
    this.name = name
    this.chars = []
    chars.forEach(element => {
        this.chars[element.value] = element
    });
}

Font.prototype.render = function (text) {
    return text.split("").map(x => this.chars[x].string).join(" ")
}

Font.prototype.write = function (text, to) {
    let result = this.render(text)
    if (to instanceof Function) {
        to(result)
    } else {
        console.log(result)
    }
}

let chars = alphabetString.split(";").map(stringToMap => {
    let value = stringToMap.substring(0, 1)
    let string = stringToMap.substring(2, stringToMap.length);
    return new Char(value, string)
})

var morseFont = new Font("Morse", chars)
morseFont._render = morseFont.render
morseFont.render = function(text) {
    var test = this._render(text)
    return test.split(" ").join("/") 
}

morseFont.write("dr tim isch e luschtige", function(value) {
    console.log(value)
})