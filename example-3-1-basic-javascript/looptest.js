const tableBody = document.querySelector("#timesTable tbody");

for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");

    const expressionCell = document.createElement("td");
    expressionCell.textContent = `3 * ${i} = ${3 * i}`;

    const resultCell = document.createElement("td");
    resultCell.textContent = 3 * i;

    row.appendChild(expressionCell);
    row.appendChild(resultCell);

    tableBody.appendChild(row);




    const myArray = [1, "Hello", true];
    Array[3] = "New things";
    console.log(Array);

}