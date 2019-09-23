

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
	addCategoryWiseFeedbackCount(numbersTable);
	addTotalFeedbackEntries(numbersTable);
	addTotalSales(numbersTable);
	addAverageDeliveryTime(numbersTable);
	addTotalPizzaCount(numbersTable);
	addPizzaDeliveryCount(numbersTable);
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

function addAverageDeliveryTime(tableObject){
	const averageDeliveryTime = deliveryData
		.map(x => x.delivery_time)
		.reduce((acc, curr) => acc+curr, 0)/deliveryData.length
	insertTableRow("Average delivery time", averageDeliveryTime.toFixed(2), tableObject);
}

function addTotalSales(tableObject){
	const totalSales = deliveryData
						.map(x => x.price)
						.reduce((acc, curr) => acc+curr, 0);
	insertTableRow("Total Sales", `\$${totalSales.toFixed(2)}`, tableObject);
}

function addTotalFeedbackEntries(tableObject){
	insertTableRow("Number of all feedback entries", feedbackData.length, tableObject);
}

function addCategoryWiseFeedbackCount(tableObject){
	const qualityData = feedbackData
							.map(x => x.quality);
	const low = qualityData.filter(x => x=="low").length;
	const medium = qualityData.filter(x => x=="medium").length;
	const high = qualityData.filter(x => x =="high").length;
	insertTableRow("Quality data by category", `Low: ${low} | Medium: ${medium} | High: ${high}`, tableObject);
}