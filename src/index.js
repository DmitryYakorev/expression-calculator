function eval() {
    // Do not use eval!!!
    // Its pity(
    return;
}

function expressionCalculator(expr) {
    let ArrayOfOperators = ['(',')','*','/','+','-'];
    let ArrayData = [];
    let w=0;
    let s1=0;
    let s2=0;
    let Array = [];
    let result = 0;
    let New_expr = "";
    let importance = { "*": 2, "/": 1, "+": 0, "-": 0 };
    let a = 0;
  for (let i = 0; i < expr.length; i++) {
    if (expr[i] !== " ") {
    
      New_expr  += expr[i];
    }
  }
/*for (let index = 0; index < New_expr.length; index++) {
    const element =New_expr[index];
    

    if ((element === ArrayOfOperators[0] )||(element === ArrayOfOperators[1])||(element === ArrayOfOperators[2])||(element === ArrayOfOperators[3])||(element === ArrayOfOperators[4])||(element === ArrayOfOperators[5])) {
       // if (index<3)console.log(w);
       if ( w !== 0) ArrayData.pop();
        ArrayData.push(New_expr.slice((index-w),index));
     

        ArrayData.push(element);
        if (!isNaN(New_expr[index+3]) ) {
           if (index<10) console.log('+',New_expr[index+3],index+3);
            ArrayData.push(New_expr.slice((index+1),(index+3))); 
        } else {
            ArrayData.push(New_expr.slice((index+1),(index+2))); 
        }
        
     //   console.log((expr.length(th-index));
     //   if ((expr.length-index) === 2) {ArrayData.push(expr.slice((index-w)),index);
       //     console.log('+');
      //  };

        if ( a % 10 === 0) {console.log("init ",expr,ArrayData);
        a++;}
        w=0;
    } else {
        w++;
    }
};*/
ArrayData = expr.split(" ");
ArrayData.pop();
ArrayData.shift();
//console.log("init ",expr,ArrayData);
function forindex(params) {
    return (params === '(');
}
//  s=ArrayData.findIndex(forindex());
for (let index = 0; index < ArrayData.length; index++) {
    const element = ArrayData[index];
    if (element === '('){s1=index;
    break;
    }
}
for (let index = 0; index < ArrayData.length; index++) {
    const element = ArrayData[index];
    if (element === ')'){s2=index;
        break;
        }
}
/*if (s1 === 0) {Array.push(ArrayData.slice(0));
//console.log('!',Array);
 } else {
   Array.push(ArrayData.slice(s1+1,s2));
}*/
//let data=[...Array];
//Array.push(ArrayData.slice(s1=1,s2));
Array = ArrayData;
let data=[].concat.apply([],Array);
//console.log("data=",data);
//console.log('s1,2,array=',s1,s2,data);
while (data.includes('*') || data.includes('/')){
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (element === '*') {
      s=Number(data[index-1])*Number(data[index+1]);
  //console.log("element",element,"s=",s);
result=s;

data[index-1] = s;


data.splice(index,1);

data.splice(index,1);
//console.log(data);
index -=2;
    };
    if (element === '/') {
      s=Number(data[index-1])/Number(data[index+1]);
  //console.log("element",element,"s=",s);
result=s;

data[index-1] = s;


data.splice(index,1);

data.splice(index,1);
index -=2;
    };
  };
};
while (data.includes('+') || data.includes('-')){
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (element === '+') {
      s=Number(data[index-1])+Number(data[index+1]);
  //console.log("element",element,"s=",s);
result=s;

data[index-1] = s;


data.splice(index,1);

data.splice(index,1);
//console.log(data);
index -=2;
    };
    if (element === '-') {
      s=Number(data[index-1])-Number(data[index+1]);
//  console.log("element",element,"s=",s);
result=s;

data[index-1] = s;


data.splice(index,1);

data.splice(index,1);
index -=2;
    };
  };
};
/*

for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (element === '*') {
      s=Number(data[index-1])*Number(data[index+1]);
 // console.log('s=',s);
result=s;
data[index-1] = s;
//delete data[index];
data.splice(index,1);
//delete data[index + 1];
data.splice(index,1);
    };
    if (element === '/') {
      if (Number(data[index+1]) === 0){
        throw "TypeError: Division by zero.";
        ;
        break;

    };
      s=Number(data[index-1])/Number(data[index+1]);
  console.log("s=",s);
result=s;
data[index-1] = s;
//delete data[index];
data.splice(index,1);
//delete data[index + 1];
data.splice(index,1);
    };
    if (element === '-') {
      s=Number(data[index-1])-Number(data[index+1]);
 // console.log('s=',s);
result=s;
data[index-1] = s;
//delete data[index];
data.splice(index,1);
//delete data[index + 1];
data.splice(index,1);
    };
    if (element === '+') {
      s=Number(data[index-1])+Number(data[index+1]);
 // console.log('s=',s);
result=s;
data[index-1] = s;
//delete data[index];
data.splice(index,1);
//delete data[index + 1];
data.splice(index,1);
    };
    
        
    


}*/

//console.log(" new ",data," old ",expr);

 //   for (let index = 0; index < expr.length; index++) {
   //     const element = expr[index];

 //   }
    // write your solution here
  //  s=RegExp(expr);
  //  console.log('s=',s);
 //   s.replace("/");
  //  new_s <<= s;
  //  console.log('s=',new_s);
  //  new_s2 >>= new_s;
  //  console.log('s=',new_s2);
  return result
}

module.exports = {
    expressionCalculator
}