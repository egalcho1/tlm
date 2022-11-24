var d=document.querySelector('#ad');
var con=document.querySelector('#con');
d.addEventListener('click',()=>{
var sec=parseInt(prompt("it's for admin only okey"));
if(sec==24){
	d.setAttribute("href","adv.html");
}else{
	alert("you are note admin");
}
});
var nm=localStorage.getItem("un");
if(nm=="egalcho"){
d.style.display="block";
}
con.addEventListener('click',()=>{
var sec=parseInt(prompt("it's for admin only okey"));
if(sec==24){
	con.setAttribute("href","cdis.html");
}else{
	alert("you are note admin");
}
});
var nm=localStorage.getItem("un");
if(nm=="egalcho"){
con.style.display="block";
}


function openNav() {
 document.getElementById("mySidenav")
 .style.width="250px";
}

function closeNav() {
 document.getElementById("mySidenav")
 .style.width = "0";
}

function myFunction() {
document.getElementById("myDropdown")
.classList.toggle("show");
}


window.onclick = function(event) {
if(!event.target.matches('.dropbtn')){

var dropdowns = document
.getElementsByClassName
("dropdown-content");

var i;
for(i=0; i < dropdowns.length; i++){
var openDropdown = dropdowns[i];
if (openDropdown.classList.contains
('show')) {

openDropdown.classList.remove('show');

      }
    }
  }
}
const proform = document.forms['proform'] 
      , table        = document.querySelector('#myTable tbody');
var i=1;
   
const pro= JSON.parse(localStorage.getItem('pro') || '[]');
var pr =document.querySelector('#prog');
pr.addEventListener('click',()=>{
	document.querySelector('#form').style.display="block";

	
});
function form(ev){
	pro.push(Object.fromEntries(new FormData(proform).entries()))
     localStorage.setItem("pro",JSON.stringify( pro));
    alert("saved successfully");
    document.getElementById('id01').style.display="none";
    var newRow=table.insertRow();
    newRow.insertCell().textContent=i++;

	newRow.insertCell().textContent=proform.wday.value;
	newRow.insertCell().textContent=proform.pro.value;
	newRow.insertCell().textContent=proform.sec.value;
	
	newRow.insertCell().textContent=proform.date.value;

	newRow.insertCell().textContent=proform.time.value;
	newRow.insertCell().innerHTML='<button onclick="program(this)" style="color:red">delete</button>';

	
}
pro.forEach(row=>{
	var newRow=table.insertRow();
	newRow.insertCell().textContent=i++;

	newRow.insertCell().textContent=row.wday;
	newRow.insertCell().textContent=row.pro;
	newRow.insertCell().textContent=row.sec;
	
	newRow.insertCell().textContent=row.date;

	newRow.insertCell().textContent=row.time;
	newRow.insertCell().innerHTML='<button onclick="program(this)" style="color:red">delete</button>';
	
});
function body(){
	var sn=localStorage.getItem("mn");
	var sb=localStorage.getItem("sn");
	if(sn!=null || sb!=null){
	    var a1=document.querySekector('#a1');
	var a2=document.querySekector('#a2');
	a1.setAttribute("onclick","");
	a2.setAtribute("onclick","");
	var a3=document.querySekector('#a3');
	var a4=document.querySekector('#a4');
	a3.setAttribute("onclick","");
	a4.setAtribute("onclick","");
	}
	
}
function refresh(){
document.querySelector('#wday').innerHTML="";
document.querySelector('#pro').innerHTML="";
document.querySelector('#time').innerHTML="";
document.querySelector('#date').innerHTML="";

	
}
function program(td){
	if (confirm('are you sure to delate this data')) {
        row = td.parentElement.parentElement;
       var index=row.rowIndex-1;
       pro.splice(index,1);
       localStorage.setItem("pro",JSON.stringify(pro));
        document.getElementById("myTable").deleteRow(row.rowIndex);
        alert("deleted successfully");
    }
    //hapusDataLocal(td.parentElement.parentElement);
}

window.onload=function(){getTime();}  
function getTime(){  
var today=new Date();  
var h=today.getHours();  
var m=today.getMinutes();  
var s=today.getSeconds();  
// add a zero in front of numbers<10  
//m=checkTime(m);  
//s=checkTime(s);  
document.getElementById('h1').innerHTML=h+":"+m+":"+s;  
setTimeout(function(){getTime()},1000);  
}  
//setInterval("getTime()",1000);//another way  
function checkTime(i){  
if (i<10){  
  i="0" + i;  
 }  
return i;  
}  
var modal = document.getElementById('id01');


window.onclick = function(event) {
    if (event.target == modal) {
     modal.style.display = "none";
    }
}
var s1=localStorage.getItem("s1");
var sn=localStorage.getItem("sn");
var rb=localStorage.getItem("rb");
var mn=localStorage.getItem("mn");
var mn2=localStorage.getItem("mn2");
var subj=localStorage.getItem("subj");

var mark=localStorage.getItem("mark");
var mrk=localStorage.getItem("mrk");
var dataArr=localStorage.getItem("dataArr");

function window1(){
	if(s1==null && sn==null&&rb==null&&mn==null||mn2==null&&subj==null&&mark==null&&mrk==null&&dataArr==null){
		alert('welcome to our teacher load minimuizer app please add section togo to your  register student work space,eg first click on plus sign and add section one up to ten that you want to manage then you will get open button and click on it and navigate to the section that you want to register student , and remember student name that registered at frist section is concurrently used in the attendance management page eg at registration the section that registered at first row must be registered at attendance page  frist row  dear user you will get this messege only you are first time user');
   
	}
	
}
function window2(){
	if(s1==null && sn==null&&rb==null&&mn==null||mn2==null&&subj==null&&mark==null&&mrk==null&&dataArr==null){
		alert('welcome to our teacher load minimuizer app when you navigate to following page you will get plus sign button and click on it to add the section that you want to manage when add your section you will get open button and click on it after you proced to your work space you will see blinck button click on it and set number of test or assisment that you want to give after you assign it you will get plus sign at top left corner click it and add mark remember when you add mark system give error message when you enter double or decimal number to solve this after you add integer number click on update button and correct it thank you you will get this massage only that you are frist time user of our app');
   
	}

	  
}function window3(){
	if(s1==null && sn==null&&rb==null&&mn==null||mn2==null&&subj==null&&mark==null&&mrk==null&&dataArr==null){
		alert('welcome dear user you are trying to use attendance system to use this system first please register student before you procced b/c you may mis same functionality or remember currently our system can hundle only count number of absent for each student to add this click on absent button infront of target student you will see increase number at nabsent thank you dear user you will get this message only you are first time user');

	}

	
}
function window4(){
	if(s1==null && sn==null&&rb==null&&mn==null||mn2==null&&subj==null&&mark==null&&mrk==null&&dataArr==null){
     alert('welcome dear new user you are procced to use student rank system when you goto this page you will get blincking button click on it and set number of subject that your students take do not forgot to set number of subject that your student take we will let you min 5 max 12 subject thank you dear you will get this message only you are first time user');
 
	}
	
}
function myFunctiona() {
document.getElementById("myDropdowna")
    .classList.toggle("show");
}

window.onclick = function(event) {
if(!event.target.matches('.dropbtna')){

var dropdowns = document
.getElementsByClassName
("dropdown-contenta");

var i;
for(i=0; i < dropdowns.length; i++) {
var openDropdown = dropdowns[i];

if (openDropdown.classList.contains
('show')) {

openDropdown.classList.remove('show');
      }
    }
  }
}
