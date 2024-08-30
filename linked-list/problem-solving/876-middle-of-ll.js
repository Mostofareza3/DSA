function llSize(head) {
  let sz = 0;
  while (head.next !== null) {
    sz++;
    head = head.next;
  }
  return sz;
}

var middleNode = function (head) {
  if (head === null) return;
  const len = llSize(head);

  for (let i = 0; i < len / 2; i++) {
    head = head.next;
  }

  return head;
};
