const myform = document.forms['my-form'] // form name pada tag html form, 
,table = document.querySelector('#myTable tbody'), 


dat = JSON.parse(localStorage.getItem('sreg') || '[]');
var selectedRow = null
var number = 0

dat.forEach(row => {
	if(selectedRow==null){
	let newRow = table.insertRow()


	newRow.insertCell().textContent = row.no = ++number;
	newRow.insertCell().textContent = row.gr;
	newRow.insertCell().textContent = row.sec;

	newRow.insertCell().textContent = row.sub;
newRow.insertCell().innerHTML = `<a onClick="opend(this)" class="btn btn-primary">open<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`
newRow.insertCell().innerHTML = `<a onClick="update(this)" class="btn btn-success">update<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

	
	newRow.insertCell().innerHTML = `<a onClick="onDelete(this)" class="btn btn-danger">delete<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

}

})
function form(){
if (selectedRow == null) {

		dat.push(Object.fromEntries(new FormData(myform).entries()));
		localStorage.setItem('sreg', JSON.stringify(dat));
		document.getElementById('id01').style.display = "none";


		let newRow = table.insertRow()

		newRow.insertCell().textContent = myform.no.value = ++number;
		newRow.insertCell().textContent = myform.gr.value;
		newRow.insertCell().textContent = myform.sec.value;

		newRow.insertCell().textContent = myform.sub.value;
		
		
		newRow.insertCell().innerHTML = `<a onClick="opend(this)" class="btn btn-primary">open<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`
newRow.insertCell().innerHTML = `<a onClick="update(this)" class="btn btn-success">update<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

	
	newRow.insertCell().innerHTML = `<a onClick="onDelete(this)" class="btn btn-danger">delete<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

	}}
	function onDelete(td){
	    if(confirm( "are you sure")){
	        row = td.parentElement.parentElement;
		
		var index=row.rowIndex-1;
		dat.splice(index,1);
		localStorage.setItem("sreg",JSON.stringify(dat));
		
		document.getElementById("myTable").deleteRow(row.rowIndex);
		
		   
	    }
	}
	function opend(td){
row = td.parentElement.parentElement;
		var index=row.rowIndex-1;
		if(index==0){
			window.open("st1.html",'_self');
		
			
		}else if(index==1){
			window.open("st2.html",'_self');
		
			
		}else if(index==2){
			window.open("st3.html",'_self');
		
			
		}else if(index==3){
			window.open("st4.html",'_self');
		
			
		}else if(index==4){
			window.open("st5.html",'_self');
		
			
		}else if(index==5){
			window.open("st6.html",'_self');
		
			
		}else if(index==6){
			window.open("st7.html",'_self');
		
			
		}else if(index==7){
			window.open("st8.html",'_self');
		
			
		}else if(index==8){
			window.open("st9.html",'_self');
		
			
		}else if(index==9){
			window.open("st10.html",'_self');
		
			
		}else{
			alert("our system only handle 10 subjects sorry dear");
		}
	}
	
	
	function update(td){
document.getElementById('id02').style.display='block';

	row = td.parentElement.parentElement;
  var index = row.rowIndex - 1;
  var bn=dat[index];
  var sec= document.querySelector('#sec');
  sec.setAttribute("value",bn.sec);
var sub=document.querySelector('#sub');
sub.setAttribute("value",bn.sub);
 var gr=document.querySelector('#name');
 gr.setAttribute("value",bn.gr);
  
var sv=document.querySelector('#sup');
sv.addEventListener('click',()=>{
var no=++number;
//var gr=document.querySelector('#gr').value;
 var sec= document.querySelector('#sec').value;
var sub=document.querySelector('#sub').value;
 var gr=document.querySelector('#name').value;
 
 //var m2= document.querySelector('#m2').value;

dat[index]={no,gr,sec,sub};

  
    
      localStorage.setItem("sreg", JSON.stringify(dat));
      document.getElementById('id02').style.display='none';


    alert("updated successfully ");
    
    
});
	}
function add(){
    if(dat.length<10 && dat.length>=0){
        document.getElementById('id01').style.display='block';
    }else{
        alert("you are reached max number Please delete same rows");
    }
}
