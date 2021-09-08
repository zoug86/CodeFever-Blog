---
title: 'Selection Sort'
date: 'May 7, 2021'
excerpt: 'Selection Sorting with JavaScript & Python!'
cover_image: '/images/posts/img9.jpg'
category: 'Sorting'
author: 'Houssem'
author_image: 'https://lh3.googleusercontent.com/pw/AM-JKLUCN1GfqI-Mm0ZQlj7dIcahFuwqubo8G1JTEKY1Kg-Z9oXT2V8att69FAuLMkUON5Zvej_hs18GLAMGXAzGbAqxu3CVpZoqSaWDlDQUKGFUrQIsA_YucaIG_6TcvJtDQ3_n1ZhdJL0AwEpSPI0JWdzK=s746-no?authuser=0'
---

<!-- Markdow generator - https://jaspervdj.be/lorem-markdownum/ -->
# SelectionSort

This algorithm is similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

## SelectionSort Pseudocode

    1. Store the first element as the smallest value you've seen so far.
    2. Compare this item to the next item in the array until you find a smaller number.
    3. If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
    4. If the "minimum" is not the value (index) you initially began with, swap the two values.
    5. Repeat this with the next element until the array is sorted.

## SelectionSort Implementation

**JavaScript**

```javascript:
function SelectionSort(arr){
    let temp;
    for(let i = 0; i < arr.length; i++){
        let i = lowest;
        for(let j = i+1; j < arr.length ; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if( i !== lowest){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    return arr;
}

```

**Python**

```python:
def selection_sort(arr):
    for i in range(len(arr)):
        lowest = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[lowest]:
                lowest = j
        if i != lowest:
            print(arr)
            temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
    return arr
```

## Time Complexity:  Big(O)
    Worst case: O(N^2)

