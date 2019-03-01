
function onLoad()
{
 buildProductsTable();
}

function buildProductsTable()
{
  var buildCtrl = document.getElementById("tbody");
    buildCtrl.innerHTML = ""
    for(var product of products)
    {
        var tr = "<tr>";
        tr += "<td class = 'tabledata bk1'>" + product.id + "</td>"
        tr += "<td class = 'tabledata bk2'>" + product.name + "</td>"
        tr += "<td class = 'tabledata bk3'>" + product.code + "</td>"
        tr += "<td class = 'tabledata bk4'>" + product.price + "</td>"
        tr += "<td class = 'tabledata bk5'>" + product.vendor.name + "</td>"
        tr += "</tr>";

        buildCtrl.innerHTML += tr;
    }
}