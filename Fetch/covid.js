
let tbody = document.getElementById("tbody");

function covid(data) {
  data.map((datas, index) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");

    td1.textContent = index + 1;
    tr.appendChild(td1);

    td2.textContent = datas.loc;
    tr.appendChild(td2);

    td3.textContent = datas.confirmedCasesForeign;
    tr.appendChild(td3);

    td4.textContent = datas.confirmedCasesIndian;
    tr.appendChild(td4);

    td5.textContent = datas.discharged;
    tr.appendChild(td5);

    td6.textContent = datas.deaths;
    tr.appendChild(td6);

    td7.textContent = datas.totalConfirmed;
    tr.appendChild(td7);

    tbody.appendChild(tr);
  });
}

fetch("https://api.rootnet.in/covid19-in/stats/latest")
  .then((response) => response.json())
  .then((data) => {
    covid(data.data.regional);
  });

covid();
