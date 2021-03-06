---
title: 'Quick Sort'
date: 'May 12, 2021'
excerpt: 'Quick Sorting with JavaScript & Python!'
cover_image: '/images/posts/img12.png'
category: 'Sorting'
author: 'Houssem'
author_image: 'https://lh3.googleusercontent.com/pw/AM-JKLUCN1GfqI-Mm0ZQlj7dIcahFuwqubo8G1JTEKY1Kg-Z9oXT2V8att69FAuLMkUON5Zvej_hs18GLAMGXAzGbAqxu3CVpZoqSaWDlDQUKGFUrQIsA_YucaIG_6TcvJtDQ3_n1ZhdJL0AwEpSPI0JWdzK=s746-no?authuser=0'
---

<!-- Markdow generator - https://jaspervdj.be/lorem-markdownum/ -->
# QuickSort

Like merge sort, this algorithm exploits the fact that arrays of 0 or 1 element are always sorted. It works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array. Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.

## Pivot Helper Pseudocode

    1. It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively).
    2. Grab the pivot from the start of the array.
    3. Store the current pivot index in a variable (this will keep track of where the pivot should end up).
    4. Loop through the array from the start until the end:
        . If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
    5. Swap the starting element (i.e. the pivot) with the pivot index.
    6. Return the pivot index.

## Pivot Helper Implementation

**JavaScript**

```javascript:
function pivot(arr, start, end){
   let piv = arr[start];
   let piv_index = start;
   let temp;
   for(let i = start + 1; i < end; i++){
        if(arr[i] < piv){
            piv_index++;
            temp = arr[piv_index];
            arr[piv_index] = arr[i];
            arr[i] = temp;
        }
   }
   arr[0] = arr[piv_index];
   arr[piv_index] - piv;
   return piv_index;
}

```

**Python**

```python:
def pivot(arr, start, end):
    piv = arr[start]
    piv_index = start
    for i in range(start+1, end+1):
        if arr[i] < piv:
            piv_index += 1
            temp = arr[piv_index]
            arr[piv_index] = arr[i]
            arr[i] = temp
    arr[start] = arr[piv_index]
    arr[piv_index] = piv
    #print(piv_index)
    return piv_index

```
## QuickSort Pseudocode

    1. Call the pivot helper on the array.
    2. When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index.
    3. Your base case occurs when you consider a subarray with less than 2 elements.

## QuickSort Implementation

**JavaScript**

```javascript:
function quickSort(arr, left = 0, right = arr.length - 1){
   if( left < right){
     let pivotIndex = pivot(arr, left, right);
     // left side of the partition
     quickSort(arr, left, pivotIndex - 1);
     // right side of the partition
     quickSort(arr, pivotIndex + 1, right);
   }
   return arr;
}

```

**Python**

```python:
def quick_sort(arr, left, right):
    if left < right:
        pivot_index = pivot(arr, left, right)
        quick_sort(arr, left, pivot_index - 1)
        quick_sort(arr, pivot_index + 1, right)
    return arr

```

## Time Complexity:  Big(O)
    Worst case: O(N^2), if the array is already sorted, so that the pivot is either the greatest or the smallest element in the array.
    Average case: O(N log(N))


