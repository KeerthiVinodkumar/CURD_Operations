var row = null

function Submit(){
    var dataEntered = retrieveData();
    var readData = readingDataFromLocalStorage(dataEntered);
    if(row == null){
    insert(readData);
    msg.innerHTML = "data inserted"
    }else{
        update();
        msg.innerHTML = "data updated"
    }
}
function retrieveData() {
    var name1 = document.getElementById("name").value
    var job = document.getElementById("job").value
    var exp = document.getElementById("exp").value

    var arr =[name1,job,exp];
    return arr
}
function readingDataFromLocalStorage(dataEntered){
     var n = localStorage.setItem("Name",dataEntered[0] )
     var j = localStorage.setItem("Job",dataEntered[1])
     var e = localStorage.setItem("Experience",dataEntered[2])

     var n1 = localStorage.getItem("Name",n )
     var j1 = localStorage.getItem("Job",j )
     var e1 = localStorage.getItem("Experience",e )

     var arr= [n1,j1,e1]
     return arr
}
// insert

function insert(readData){
    var row = table.insertRow()
        row.insertCell(0).innerHTML=readData[0]
        row.insertCell(1).innerHTML=readData[1]
        row.insertCell(2).innerHTML=readData[2]
        row.insertCell(3).innerHTML= `<button onclick = edit(this)>Edit</button>
                                           <button onclick=remove(this)>Delete</button>`


}
// Edit

function edit(td){
     row = td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML
    document.getElementById("job").value = row.cells[1].innerHTML
    document.getElementById("exp").value = row.cells[2].innerHTML
}

// Update

function update() {
    row.cells[0].innerHTML = document.getElementById("name").value
    row.cells[1].innerHTML = document.getElementById("job").value
    row.cells[2].innerHTML = document.getElementById("exp").value
    row = null
}

// Delete

function remove(td){
    var ans = confirm("Are you sure you want to delete")
    if(ans == true){
        row = td.parentElement.parentElement
        document.getElementById("table").deleteRow(row.rowIndex)
        msg.innerHTML = "one row deleted"
    }
}
                                       
                    
