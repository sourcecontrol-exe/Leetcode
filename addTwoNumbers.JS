
var addTwoNumbers = function (l1, l2) {
    let n1 = ''
    let n2 = ''

    let pointer1 = l1;
    let pointer2 = l2;

    while (pointer1) {
        n1 += pointer1.val;
        pointer1 = pointer1.next;
    }
    while (pointer2) {
        n2 += pointer2.val;
        pointer2 = pointer2.next;
    }
    [n1, n2] = n1.length >= n2.length ? [n1, n2] : [n2, n1];
    
    console.log(n1,n2)
    let carry = 0;
    let sum = 0;
    let result = '';
    for (var itr = 0; itr < n1.length; itr++) {
        if (n2[itr] == undefined) {
            n2+= '0';
        }
        sum = parseInt(n1[itr]) + parseInt(n2[itr]) + carry;
        result += sum % 10;
        carry = Math.floor(sum / 10) > 0 ? Math.floor(sum / 10) : 0;
    }
    
    if(carry>0) result+=carry;
    
    let res = new ListNode(0);
    let tempRes = res;
    
    for(let i = 0 ;i<result.length ;i++){
        let t = new ListNode(result[i]);
        tempRes.next = t;
        tempRes = tempRes.next;
    }
   return res.next;
}

var minDepth = function(root) {
    if(!root) return 0;
    let depth = 1;
    let queue = [root];
    if(!root.left && !root.right) return depth;

    while(queue.length > 0 ){
      let queueLength = queue.length;

      for(let i = 0; i < queueLength; i++){
        let node = queue.shift();

        if(!node.left && !node.right) return depth;
        else{
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
        }
      }

      depth++;
    }

    return depth;
};
