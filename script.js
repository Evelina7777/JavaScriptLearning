var arrayLetters=[" ","A","B","C","D","E","F","G","H"," "];
var arrayNumbers=[" ",1,2,3,4,5,6,7,8," "];
var arrayChessTr1=["Л","К","С","Кор","Ф","C","К","Л"]
var arrayChessTr2=["П","П","П","П","П","П","П","П"]
var arrayChessTr3=["Л","К","С","Кор","Ф","C","К","Л"]
var arrayChessTr4=["П","П","П","П","П","П","П","П"]
var arrayChessFigTr1=['\u265c','\u265e','\u265d','\u265a','\u265b','\u265d','\u265e','\u265c']
var arrayChessFigTr2=['\u265f']
var arrayChessFigTr3=['\u265c','\u265e','\u265d','\u265a','\u265b','\u265d','\u265e','\u265c']
var arrayChessFigTr4=['\u265f']



var table=document.createElement("table");
for (i=1;i<11;i++){
    var tr=document.createElement("tr");
    table.append(tr)
    for (j=1;j<11;j++){
        var td=document.createElement("td");
        tr.append(td);
        if (i==1){
           td.innerText=arrayLetters[j-1];
           td.style.transform="rotate(180deg)";
       }
       if (i==10){
           td.innerText=arrayLetters[j-1];
       }
       if (j==10) {
           td.innerText=arrayNumbers[arrayNumbers.length-i];
           td.style.transform="rotate(180deg)"; 
       }
       if (j==1){
           td.innerText=arrayNumbers[arrayNumbers.length-i];
       }
       if((i>1  && i<10 && j>1  && j<10 && i%2!=0 && j%2==0) || (i>1  && i<10 && j>1  && j<10 && i%2==0 && j%2!=0) ){
                       td.style.backgroundColor="black";
                   } 
   }
}
//  Вставить первые буквы
//  var chees=table.querySelectorAll('td');
//  for (i=11,j=0;j<8;i++,j++){
//      chees[i].innerText=arrayChessTr1[j];
//  }
//  for (i=21,j=0;j<8;i++,j++){
//      chees[i].innerText=arrayChessTr2[j];
//  }
//  for (i=71,j=0;j<8;i++,j++){
//      chees[i].innerText=arrayChessTr4[j];
//      chees[i].style.transform="rotate(180deg)";
//  }
//  for (i=81,j=0;j<8;i++,j++){
//      chees[i].innerText=arrayChessTr3[j];
//      chees[i].style.transform="rotate(180deg)";
//  }

//Вставить фигуры
    var chees=table.querySelectorAll('td');
for (i=11,j=0;j<8;i++,j++){
    chees[i].innerText=arrayChessFigTr1[j];;

}
for (i=21,j=0;j<8;i++,j++){
    chees[i].innerText=arrayChessFigTr2[0];
}
for (i=71,j=0;j<8;i++,j++){
    chees[i].innerText=arrayChessFigTr4[0];
    chees[i].style.color="white";
}
for (i=81,j=0;j<8;i++,j++){
    chees[i].innerText=arrayChessFigTr3[j];
    chees[i].style.color="white";
}


 
document.querySelector('div').append(table);