---
title: 'Insertion Sort'
date: 'May 8, 2021'
excerpt: 'Insertion Sorting with JavaScript & Python!'
cover_image: '/images/posts/img10.jpg'
category: 'Sorting'
author: 'Houssem'
author_image: 'https://lh3.googleusercontent.com/pw/AM-JKLUCN1GfqI-Mm0ZQlj7dIcahFuwqubo8G1JTEKY1Kg-Z9oXT2V8att69FAuLMkUON5Zvej_hs18GLAMGXAzGbAqxu3CVpZoqSaWDlDQUKGFUrQIsA_YucaIG_6TcvJtDQ3_n1ZhdJL0AwEpSPI0JWdzK=s746-no?authuser=0'
---

<!-- Markdow generator - https://jaspervdj.be/lorem-markdownum/ -->
# InsertionSort

This algorithm builds up the sort by gradually creating a larger left half which is always sorted.

## InsertionSort Pseudocode

    1. Start by picking the second element in the array.
    2. Now compare the second element with the one before it and swap if necessary.
    3. Continue to the next element and if it is in the incorrect order, iterate through the sorted portion  
    (i.e. the left side) to place the element in the correct place.
    4. Repeat until the array is sorted.

## InsertionSort Implementation

**JavaScript**

```javascript:
function InsertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        for(let j = i-1; j >= 0 && arr[j] > currentVal ; j--){
            arr[j+1] = arr[j];
        }
         arr[j+1] = currentVal;
    }
    return arr;
}

```

**Python**

```python:
def insertion_sort(arr):
    for i in range(1, len(arr)):
        current_val = arr[i]
        j = i - 1
        while j >= 0 and current_val < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = current_val
    return arr
```

## Time Complexity:  Big(O)
    Worst case: O(N^2)

