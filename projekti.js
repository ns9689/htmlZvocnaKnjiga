
function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue, tr1;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableProjects");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        //window.alert(td);
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


const tableBody = document.querySelector('#tableProjects tbody');
const rows = [
    { id: 1, dateCreated: '1. 1. 2023', dateFinished: '9. 8. 2023', class: 'table-success search', title: 'Lorem Ipsum', },
    { id: 2, dateCreated: '2. 3. 2023', dateFinished: 'v delu ...', class: 'table-secondary search', title:'La' },
    { id: 3, dateCreated: '5. 6. 2023', dateFinished: '/', class: 'search', title:'Morje' },
    // Add more rows here
];

const itemsPerPage = 5; // Number of items to display per page

function generateRow(rowData) {
    const row = document.createElement('tr');
    row.dataset.id = rowData.id;
    row.className = rowData.class;

    const rowHTML = `
                    <th scope="row">${rowData.id}</th>
                    <td>${rowData.title}</td>
                    <td>${rowData.dateCreated}</td>
                    <td>${rowData.dateFinished}</td>
    `;

    row.innerHTML = rowHTML;
    return row;
}

function renderTable(pageNumber = 1) {
    tableBody.innerHTML = '';
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleRows = rows.slice(startIndex, endIndex);

    visibleRows.forEach(rowData => {
        const row = generateRow(rowData);
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log(tableBody);
    renderTable();
    console.log(tableBody);
});
