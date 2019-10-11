// 1. 冒泡排序
// bubble sort的是最基本的算法，被誉为永远会被考从来不被用的算法，基本原则是大数右移，每轮遍历后最右侧的数是最大的，所以下一轮循环时可不予考虑，时间复杂度为O（n^2）。
var arr = [3, 0, 1, 10, 5];
let bubbleSort = (arr) => {
    var len = arr.length;
    for (var i = len - 1; i > 1; i--) {
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }
    console.log(arr);
}
let swap = (arr, a, b) => {
    var t;
    t = arr[a];
    arr[a] = arr[b];
    arr[b] = t;
}
bubbleSort(arr);


// 选择排序
// selection sort的基本原则是把数放在对的位置上，外层遍历依次指向每个位置，内层遍历从剩余的元素中寻找最小值放在该位置，时间复杂度O(n^2)。
let selectionSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let minI = i; // 用于记录当前内层循环找到的最小值的下标
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minI]) {
                minI = j;
            }
        }
        swap(arr, i, minI);
    }
    console.log(arr);
}
selectionSort(arr);



// 插入排序
// insertion sort的基本原则是小数左移，即每轮循环结束后，外层循环指向位置左侧的片段都是已经完成排序的，时间复杂度也为O(n^2)。
let insertionSort = (arr) => {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j-1]) {
                swap(arr, j, j-1);
            }
        }
    }
    console.log(arr);
}
insertionSort(arr);








