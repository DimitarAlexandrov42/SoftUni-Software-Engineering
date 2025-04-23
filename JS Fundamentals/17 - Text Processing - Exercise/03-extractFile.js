function extractFile(string) {
  
    let result
    let lastIndex = string.lastIndexOf('\\')
    result = string.substring(lastIndex+1)
    let lastDotIndex = result.lastIndexOf('.')
    let fileName = result.substring(0,lastDotIndex)
    let fileExtension = result.substring(lastDotIndex+1)
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}
extractFile('C:\\Internal\\training-internal\\Temp.late.pptx')