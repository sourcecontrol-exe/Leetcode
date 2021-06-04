var generateParenthesis = function(n, res=[], s='',open =0, close =0) {
  console.log(res)
    if(s.length == n*2){
      res.push(s);
      return;
  }
  
  if(open<n) generateParenthesis(n,res,s+"(",open+1,close);
  if(open>close) generateParenthesis(n,res,s+")", open,close+1);

  return res
};

console.log(generateParenthesis(3))