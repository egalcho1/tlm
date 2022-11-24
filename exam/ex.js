const
myForm = document.forms['my-form']

//myForm2       = document.forms['my-form2'],
table = document.querySelector('#myTable tbody'), 
dataArr = JSON.parse(localStorage.getItem('exam') || '[]');


var selectedRow = null
var number = 0
var key, mk;






dataArr.forEach(row=> {

if (selectedRow == null) {

document.querySelector('#n').innerHTML=++number 
	
document.querySelector('#q').innerHTML=row.question 
	
	document.querySelector('#a').innerHTML="A "+row.A+" "
	document.querySelector('#b').innerHTML="B "+row.B+" "
	document.querySelector('#c').innerHTML="C "+row.C +" "
	document.querySelector('#d').innerHTML="D "+row.D+" "
	document.querySelector('#e').innerHTML="E "+row.E+"<br>"
	
	}
	/*let newRow = table.insertRow()

	newRow.insertCell().textContent = row.no = ++number
   newRow.insertCell().innerHTML = row.question+"<br>"
   newRow.insertCell().innerHTML = `<a onClick="onDelete(this)">delete<i class="fas fa-times"></i></a>`

	
let newRowa = table.insertRow()

	newRowa.insertCell().textContent="A "+row.A
	newRowa.insertCell().textContent="B "+row.B
	newRowa.insertCell().textContent="C "+row.C
	newRowa.insertCell().textContent="D "+row.D
	newRowa.insertCell().textContent="E "+row.E
	
newRowa.insertCell().innerHTML = `<a onClick="onDelete(this)">delete<i class="fas fa-times"></i></a>`

	*/

})

function onformsubmit() {
	if (validate()) {
		if (selectedRow == null) {
			// Menambahkan entri ke LocalStorage :
			dataArr.push(Object.fromEntries(new FormData(myForm).entries()));

			localStorage.setItem('exam', JSON.stringify(dataArr));
			document.getElementById('id01').style.display = 'none';


			// Memasukkan Data pada Baris Baru
			let newRow = table.insertRow();

			newRow.insertCell().textContent = myForm.no.value = ++number;
			//localStorage.setItem('keyb',keyb);
			newRow.insertCell().textContent = myForm.question .value;
				
			newRow.insertCell().textContent = myForm.A.value;
			newRow.insertCell().textContent = myForm.B.value;
		
			newRow.insertCell().textContent = myForm.C.value;
			newRow.insertCell().textContent = myForm.D.value;
			newRow.insertCell().textContent = myForm.E.value;
			
			newRow.insertCell().innerHTML = `<a onClick="onDelete(this)">Delete<i class="fas fa-times"></i></a>`

			
		}
		resetForm();
	}
}


function resetForm() {
	document.getElementById("no").value = "";
	document.getElementById("inputNL").value = "";
	document.getElementById("inputJK").value = "";
	document.getElementById("inputNH").value = "";
	document.getElementById("inputA").value = "";
	selectedRow = null;
}

// Function untuk Delete Data
function onDelete(td) {
	if (confirm('are you sure to delate this data')) {
		row = td.parentElement.parentElement;
		document.getElementById("myTable").deleteRow(row.rowIndex);
		//resetForm();
		localStorage.removeItem(dataArr)
	}
	hapusDataLocal(td.parentElement.parentElement)
}

function hapusDataLocal(dataItem) {
	dataArr.forEach(function(task, index) {
		if (dataItem.textContent === task) {
			dataArr.splice(index, 1);
		}
	});
	localStorage.setItem(dataArr,
		JSON.stringify(dataArr))
}

// Function untuk Memvalidasi Data
function validate() {
	isValid = true;
	if (document.getElementById("question").value == "" || document.getElementById("A").value == "" || document.getElementById("B").value == "" || document.getElementById("C").value == "") {
		isValid = false;
		alert("please check up your data");
	}
	return isValid;
}
function reg() {
	document.querySelector('#form').style.display = "block";
	document.querySelector('#myTable').style.display = "none";
}

function print() {
	var dy = document.querySelector('table');
	document.querySelector('#print').style.display = "none";
	document.querySelector('#plus').style.display = "none";
	document.querySelector('#st1').innerHTML = "this all students that registered for section one ";
	dy.setAttribute("class", "table table-condensed table-striped  table-hover ");
	document.getElementById('id01').style.display = 'none'

	window.print();

}
