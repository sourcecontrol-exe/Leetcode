var getIntersectionNode = function(headA, headB) {
  let tempa = headA;
  let tempb= headB;
  while(tempa!==null){
      tempa.flag = "Marked";
      tempa= tempa.next;
  }
  while(tempb !== null){
      if(tempb.flag == "Marked"){
          return tempb.val;
      }
      tempb= tempb.next;
  }
};