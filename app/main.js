var add = document.getElementById('add');

var item = document.getElementById('item');
var qty = document.getElementById('qty');
var price = document.getElementById('price');
var tax = document.getElementById('tax');


var wraper = document.getElementById('wraper');

var update = document.getElementById('update');
var bindData = document.getElementById('bindData');

    add.onclick = function () {
        
if (item.value == "" ){ 
    alert('Please Enter Item');
}else if(qty.value == "none"){
    alert('Please Enter quantity');
}else if(price.value == ""){
    alert('Please Enter Price');
}else if(tax.value == "") {
    alert('Please Enter Tax');
} else {
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
            editBtn.className = "editBtn";
            editBtn.id = "editbtn";
            editBtn.type = "button";

        editBtn.innerText = "EDIT";
        var delBtn = document.createElement('button');
        delBtn.innerText = "DELETE";
            delBtn.setAttribute("id","delBtn");
            delBtn.setAttribute("type","button");
            delBtn.setAttribute("class","delBtn");


        // parent.appendChild(childEle);

        editTd.appendChild(editBtn);
        editTd.appendChild(delBtn);




        console.log(editTd);

        TR.appendChild(slnoTD);
        TR.appendChild(itemTd);
        TR.appendChild(qtyTd);
        TR.appendChild(taxTd);
        TR.appendChild(priceTd);
        TR.appendChild(editTd);

        console.log(TR);


        bindData.appendChild(TR);

        // wraper.style.display = "none";

        item.value = "";
        qty.value = "none";
        price.value = "";
        tax.value = "";


        editBtn.onclick = function(){
            var EditInfo = this.parentNode.parentNode;
            var EditItem = EditInfo.childNodes[1];
            var Editqty = EditInfo.childNodes[2];
            var Edittax = EditInfo.childNodes[3];
            var Editprice = EditInfo.childNodes[4];

            console.log(EditItem.innerText);
            console.log(Editqty.innerText);
            console.log(Edittax.innerText);
            console.log(Editprice.innerText);


            item.value = EditItem.innerText;
            qty.value = Editqty.innerText;
            price.value = Editprice.innerText;
            tax.value = Edittax.innerText;

            update.style.display = "inline";
            add.style.display = "none";     


            update.onclick = function(){
                EditItem.innerText = item.value;
                Editqty.innerText = qty.value;
                Editprice.innerText = price.value;
                Edittax.innerText = tax.value;

                item.value = "";
                qty.value = "none";
                price.value = "";
                tax.value = "";

                update.style.display = "none";
                add.style.display = "inline";     
    

            }

        }
    }
}