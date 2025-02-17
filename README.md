# JavaScript Bug: Loose Comparison with Null and Numbers

This repository demonstrates a common JavaScript error involving loose comparison (==) of null or undefined values with numbers.  The bug arises from the fact that JavaScript's loose comparison does not always behave as expected with null, undefined, and numbers.

## Bug Description

The `myFunction` attempts to add two numbers.  However, if either input is null, it returns 0. This works as expected. The issue is a lack of clarity.  It's not clearly defined what the expected behavior should be when encountering a null value. 

## Solution

The solution involves adding explicit checks for null and undefined values before performing the addition operation. This ensures that the function handles null input correctly and avoids unexpected behavior.