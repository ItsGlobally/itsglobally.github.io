function ColorReplace(text)  {
    return text.replace("&c",'</a><a style="color: red>"')
}

module.exports = ColorReplace;