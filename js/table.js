document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    // Create a table
    var table = document.createElement('table');

    // Create table header
    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    var headers = ["Dragon Name", "Type", "Color", "Origin"];
    headers.forEach(function(headerText) {
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(headerText));
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    var tbody = document.createElement('tbody');
    var dragons = [
        {name: "Smaug", type: "Fire Drake", color: "Red", origin: "Middle Earth"},
        {name: "Toothless", type: "Night Fury", color: "Black", origin: "Berk"},
        {name: "Viserion", type: "Ice Dragon", color: "White", origin: "Westeros"},
        {name: "Puff", type: "Magic Dragon", color: "Green", origin: "Honalee"},
        {name: "Mushu", type: "Guardian Spirit", color: "Red", origin: "China"}
    ];
    dragons.forEach(function(dragon) {
        var tr = document.createElement('tr');
        Object.values(dragon).forEach(function(value) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(value));
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    // Append the table to the table container
    document.getElementById('tableContainer').appendChild(table);
});