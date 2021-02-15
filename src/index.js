module.exports = function check(str, bracketsConfig) {
  let flagl = false;
  let flag7 = false;
  let flag8 = false;
  let itog = [];
  for(let i = 0; i < str.length; i++){
    for(let j = 0; j < bracketsConfig.length; j++){
      if(str[i] == bracketsConfig[j][0]){
        if(str[i] == "|" && flagl == false){
          flagl = true;
          itog.push(str[i]);
          continue;
        }
        if(str[i] == "7" && flag7 == false){
          flag7 = true;
          itog.push(str[i]);
          continue;
        }
        if(str[i] == "8" && flag8 == false){
          flag8 = true;
          itog.push(str[i]);
          continue;
        }
        itog.push(str[i]);
      }
      if(str[i] == bracketsConfig[j][1]){
        if(itog.length == 0){
          return false;
        }
        if(bracketsConfig[j][0] == itog[itog.length - 1]){
            itog.pop();
            if(str[i] == "|" && flagl == true && itog[itog.length - 1] == "|"){
              itog.pop();
              flagl = false;
            }
            if(str[i] == "7" && flag7 == true && itog[itog.length - 1] == "7"){
              itog.pop();
              flag7 = false;
            }
            if(str[i] == "8" && flag8 == true && itog[itog.length - 1] == "8"){
              itog.pop();
              flag8 = false;
            }
        }
        else
          return false;
      }
    }
  }
  if(itog.length == 0)
    return true;
  else
    return false;
}
