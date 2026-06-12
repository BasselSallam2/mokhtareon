/* Course content from JavaScript-Course.md */
window.JAVASCRIPT_LEVEL_1_COURSE = {
  title: "JavaScript Level 1 - Introduction",
  lesson: "Lesson 1 - Introduction to programming",
  sections: [
    {
      title: "Computer language",
      explain: {
        paragraphs: [
          "Programming is the way we talk to the computer and give it orders.",
          'An order we give to the computer is called an "instruction".',
          "So, what is computer language?",
          "Computer language is binary language, which consists of 0 and 1.",
          "Of course, as humans, we cannot write full code using only 0 and 1.",
          "So we need a translator to translate from a language we can write into binary (0 and 1).",
          "This translator is called a compiler. It converts code from a programming language into binary language.",
        ],
        images: [
          "https://i.postimg.cc/Y90zcFPx/Gemini-Generated-Image-e8p91ke8p91ke8p9.png",
        ],
        links: [
          {
            label: "Download the JavaScript compiler (translator)",
            url: "https://nodejs.org/dist/v24.16.0/node-v24.16.0-x64.msi",
          },
        ],
      },
      questions: [
        {
          id: 1,
          text: "What is the language that the computer understands?",
          options: [
            { key: "a", text: "English" },
            { key: "b", text: "binary" },
            { key: "c", text: "0 and 1" },
            { key: "d", text: "b and c" },
            { key: "e", text: "JavaScript" },
          ],
          answer: "d",
        },
        {
          id: 2,
          text: "What translates a programming language into binary?",
          options: [
            { key: "a", text: "IDE" },
            { key: "b", text: "JavaScript" },
            { key: "c", text: "compiler" },
            { key: "d", text: "code" },
            { key: "e", text: "internet" },
          ],
          answer: "c",
        },
      ],
    },
    {
      title: "How to write and run code",
      explain: {
        paragraphs: [
          'We write code in a file on our computer, but we should tell the computer, "This file is JavaScript code."',
          'To do that, we should make the file extension ".js".',
          'Examples of JavaScript file names are "test.js", "ahmed.js", and "mokhtareon.js".',
          'To run the code, we need to tell the compiler, "Hey compiler, please translate this file for my computer so it can follow my orders."',
          'The JavaScript compiler is called "node", so we tell the computer:',
        ],
        images: ["https://i.postimg.cc/pdzpmLnq/image.png"],
        code: "node test.js  -> test.js is the file name",
      },
      questions: [
        {
          id: 3,
          text: "What is the name of the JavaScript compiler?",
          options: [
            { key: "a", text: "JavaScript" },
            { key: "b", text: "node" },
            { key: "c", text: "computer" },
            { key: "d", text: "translator" },
            { key: "e", text: "JS" },
          ],
          answer: "b",
        },
        {
          id: 4,
          text: "How do we tell the computer this is JavaScript code?",
          options: [
            { key: "a", text: "make the extension .js" },
            { key: "b", text: "make the extension .html" },
            { key: "c", text: "it will know automatically" },
            { key: "d", text: "make the file name javascript" },
          ],
          answer: "a",
        },
        {
          id: 5,
          text: "How do we run JavaScript code?",
          options: [
            { key: "a", text: "double-click the file" },
            { key: "b", text: "use a program" },
            { key: "c", text: "from cmd, write node with the file name, like node test.js" },
            { key: "d", text: "we cannot run JavaScript files" },
          ],
          answer: "c",
        },
      ],
    },
    {
      title: "Where to write JavaScript code",
      explain: {
        paragraphs: [
          'To write JavaScript code, we need to download a program called a text editor, like "VSCode".',
          "We open any folder and create a file with any name and the .js extension.",
          "Then we write code to print hello and save the file.",
          "Then we write node and the file name.",
          'Example: "node ahmed.js"',
        ],
        images: [
          "https://i.postimg.cc/63H2X1Zd/image.png",
          "https://i.postimg.cc/j59xvVND/image.png",
        ],
        links: [
          {
            label: "Download VSCode",
            url: "https://code.visualstudio.com/download",
          },
        ],
      },
      questions: [
        {
          id: 6,
          text: 'If we have a file called "ahmed.js", how do we run it?',
          options: [
            { key: "a", text: "run ahmed.js" },
            { key: "b", text: "run ahmed" },
            { key: "c", text: "node ahmed.js" },
            { key: "d", text: "ahmed.js" },
          ],
          answer: "c",
        },
      ],
    },
    {
      title: "Instructions and syntax",
      explain: {
        paragraphs: [
          'An "instruction" is one order we give to the computer.',
          'For example, printing "hello" on the screen is one instruction.',
          'In JavaScript, every instruction usually ends with a semicolon ";".',
          'This semicolon tells the computer, "This instruction is finished. Go to the next one."',
          'Also, JavaScript is "case sensitive". That means:',
          "hello, Hello, and HELLO are 3 different things for the computer.",
          "So be careful when you write code. Small letters and capital letters are not the same.",
        ],
        code: 'console.log("hello");\nconsole.log("world");',
      },
      questions: [
        {
          id: 7,
          text: 'What does the semicolon ";" mean in JavaScript?',
          options: [
            { key: "a", text: "start of an instruction" },
            { key: "b", text: "end of an instruction" },
            { key: "c", text: "comment" },
            { key: "d", text: "error" },
          ],
          answer: "b",
        },
        {
          id: 8,
          text: 'In JavaScript, are "Hello" and "hello" the same?',
          options: [
            { key: "a", text: "yes, they are always the same" },
            { key: "b", text: "no, JavaScript is case sensitive, so they are different" },
            { key: "c", text: "only numbers are case sensitive" },
            { key: "d", text: "it depends on the file name" },
          ],
          answer: "b",
        },
      ],
    },
    {
      title: "console.log",
      explain: {
        paragraphs: [
          "console.log() is how we print (show) something on the screen.",
          '"console" is the screen we use to see results. In VSCode, it is called the Terminal.',
          '"log" means write or print.',
          'So console.log() means "print this on the screen".',
          "This will print: Hello World",
          "We can also print numbers without quotes:",
          "This will print: 5",
        ],
        code: 'console.log("Hello World");\n\nconsole.log(5);',
      },
      questions: [
        {
          id: 9,
          text: "What is the use of console.log()?",
          options: [
            { key: "a", text: "to delete the file" },
            { key: "b", text: "to print something on the screen" },
            { key: "c", text: "to download node" },
            { key: "d", text: "to translate code" },
          ],
          answer: "b",
        },
        {
          id: 10,
          text: 'What is the output of: console.log("Hi");',
          options: [
            { key: "a", text: '"Hi"' },
            { key: "b", text: "Hi" },
            { key: "c", text: "error" },
            { key: "d", text: "nothing" },
          ],
          answer: "b",
        },
      ],
    },
    {
      title: "Comments",
      explain: {
        paragraphs: [
          "Comments are notes we write inside code.",
          "The computer does not run comments.",
          "We use comments to explain code and help ourselves or other programmers understand it later.",
          "In JavaScript, we can write a one-line comment using two slashes: //",
          "The first line is a comment, so the computer ignores it.",
          "The second line is code, so the computer runs it.",
          "We can also put a comment after code on the same line:",
          "Comments are useful, but do not write too many comments. Write comments when they help explain something important.",
        ],
        code: '// This code prints hello\nconsole.log("hello");\n\nconsole.log(10); // This prints the number 10',
      },
      questions: [
        {
          id: 11,
          text: "What is a comment in JavaScript?",
          options: [
            { key: "a", text: "code that deletes a file" },
            { key: "b", text: "a note inside code" },
            { key: "c", text: "a number" },
            { key: "d", text: "a file extension" },
          ],
          answer: "b",
        },
        {
          id: 12,
          text: "Does the computer run comments?",
          options: [
            { key: "a", text: "yes" },
            { key: "b", text: "no" },
            { key: "c", text: "only in VSCode" },
            { key: "d", text: "only with numbers" },
          ],
          answer: "b",
        },
        {
          id: 13,
          text: "Which symbol is used to write a one-line comment in JavaScript?",
          options: [
            { key: "a", text: "//" },
            { key: "b", text: "##" },
            { key: "c", text: "\\\\" },
            { key: "d", text: ";" },
          ],
          answer: "a",
        },
      ],
    },
    {
      title: "Datatypes",
      explain: {
        paragraphs: [
          'A datatype means "what kind of value is this?"',
          "The main datatypes in JavaScript are:",
          "1- Number -> for numbers, like 5, 10, and 3.14",
          '2- String -> for text. We write it between quotes " " or \' \', like "ahmed" or \'hello\'',
          "3- Boolean -> only 2 values: true or false",
          "4- Undefined -> a variable that has no value yet",
          '5- Null -> means "empty" or "nothing" on purpose',
          "Note: any text between quotes is a String, even if it contains numbers.",
          'Example: "123" is a String, not a Number, because it is between quotes.',
        ],
        code: 'console.log(10);        // Number\nconsole.log("ahmed");   // String\nconsole.log(true);      // Boolean',
      },
      questions: [
        {
          id: 14,
          text: 'What is the datatype of: "ahmed"',
          options: [
            { key: "a", text: "Number" },
            { key: "b", text: "String" },
            { key: "c", text: "Boolean" },
            { key: "d", text: "Null" },
          ],
          answer: "b",
        },
        {
          id: 15,
          text: "What is the datatype of: true",
          options: [
            { key: "a", text: "String" },
            { key: "b", text: "Number" },
            { key: "c", text: "Boolean" },
            { key: "d", text: "Undefined" },
          ],
          answer: "c",
        },
        {
          id: 16,
          text: 'What is the datatype of: "100"',
          options: [
            { key: "a", text: "Number, because it is a number" },
            { key: "b", text: "String, because it is between quotes" },
            { key: "c", text: "Boolean" },
            { key: "d", text: "Null" },
          ],
          answer: "b",
        },
      ],
    },
    {
      title: "Math operators",
      explain: {
        paragraphs: [
          "Math operators are symbols we use to do math operations on numbers.",
          "The main math operators are:",
          "+ -> addition (plus)",
          "- -> subtraction (minus)",
          "* -> multiplication (times)",
          "/ -> division",
          "% -> modulus (the remainder after division)",
          "** -> power (exponent)",
        ],
        code: 'console.log(5 + 2);   // 7\nconsole.log(5 - 2);   // 3\nconsole.log(5 * 2);   // 10\nconsole.log(5 / 2);   // 2.5\nconsole.log(5 % 2);   // 1   (5 divided by 2 = 2 remainder 1)\nconsole.log(5 ** 2);  // 25  (5 * 5)',
      },
      questions: [
        {
          id: 17,
          text: "What is the result of: console.log(10 + 3);",
          options: [
            { key: "a", text: "7" },
            { key: "b", text: "13" },
            { key: "c", text: "30" },
            { key: "d", text: "103" },
          ],
          answer: "b",
        },
        {
          id: 18,
          text: "What is the result of: console.log(2 * 3);",
          options: [
            { key: "a", text: "5" },
            { key: "b", text: "6" },
            { key: "c", text: "8" },
            { key: "d", text: "9" },
          ],
          answer: "b",
        },
        {
          id: 19,
          text: "Which operator is used for division?",
          options: [
            { key: "a", text: "+" },
            { key: "b", text: "-" },
            { key: "c", text: "/" },
            { key: "d", text: "*" },
          ],
          answer: "c",
        },
      ],
    },
    {
      title: "Comparison operators",
      explain: {
        paragraphs: [
          "Comparison operators are used to compare two values.",
          "The result of a comparison is always a Boolean (true or false).",
          "The main comparison operators are:",
          "== -> equal in value (does not check type)",
          "=== -> equal in value and type (strict equal)",
          "!= -> not equal in value",
          "!== -> not equal in value or type (strict not equal)",
          "> -> greater than",
          "< -> less than",
          ">= -> greater than or equal",
          "<= -> less than or equal",
        ],
        code: 'console.log(5 == "5");    // true   (same value, different type, but == does not care)\nconsole.log(5 === "5");   // false  (different type, number vs string)\nconsole.log(5 > 3);       // true\nconsole.log(5 < 3);       // false\nconsole.log(5 != 3);      // true',
      },
      questions: [
        {
          id: 20,
          text: "What is the result of: console.log(5 > 3);",
          options: [
            { key: "a", text: "true" },
            { key: "b", text: "false" },
            { key: "c", text: "5" },
            { key: "d", text: "error" },
          ],
          answer: "a",
        },
        {
          id: 21,
          text: "What is the result of: console.log(5 < 3);",
          options: [
            { key: "a", text: "true" },
            { key: "b", text: "false" },
            { key: "c", text: "error" },
            { key: "d", text: "undefined" },
          ],
          answer: "b",
        },
        {
          id: 22,
          text: "What is the result of: console.log(7 > 4);",
          options: [
            { key: "a", text: "7" },
            { key: "b", text: "4" },
            { key: "c", text: "true" },
            { key: "d", text: "false" },
          ],
          answer: "c",
        },
        {
          id: 23,
          text: "Which operator means greater than?",
          options: [
            { key: "a", text: ">" },
            { key: "b", text: "<" },
            { key: "c", text: "+" },
            { key: "d", text: "/" },
          ],
          answer: "a",
        },
      ],
    },
  ],
};
