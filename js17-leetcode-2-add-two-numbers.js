// Definition of a singly‑linked list node
// val  – the numeric value stored in this node
// next – pointer to the next node (or null if end of list)
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// addTwoNumbers takes two non‑empty linked lists l1 and l2,
// where each node contains a single digit, and returns a
// new linked list representing their sum, digit by digit.
// Digits are stored in reverse order:  [2→4→3] is 342.
var addTwoNumbers = function (l1, l2) {
  // dummyHead is a placeholder that makes it easy to return the head later
  let dummyHead = new ListNode(0);
  let current = dummyHead; // moves along building the result list
  let carry = 0; // holds any “carry” digit between additions

  // Continue while either list has nodes left or there’s a carry to process
  while (l1 !== null || l2 !== null || carry !== 0) {
    // Extract the current digit values (or 0 if one list is shorter)
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    // Sum the two digits plus any carry from the previous step
    let sum = val1 + val2 + carry;

    // carry is the tens place of sum (e.g. sum=15 → carry=1)
    carry = Math.floor(sum / 10);

    // The new digit is sum mod 10 (e.g. 15 % 10 = 5)
    current.next = new ListNode(sum % 10);

    // Advance pointers
    current = current.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  // The real result starts at dummyHead.next (skip the placeholder)
  return dummyHead.next;
};

// Helper: convert a JavaScript array into a linked list
function arrayToList(arr) {
  let dummy = new ListNode(0);
  let curr = dummy;
  for (let x of arr) {
    curr.next = new ListNode(x);
    curr = curr.next;
  }
  return dummy.next;
}

// Helper: convert a linked list back into an array for easy logging
function listToArray(node) {
  let out = [];
  while (node) {
    out.push(node.val);
    node = node.next;
  }
  return out;
}

// --- Example usage ---

// Build two lists from arrays:
//   l1: [2,4,3] represents the number 342
//   l2: [5,6,4] represents the number 465
const l1 = arrayToList([2, 4, 3]);
const l2 = arrayToList([5, 6, 4]);

// Compute their sum: 342 + 465 = 807, which should be [7,0,8]
const resultList = addTwoNumbers(l1, l2);

// Convert result back to array and print
console.log(listToArray(resultList)); // Outputs: [7, 0, 8]

// Time Complexity: O(max(n, m)) where n, m are the lengths of l1 and l2
// Space Complexity: O(max(n, m)) for the new result list
