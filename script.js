var data

$(document).ready(function () {
	// Load default table
	loadAlphanumericTable()

	$("#loadbtn").click(function () {
		$("#ascii-table").hide(500)
		$("#ascii-table").show(500)

		let selectedCategory = $("#options").val()
		$("#category-title").html(selectedCategory.toUpperCase())

		// Load different table depending on the selected category
		switch (selectedCategory) {
			case "Alphabet":
				loadAlphanumericTable()
				break
			case "Numbers":
				loadTable(data.NUMBERS)
				break
			case "Symbols":
				loadTable(data.SYMBOLS)
				break
			case "Hex":
				loadHexTable(data.HEX)
				break
			case "Control Characters":
				loadTable(data.CONTROL_CHARACTER)
				break
		}
	})
})

var loadTable = function (category) {
	$.ajax({
		dataType: "json",
		url: "data/data.json",
		success: function () {
			$("#main-table tbody").empty()
			$("#secondary-table tbody").empty()
			$("#secondary-table").hide(500)
			$("#uppercase-title").hide(500)

			var content
			for (var i = 0; i < category.length; i++) {
				content = `
                    <tr>
                        <td class=\"char\">${category[i].CHARACTER}</td>
                        <td>${category[i].CODE}</td>
                        <td>${category[i].HEX}</td>
                        <td><xmp>${category[i].HTML}</xmp></td>
                        <td>${category[i].BINARY}</td>
                    </tr>`

				$("#main-table tbody").append(content)
			}
		},
	})
}

var loadAlphanumericTable = function () {
	$.ajax({
		dataType: "json",
		url: "data/data.json",
		success: function (result) {
			$("#main-table tbody").empty()
			$("#secondary-table tbody").empty()
			$("#uppercase-title").show(500)
			$("#secondary-table").show(500)

			data = JSON.parse(JSON.stringify(result))

			var tableContent1
			for (var i = 0; i < data.UPPERCASE_ALPHABET.length; i++) {
				tableContent1 = `
                    <tr>
                        <td class=\"char\">${data.UPPERCASE_ALPHABET[i].CHARACTER}</td>
                        <td>${data.UPPERCASE_ALPHABET[i].CODE}</td>
                        <td>${data.UPPERCASE_ALPHABET[i].HEX}</td>
                        <td><xmp>${data.UPPERCASE_ALPHABET[i].HTML}</xmp></td>
                        <td>${data.UPPERCASE_ALPHABET[i].BINARY}</td>
                    </tr>`

				$("#main-table tbody").append(tableContent1)
			}

			var tableContent2
			for (var i = 0; i < data.LOWERCASE_ALPHABET.length; i++) {
				tableContent2 = `
                    <tr>
                        <td class=\"char\">${data.LOWERCASE_ALPHABET[i].CHARACTER}</td>
                        <td>${data.LOWERCASE_ALPHABET[i].CODE}</td>
                        <td>${data.LOWERCASE_ALPHABET[i].HEX}</td>
                        <td><xmp>${data.UPPERCASE_ALPHABET[i].HTML}</xmp></td>
                        <td>${data.LOWERCASE_ALPHABET[i].BINARY}</td>
                    </tr>`

				$("#secondary-table tbody").append(tableContent2)
			}
		},
	})
}

var loadHexTable = function (category) {
	$.ajax({
		dataType: "json",
		url: "data/data.json",
		success: function (result) {
			for (var i = 0; i < category.length; i++) {
				tableContent = ``
				$("#main-table tbody").append(tableContent)
			}
		},
	})
}
