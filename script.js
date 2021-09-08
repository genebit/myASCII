$.ajax({
    dataType: "json",
    url: "data/data.json",
    success: function(result) {
        var data = JSON.parse(JSON.stringify(result));
            
        var uppercAlphabetTblContent;
        for (var i = 0; i < data.UPPERCASE_ALPHABET.length; i++) {
            uppercAlphabetTblContent = "<tr>" + 
                        "<td>" + data.UPPERCASE_ALPHABET[i].CHARACTER + "</td>" + 
                        "<td>" + data.UPPERCASE_ALPHABET[i].DEX       + "</td>" + 
                        "<td>" + data.UPPERCASE_ALPHABET[i].HEX       + "</td>" + 
                        "<td>" + data.UPPERCASE_ALPHABET[i].HTML      + "</td>" + 
                        "<td>" + data.UPPERCASE_ALPHABET[i].BINARY    + "</td>" + 
                    "</tr>";
            $("#uppercase-alphabet tbody").append(uppercAlphabetTblContent);
        }

        var lowercAlphabetTblContent;
        for (var i = 0; i < data.LOWERCASE_ALPHABET.length; i++) {
            lowercAlphabetTblContent = "<tr>" + 
                        "<td>" + data.LOWERCASE_ALPHABET[i].CHARACTER + "</td>" + 
                        "<td>" + data.LOWERCASE_ALPHABET[i].DEX       + "</td>" + 
                        "<td>" + data.LOWERCASE_ALPHABET[i].HEX       + "</td>" + 
                        "<td>" + data.LOWERCASE_ALPHABET[i].HTML      + "</td>" + 
                        "<td>" + data.LOWERCASE_ALPHABET[i].BINARY    + "</td>" + 
                    "</tr>";
            $("#lowercase-alphabet tbody").append(lowercAlphabetTblContent);
        }
    }
    
});