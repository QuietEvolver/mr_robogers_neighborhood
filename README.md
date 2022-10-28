
# Mr. Roboger's Neighborhood

#### By Vera Weikel

#### A Counting app

## Technologies Used

* HTML 
* CSS 
* Javascript

## Description
Create a web application that takes a number from the user and returns a list of values from 0 to the user's inputted number. Here is the (repo)[https://github.com/jenniferholcomb/mr-robogers-neighborhood.git]

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

| Test | Input | Output |
|--------|:------:|:-----:|
| 1.  This test will take an input. | Input: x  |  Output: x |
|--------|:------:|:-----:|
| 2.  This test will take in number. | Input: 0 |  Output: 0 |
|--------|:------:|:-----:|
| 3.   This test will require a number only. | Input: 1 |  Output: 1 |
|--------|:------:|:-----:|
| 4.  This test will identify a given number 1 and produce a message based on that number. | Input: 1 |  Output: Beep! |
|--------|:------:|:-----:|
| 5.  This test will identify numbers 1-2 and produce a specific message for number which appears first from the user input. | Input: 2 |  Output: Boop!|
|--------|:------:|:-----:|
| 6.  This test will identify numbers 1-3 and produce a specific message for number which appears first from the user input. | Input: 3 |  Output: Won't you be my neighbor?|
|--------|:------:|:-----:|
| 7.  This test will identify a multiple numbers entry and produce a specific message for number which appears first from the user input. | Input: 321,803 |  Output: Won't you be my neighbor?|
| 8.  This test will identify if numbers 1, 2, 3 are not found from the user input. | Input: 5,806 |  Output: Outside?|


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