function toCamelCase(str){
    
    const strArray = str.replaceAll("-", "_").split("_");
    console.log("Replace hypen with underscore " + strArray)
    //loop through str array 
    for (let i = 0; i < strArray.length; i++) {
        
        //extract the first character from each element in array
        let firstChar = strArray[i].charAt(0);
        if (i === 0 && firstChar !== firstChar.toUpperCase()) {
            firstChar = firstChar.toLowerCase();
        } else {
            firstChar = firstChar.toUpperCase();
        }
        
        //join the modified character to the subString it was extracted from
        const newString = firstChar + strArray[i].substring(1);
        
        //replace or return the old string with the new string
        strArray[i] = newString;
        
        
        //Debugging stuff
        //console.log(strArray[i]);
        console.log("The first letter in string is: " + firstChar);
        console.log("Modified string: " + newString);
    }
    console.log("Modified array: "+ strArray);
    //after modifying the array is complete use the Array.join method to join all
    //string elements in array into a single string
    
        return strArray.join("");
    }
    //toCamelCase("Hello-World");
    console.log(toCamelCase("The-Stealth-Warrior"));

    /*
    the first element in array will be lower cased
    every element after the first will be upper cased
    toUpper and toLower will turn entire element upper or lower
    
        firstChar = 
    --modify the extracted character


    
    */




