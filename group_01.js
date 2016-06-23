var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];
//var finalArray=[];

function addArray(empArray){
  var finalArray=[];
  for(var i=0; i<empArray.length; i++){
    finalArray.push(createEmployee(empArray[i]));
  }
  for (var i=0; i<finalArray.length; i++){
    console.log(finalArray[i]);
  }
  return finalArray;
}
function createEmployee(nameArray){
  var newEmpArray=[];
  newEmpArray[0]=nameArray[0];
  newEmpArray[1]=bonus(nameArray);
  newEmpArray[3]=Math.round(newEmpArray[1]*nameArray[2]);
  newEmpArray[2]=newEmpArray[3]+parseInt(nameArray[2]);
  newEmpArray[1]=newEmpArray[1]*100+"%";
  return newEmpArray;
}
function bonus(nameArray){
  var bonusPercent=0;
  if(nameArray[3]<=2){
    bonusPercent+=0;
  }
  else if (nameArray[3]===3){
    bonusPercent+=0.04;
  }
  else if(nameArray[3]===4){
    bonusPercent+=0.06;
  }
  else if(nameArray[3]>=5){
    bonusPercent+=0.10;
  }
  if (nameArray[1].length===4){
    bonusPercent+=.05
  }
  if (parseInt(nameArray[2])>65000){
    bonusPercent-=.01;
  }
  if(bonusPercent>.13){
    bonusPercent=.13;
  }
  return bonusPercent;
}
addArray(employees);
// for(var i=0; i<finalArray.length; i++){
//   console.log(finalArray[i]);
// }
