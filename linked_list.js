// "static void main" must be defined in a public class.

/* 




Given a sorted linked list, delete all duplicates such that each element appear only once.

Input: 1->1->2
Output: 1->2

Input: 1->1->2->3->3
Output: 1->2->3


empty
1->1
1

---- beginning
head
current = head //1
while loop (current exists? and check for next)
current current.next are they the same?
if yes-> get me the next.next
else -> next is our current
return head node
----end
1->2
c     N
    c
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
////////java solution//////
/*public class Main {
    public void removeDup(Node head){
        if(head==null){
            return;
        }
        // 1->2->3->N
            //  c cn
                  //1->1
                   // c 
        Node curr=head;
        while(curr!=null && curr.next!=null){
            if(curr.val==curr.next.val){
                curr.next=curr.next.next;
            }else{
                curr=curr.next;            
            }
        }
        return head;
    }
    
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}

*/
////////javascript solution///////
var deleteDuplicates = function(head) {
    if(head == null){return head}
    if(head.val == null){return head}
    if(head.next == null){return head}
    let current = head
    let currentVal = head.val
    while(true){
       if(current.next==null){break} //no more ll
       if(current.next.val == current.val){current.next = current.next.next } 
       else if (current.next.val > currentVal){ currentVal=current.next.val; current=current.next }
    }
   return head 
};