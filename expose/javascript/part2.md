# Lab 4: Part 2

### Nathan Dowd

---

## Questions

1. It will print 3. i is declared as a var, which means it can be accessed outside the block it is in. The for loop executes until i == 3, so thats the value stored in i when the program reaches line 12.
2. It will print 150. discountedPrice is a var, so it exists past its block. The last value is 300, multiplied by one half is 150.
3. It will print 150. discountedPrice is a var, so it exists past its block. discountedPrice is 150, and the rounding won't affect that number.
4. It returns the array [50, 100, 150]. The function takes in an array of prices with a discount factor. Then it iterates through the input array, applies the discount factor, and stores the new values in the discounted array.
5. This will cause an error since line 12 is outside the scope of i's declaration in the for loop.
6. This will cause an error since line 13 is outside the scope of discountedPrice's declaration in the for loop.
7. This will print 150. Same explanation as withquestion 3. It doesn't return an error since the declaration on line 4 is in the same code block as oine 14.
8. It returns the array [50, 100, 150]. The function takes in an array of prices with a discount factor. Then it iterates through the input array, applies the discount factor, and stores the new values in the discounted array.
9. This will cause an error since line 11 is outside the scope of i's declaration in the for loop.
10. It will print 3. That is the length of the array passed into the function. length is declared in the same block as line 12, so there won't be an error
11. It will return the array [50, 100, 150]. Although discounted is a const, you can still push values to it.
12. 
    A. student.name  
    B. student['Grad Year']  
    C. student.greeting  
    D. student['Favorite Teacher'].name  
    E. student.courseLoad[0]  
13. 
    A. '32', Autoconcatenates number to string with +  
    B. 1, Converts string to number with -  
    C. 3, null doesn't affect int operation  
    D. '3null', converts null to string  
    E. 4, true converts to 1  
    F. 0, false converts to 0, null has no effect  
    G. '3undefined', converts undefined to string  
    H. NaN, can't do string substraction  
14. 
    A. true, converts '2' to number  
    B. false, compares them as strings, so only looks at first char, and '2' > '1'  
    C. true, converts '2' to a number  
    D. false, === doesn't do type conversion  
    E. false, when it converts true to a number, it's a 1  
    F. true, Boolean() converts any number other than 0 to true  
15. == performs type casting before comparing, === does not
16. JS question
17. It returns [2,4,6]. This is because it iterates through the array given, and for each element calls doSomething, which returns double the number passed into it.
18. JS question
19. 1342
   
