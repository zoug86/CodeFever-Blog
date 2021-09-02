---
title: 'Radix Sort'
date: 'May 14, 2021'
excerpt: 'Radix Sorting with JavaScript & Python!'
cover_image: '/images/posts/img13.png'
category: 'Sorting'
author: 'Houssem'
author_image: 'https://lh3.googleusercontent.com/jJpTf9Ce_V8FBduRi5AMdEQI9yr6RYUwSzR9cBTESYd4Nswd2DYM_lv0h_U7qVruLQWxAKwTVSbiaPU3fhtnZBVyLoqhc_VvXUVX3htm2THJaxYa4i6bhzA7MQJ7VgHvWoOs-Ne7Dau3EfYZ-EGT_vney6OyteVgspESDmw4t--6cXOAEFqCr9xPhuf70T-2etA3HXP9y3FldpgUqZL3GB8q00vgYP9eQmxBRICmOkxzD6CSouVT9Ew3z_c9KIh0QhHruw9CqRjXKaX_OXFky5QKacEJKg5bMSmFS0RAmFAfCjjaX-Tnzxt-dDYmSY9M7IN-x_aevOZXSGqfFLPBLI4371iz0ssW0DAfIY6iBgKGxSOjddABIR6IxzxrXfIxkx8cgPTIhuV8JUYAWT-Jpg72k7FrLDP8-ysvVV3l4rwo9nXxwka8BrmDJIerR8lKNlxvuHdAhAyaPeGybyvCwpjojJqS_duzVAiUhU8vwsfm6n5aiu3gEgAUUmzCeOhmD_JiKd_4vyiTTWM0z-5gIy_m84mml6MVIQNdTwrxEwoAc-i_EDx2Ewk9s3tESUtRlCSstJuC5EtL6EZCUOV4OnliKKX8r5H4ZRAIUYrJwcH7zFevlKQPi4M1kd0lo8NrYeLZhBkkB5kU1X6LvfI5GROKNESgiF2Lrs8DI7rVmwlltgf14BUxNIig_oj79TP7yLbnRQOBvRkOWO8o7rU6oL8=s746-no?authuser=0'
---

<!-- Markdow generator - https://jaspervdj.be/lorem-markdownum/ -->
# RadixSort

Radix sort is a special sorting algorithm that works on lists of numbers, i.e it never makes comparisons between elements! It exploits the fact that information about the size of a number is encoded in the number of digits.  

## RadixSort Helpers Pseudocode

    1. getDigit(num, place) - returns the digit in num at the given place value.
    2. digitCount(num) - returns the number of digits in num.
    3. mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list.

## RadixSort Helpers Implementation

**JavaScript**

```javascript:
function getDigit(num, i){
    return Math.floor(Math.abs(num) // Math.pow(10, i)) % 10;
}
function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(arr){
    let maxDigits = 0;
    for(let i = 0; i < arr.length; i++){
        maxDigits = max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
}

```

**Python**

```python:
import math

def get_digit(num, i):
    return math.floor(abs(num) // math.pow(10, i)) % 10

def digit_count(num):
    if num == 0:
        return 1
    return math.floor(math.log10(abs(num))) + 1

def most_digits(arr):
    max_digits = 0
    for i in range(len(arr)):
        max_digits = max(max_digits, digit_count(arr[i]))
    return max_digits

```
## RadixSort Pseudocode

    1. Define a function that accepts list of numbers.
    2. Figure out how many digits the largest number has.
    3. Loop from k = 0 up to this largest number of digits.
    4. For each iteration of the loop:
        . Create buckets for each digit (0 to 9).
        . place each number in the corresponding bucket based on its kth digit.
    5. Replace our existing array with values in our buckets, starting with 0 and going up to 9.
    6. return list at the end!


## QuickSort Implementation

**JavaScript**

```javascript:
function radixSort(arr):
    maxDigit = mostDigits(arr);
    for(let i = 0; i < maxDigit; i++){
        let bucket = Array.from({length: 10}, () => []);
        for(let j = 0; j < arr.length; j++){
            let index = getDigit(arr[j], i);
            bucket[index].push(arr[j]);
        arr = [].concat(...bucket);
    }
    return arr;

```

**Python**

```python:
def radix_sort(arr):
    max_digit = most_digits(arr)
    for i in range(max_digit):
        bucket = [[] for k in range(10)]
        for j in range(len(arr)):
            index = get_digit(arr[j], i)
            bucket[index].append(arr[j])
        arr = []
        for k in range(len(bucket)):
            if bucket[k]:
                arr += bucket[k]
    return arr

```

## Time Complexity:  Big(O)
    Worst case: O(Nk): where N is the length of the array and k is the number of digits in each element of the array (numbers only!).


