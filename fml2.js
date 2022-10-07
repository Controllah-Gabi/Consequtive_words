function testAtLeast5Digits(str){
  for(let l=0; l < str.length; l++){
    const word = str;
    const fml = word[l];
    console.log(str);
    const regex = new RegExp(`${fml}{2}`,'g');
    console.log(regex);
  if (regex.test(str) === true){
    return true;
  }else{
    console.log(/word[i]{2}/g.test(str) === true);
  }
  }
  };



    console.log(testAtLeast5Digits("llama"));