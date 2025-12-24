let data = JSON.parse(localStorage.getItem("data")) || [];

function addItem() {
    let item = document.getElementById("item").value;
    let desc = document.getElementById("desc").value;
    let type = document.getElementById("type").value;

    if (item === "" || desc === "") {
        alert("Please fill all fields");
        return;
    }

    data.push({ item, desc, type });
    localStorage.setItem("data", JSON.stringify(data));

    displayItems();
}

function displayItems() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach(d => {
        let li = document.createElement("li");
        li.textContent = `${d.type} - ${d.item}: ${d.desc}`;
        list.appendChild(li);
    });
}

displayItems();
