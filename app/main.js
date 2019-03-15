var add = document.getElementById('add');

var item = document.getElementById('item');
var qty = document.getElementById('qty');
var price = document.getElementById('price');
var tax = document.getElementById('tax');


var wraper = document.getElementById('wraper');


var bindData = document.getElementById('bindData');
add.onclick = function(){

    var TR = document.createElement('tr');


    var slnoTD = document.createElement('td');
        slnoTD.innerText = '1';

    var itemTd = document.createElement('td');
        itemTd.innerText = item.value;
    
    var qtyTd = document.createElement('td');
        qtyTd.innerText = qty.value;
    
    var taxTd = document.createElement('td');
        taxTd.innerText = tax.value;
    
    var priceTd = document.createElement('td');
        priceTd.innerText = price.value;



    var editTd = document.createElement('td');
    
    var editBtn = document.createElement('button');
        editBtn.innerText = "EDIT";
    var delBtn = document.createElement('button');
        delBtn.innerText = "DELETE";

    // parent.appendChild(childEle);

        editTd.appendChild(editBtn);
        editTd.appendChild(delBtn);




    console.log(editTd);

    TR.appendChild(slnoTD);
    TR.appendChild(itemTd);
    TR.appendChild(qtyTd);
    TR.appendChild(taxTd);
    TR.appendChild(priceTd);

    console.log(TR);


    bindData.appendChild(TR);

    wraper.style.display = "none";
    
}