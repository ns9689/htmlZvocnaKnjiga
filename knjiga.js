$(document).ready(function() {
    $("#tableDnD").tableDnD({
        onDragClass: "myDragClass",
        onDrop: function(table, row) {
            var rows = table.tBodies[0].rows;
            var debugStr = "Row dropped was "+row.id+". New order: ";
            for (var i=0; i<rows.length; i++) {
                debugStr += rows[i].id+" ";
            }
            $("#debugArea").html(debugStr);
        },
        onDragStart: function(table, row) {
            $("#debugArea").html("Started dragging row "+row.id);
        }
    });
});





