// from data.js
var tableData = data;
var tbody = d3.select("tbody");

tableData.forEach((report) => {
    console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});


var submit = d3.select("#filter-btn");

submit.on("click", function() {

d3.select("tbody").html("");


d3.event.preventDefault();


var dateTime = d3.select("#datetime").property("value");
console.log(dateTime);

var filteredData = tableData.filter(record => record.datetime === dateTime);
console.log(filteredData);


filteredData.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});
