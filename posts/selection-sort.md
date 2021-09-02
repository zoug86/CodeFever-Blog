---
title: 'Selection Sort'
date: 'May 7, 2021'
excerpt: 'Selection Sorting with JavaScript & Python!'
cover_image: '/images/posts/img9.jpg'
category: 'Sorting'
author: 'Houssem'
author_image: 'https://lh3.googleusercontent.com/jJpTf9Ce_V8FBduRi5AMdEQI9yr6RYUwSzR9cBTESYd4Nswd2DYM_lv0h_U7qVruLQWxAKwTVSbiaPU3fhtnZBVyLoqhc_VvXUVX3htm2THJaxYa4i6bhzA7MQJ7VgHvWoOs-Ne7Dau3EfYZ-EGT_vney6OyteVgspESDmw4t--6cXOAEFqCr9xPhuf70T-2etA3HXP9y3FldpgUqZL3GB8q00vgYP9eQmxBRICmOkxzD6CSouVT9Ew3z_c9KIh0QhHruw9CqRjXKaX_OXFky5QKacEJKg5bMSmFS0RAmFAfCjjaX-Tnzxt-dDYmSY9M7IN-x_aevOZXSGqfFLPBLI4371iz0ssW0DAfIY6iBgKGxSOjddABIR6IxzxrXfIxkx8cgPTIhuV8JUYAWT-Jpg72k7FrLDP8-ysvVV3l4rwo9nXxwka8BrmDJIerR8lKNlxvuHdAhAyaPeGybyvCwpjojJqS_duzVAiUhU8vwsfm6n5aiu3gEgAUUmzCeOhmD_JiKd_4vyiTTWM0z-5gIy_m84mml6MVIQNdTwrxEwoAc-i_EDx2Ewk9s3tESUtRlCSstJuC5EtL6EZCUOV4OnliKKX8r5H4ZRAIUYrJwcH7zFevlKQPi4M1kd0lo8NrYeLZhBkkB5kU1X6LvfI5GROKNESgiF2Lrs8DI7rVmwlltgf14BUxNIig_oj79TP7yLbnRQOBvRkOWO8o7rU6oL8=s746-no?authuser=0'
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

