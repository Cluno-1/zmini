const arr = [5, 2, 8, 1, 9, 3, 7, 4];

function quickSort(arr: number[]) {
  function _qs(arr: number[], left: number, right: number) {
    let temp = arr[left];
    let l = left + 1;
    let r = right;
    if (left >= right) {
      return;
    } //1个
    if (left + 1 >= right) {
      if (arr[left] > arr[right]) {
        arr[left] = arr[right];
        arr[right] = temp;
      }
      return;
    } //2个

    let temp_index = -1;
    while (left + 1 < right) {
      while (l < r) {
        if (arr[r] <= temp) {
          break;
        } else {
          r -= 1;
        }
      }

      while (l < r) {
        if (arr[l] > temp) {
          break;
        } else {
          l += 1;
        }
      }

      if (r != l) {
        let _t = arr[l];
        arr[l] = arr[r];
        arr[r] = _t;
      } else {
        if (temp > arr[l]) {
          arr[left] = arr[l];
          arr[l] = temp;
          temp_index = l;
        } else if (temp <= arr[l] && left < l - 1) {
          arr[left] = arr[l - 1];
          arr[l - 1] = temp;
          temp_index = l - 1;
        }

        break;
      }
    }

    _qs(arr, left, temp_index - 1);
    _qs(arr, temp_index + 1, right);
  }

  _qs(arr, 0, arr.length - 1);
}
console.log("before:", arr);
quickSort(arr);
console.log("after:", arr);
