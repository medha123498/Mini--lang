function compile(){

const code = document.getElementById("code").value.trim();

const result = document.getElementById("result");


let variables = {};

let output = "";


let lines = code.split("\n");



function evaluate(exp){


for(let key in variables){

exp = exp.replaceAll(key, variables[key]);

}



if(exp.startsWith('"') && exp.endsWith('"')){

return exp.slice(1,-1);

}


try{

return eval(exp);

}

catch{

return "Error";

}


}




for(let line of lines){


line=line.trim();



if(line.startsWith("let ")){

let data=line.substring(4).split("=");

let name=data[0].trim();

let value=data[1].trim();


variables[name]=evaluate(value);


}




else if(line.startsWith("print ")){

output += evaluate(line.substring(6))+"<br>";

}




else if(line!=""){

output+="Syntax Error<br>";

}


}



result.innerHTML="✅ Compile Successful<br><br>"+output;


  }
