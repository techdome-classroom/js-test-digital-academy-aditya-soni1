/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanValues =
  {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
  }  
  let result = 0
  let prevValue= 0
  for(i=s.length-1;i>=0;i--)
  {
    const currentValues = romanValues[s[i]]
    if (currentValues<prevValue)
    {
        result -=currentValues
    }
    else
    {
        result+=currentValues
    }
    prevValue = currentValues
  }
  return result
};


module.exports={romanToInt}