
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


<br> Describe: inputValue() 
<br>
<br>Test: "It should take an input."
<br>Code:
<br>const input0 = 1;
<br>inputValue(2);
<br>Expected Output: 1
<br>
<br>Describe: inputValueNumber0() 
<br>
<br>Test: "It should take an input."
<br>Code:
<br>const inputValue = 1;
<br>inputValueNumber0(2);
<br>Expected Output: 1
<br>
<br>Test: "It should take a number."
<br>Code:
<br>const inputValue = 2
<br>inputValueNumber0(inputVAlue0);
<br>Expected Output: 2
<br>
<br> 3. Describe: inputValueNumber0() 
<br>
<br>Test: "It should take an input."
<br>Code:
<br>const inputValueNumber = 1;
<br>inputValueNumberFx(2);
<br>Expected Output: 1
<br>
<br>Test: "It should take a number."
<br>Code:
<br>const inputValueNumber = 2
<br>inputValueNumberFx(inputValueNumber);
<br>Expected Output: 2
<br>
<br>
<br>Test: "It should require a number only."
<br>Code:
<br>const inputValueNumber = "0"
<br>inputValueNumberFx(inputValueNumber);
<br>Expected Output: 0
<br>
<br> 4. Describe: inputValueNumberBeepFx1()
<br>
<br>Test: "It should take an input."
<br>Code:
<br>const inputValueNumberBeep1 = 1;
<br>inputValueNumberFx1(2);
<br>Expected Output: 1
<br>
<br>Test: "It should take a number."
<br>Code:
<br>const inputValueNumberBeep1 = 2
<br>inputValueNumberBeepFx1(inputValueNumberBeep1);
<br>Expected Output: 2
<br>
<br>
<br>Test: "It should require a number only."
<br>Code:
<br>const inputValueNumberBeep1 = "0"
<br>inputValueNumberBeepFx1(inputValueNumberBeep1);
<br>Expected Output: 0
<br>
<br>Test: "It should identify a given number 1 and produce a message based on that number."
<br>Code:
<br>const inputValueNumberBeep1 = "1"
<br>let msg1 = "Beep!"
<br>inputValueNumberBeepFx1(inputValueNumberBeep1);
<br>Expected Output: "Beep!" 
<br>
<br> 5. Describe: inputValueNumberBoopFx2()
<br>
<br>Test: "It should take an input."
<br>Code:
<br>const inputValueNumberBoop2 = 1;
<br>inputValueNumberBoop2(2);
<br>Expected Output: 1
<br>
<br>Test: "It should take a number."
<br>Code:
<br>const inputValueNumberBoop2 = 2
<br>inputValueNumberBoopFx2(inputValueNumberBoop2);
<br>Expected Output: 2
<br>
<br>
<br>Test: "It should require a number only."
<br>Code:
<br>const inputValueNumberBoop2 = "0"
<br>inputValueNumberBoopFx2(inputValueNumberBoop2);
<br>Expected Output: 0
<br>
<br>Test: "It should identify a given number 1 and produce a message based on that number."
<br>Code:
<br>const inputValueNumberBoop2 = "1"
<br>let msg1 = "Beep!"
<br>inputValueNumberBoopFx2(inputValueNumberBoop2);
<br>Expected Output: "Beep!" 
<br>
<br>Test: "It should identify numbers 1-2 and produce a specific message for number which appears first from the user input. "
<br>Code:
<br>const inputValueNumberBoop2 = "2"
<br>let msg2 = "Boop!"
<br>inputValueNumberBoopFx2(inputValueNumberBoop2);
<br>Expected Output: "Boop!"
<br>
<br> 6. Describe: parseint()
<br>
<br>Test: "It should take an input."
<br>Code:
<br>const inputThree = 1;
<br>parseint(2);
<br>Expected Output: 1
<br>
<br>Test: "It should take a number."
<br>Code:
<br>const inputThree = 2
<br>parseint(inputThree);
<br>Expected Output: 2
<br>
<br>
<br>Test: "It should require a number only."
<br>Code:
<br>const inputThree = "0"
<br>parseint(inputThree);
<br>Expected Output: 0
<br>
<br>Test: "It should identify a given number 1 and produce a message based on that number."
<br>Code:
<br>const inputThree = "1"
<br>let msg3 = "Beep!"
<br>parseint("1");
<br>Expected Output: "Beep!" 
<br>
<br>Test: "It should identify numbers 1-2 and produce a specific message for number which appears first from the user input. "
<br>Code:
<br>const inputThree = "2"
<br>let msg3 = "Boop!"
<br>parseint(inputThree);
<br>Expected Output: "Boop!"
<br>
<br>Test: "It should identify numbers 1-3 and produce a specific message for number which appears first from the user input."
<br>Code:
<br>let inputThree = parseInt("3");
<br>let msg3 = "";
<br>parseInt("3")
<br>Expected Output: "Won't you be my neighbor?"
<br>
<br> 7. Describe: isANumber7()
<br>
<br>Test: "It should take an input."
<br>Code:
<br>const inputSeven = 1;
<br>isANumber7(2);
<br>Expected Output: 1
<br>
<br>Test: "It should take a number."
<br>Code:
<br>const inputSeven = 2
<br>isANumber7(inputSeven);
<br>Expected Output: 2
<br>
<br>
<br>Test: "It should require a number only."
<br>Code:
<br>const inputSeven = "0"
<br>isANumber7(inputSeven);
<br>Expected Output: 0
<br>
<br>Test: "It should identify a given number 1 and produce a message based on that number."
<br>Code:
<br>const inputSeven = "1"
<br>let msg7 = "Beep!"
<br>isANumber7("1");
<br>Expected Output: "Beep!" 
<br>
<br>Test: "It should identify numbers 1-2 and produce a specific message for number which appears first from the user input. "
<br>Code:
<br>const inputSeven = "2"
<br>let msg7 = "Boop!"
<br>isANumber7(inputThree);
<br>Expected Output: "Boop!"
<br>
<br>Test: "It should identify numbers 1-3 and produce a specific message for number which appears first from the user input."
<br>Code:
<br>let inputArray7 = parseInt("3");
<br>let msg7 = "";
<br>isANumber7("3")
<br>Expected Output: "Won't you be my neighbor?"
<br>
<br>Test: " It should identify a multiple integers entry and produce a specific message for number which appears first from the user input."
<br>Code:
<br>let msg7 = ""
<br>let inputArray7 = [3,2,1,8,0,3]
<br>isANumber7(inputArray7); 
<br>const outputMsg = isANumber7(inputArray7);
<br>outputMsg;
<br>Expected Output: "Won't you be my neighbor?"
<br>
<br> 8. Describe: isANumber10()
<br>
<br>Test: "It should identify numbers 1-3 and produce a specific message for number which appears first from the user input."
<br>Code:
<br>let inputThree = parseInt("3");
<br>let msg3 = "";
<br>parseInt("3")
<br>Expected Output: "Won't you be my neighbor?"
<br>
<br>
<br>Test: " It should identify a multiple integers entry and produce a specific message for number which appears first from the user input."
<br>Code:
<br>let msg7 = ""
<br>let inputArray = [3,2,1,8,0,3]
<br>isANumber7(inputArray7); 
<br>const outputMsg = isANumber7(inputArray7);
<br>outputMsg;
<br>Expected Output: "Won't you be my neighbor?"
<br>
<br>
<br>Test: "It should intake a multiple string entry, turn into integer and weigh from 1-3 with 3 being the most weighted."
<br>Code:
<br>let msg10 = ""
<br>let input10 = "321,803"; 
<br>let inputArray10 = parseInt(input10) 
<br>isANumber10(inputArray10);
<br>const outputMsg = isANumber10(inputArray7);
<br>outputMsg;
<br>Expected Output: "Won't you be my neighbor?"

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