let sourceText = 'w3resource';


function rotateText(sourceText) {
    const stringLength = sourceText.length;
    let newText = sourceText.charAt(stringLength-1);
    sourceText = sourceText.substring(0,stringLength-1);
    newText = newText.concat(sourceText);
    return newText;
}

function repeatFunction(){
    this.sourceText = rotateText(this.sourceText);
    return this.sourceText
}

//setInterval(repeatFunction(),3000);
