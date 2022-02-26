let container=document.getElementById('container')

var cartarray=JSON.parse(localStorage.getItem('cart'))||[];

DisplayBagData(cartarray);
function DisplayBagData(cartarray) {
    document.querySelector("#container").innerHTML = "";
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Product Name";
    heading_1.setAttribute("id", "hd1");
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Unit Price";
    heading_2.setAttribute("id", "hd2");
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Quantity";
    heading_3.setAttribute("id", "hd3");
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "Total";
    heading_4.setAttribute("id", "hd4");
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "romove";
    heading_5.setAttribute("id", "hd5");



    cartarray.map(function (elem, index) {
        
        let row_2 = document.createElement('tr');
        let row_2_data_1 = document.createElement('td');
        let imgdiv = document.createElement('div');
        imgdiv.setAttribute("id", "cimgdiv");
        let img=document.createElement('img');
        img.src = elem.image;
        let name=document.createElement("p");
        name.innerText = elem.brand_name;
        let namediv = document.createElement('div');
        namediv.setAttribute("id", "namediv");
        namediv.append(name);
        let pdiv = document.createElement('div');
        imgdiv.append(img);
        pdiv.append(imgdiv, namediv)
        pdiv.setAttribute("id", "pdiv");
        row_2_data_1.appendChild(pdiv);

        
        let row_2_data_2 = document.createElement('td');
        row_2_data_2.innerHTML = `Rs.${elem.price}`;
        

        
        let div1 = document.createElement('div');
        div1.setAttribute("class", "input-group plus-minus-input");

        let div2 = document.createElement('div');
        div2.setAttribute("class", "input-group-button");
        let button1 = document.createElement('button');
        button1.setAttribute('class', 'button hollow circle');
        button1.setAttribute('type', 'button');
        button1.setAttribute('data-quantity', "minus");
        button1.setAttribute("data-field", "quantity");
        let i1 = document.createElement("i");
        i1.setAttribute("class", "fa fa-minus");
        i1.setAttribute("aria-hidden", "true");
        button1.append(i1);
        div2.append(button1);

        let iput = document.createElement('input');
        iput.setAttribute("class", "input-group-field");
        iput.setAttribute("type", "number");
        iput.setAttribute("value", "1");

        let div3 = document.createElement('div');
        div3.setAttribute("class", "input-group-button");
        let button2 = document.createElement('button');
        button2.setAttribute('class', 'button hollow circle');
        button2.setAttribute('type', 'button');
        button2.setAttribute('data-quantity', "plus");
        button2.setAttribute("data-field", "quantity");
        let i2 = document.createElement("i");
        i2.setAttribute("class", "fa fa-plus");
        i2.setAttribute("aria-hidden", "true");
        button2.append(i2);
        div3.append(button2);

        div1.append(div2, iput, div3);


        let row_2_data_3 = document.createElement('td');
        row_2_data_3.appendChild(div1);

        let row_2_data_4 = document.createElement('td');
        row_2_data_4.innerHTML = `Rs.${elem.price}`;

        let row_2_data_5 = document.createElement('td');
        let bttnn = document.createElement('button');
        bttnn.setAttribute('class', 'remove_btn');
        let iii = document.createElement('i');
        iii.setAttribute("class", "fa fa-remove");
        bttnn.append(iii);
        row_2_data_5.addEventListener("click", function () {
            deleteTask(index);
        });

        row_2_data_5.appendChild(bttnn);

        




        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_3);
        row_2.appendChild(row_2_data_4);
        row_2.appendChild(row_2_data_5);
        tbody.appendChild(row_2);


        
        row_1.append(heading_1,heading_2,heading_3,heading_4,heading_5);
        thead.append(row_1);
        table.append(thead);
        table.append(tbody);
        container.append(table);



        
    })
  

}

function deleteTask(index) {
    console.log(index);
    cartarray.splice(index, 1);
    console.log(cartarray);
    localStorage.setItem("cart", JSON.stringify(cartarray));
    DisplayBagData(cartarray);
}


var total_amount = [];
var DOM_total = document.querySelector(".total_MRP");
var gst = document.querySelector(".gst");
var total_sub = document.querySelector(".total_amount");

cartarray.map(function (elem) {
  total_amount.push(elem.price);
});

var total_amt = total_amount.reduce(function (total, price) {
  total += price;
  return total;
}, 0);



localStorage.setItem("TotalMRP", JSON.stringify(total_amt));
DOM_total.textContent = `Cart SubTotal:${total_amt}`;
gst.textContent = `GST 12% : ${Math.round(total_amt * 0.12)}`;
total_sub.textContent = `Total Cart Amount: ${(total_amt)+(Math.round(total_amt * 0.12))}`;








