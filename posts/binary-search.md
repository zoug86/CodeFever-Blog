---
title: 'Binary Search'
date: 'May 6, 2021'
excerpt: 'Binary Search with JavaScript & Python!'
cover_image: '/images/posts/img14.png'
category: 'Searching'
author: 'Houssem'
author_image: 'https://lh3.googleusercontent.com/pw/AM-JKLUCN1GfqI-Mm0ZQlj7dIcahFuwqubo8G1JTEKY1Kg-Z9oXT2V8att69FAuLMkUON5Zvej_hs18GLAMGXAzGbAqxu3CVpZoqSaWDlDQUKGFUrQIsA_YucaIG_6TcvJtDQ3_n1ZhdJL0AwEpSPI0JWdzK=s746-no?authuser=0'
---

<!-- Markdow generator - https://jaspervdj.be/lorem-markdownum/ -->
# Binary Search

Binary search is a much faster form of search. Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time, the only caviat is that the array has to be previously sorted!


## Binary Search Pseudocode

    1. This function accepts a sorted array and a value.
    2. Create a left pointer at the start of the array, and a right pointer at the end of the array.
    3. While the left pointer comes before the right pointer::
        . Create a pointer in the middle.
        . If you find the value you want, return the index.
        . If the value is too small, move the left pointer up.
        . If the value is too large, move the right pointer down.
    5. If you never find the value, return -1.


## Binary Search Implementation

**JavaScript**

```javascript:
function binarySearch(arr, num){
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((right + left )/ 2);
  while(num !== arr[mid] && left <= right){
      if(num > arr[mid]) left = mid + 1;
      else right = mid - 1;
      mid = Math.floor((right + left )/ 2);
  }
   return num === arr[mid] ? mid : -1;
}

```

**Python**

```python:
import math

def binary_search(arr, num):
    left = 0
    right = len(arr) - 1
    mid = math.floor((right + left) // 2)
    while left <= right and num != arr[mid]:
        if num > arr[mid]:
            left = mid + 1
        else:
            right = mid - 1
        mid = math.floor((right + left) // 2)
    if num == arr[mid]:
        return mid
    return -1

```

## Time Complexity:  Big(O)
    Worst case: O(log(N))


