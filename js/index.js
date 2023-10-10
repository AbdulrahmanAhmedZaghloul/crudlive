var pNameInput = document.getElementById("pName");
var pPriceInput = document.getElementById("pPrice");
var pCategoryInput = document.getElementById("pCategory");
var pDescInput = document.getElementById("pDesc");

var myStore;
if(localStorage.getItem("productInStorage") == null) {
	myStores = []; 
}
else{
	myStores = JSON.parse(localStorage.getItem("productInStorage"));
	displayProducts();
}

function addProduct() {
	var oneProduct = {
		Name : pNameInput.value,	
		Price : pPriceInput.value,
		Category : pCategoryInput.value,
		Desc : pDescInput.value,
	}
	
	myStores.push(oneProduct);
	localStorage.setItem("productInStorage" , JSON.stringify(myStores))
	clearInputs();
	displayProducts();
let myStores = new Set(myStore)

	console.log(myStores);
}

function clearInputs()
{
	pNameInput.value = "";
	pPriceInput.value = "";
	pCategoryInput.value = "";
	pDescInput.value = "";
}

function displayProducts()
{
	var cartuna = ``;
	
	for(var i=0; i < myStores.length; i++) {
		cartuna += `<tr>
						<td>${i+1}</td>
						<td>`+myStores[i].Name+`</td>
						<td>`+myStores[i].Price+`</td>
						<td>`+myStores[i].Category+`</td>
						<td>`+myStores[i].Desc+`</td>
						<td><button onclick="changeFormForUpdata(`+i+`)" class="btn btn-outline-warning">update</button></td>
						<td><button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger">delete</button></td>
					</tr>`	// 2	onclick="deleteProduct(`+i+`)"	//كل عنصر بيجي ب الرقم بتاع iال 
	}
	document.getElementById("tBody").innerHTML = cartuna; 
}

//Delete	// 1
function deleteProduct() {
	myStores.delete();	//ده كده بيمسح كل عنصر بنفس (pIndex,1)ده بيمسح وال spliceال
	displayProducts();	// ده علشان يمسح من المتصفح
	localStorage.setItem("productInStorage" , JSON.stringify(myStores))	// localStorageده علشان يمسح من ال 
}

