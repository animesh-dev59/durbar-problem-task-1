function extractBodyContent(htmlString) {
    const startTag = '<body>';
    const endTag = '</body>';
    
    const startIndex = htmlString.indexOf(startTag);
    const endIndex = htmlString.indexOf(endTag);
    
    if (startIndex === -1 || endIndex === -1) return '';
    
    return htmlString.substring(startIndex + startTag.length, endIndex);
} 