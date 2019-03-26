var add = document.getElementById('add');

var item = document.getElementById('item');
var qty = document.getElementById('qty');
var price = document.getElementById('price');
var cost = document.getElementById('cost');
var tax = document.getElementById('tax');


var wraper = document.getElementById('wraper');

var update = document.getElementById('update');
var bindData = document.getElementById('bindData');
var totalGrid = document.getElementById('totalGrid');
var save = document.getElementById('save');
var cancel = document.getElementById('cancel');
var payModeCard = document.getElementById('payModeCard');
var demo123 = document.getElementById('demo123');
var insertB = document.getElementById('insertB');

add.onclick = function () {

    insertB.className = "tableRow";
    var totCount = 0;
    var Char = /^[a-zA-Z]+$/g;
    var NumberReg = /^[0-9]+$/g;
    alert(!Char.test(item.value));

    if (!item.value.match(Char)) {
        alert('Please Enter Item');
    } else if (qty.value == "none") {
        alert('Please Enter quantity');
    } else if (!NumberReg.test(cost.value)) {
        alert('Please Enter Price');
    } else {
        
        var TR = document.createElement('tr');
        var slnoTD = document.createElement('td');
        slnoTD.innerText = '1';

        var itemTd = document.createElement('td');
        itemTd.innerText = item.value;

        var qtyTd = document.createElement('td');
        qtyTd.innerText = qty.value;

        var taxTd = document.createElement('td');
        var gst = parseInt(cost.value * 5);
        gst = gst / 100;

        taxTd.innerText = gst;

        var costTd = document.createElement('td');
        costTd.innerText = cost.value;

        var priceTd = document.createElement('td');
        var totalAmt = parseInt(qty.value) * parseInt(cost.value) + gst;
        priceTd.innerText = totalAmt.toFixed(2);

        


        var editTd = document.createElement('td');

        var editBtn = document.createElement('button');
        editBtn.className = "editBtn";
        editBtn.id = "editbtn";
        editBtn.type = "button";

        editBtn.innerHTML = '<i class="fas fa-edit" style="font-size:18px;"></i>';
        var delBtn = document.createElement('button');
        delBtn.innerHTML = '<i class="fas fa-trash-alt" style="font-size:18px;"></i>';
        delBtn.setAttribute("id", "delBtn");
        delBtn.setAttribute("type", "button");
        delBtn.setAttribute("class", "delBtn");


        // parent.appendChild(childEle);

        editTd.appendChild(editBtn);
        editTd.appendChild(delBtn);

        totalGrid.parentNode.style.display = "table-row";


        console.log(editTd);
        debugger;
        

        TR.appendChild(slnoTD);
        TR.appendChild(itemTd);
        TR.appendChild(qtyTd);
        TR.appendChild(costTd);
        TR.appendChild(taxTd);
        TR.appendChild(priceTd);
        TR.appendChild(editTd);

        console.log(TR);


        bindData.appendChild(TR);
        // var InserDataBefore = "";
        // InserDataBefore += '<tr id="insertB"><td colspan="4" style="text-align:right;">Total:</td>';
        // InserDataBefore += '<td id="totalGrid" colspan="2" style="text-align:right;">0.00$</td>';
        // InserDataBefore += '<td style="text-align:right;"><button id="save">  <i class="fas fa-save"></i> SAVE </button><button id="cancel"> <i class="fas fa-ban"></i> CANCEL </button></td></tr>';


        // bindData.innerHTML = InserDataBefore;
        // var insertB = document.getElementById('insertB');
        
        
        bindData.insertBefore(TR, insertB)

        // wraper.style.display = "none";

        item.value = "";
        qty.value = "none";
        cost.value = "";
        // tax.value = "";


        editBtn.onclick = function () {
            var EditInfo = this.parentNode.parentNode;
            var EditItem = EditInfo.childNodes[1];
            var Editqty = EditInfo.childNodes[2];
            var Editcost = EditInfo.childNodes[3];
            var Edittax = EditInfo.childNodes[4];
            var Editprice = EditInfo.childNodes[5];



            item.value = EditItem.innerText;
            qty.value = Editqty.innerText;
            cost.value = Editcost.innerText;
            // tax.value = Edittax.innerText;

            update.style.display = "inline";
            add.style.display = "none";





            update.onclick = function () {
                EditItem.innerText = item.value;
                Editqty.innerText = qty.value;
                Editcost.innerText = cost.value;
                var gst = parseInt(cost.value * 5);
                    gst = gst / 100;
                Edittax.innerText = gst;
                var totalAmt = parseInt(qty.value) * parseInt(cost.value) + gst;
                Editprice.innerText = totalAmt.toFixed(2);
                 

                

                item.value = "";
                qty.value = "none";
                cost.value = "";
                // tax.value = "";

                update.style.display = "none";
                add.style.display = "inline";
                var someyCount = 0;

                for (var i = 0; i < bindData.children.length; i++) {
                    var x = bindData.children[i].children;
                    if (x[5] != undefined) {
                        var pr = x[5].innerText;
                        pr = parseInt(pr);
                        someyCount += pr;
                    }
                }
                

                totalGrid.innerText = someyCount.toFixed(2);

            }

        }

        delBtn.onclick = function () {

            // totCount = 0;
            var somexCount = 0;
            var DelRow = this.parentNode.parentNode;
            console.log(DelRow);
            bindData.removeChild(DelRow);

            for (var j = 0; j < bindData.children.length; j++) {
                var x = bindData.children[j].children;
                if (x[5] != undefined) {
                    var pr1 = x[5].innerText;
                    pr1 = parseInt(pr1);
                    somexCount += pr1;
                }
            }

            totalGrid.innerText = somexCount.toFixed(2);
            save.removeAttribute('disabled',"");       
            cancel.removeAttribute('disabled',""); 


            // if(bindData.children.length > 1){
                
                      
            // }else{
            //     save.setAttribute('disabled',"true");       
            //     cancel.setAttribute('disabled',"true");       
            // }

        }



        for (var i = 0; i < bindData.children.length - 1; i++) {
            var x = bindData.children[i].children;
            if (x[5] != undefined) {
                var pr = x[5].innerText;
                pr = parseInt(pr);
                totCount += pr;
            }
        }
        console.log(totCount);
        totalGrid.innerText = totCount.toFixed(2);

        if(bindData.children.length > 1){
            save.removeAttribute('disabled',"");       
            cancel.removeAttribute('disabled',"");       
        }else{
            save.setAttribute('disabled',"true");       
            cancel.setAttribute('disabled',"true");       
        }
        var preview = document.getElementById('preview');
        
        save.onclick = function(){
            preview.style.display = "block";
            var previewContent = bindData.cloneNode(true);

            for(var k = 0; k < previewContent.children.length; k++){
                previewContent.children[k].removeChild(previewContent.children[k].lastElementChild);
            }
            
            console.log(previewContent);

            demo123.innerHTML = previewContent.innerHTML;

        }

        document.getElementsByClassName('closeBtn')[0].onclick = function(){
            preview.style.display = "none";
            
            for(var t=0; t < bindData.children.length; t++){
                debugger;
                if(bindData.children[t].id != 'insertB'){
                    bindData.removeChild(bindData.children[t]);
                    t--;
                }
                totalGrid.innerText = "$0.00";
                insertB.className = "";
                // insertB.className = "None";
            }
            
        }
    }
}

