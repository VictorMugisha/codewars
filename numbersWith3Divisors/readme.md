# Find Numbers with 3 Divisors (5 kyu)

## DESCRIPTION:
Your task is to write a function that takes two integers n, m and returns a sorted array of all integers from n to m inclusive, which have only 3 divisors (1 and the number itself excluded).

Example:
`solution(2, 20) -> [16]`
`16` has `3` divisors: `2, 4, 8` (`1` and `16` aren't included)

Input:
n - integer (2 ≤ n ≤ 10^10)
m - integer (20 ≤ m ≤ 10^18)
NOTE: In Rust, the bounds are (2 ≤ n ≤ 2^51), (20 ≤ m ≤ 2^52).

Output:
result - array of integers