function bblsort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        Bubble = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = Bubble;
      }
    }
  }
  console.log(arr);
}
var arr = [9, 4, 8, 2, 1];
bblsort(arr);
