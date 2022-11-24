const
myForm = document.forms['my-form']

//myForm2       = document.forms['my-form2'],
table = document.querySelector('#myTable tbody'), 
dataArr = JSON.parse(localStorage.getItem('st6') || '[]');


var selectedRow = null
var number = 0
var key, mk;

var ap="st6";

dataArr.sort(function (x, y) {
    let a = x.inputNL.toUpperCase(),
        b = y.inputNL.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
});



dataArr.forEach(row=> {
	let newRow = table.insertRow()

	newRow.insertCell().textContent = row.no = ++number
      newRow.insertCell().textContent = row.inputNL
newRow.insertCell().textContent = row.midle
    
  

	newRow.insertCell().textContent = row.inputNH
	newRow.insertCell().textContent = row.inputJK
    
  
	newRow.insertCell().textContent = row.inputA
	
	newRow.insertCell().textContent = row.gender

	newRow.insertCell().innerHTML = `<a onClick="update(this)" class="btn btn-success" style="background-color:green">update<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

	
	newRow.insertCell().innerHTML = `<a onClick="onDelete(this)" class="btn btn-danger">delete<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`


})

function onformsubmit() {
	if (validate()) {
		if (selectedRow == null) {
			// Menambahkan entri ke LocalStorage :
			dataArr.push(Object.fromEntries(new FormData(myForm).entries()));

			localStorage.setItem(ap, JSON.stringify(dataArr));
			document.getElementById('id01').style.display = 'none';

alert("added successfully");
			// Memasukkan Data pada Baris Baru
			let newRow = table.insertRow();

			newRow.insertCell().textContent = myForm.no.value = ++number;
			//localStorage.setItem('keyb',keyb);
			newRow.insertCell().textContent = myForm.inputNL.value;
			newRow.insertCell().textContent = myForm.midle.value;
				
			newRow.insertCell().textContent = myForm.inputNH.value;
			newRow.insertCell().textContent = myForm.inputJK.value;
		
			newRow.insertCell().textContent = myForm.inputA.value;
				
			newRow.insertCell().textContent = myForm.gender.value;

			newRow.insertCell().innerHTML = `<a onClick="update(this)" class="btn btn-success" style="background-color:green">update<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`
	newRow.insertCell().innerHTML = `<a onClick="onDelete(this)" class="btn btn-danger">delete<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`
	
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
	document.getElementById('midle').value="";
	selectedRow = null;
}


function onDelete(td) {
	if (confirm('are you sure to delate this data')) {
		row = td.parentElement.parentElement;
		var index=row.rowIndex-1;
		dataArr.splice(index,1);
		localStorage.setItem(ap,JSON.stringify(dataArr));
		
		document.getElementById("myTable").deleteRow(row.rowIndex);
		alert("deleted successfully");
	}
	
}


function validate() {
	isValid = true;
	if (document.getElementById("inputNL").value == "" || document.getElementById("inputJK").value == "" || document.getElementById("inputNH").value == "" || document.getElementById("inputA").value == "") {
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
	document.querySelector('#hid').style.display = "none";
	document.querySelector('#hid1').style.display = "none";
	document.querySelector('#hid2').style.display = "none";

	//document.querySelector('#st1').innerHTML = "this all students that registered for section one ";
	
	dy.setAttribute("class", "table table-condensed table-striped  table-hover bg-white ");
	document.getElementById('id01').style.display = 'none';

	window.print();

}

function dlt(){
if(confirm("this action delete entries of table permanently are you sure to do this"
    
  )){
  var pas=prompt("enter your password ");
  var sp =localStorage.getItem("pas");
  if(sp==pas){
      localStorage.removeItem(ap);
      alert("deleted successful ");
  }else{
      alert("password not correct ");
  }}
}
function update(td){
document.getElementById('id02').style.display="block";

row=td.parentElement.parentElement;

  var index = row.rowIndex - 1;
  var dat=dataArr[index];
  var mk1=document.querySelector('#mark1');
  mk1.setAttribute("value",dat.mark1);
  var mk2=document.querySelector('#mark2');
  mk2.setAttribute("value",dat.mark2);
  var mk3=document.querySelector('#mark3');
  mk3.setAttribute("value",dat.mark3);
var mk4=document.querySelector('#mark4');
  mk4.setAttribute("value",dat.mark4);
  var mk5=document.querySelector('#mark5');
  mk5.setAttribute("value",dat.mark2);
  var mk6=document.querySelector('#mark6');
  mk6.setAttribute("value",dat.mark6);
  var mk7=document.querySelector('#mark7');
  mk7.setAttribute("value",dat.mark7);
  var mk8=document.querySelector('#mark8');
  mk8.setAttribute("value",dat.mark8);
  var mk9=document.querySelector('#mark9');
  mk9.setAttribute("value",dat.mark9);
var mk10=document.querySelector('#mark10');
  mk10.setAttribute("value",dat.mark10);
  var mk11=document.querySelector('#mark11');
  mk11.setAttribute("value",dat.mark11);
  var mk12=document.querySelector('#mark12');
  mk12.setAttribute("value",dat.mark12);
var av=document.querySelector('#av');
  av.setAttribute("value",dat.av);


  var inputNL = document.querySelector('.fnam');
  inputNL.setAttribute("value",dat.inputNL);
var inputNH =document.querySelector('.lnam');
inputNH.setAttribute("value",dat.inputNH);
 var inputJK =document.querySelector('.sid');
 inputJK.setAttribute("value",dat.inputJK);
 var inputA = document.querySelector('.ag');
 inputA.setAttribute("value",dat.inputA);


var gender =document.querySelector('.sex');
gender.setAttribute("value",dat.gender);
var mid =document.querySelector('.mid');
mid.setAttribute("value",dat.midle);
var id =document.querySelector('.id');
id.setAttribute("value",dat.id);

var sv=document.querySelector('#sup');
sv.addEventListener('click',()=>{
 var inputNL = document.querySelector('#fn').value;
var inputNH =document.querySelector('#ln').value;
 var inputJK =document.querySelector('#sid').value;
 var inputA = document.querySelector('#ag').value;
//var inputb =document.querySelector('#sec').value;
 //var depa =document.querySelector('#gr').value;

var gender =document.querySelector('#gen').value;
var midle =document.querySelector('.mid').value;
var mark1 = document.querySelector('.mark1').value;
var mark2 =document.querySelector('.mark2').value;
 var mark3 =document.querySelector('.mark3').value;
 var mark4 = document.querySelector('.mark4').value;
var mark5 =document.querySelector('.mark5').value;
 var mark6 =document.querySelector('.mark6').value;

var mark7 =document.querySelector('.mark7').value;
var mark8 =document.querySelector('.mark8').value;
var mark9 =document.querySelector('.mark9').value;
 var mark10 =document.querySelector('.mark10').value;

var mark11=document.querySelector('.mark11').value;
var mark12 =document.querySelector('.mark12').value;
var av =document.querySelector('#av').value;
var id =document.querySelector('.id').value;


dataArr[index]={av,id,inputNL,midle,inputNH,inputJK,inputA,gender,mark1,mark2,mark3,mark4,mark5,mark6,mark7,mark8,mark9,mark10,mark11,mark12};

  
    
      localStorage.setItem(ap, JSON.stringify(dataArr));
      //resetForm();
document.getElementById('id02').style.display="none";

alert("updated successfully");
 // resetFormu();
   });
   }


