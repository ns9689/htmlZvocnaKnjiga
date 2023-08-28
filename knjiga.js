$(document).ready(function() {
    $("#tableDnD").tableDnD({
        onDragClass: "myDragClass",
        onDrop: function(table, row) {
            var rows = table.tBodies[0].rows;
            var debugStr = "Row dropped was "+row.id+". New order: ";
            for (var i=0; i<rows.length; i++) {
                debugStr += rows[i].id+" ";
                row.name = i+1;
                debugStr += "new name: " + row.name + ", ";
            }
            $("#debugArea").html(debugStr);
        },
        onDragStart: function(table, row) {
            $("#debugArea").html("Started dragging row "+row.id);
        }
    });
});


function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue, tr1;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableDnD");
    tr = table.getElementsByClassName("search");
    tr1 = table.getElementsByClassName("accordion-toggle");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr1[i].getElementsByTagName("td")[0];
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


const tableBody = document.querySelector('#tableDnD tbody');
const rows = [
    { id: 1, class: 'table-success search', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', },
    { id: 2, class: 'table-secondary search', text:'lallalal' },
    { id: 3, class: 'search', text:'Midva sva na morju' },
    // Add more rows here
];

const itemsPerPage = 5; // Number of items to display per page

function generateRow(rowData) {
    const row = document.createElement('tr');
    row.dataset.id = rowData.id;
    row.className = rowData.class;

    const rowHTML = `
                    <th scope="row">${rowData.id}</th>
                    <td>
                        <table class="table">
                            <tbody>
                                <tr data-toggle="collapse" class="accordion-toggle" data-target="#${rowData.id}" aria-expanded="false">
                                    <td>${rowData.text}</td>
                                    <td><button class="btn"><i class="bi bi-play-circle"></i></button></td> <!--ce je ze izbrano-->
                                    <td><button class="btn"><i class="bi bi-pencil-square"></i></button></td>
                                </tr>

                                <tr>
                                    <td colspan="12" class="hiddenRow">
                                        <div class="accordion-body collapse in" id="${rowData.id}" aria-expanded="true" style="">
                                            <table class="table">
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <audio controls>
                                                            <source src="horse.ogg" type="audio/ogg">
                                                            <source src="horse.mp3" type="audio/mpeg">
                                                            Your browser does not support the audio element.
                                                        </audio>
                                                    </td>
                                                    <td>
                                                        <i class="bi bi-pen"></i>
                                                        <i class="bi bi-file-play"></i>
                                                        <i class="bi-bookmark-star"></i>
                                                        <i class="bi-bookmark-x"></i>
                                                        <i class="bi bi-trash"></i>
                                                    </td>
                                                    <td>
                                                        <i class="fa-light fa-circle-0"></i>
                                                        <i class="bi bi-1-circle"></i>
                                                        <i class="bi bi-2-circle"></i>
                                                        <i class="bi bi-3-circle"></i>
                                                        <i class="bi bi-4-circle"></i>
                                                        <i class="bi bi-5-circle"></i>
                                                        <i class="bi bi-6-circle"></i>
                                                        <i class="bi bi-7-circle"></i>
                                                        <i class="bi bi-8-circle"></i>
                                                        <i class="bi bi-9-circle"></i>
                                                    </td>
                                                </tr>

                                                </tbody>
                                            </table>

                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
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




