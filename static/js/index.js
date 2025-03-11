async function getData() {
    try {
        const response = await fetch("http://localhost:3000/item/table");
        const data = await response.json();
        
        createTable(data);
        
    } catch (error) {
        console.error("Error message: ", error);
    }
};

function createTable(data) {
    const table = document.querySelector("table");
    const thead = document.querySelector("thead");
    const headers = ["Name", "Price", "Category"];
    const tr = document.createElement("tr");
    thead.innerHTML = ""; // Clear previous headers if any
    tr.classList.add("text-white", "bg-gray-800", "border", "dark:border-gray-700", "border-gray-200", "rounded-md");

    headers.forEach((header) => {
        const th = document.createElement("th");
        th.textContent = header;
        th.setAttribute("scope", "col");
        th.classList.add("text-left", "px-6", "py-4");
        tr.append(th);
        thead.append(tr);
    });

    const tbody = document.createElement("tbody");
    tbody.innerHTML = ""; // Clear previous rows if any

    data.items.forEach((item) => {
        const tr = document.createElement("tr");
        tr.classList.add("bg-gray-800", "text-white", "border", "rounded-md", "odd:bg-gray-900", "dark:border-gray-700", "border-gray-200");
        tr.innerHTML = `
        <td class="px-6 py-4">${item.name}</td>
        <td class="px-6 py-4">$${item.price}</td>
        <td class="px-6 py-4">${item.category_name}</td>
        `;
        tbody.append(tr);
    });
    
    table.append(thead, tbody);
};

getData();