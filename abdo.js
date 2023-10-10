


var productNameinput = document.getElementById("productNameinput")

var productPriceinput = document.getElementById("productPriceinput")

var productCategoryinput = document.getElementById("productCategoryinput")

var productDescriptioninput = document.getElementById("productDescriptioninput")

var glodalupdate = 0;

var productcontainer;
if (localStorage.getItem("myproduct") == null) {
    productcontainer = []

}
else {


    productcontainer = JSON.parse(localStorage.getItem("myproduct"));
    displayproducts();
}

function add() {


    var product=
    {
        name: productNameinput.value,
        price: productPriceinput.value,
        category: productCategoryinput.value,
        desc: productDescriptioninput.value,
    }
    productcontainer.push(product);

    localStorage.setItem("myproduct", JSON.stringify(productcontainer))

    clearForm();
    displayproducts();
    console.log(productcontainer)
}
function clearForm() {

    productNameinput.value = '';
    productPriceinput.value = '';
    productCategoryinput.value = '';
    productDescriptioninput.value = '';
}

function displayproducts() {
    var cartoona = '';

    for (var i = 0; i < productcontainer.length; i++) {
        cartoona += `  <tr>
        <td>`+ [i + 1] + `</td>
        <td>`+ productcontainer[i].name + `</td>
        <td>`+ productcontainer[i].price + `</td>
        <td>`+ productcontainer[i].category + `</td>
        <td>`+ productcontainer[i].desc + `</td>
        <td><button onclick="updateproduct(`+ i + `)" class="btn btn-outline-info">update</button></td>
        <td><button  onclick="deleteproduct(`+ i + `)"; class="btn btn-outline-info">delete</button></td>
    
      </tr>
`

    }
    document.getElementById('body').innerHTML = cartoona;
}
function updateproduct(index) {

    /*
    
productNameinput.value='';
productPriceinput.value='';
productCategoryinput.value='';
productDescriptioninput.value='';
*/


    glodalupdate = index;
    productNameinput.value = productcontainer[index].name
    productPriceinput.value = productcontainer[index].price
    productCategoryinput.value = productcontainer[index].category
    productDescriptioninput.value = productcontainer[index].desc

    document.querySelector(".test ").style.display = "none"
    document.querySelector(".test1 ").classList.remove("d-none")

}


function update() {

    productcontainer[glodalupdate].name = productNameinput.value
    productcontainer[glodalupdate].price = productPriceinput.value
    productcontainer[glodalupdate].category = productCategoryinput.value
    productcontainer[glodalupdate].desc = productDescriptioninput.value

    localStorage.setItem("myproduct", JSON.stringify(productcontainer))
    displayproducts();
    clearForm();
    document.querySelector(".test").style.display = "inline-block"
    document.querySelector(".test1").classList.add("d-none")

}





function deleteproduct(productIndex) {
    productcontainer.splice(productIndex, 1);
    localStorage.setItem("myproduct", JSON.stringify(productcontainer))


    displayproducts();

}

function search(searchTerm)
{
    var cartoona=``; 
    for (var i = 0; i < productcontainer.length; i++)
    {
        if(productcontainer[i].name.toLowerCase().includes(searchTerm)==true)
        {
        cartoona += `  <tr>
        <td>`+ [i + 1] + `</td>
        <td>`+ productcontainer[i].name + `</td>
        <td>`+ productcontainer[i].price + `</td>
        <td>`+ productcontainer[i].category + `</td>
        <td>`+ productcontainer[i].desc + `</td>
        <td><button onclick="updateproduct(`+ i + `)" class="btn btn-outline-info">update</button></td>
        <td><button  onclick="deleteproduct(`+ i + `)"; class="btn btn-outline-info">delete</button></td>
      </tr>`  ;

    }

            else
        {
            console.log("No");
        }

    }
    document.getElementById('body').innerHTML = cartoona

}



