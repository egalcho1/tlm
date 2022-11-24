const
myForm = document.forms['my-form']

//myForm2       = document.forms['my-form2'],
table = document.querySelector('#myTable tbody'), 
dataArr = JSON.parse(localStorage.getItem('st8') || '[]'),
ad=localStorage.getItem("dtn"),
sn=localStorage.getItem("mn8"),
at=JSON.parse(localStorage.getItem('st8')||'[]');



var selectedRow = null
var number = 0,n=0;
var key, mk;
var ap="st8";
function body(){
	}

at.sort(function (x, y) {
    let a = x.inputNL.toUpperCase(),
        b = y.inputNL.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
});



at.forEach(row=> {
	let newRow = table.insertRow()

	newRow.insertCell().textContent = row.no = ++number
      newRow.insertCell().textContent = row.inputNL


	newRow.insertCell().textContent = row.inputNH
	newRow.insertCell().textContent = row.inputJK
    
  
	
	newRow.insertCell().textContent = row.gender
	newRow.insertCell().textContent = row.id

    //newRow.insertCell().innerHTML = `<a onClick="save(this)" class="btn btn-success" style="background-color:green">add<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`
    newRow.insertCell().innerHTML = `<a onClick="update(this)" class="btn btn-success" style="background-color:green">update<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`
	
	newRow.insertCell().innerHTML = `<a onClick="absent(this)" class="btn bg-warning" style="background-color:green">absent<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`
	
	//newRow.insertCell().innerHTML = `<a onClick="onDelete(this)" class="btn btn-danger">delete<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`


})
function reg(){
	//alert('this will helps you to add data of each student with out manual Registration atomatical from registration page after clicking on this button click on add button then data added succefully');
		
	//onformsubmit();
}
function save(td){
	row=td.parentElement.parentElement;
	var index=row.rowIndex-1;
	var list=dataArr[index];
	if(dataArr.length<index){
		alert("no data at registration table that  has same index as you need to add at your table  Please  add manual we are sorry");
		return false;
	}else if(dataArr==null){
	    alert("please add data at registration page before taking this action or add data manual");
	    }else{
	var inputNL=list.inputNL;
	var inputNH=list.inputNH;
	var inputJK=list.inputJK;
	var inputA=list.inputA;
	var inputb=list.inputb;
	var depa=list.depa;
	var gender=list.gender;
	var id=0;
	if(confirm("this action may update your current row to new one are sure to do this")){
	at[index]={inputNL,inputNH,inputJK,inputA,inputb,depa,gender,id}
	
	localStorage.setItem(ap,JSON.stringify(at));
	alert("successfully");
}}}

function onformsubmit() {
	
		if (selectedRow == null) {
			// Menambahkan entri ke LocalStorage :
			at.push(Object.fromEntries(new FormData(myForm).entries()));

			localStorage.setItem(ap, JSON.stringify(at));
			document.getElementById('id01').style.display = 'none';

            alert("added successfully");
			// Memasukkan Data pada Baris Baru
			let newRow = table.insertRow();

			newRow.insertCell().textContent = myForm.no.value = ++number;
			//localStorage.setItem('keyb',keyb);
			newRow.insertCell().textContent = myForm.inputNL.value;
				
			newRow.insertCell().textContent = myForm.inputNH.value;
			newRow.insertCell().textContent = myForm.inputJK.value;
		
			
			newRow.insertCell().textContent = myForm.gender.value;
            newRow.insertCell().textContent = myForm.id.value;
            
            newRow.insertCell().innerHTML = `<a onClick="save(this)" class="btn btn-success" style="background-color:green">add<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`
	
			newRow.insertCell().innerHTML = `<a onClick="update(this)" class="btn btn-success" style="background-color:green">update<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`
	        newRow.insertCell().innerHTML = `<a onClick="absent(this)" class="btn btn-success" style="background-color:green">absent<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`
	
         	newRow.insertCell().innerHTML = `<a onClick="onDelete(this)" class="btn btn-danger">delete<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`
	
		
	//	resetForm();
	}
}
function absent(td){
	row=td.parentElement.parentElement;
	var index=row.rowIndex-1;
	var b=at[index];
	var inputNL=b.inputNL;
	var inputNH=b.inputNH;
	var inputJK=b.inputJK;
	var inputA=b.inputA;
	var midle=b.midle;
	var mark1=b.mark1;
	var mark2=b.mark2;
	var mark3=b.mark3;
	var mark4=b.mark4;
	var mark5=b.mark5;
	var mark6=b.mark6;
	var mark7=b.mark7;
	var mark8=b.mark8;
	var mark9=b.mark9;
	var mark10=b.mark10;
	var mark11=b.mark11;
	var mark12=b.mark12;
	var gender=b.gender;
	var i=parseInt(b.id)+1;
	var id=i;
var sum=parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)
     +parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8)+parseFloat(mark8)+parseFloat(mark9)+parseFloat(mark10)+parseFloat(mark11)+parseFloat(mark12);
		var av=sum/sn;
	
	at[index]={av,inputNL,inputNH,inputJK,inputA,midle,gender,id,mark1,mark2,mark3,mark4,mark5,mark6,mark7,mark8,mark9,mark10,mark11,mark12}
	
		
	localStorage.setItem(ap,JSON.stringify(at));
	alert("successfully updated ");
}

function resetForm() {
	document.getElementById("no").value = "";
	document.getElementById("inputNL").value = "";
	document.getElementById("inputJK").value = "";
	document.getElementById("inputNH").value = "";
	document.getElementById("inputA").value = "";
	selectedRow = null;
}


function onDelete(td) {
	if (confirm('are you sure to delate this data')) {
		row = td.parentElement.parentElement;
		var index=row.rowIndex-1;
		at.splice(index,1);
		localStorage.setItem(ap,JSON.stringify(at));
		
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
/*function reg() {
	document.querySelector('#form').style.display = "block";
	document.querySelector('#myTable').style.display = "none";
}
*/
/*function print() {
	var dy = document.querySelector('table');
	document.querySelector('#hid').style.display = "none";
	document.querySelector('#hid1').style.display = "none";
	document.querySelector('#hid2').style.display = "none";

	//document.querySelector('#st1').innerHTML = "this all students that registered for section one ";
	
	dy.setAttribute("class", "table table-condensed table-striped  table-hover bg-white ");
	document.getElementById('id01').style.display = 'none';

	window.print();

}*/

/*function dlt(){
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
}*/
function update(td){
document.getElementById('id02').style.display="block";

row=td.parentElement.parentElement;

  var index = row.rowIndex - 1;
  var b=at[index];
 var id =document.querySelector('.id');
id.setAttribute("value",b.id);

var sv=document.querySelector('#sup');
sv.addEventListener('click',()=>{
 var inputNL=b.inputNL;
	var inputNH=b.inputNH;
	var inputJK=b.inputJK;
	var inputA=b.inputA;
	var midle=b.midle;
	var mark1=b.mark1;
	var mark2=b.mark2;
	var mark3=b.mark3;
	var mark4=b.mark4;
	var mark5=b.mark5;
	var mark6=b.mark6;
	var mark7=b.mark7;
	var mark8=b.mark8;
	var mark9=b.mark9;
	var mark10=b.mark10;
	var mark11=b.mark11;
	var mark12=b.mark12;
	var gender=b.gender;
	
	var id =document.querySelector('.id').value;

var sum=parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)
     +parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8)+parseFloat(mark8)+parseFloat(mark9)+parseFloat(mark10)+parseFloat(mark11)+parseFloat(mark12);
		var av=sum/sn;
	
	at[index]={av,inputNL,inputNH,inputJK,inputA,midle,gender,id,mark1,mark2,mark3,mark4,mark5,mark6,mark7,mark8,mark9,mark10,mark11,mark12}
	
//at[index]={inputNL,inputNH,inputJK,inputA,inputb,depa,gender,id};

  
    
      localStorage.setItem(ap, JSON.stringify(at));
document.getElementById('id02').style.display="none";

alert("updated successfully");
   });
   }


