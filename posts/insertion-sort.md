---
title: 'Insertion Sort'
date: 'May 8, 2021'
excerpt: 'Insertion Sorting with JavaScript & Python!'
cover_image: '/images/posts/img10.jpg'
category: 'Sorting'
author: 'Houssem'
author_image: 'https://lh3.googleusercontent.com/jJpTf9Ce_V8FBduRi5AMdEQI9yr6RYUwSzR9cBTESYd4Nswd2DYM_lv0h_U7qVruLQWxAKwTVSbiaPU3fhtnZBVyLoqhc_VvXUVX3htm2THJaxYa4i6bhzA7MQJ7VgHvWoOs-Ne7Dau3EfYZ-EGT_vney6OyteVgspESDmw4t--6cXOAEFqCr9xPhuf70T-2etA3HXP9y3FldpgUqZL3GB8q00vgYP9eQmxBRICmOkxzD6CSouVT9Ew3z_c9KIh0QhHruw9CqRjXKaX_OXFky5QKacEJKg5bMSmFS0RAmFAfCjjaX-Tnzxt-dDYmSY9M7IN-x_aevOZXSGqfFLPBLI4371iz0ssW0DAfIY6iBgKGxSOjddABIR6IxzxrXfIxkx8cgPTIhuV8JUYAWT-Jpg72k7FrLDP8-ysvVV3l4rwo9nXxwka8BrmDJIerR8lKNlxvuHdAhAyaPeGybyvCwpjojJqS_duzVAiUhU8vwsfm6n5aiu3gEgAUUmzCeOhmD_JiKd_4vyiTTWM0z-5gIy_m84mml6MVIQNdTwrxEwoAc-i_EDx2Ewk9s3tESUtRlCSstJuC5EtL6EZCUOV4OnliKKX8r5H4ZRAIUYrJwcH7zFevlKQPi4M1kd0lo8NrYeLZhBkkB5kU1X6LvfI5GROKNESgiF2Lrs8DI7rVmwlltgf14BUxNIig_oj79TP7yLbnRQOBvRkOWO8o7rU6oL8=s746-no?authuser=0'
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

