
# Mr. Roboger's Neighborhood

#### By Vera Weikel

#### A Counting app

## Technologies Used

* HTML 
* CSS 
* Javascript

## Description
Create a web application that takes a number from the user and returns a list of values from 0 to the user's inputted number. Here is the [repo](https://github.com/quietevolver/mr-robogers-neighborhood.git)

### Objectives 

Print to DOM a list of values from 0 to the user's inputter number and write tests for your application's business logic. 

### Goals

To take a number from the user and returns a list of values from 0 to the user's inputted number with the following substitutions made within the returned list:

* For numbers that contain a 1, all digits are replaced with "Beep!"
For example, all digits of the number 109, 11, or 1 would be replaced with "Beep!"
* For numbers that contain a 2, all digits are replaced with "Boop!"
For example, all digits of the number 2, 24, or 2099 would be replaced with "Boop!"
* For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"
For example, all digits of the number 39, 3, or 8763 would be replaced with "Won't you be my neighbor?"

* These substitutions are written from least to most important. The first substitution should apply unless the second does, and the same with the second and third. In other words, the substitution for the number 1 should apply unless there's a 2 present in the number. Then, the substitution for the number 2 should apply unless there's a 3 present in the number.

[TDD](https://www.learnhowtoprogram.com/introduction-to-programming/arrays-and-looping/text-analyzer-with-tdd-wordcounter)
```
## Tests

Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop();
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should return an array of strings from 0 to the user's inputted number 5"
Code: beepBoop(5);
Expected Output: ["0", "1", "2", "3", "4", "5"]

Test: "It should return 'Beep!' for a 1 input of the users array."
Code: 
beepBoop(1);
Expected Output: "Beep?"

Test: "It should return 'Beep!' for a 18 input of the users array."
Code: 
beepBoop(18);
Expected Output: "Beep?"


```

## Setup/Installation Requirements

* Clone this repo to your workspace.
* Navigate to the top level of the directory.
* Open index.html in your browser.

## Known Bugs

* No known bugs.

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2022 Vera Weikel

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.