# JavaScript Course

# Level 1 - JavaScript Introduction

## Lesson 1 - Introduction to programming

### Section 1 - Computer language

### Explain

Programming is the way we talk to the computer and give it orders.

An order we give to the computer is called an "instruction".

So, what is computer language?

Computer language is binary language, which consists of 0 and 1.

Of course, as humans, we cannot write full code using only 0 and 1.

So we need a translator to translate from a language we can write into binary (0 and 1).

This translator is called a compiler. It converts code from a programming language into binary language.

![image.png](JavaScript%20Course/image.png)

image url for json: [https://i.postimg.cc/Y90zcFPx/Gemini-Generated-Image-e8p91ke8p91ke8p9.png](https://i.postimg.cc/Y90zcFPx/Gemini-Generated-Image-e8p91ke8p91ke8p9.png)

Download the JavaScript compiler (translator) from here:

https://nodejs.org/dist/v24.16.0/node-v24.16.0-x64.msi

### Questions

```
Question 1
What is the language that the computer understands?
a) English
b) binary
c) 0 and 1
d) b and c
e) JavaScript

answer: d
```

```
Question 2
What translates a programming language into binary?
a) IDE
b) JavaScript
c) compiler
d) code
e) internet

answer: c
```

### Section 2 - How to write and run code

### Explain

We write code in a file on our computer, but we should tell the computer, "This file is JavaScript code."

To do that, we should make the file extension ".js".

Examples of JavaScript file names are "test.js", "ahmed.js", and "mokhtareon.js".

![image.png](JavaScript%20Course/image%201.png)

image url for json: https://i.postimg.cc/pdzpmLnq/image.png

To run the code, we need to tell the compiler, "Hey compiler, please translate this file for my computer so it can follow my orders."

The JavaScript compiler is called "node", so we tell the computer:

node test.js  -> test.js is the file name

### Questions

```
Question 3
What is the name of the JavaScript compiler?
a) JavaScript
b) node
c) computer
d) translator
e) JS

answer: b
```

```
Question 4
How do we tell the computer this is JavaScript code?
a) make the extension .js
b) make the extension .html
c) it will know automatically
d) make the file name javascript

answer: a
```

```
Question 5
How do we run JavaScript code?
a) double-click the file
b) use a program
c) from cmd, write node with the file name, like node test.js
d) we cannot run JavaScript files

answer: c
```

### Section 3 - Where to write JavaScript code

### Explain

To write JavaScript code, we need to download a program called a text editor, like "VSCode".

Link to download it:

https://code.visualstudio.com/download

We open any folder and create a file with any name and the .js extension.

![image.png](JavaScript%20Course/image%202.png)

[https://i.postimg.cc/63H2X1Zd/image.png](https://i.postimg.cc/63H2X1Zd/image.png)

Then we write code to print hello and save the file.

Then we write node and the file name.

Example: "node ahmed.js"

![image.png](JavaScript%20Course/image%203.png)

image url for json: [https://i.postimg.cc/j59xvVND/image.png](https://i.postimg.cc/j59xvVND/image.png)

### Questions

```
Question 6
If we have a file called "ahmed.js", how do we run it?
a) run ahmed.js
b) run ahmed
c) node ahmed.js
d) ahmed.js

answer: c
```

### Section 4 - Instructions and syntax

### Explain

An "instruction" is one order we give to the computer.

For example, printing "hello" on the screen is one instruction.

In JavaScript, every instruction usually ends with a semicolon ";".

This semicolon tells the computer, "This instruction is finished. Go to the next one."

Example:

```
console.log("hello");
console.log("world");
```

Also, JavaScript is "case sensitive". That means:

hello, Hello, and HELLO are 3 different things for the computer.

So be careful when you write code. Small letters and capital letters are not the same.

### Questions

```
Question 7
What does the semicolon ";" mean in JavaScript?
a) start of an instruction
b) end of an instruction
c) comment
d) error

answer: b
```

```
Question 8
In JavaScript, are "Hello" and "hello" the same?
a) yes, they are always the same
b) no, JavaScript is case sensitive, so they are different
c) only numbers are case sensitive
d) it depends on the file name

answer: b
```

### Section 5 - console.log

### Explain

console.log() is how we print (show) something on the screen.

"console" is the screen we use to see results. In VSCode, it is called the Terminal.

"log" means write or print.

So console.log() means "print this on the screen".

Example:

```
console.log("Hello World");
```

This will print: Hello World

We can also print numbers without quotes:

```
console.log(5);
```

This will print: 5

### Questions

```
Question 9
What is the use of console.log()?
a) to delete the file
b) to print something on the screen
c) to download node
d) to translate code

answer: b
```

```
Question 10
What is the output of: console.log("Hi");
a) "Hi"
b) Hi
c) error
d) nothing

answer: b
```

### Section 6 - Comments

### Explain

Comments are notes we write inside code.

The computer does not run comments.

We use comments to explain code and help ourselves or other programmers understand it later.

In JavaScript, we can write a one-line comment using two slashes: //

Example:

```
// This code prints hello
console.log("hello");
```

The first line is a comment, so the computer ignores it.

The second line is code, so the computer runs it.

We can also put a comment after code on the same line:

```
console.log(10); // This prints the number 10
```

Comments are useful, but do not write too many comments. Write comments when they help explain something important.

### Questions

```
Question 11
What is a comment in JavaScript?
a) code that deletes a file
b) a note inside code
c) a number
d) a file extension

answer: b
```

```
Question 12
Does the computer run comments?
a) yes
b) no
c) only in VSCode
d) only with numbers

answer: b
```

```
Question 13
Which symbol is used to write a one-line comment in JavaScript?
a) //
b) **
c) ==
d) ;

answer: a
```

### Section 7 - Datatypes

### Explain

A datatype means "what kind of value is this?"

The main datatypes in JavaScript are:

1- Number -> for numbers, like 5, 10, and 3.14

2- String -> for text. We write it between quotes " " or ' ', like "ahmed" or 'hello'

3- Boolean -> only 2 values: true or false

4- Undefined -> a variable that has no value yet

5- Null -> means "empty" or "nothing" on purpose

Example:

```
console.log(10);        // Number
console.log("ahmed");   // String
console.log(true);      // Boolean
```

Note: any text between quotes is a String, even if it contains numbers.

Example: "123" is a String, not a Number, because it is between quotes.

### Questions

```
Question 14
What is the datatype of: "ahmed"
a) Number
b) String
c) Boolean
d) Null

answer: b
```

```
Question 15
What is the datatype of: true
a) String
b) Number
c) Boolean
d) Undefined

answer: c
```

```
Question 16
What is the datatype of: "100"
a) Number, because it is a number
b) String, because it is between quotes
c) Boolean
d) Null

answer: b
```

### Section 8 - Math operators

### Explain

Math operators are symbols we use to do math operations on numbers.

The main math operators are:

+ -> addition (plus)

- -> subtraction (minus)

* -> multiplication (times)

/ -> division

% -> modulus (the remainder after division)

** -> power (exponent)

Examples:

```
console.log(5 + 2);   // 7
console.log(5 - 2);   // 3
console.log(5 * 2);   // 10
console.log(5 / 2);   // 2.5
console.log(5 % 2);   // 1   (5 divided by 2 = 2 remainder 1)
console.log(5 ** 2);  // 25  (5 * 5)
```

### Questions

```
Question 17
What is the result of: console.log(10 % 3);
a) 3
b) 1
c) 30
d) 10

answer: b
```

```
Question 18
What is the result of: console.log(2 ** 3);
a) 5
b) 6
c) 8
d) 9

answer: c
```

```
Question 19
Which operator is used for division?
a) *
b) %
c) /
d) **

answer: c
```

### Section 9 - Comparison operators

### Explain

Comparison operators are used to compare two values.

The result of a comparison is always a Boolean (true or false).

The main comparison operators are:

== -> equal in value (does not check type)

=== -> equal in value and type (strict equal)

!= -> not equal in value

!== -> not equal in value or type (strict not equal)

> -> greater than

< -> less than

>= -> greater than or equal

<= -> less than or equal

Examples:

```
console.log(5 == "5");    // true   (same value, different type, but == does not care)
console.log(5 === "5");   // false  (different type, number vs string)
console.log(5 > 3);       // true
console.log(5 < 3);       // false
console.log(5 != 3);      // true
```

### Questions

```
Question 20
What is the result of: console.log(5 === "5");
a) true
b) false
c) 5
d) error

answer: b
```

```
Question 21
What is the result of: console.log(5 == "5");
a) true
b) false
c) error
d) undefined

answer: a
```

```
Question 22
What is the result of: console.log(7 > 4);
a) 7
b) 4
c) true
d) false

answer: c
```

```
Question 23
Which operator checks both value and type?
a) ==
b) ===
c) =
d) !=

answer: b
```