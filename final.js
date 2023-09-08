var prices = {
    "Bikes": 100,
    "LMV": 550,
    "HMV": 700,
    "Heavy Trucks": 1000
};
var entries = [];
function addEntry() {
    var vehicle = $("#vehicle").val();
    var category = $("#category").val();
    if (vehicle == "" || category == "") {
        alert("Please enter the vehicle number and category");
        return;
    }
    if (!prices.hasOwnProperty(category)) {
        alert("Invalid category");
        return;
    }
    var amount = prices[category];
    var entry = {
        "vehicle": vehicle,
        "category": category,
        "amount": amount
    };
    entries.push(entry);
    $("#vehicle").val("");
    $("#category").val("");
    alert("Entry added successfully. The toll amount is " + amount);
    showStatistics();
    showSearchResults();
}
function showStatistics() {
    var stats = {};
    for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        var category = entry.category;
        var amount = entry.amount;
        if (!stats.hasOwnProperty(category)) {
            stats[category] = {
                "total": 0,
                "count": 0
            };
        }
        stats[category].total += amount;
        stats[category].count++;
    }
    var html = "<table><tr><th>Category</th><th>Total Amount</th><th>Count</th></tr>";
    for (var category in stats) {
        var total = stats[category].total;
        var count = stats[category].count;
        html += "<tr><td>" + category + "</td><td>" + total + "</td><td>" + count + "</td></tr>";
    }
    html += "</table>";
    $("#statistics").html(html);
}
function showSearchResults() {
    var filterCategory = $("#filterCategory").val();
    var filterVehicle = $("#filterVehicle").val();
    var html = "<table><tr><th>Vehicle</th><th>Category</th><th>Amount</th></tr>";
    for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        var vehicle = entry.vehicle;
        var category = entry.category;
        var amount = entry.amount;
        if ((filterCategory == "" || filterCategory == category) && (filterVehicle == "" || filterVehicle == vehicle)) {

            html += "<tr><td>" + vehicle + "</td><td>" + category + "</td><td>" + amount + "</td></tr>";
        }
    }
    html += "</table>";
    $("#searchResults").html(html);
}