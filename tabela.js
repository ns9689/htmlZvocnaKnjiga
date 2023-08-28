const tableBody = document.querySelector('#data-table tbody');
const rows = [
    { id: 1, name: 'John', age: 28 },
    { id: 2, name: 'Jane', age: 24 },
    { id: 2, name: 'Jane', age: 24 },
    { id: 2, name: 'Jane', age: 24 },
    { id: 2, name: 'Jane', age: 24 },
    { id: 2, name: 'Jane', age: 24 },
    { id: 2, name: 'Jane', age: 24 },
    { id: 2, name: 'Jane', age: 24 },
    { id: 2, name: 'Jane', age: 24 },
    { id: 2, name: 'Jane', age: 24 },
    { id: 2, name: 'Jane', age: 24 },
    { id: 2, name: 'Jane', age: 24 },
    { id: 2, name: 'Jane', age: 24 },
    // Add more rows here
];

function generateRow(rowData) {
    const row = document.createElement('tr');
    row.draggable = true;
    row.dataset.id = rowData.id;

    const rowHTML = `
        <td>${rowData.id}</td>
        <td>${rowData.name}</td>
        <td>${rowData.age}</td>
    `;

    row.innerHTML = rowHTML;
    return row;
}

function generateCollapseContent(rowData) {
    const collapseContent = document.createElement('div');
    collapseContent.classList.add('collapse-content');
    collapseContent.textContent = `Additional info: ${rowData.name} is ${rowData.age} years old.`;
    return collapseContent;
}

function toggleCollapse(targetRow) {
    const collapseContent = targetRow.querySelector('.collapse-content');
    collapseContent.style.display = collapseContent.style.display === 'none' ? 'block' : 'none';
}

function handleRowClick(event) {
    const clickedRow = event.target.closest('tr');
    if (clickedRow) {
        toggleCollapse(clickedRow);
    }
}

function handleDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.dataset.id);
}

function handleDrop(event) {
    event.preventDefault();
    const sourceId = event.dataTransfer.getData('text/plain');
    const targetRow = event.target.closest('tr');

    if (targetRow) {
        const targetId = targetRow.dataset.id;
        const sourceIndex = rows.findIndex(row => row.id.toString() === sourceId);
        const targetIndex = rows.findIndex(row => row.id.toString() === targetId);

        if (sourceIndex > -1 && targetIndex > -1) {
            const temp = rows[sourceIndex];
            rows[sourceIndex] = rows[targetIndex];
            rows[targetIndex] = temp;
            renderTable();
        }
    }
}



const itemsPerPage = 5; // Number of items to display per page
const pagination = document.getElementById('pagination');

function generatePaginationLinks(pageCount, currentPage) {
    pagination.innerHTML = '';

    for (let i = 1; i <= pageCount; i++) {
        const link = document.createElement('button');
        link.textContent = i;

        if (i === currentPage) {
            link.classList.add('active');
        }

        link.addEventListener('click', () => {
            renderTable(i);
        });

        pagination.appendChild(link);
    }
}

function renderTable(pageNumber = 1) {
    tableBody.innerHTML = '';
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleRows = rows.slice(startIndex, endIndex);

    visibleRows.forEach(rowData => {
        const row = generateRow(rowData);
        const collapseContent = generateCollapseContent(rowData);
        row.appendChild(collapseContent);
        tableBody.appendChild(row);
    });

    generatePaginationLinks(Math.ceil(rows.length / itemsPerPage), pageNumber);
}
document.addEventListener('DOMContentLoaded', () => {
    console.log(tableBody);
    renderTable();
    console.log(tableBody);
});


