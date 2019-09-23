

// DATASETS

// Global variable with 1198 pizza deliveries
// console.log(deliveryData);

// Global variable with 200 customer feedbacks
// console.log(feedbackData.length);


// FILTER DATA, THEN DISPLAY SUMMARY OF DATA & BAR CHART

createVisualization();

function createVisualization() {

	/* ************************************************************
	 *
	 * ADD YOUR CODE HERE
	 * (accordingly to the instructions in the HW2 assignment)
	 * 
	 * 1) Filter data
	 * 2) Display key figures
	 * 3) Display bar chart
	 * 4) React to user input and start with (1)
	 *
	 * ************************************************************/
	const numbersTable = document.getElementById("numbers");
	addPizzaDeliveryCount(numbersTable);
	addTotalPizzaCount(numbersTable);


}

function insertTableRow(label, data, tableObject){
	const newRow = tableObject.insertRow(0);
	const labelCell = newRow.insertCell(0);
	const dataCell = newRow.insertCell(1);
	labelCell.innerHTML = label;
	dataCell.innerHTML = data;
}

function addTotalPizzaCount(tableObject) {
	const totalPizzas = deliveryData
						.map(function (item) {
							return item.count 
						})
						.reduce(function (acc, curr) {
							return acc + curr 
						}, 0);
	insertTableRow("Number of all delivered Pizzas", totalPizzas, tableObject);
}

function addPizzaDeliveryCount(tableObject){
	const totalDeliveries = deliveryData.length;
	insertTableRow("Number of pizza deliveries", totalDeliveries, tableObject);
}