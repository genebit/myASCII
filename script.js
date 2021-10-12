$.ajax({
    dataType: "json",
    url: "data/data.json",
    success: function(result) {
        $("#uppercase-alphabet tbody").empty();
        $("#lowercase-alphabet tbody").empty();

        var data = JSON.parse(JSON.stringify(result));
        
        var uppercAlphabetTblContent;
        for (var i = 0; i < data.UPPERCASE_ALPHABET.length; i++) {
            uppercAlphabetTblContent = "<tr>" + 
                        "<td id=\"char\">" + data.UPPERCASE_ALPHABET[i].CHARACTER + "</td>" + 
                        "<td>" + data.UPPERCASE_ALPHABET[i].CODE      + "</td>" + 
                        "<td>" + data.UPPERCASE_ALPHABET[i].HEX       + "</td>" + 
                        "<td>" + data.UPPERCASE_ALPHABET[i].HTML      + "</td>" + 
                        "<td>" + data.UPPERCASE_ALPHABET[i].BINARY    + "</td>" + 
                    "</tr>";
            $("#uppercase-alphabet tbody").append(uppercAlphabetTblContent);
        }

        var lowercAlphabetTblContent;
        for (var i = 0; i < data.LOWERCASE_ALPHABET.length; i++) {
            lowercAlphabetTblContent = "<tr>" + 
                        "<td id=\"char\">" + data.LOWERCASE_ALPHABET[i].CHARACTER + "</td>" + 
                        "<td>" + data.LOWERCASE_ALPHABET[i].CODE      + "</td>" + 
                        "<td>" + data.LOWERCASE_ALPHABET[i].HEX       + "</td>" + 
                        "<td>" + data.UPPERCASE_ALPHABET[i].HTML      + "</td>" + 
                        "<td>" + data.LOWERCASE_ALPHABET[i].BINARY    + "</td>" + 
                    "</tr>";
            $("#lowercase-alphabet tbody").append(lowercAlphabetTblContent);
        }
    }
});

$(document).ready(function(){
    $("#loadbtn").click(function() {
        $("#asciitbl").hide(500);
        $("#asciitbl").show(500); 

        // Change the title of the table
        $("#category").html($("#options").val().toUpperCase())

        switch ($("#options").val()) {
            case "Alphabet":
                $.ajax({
                    dataType: "json",
                    url: "data/data.json",
                    success: function(result) {
                        $("#uppercase-alphabet tbody").empty();
                        $("#lowercase-alphabet tbody").empty();
                        $("#lowercase-alphabet").show(500);
                        $("#upperctitle").show(500);

                        var data = JSON.parse(JSON.stringify(result));
                        
                        var uppercAlphabetTblContent;
                        for (var i = 0; i < data.UPPERCASE_ALPHABET.length; i++) {
                            uppercAlphabetTblContent = "<tr>" + 
                                        "<td id=\"char\">" + data.UPPERCASE_ALPHABET[i].CHARACTER + "</td>" + 
                                        "<td>" + data.UPPERCASE_ALPHABET[i].CODE      + "</td>" + 
                                        "<td>" + data.UPPERCASE_ALPHABET[i].HEX       + "</td>" + 
                                        "<td>" + data.UPPERCASE_ALPHABET[i].HTML      + "</td>" + 
                                        "<td>" + data.UPPERCASE_ALPHABET[i].BINARY    + "</td>" + 
                                    "</tr>";
                            $("#uppercase-alphabet tbody").append(uppercAlphabetTblContent);
                        }
                
                        var lowercAlphabetTblContent;
                        for (var i = 0; i < data.LOWERCASE_ALPHABET.length; i++) {
                            lowercAlphabetTblContent = "<tr>" + 
                                        "<td id=\"char\">" + data.LOWERCASE_ALPHABET[i].CHARACTER + "</td>" + 
                                        "<td>" + data.LOWERCASE_ALPHABET[i].CODE      + "</td>" + 
                                        "<td>" + data.LOWERCASE_ALPHABET[i].HEX       + "</td>" + 
                                        "<td>" + data.UPPERCASE_ALPHABET[i].HTML      + "</td>" + 
                                        "<td>" + data.LOWERCASE_ALPHABET[i].BINARY    + "</td>" + 
                                    "</tr>";
                            $("#lowercase-alphabet tbody").append(lowercAlphabetTblContent);
                        }
                    }
                });
                break;
        
            case "Numbers":
                $.ajax({
                    dataType: "json",
                    url: "data/data.json",
                    success: function(result) {
                        $("#uppercase-alphabet tbody").empty();
                        $("#lowercase-alphabet tbody").empty();
                        $("#lowercase-alphabet").hide(500);
                        $("#upperctitle").hide(500);

                        var data = JSON.parse(JSON.stringify(result));
                        
                        var numberTblContent;
                        for (var i = 0; i < data.NUMBERS.length; i++) {
                            numberTblContent = "<tr>" + 
                                        "<td id=\"char\">" + data.NUMBERS[i].CHARACTER + "</td>" + 
                                        "<td>" + data.NUMBERS[i].CODE      + "</td>" + 
                                        "<td>" + data.NUMBERS[i].HEX       + "</td>" + 
                                        "<td>" + data.NUMBERS[i].HTML      + "</td>" + 
                                        "<td>" + data.NUMBERS[i].BINARY    + "</td>" + 
                                    "</tr>";
                            $("#uppercase-alphabet tbody").append(numberTblContent);
                        }
                    }
                });
                break;

            case "Symbols":
                $.ajax({
                    dataType: "json",
                    url: "data/data.json",
                    success: function(result) {
                        $("#uppercase-alphabet tbody").empty();
                        $("#lowercase-alphabet tbody").empty();
                        $("#lowercase-alphabet").hide(500);
                        $("#upperctitle").hide(500);

                        var data = JSON.parse(JSON.stringify(result));
                        
                        var symbolTblContent;
                        for (var i = 0; i < data.SYMBOLS.length; i++) {
                            symbolTblContent = "<tr>" + 
                                        "<td id=\"char\">" + data.SYMBOLS[i].CHARACTER + "</td>" + 
                                        "<td>" + data.SYMBOLS[i].CODE      + "</td>" + 
                                        "<td>" + data.SYMBOLS[i].HEX       + "</td>" + 
                                        "<td>" + data.SYMBOLS[i].HTML      + "</td>" + 
                                        "<td>" + data.SYMBOLS[i].BINARY    + "</td>" + 
                                    "</tr>";
                            $("#uppercase-alphabet tbody").append(symbolTblContent);
                        }
                    }
                });
                break;

            case "Control Characters":
                $.ajax({
                    dataType: "json",
                    url: "data/data.json",
                    success: function(result) {
                        $("#uppercase-alphabet tbody").empty();
                        $("#lowercase-alphabet tbody").empty();
                        $("#lowercase-alphabet").hide(500);
                        $("#upperctitle").hide(500);

                        var data = JSON.parse(JSON.stringify(result));
                        
                        var controlCharTblContent;
                        for (var i = 0; i < data.CONTROL_CHARACTER.length; i++) {
                            controlCharTblContent = "<tr>" + 
                                        "<td id=\"char\">" + data.CONTROL_CHARACTER[i].CHARACTER + "</td>" + 
                                        "<td>" + data.CONTROL_CHARACTER[i].CODE      + "</td>" + 
                                        "<td>" + data.CONTROL_CHARACTER[i].HEX       + "</td>" + 
                                        "<td>" + data.CONTROL_CHARACTER[i].HTML      + "</td>" + 
                                        "<td>" + data.CONTROL_CHARACTER[i].BINARY    + "</td>" + 
                                    "</tr>";
                            $("#uppercase-alphabet tbody").append(controlCharTblContent);
                        }
                    }
                });
                break;
        }
    });
});