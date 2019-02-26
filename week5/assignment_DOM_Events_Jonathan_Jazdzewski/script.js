var currentCell;
function one(){
    var myTable = document.createElement("TABLE");
    myTable.border = "1px solid black";
    var row4 = myTable.insertRow(0);
    var r4c1 = row4.insertCell(0);
    var r4c2 = row4.insertCell(0);
    var r4c3 = row4.insertCell(0);
    var r4c4 = row4.insertCell(0);
    r4c1.innerHTML = "4-4";
    r4c2.innerHTML = "4-3";
    r4c3.innerHTML = "4-2";
    r4c4.innerHTML = "4-1";
    var row3 = myTable.insertRow(0);
    var r3c1 = row3.insertCell(0);
    var r3c2 = row3.insertCell(0);
    var r3c3 = row3.insertCell(0);
    var r3c4 = row3.insertCell(0);
    r3c1.innerHTML = "3-4";
    r3c2.innerHTML = "3-3";
    r3c3.innerHTML = "3-2";
    r3c4.innerHTML = "3-1";
    var row2 = myTable.insertRow(0);
    var r2c1 = row2.insertCell(0);
    var r2c2 = row2.insertCell(0);
    var r2c3 = row2.insertCell(0);
    var r2c4 = row2.insertCell(0);
    r2c1.innerHTML = "2-4";
    r2c2.innerHTML = "2-3";
    r2c3.innerHTML = "2-2";
    r2c4.innerHTML = "2-1";
    var row1 = myTable.insertRow(0);
    var r1c1 = row1.insertCell(0);
    var r1c2 = row1.insertCell(0);
    var r1c3 = row1.insertCell(0);
    var r1c4 = row1.insertCell(0);
    r1c1.innerHTML = "1-4";
    r1c2.innerHTML = "1-3";
    r1c3.innerHTML = "1-2";
    r1c4.innerHTML = "1-1";
    var header = myTable.createTHead();
    var headRow = header.insertRow(0);
    var headCell1 = headRow.insertCell(0);
    var headCell2 = headRow.insertCell(0);
    var headCell3 = headRow.insertCell(0);
    var headCell4 = headRow.insertCell(0);
    headCell1.innerHTML = "Header 4.";
    headCell2.innerHTML = "Header 3.";
    headCell3.innerHTML = "Header 2.";
    headCell4.innerHTML = "Header 1.";
    
    document.body.appendChild(myTable);

    currentCell = r1c4;
    currentCell.style.backgroundColor = "white";
    currentCell.style.border = "2px solid black";


    var changeColor = function(){
        if (currentCell!==null){
        currentCell.style.backgroundColor = "yellow";
        console.log("Marking.");
        }
    }
    var changeSelectRight = function(){
        if (currentCell.nextElementSibling!==null){
        currentCell.style.border = ""
        currentCell = currentCell.nextElementSibling;
        currentCell.style.border = "2px solid black";
        console.log("Right.");
        }
    }
    var changeSelectLeft = function(){
        if (currentCell.previousElementSibling!==null){
        currentCell.style.border = ""
        currentCell = currentCell.previousElementSibling;
        currentCell.style.border = "2px solid black";
        console.log("Left.");
        }
    }
    var changeSelectUp = function(){
        if (currentCell!==null){
        currentCell.style.border = ""
        var count = 0;
        currentCell.style.border = ""
        while (currentCell.previousElementSibling!==null){
            count++;
            currentCell = currentCell.previousElementSibling;
        }
        currentCell = currentCell.parentNode;
        if (currentCell.previousElementSibling!==null){
            currentCell = currentCell.previousElementSibling;
        }
        currentCell = currentCell.firstElementChild;
        while (count>0){
            currentCell = currentCell.nextElementSibling;
            count--;
        }
        currentCell.style.border = "2px solid black";
        console.log("Up.");
        }
        
    }
    var changeSelectDown = function(){
        if (currentCell!==null){
            var count = 0;
            currentCell.style.border = ""
            while (currentCell.previousElementSibling!==null){
                count++;
                currentCell = currentCell.previousElementSibling;
            }
            currentCell = currentCell.parentNode;
            if (currentCell.nextElementSibling!==null){
                currentCell = currentCell.nextElementSibling;
            }
            currentCell = currentCell.firstElementChild;
            while (count>0){
                currentCell = currentCell.nextElementSibling;
                count--;
            }
            currentCell.style.border = "2px solid black";
            console.log("Down.");
        }
       
    }

    console.log(currentCell);
    var directionTable = document.createElement("TABLE");
    var dirRow2 = directionTable.insertRow(0);
    var dirRow1 = directionTable.insertRow(0);
    var dr1c3 = dirRow1.insertCell(0);
    var dr1c2 = dirRow1.insertCell(0);
    var dr1c1 = dirRow1.insertCell(0);
    var dr2c3 = dirRow2.insertCell(0);
    var dr2c2 = dirRow2.insertCell(0);
    var dr2c1 = dirRow2.insertCell(0);
    var upBtn = document.createElement("BUTTON");
    var downBtn = document.createElement("BUTTON");
    var rightBtn = document.createElement("BUTTON");
    var leftBtn = document.createElement("BUTTON");
    upBtn.addEventListener("click",function(){changeSelectUp(currentCell)});
    downBtn.addEventListener("click",function(){changeSelectDown(currentCell)});
    rightBtn.addEventListener("click",function(){changeSelectRight(currentCell)});
    leftBtn.addEventListener("click",function(){changeSelectLeft(currentCell)});
    upBtn.innerHTML = "Up.";
    downBtn.innerHTML= "Down.";
    rightBtn.innerHTML = "Right.";
    leftBtn.innerHTML = "Left.";
    dr1c2.appendChild(upBtn);
    dr2c1.appendChild(leftBtn);
    dr2c2.appendChild(downBtn);
    dr2c3.appendChild(rightBtn);
    document.body.appendChild(directionTable);
    var markBtn = document.createElement("BUTTON");
    markBtn.innerHTML = "Mark Cell.";
    markBtn.style.color = "red";
    markBtn.addEventListener("click",function(){changeColor(currentCell)})
    document.body.appendChild(markBtn);
}

one();