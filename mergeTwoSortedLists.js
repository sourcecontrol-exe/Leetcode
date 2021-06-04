var mergeTwoLists = function(l1, l2) {
    let temp1= l1; 
    let temp2 = l2;
    let res =  new ListNode();
    let resTemp = res;
     let t;
    while(temp1.val !== null && temp2.val != null){

        if(temp1.val<temp2.val || temp2.val == null){
            t = new ListNode(temp1.val);
            temp1= temp1.next;
        }
        else if(temp2.val <= temp1.val || temp1.val ==null){
            t = new ListNode(temp1.val);
            temp2= temp2.next;
        }
            resTemp.next = t;
            resTemp = resTemp.next
        }

        console.log(res)
        
}

    
