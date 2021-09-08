---
title: 'Bubble Sort'
date: 'May 5, 2021'
excerpt: 'Bubble Sorting with JavaScript & Python!'
cover_image: '/images/posts/img8.jpg'
category: 'Sorting'
author: 'Houssem'
author_image: 'https://lh3.googleusercontent.com/pw/AM-JKLUCN1GfqI-Mm0ZQlj7dIcahFuwqubo8G1JTEKY1Kg-Z9oXT2V8att69FAuLMkUON5Zvej_hs18GLAMGXAzGbAqxu3CVpZoqSaWDlDQUKGFUrQIsA_YucaIG_6TcvJtDQ3_n1ZhdJL0AwEpSPI0JWdzK=s746-no?authuser=0'
---

<!-- Markdow generator - https://jaspervdj.be/lorem-markdownum/ -->
# BubbleSort

It is a sorting algorithm where the largest values bubble up to the top. 

## BubbleSort Pseudocode

    1. Start looping from the end of the array with a variable called i towards the beginning
    2. Start an inner loop with a variable called j from the beginning until i - 1
    3. If arr[j] is greater than arr[j+1], swap those two values!
    4. Return the sorted array
**Note**: this algorithm uses the basic concept of swapping.

## BubbleSort Implementation

**JavaScript**

```javascript:
function BubbleSort(arr){
    let temp;
    for(let i = arr.length; i >= 0; i--){
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

```

**Python**

```python:
def bubble_sort(arr):
    for i in range(len(arr), 0, -1):
        for j in range(0, i-1):
            if arr[j] > arr[j+1]:
                temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
    return arr
```
  
## BubbleSort JavaScript Implementation (Optimized)

This method is usuful if the array is almost sorted!

**JavaScript**

```javascript:
function BubbleSort(arr){
    let temp;
    let noSwaps;
    for(let i = arr.length; i >= 0; i--){
        noSwaps = true;
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                noSwaps = true;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}
```

**Python**

```python:
def bubble_sort(arr):
    for i in range(len(arr), 0, -1):
        noSwaps = True
        for j in range(0, i-1):
            if arr[j] > arr[j+1]:
                temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
                noSwaps = False
        if noSwaps:
            break
    return arr
```

## Time Complexity:  Big(O)
    Worst case: O(N^2)
    Best Case: O(N) ~ only for the optimized version

