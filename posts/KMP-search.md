---
title: 'KMP Search'
date: 'June 18, 2021'
excerpt: 'KMP Search with Python!'
cover_image: '/images/posts/img15.jpg'
category: 'Searching'
author: 'Houssem'
author_image: 'https://lh3.googleusercontent.com/jJpTf9Ce_V8FBduRi5AMdEQI9yr6RYUwSzR9cBTESYd4Nswd2DYM_lv0h_U7qVruLQWxAKwTVSbiaPU3fhtnZBVyLoqhc_VvXUVX3htm2THJaxYa4i6bhzA7MQJ7VgHvWoOs-Ne7Dau3EfYZ-EGT_vney6OyteVgspESDmw4t--6cXOAEFqCr9xPhuf70T-2etA3HXP9y3FldpgUqZL3GB8q00vgYP9eQmxBRICmOkxzD6CSouVT9Ew3z_c9KIh0QhHruw9CqRjXKaX_OXFky5QKacEJKg5bMSmFS0RAmFAfCjjaX-Tnzxt-dDYmSY9M7IN-x_aevOZXSGqfFLPBLI4371iz0ssW0DAfIY6iBgKGxSOjddABIR6IxzxrXfIxkx8cgPTIhuV8JUYAWT-Jpg72k7FrLDP8-ysvVV3l4rwo9nXxwka8BrmDJIerR8lKNlxvuHdAhAyaPeGybyvCwpjojJqS_duzVAiUhU8vwsfm6n5aiu3gEgAUUmzCeOhmD_JiKd_4vyiTTWM0z-5gIy_m84mml6MVIQNdTwrxEwoAc-i_EDx2Ewk9s3tESUtRlCSstJuC5EtL6EZCUOV4OnliKKX8r5H4ZRAIUYrJwcH7zFevlKQPi4M1kd0lo8NrYeLZhBkkB5kU1X6LvfI5GROKNESgiF2Lrs8DI7rVmwlltgf14BUxNIig_oj79TP7yLbnRQOBvRkOWO8o7rU6oL8=s746-no?authuser=0'
---

<!-- Markdow generator - https://jaspervdj.be/lorem-markdownum/ -->
# KMP Search

The Knutt-Morris-Pratt algorithm is a Pattern Matching Substring Search algorithm. It intelligently traverses the longer string to reduce the amount of redundant searching. This method is more efficient than the regular search algorithm (the naive approach). At a high level, the KMP algorithm is similar to the naive algorithm: it considers shifts in order from 1 to n−m, and determines if the pattern matches at that shift. The difference is that the KMP algorithm uses information gleaned from partial matches of the pattern and text to skip over shifts that are guaranteed not to result in a match. <span style="color:blue">([Click here for more](https://www.cs.ubc.ca/~hoos/cpsc445/Handouts/kmp.pdf))</span>


## KMP Search Pseudocode

   ![](https://lh3.googleusercontent.com/tL9q6eu61GnlhTqLVXNtqTL7rKVu9-FDrI6KyA365Af2nHaL8VqCE7_bk_tQDtJIPwpKvXVo8wBthv3f6Fhuqv2Saaql1fMRjz2uxoVLrBTewK8oluAeqHZ90CYIvKufzQwIU-MTxF9Sj1zMyln6bMb0Ff54MWz1oXhkyXd2wKJblhqmCZirwrxBQCKOkrodcuYhoLTOiUSOl87TBBLBbcg488dM1so4iggB8UxpZ1gbs2U0n_pfI6QTfGAY5TGj4jkN00a86QAMV_Q_W8B9L6mYC7mFMIpXU9v4AoUDCaJBfdFJ-McPfVNuwzQ8_NFgWLR9N0QIO25UwAkqjZ1aLXKdljobKHanT_aAqZL_Oz5Sskq0zhgHjeTjPOQONgzqxIaJtlEJmAaBF08zOL4WZX_gq3mUDNjfWCCgb7G_Cu2_qFsA8_MwneyVcREWlLeNTKj_qtEaiVrMU7lmsFjCljxF0pjhanae-YjmLtaCwEPqhKRgbQj14lEnoIDCej3E-tO5LBoGY2SQAevuoAhKsuG7ZQMX9w-LsXNpDpefmMbSZZ_XFWAUHzt6O8mAfh1BKEZBZHu6VdX4TKRYgYFWIRMEq8vGAwsVcvP_SRPMylZsQ8b4jmkVw9s7ForAeKRCajJQ8TgzRAnr4PQtE76oZkPUWDdF6r2cWLd88uFDtNz9Phkocm6rYjNR3cEN2UXcWX4TFLSE7PBUQuYvXY11DI8=w881-h751-no?authuser=0)


## KMP Search Implementation

**Python**

```python:
def compute_lps_array(short, m, lps_arr):
    i = 0
    j = 1
    lps_arr[0] = 0
    while j < m:
        if short[j] == short[i]:
            lps_arr[j] = i + 1
            i += 1
            j += 1
        else:
            if i != 0:
                i = lps_arr[i-1]
            else:
                lps_arr[j] = 0
                j += 1

def KMP_search(large, short):
    count = 0
    n = len(large)
    m = len(short)
    lps_arr = [0]*m
    compute_lps_array(short, m, lps_arr)
    i = 0
    j = 0
    while i < n:
        if large[i] == short[j]:
            i += 1
            j += 1
        else:
            if j != 0:
                j = lps_arr[j-1]
            else:
                i += 1
        if j == m:
            count += 1
            j = lps_arr[j-1]
    return count

```

## Time Complexity:  Big(O)
    Worst case: O(N+M): where N is the length of the main string and M is the length of the substring. 


