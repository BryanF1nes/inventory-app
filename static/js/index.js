const tableBody = document.querySelector("tbody");

async function getData() {
    const url = "http://localhost:3000/item";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return await response.json();
    } catch (err) {
        console.error(err.message);
        return [];
    }
}

async function updateTable() {
    const data = await getData();

    data.forEach((item) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${item.name}</td>`;
        tableBody.appendChild(tr);
    });
}

updateTable();
