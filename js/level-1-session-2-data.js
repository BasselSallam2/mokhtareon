/* Course content from JavaScript Level 1 - session 2 - Assignment .md */
window.COURSE_WIZARD_DATA = {
  title: "JavaScript Level 1 - Session 2",
  lesson: "Binary conversion & if conditions",
  pdfPrefix: "level-1-session-2",
  backUrl: "/javascript-level-1",
  sections: [
    {
      title: "Convert Binary To Decimal",
      explain: {
        paragraphs: [
          "Computer can't understand normal numbers or our language — it understands only binary language (0, 1).",
          "So how does the computer understand our numbers? It converts decimal numbers into binary numbers, and binary numbers can also be converted back into decimal numbers.",
          "Each numbering system has a base. For binary the base is 2, for decimal the base is 10.",
          "To calculate the decimal number for any numbering system, use this equation:",
          "Calculate the sum of (Base ^ n) × digit, where n is the order of the digit from the right (starting at 0).",
        ],
        images: [
          "https://i.postimg.cc/G2sJBXYL/Gemini-Generated-Image-t5q1z9t5q1z9t5q1.png",
        ],
      },
      questions: [
        {
          id: 1,
          text: "Convert the 3-digit binary number 101 into its decimal equivalent.",
          options: [
            { key: "a", text: "6" },
            { key: "b", text: "4" },
            { key: "c", text: "3" },
            { key: "d", text: "5" },
          ],
          answer: "d",
        },
        {
          id: 2,
          text: "What is the decimal value of the 4-digit binary number 1100?",
          options: [
            { key: "a", text: "12" },
            { key: "b", text: "14" },
            { key: "c", text: "6" },
            { key: "d", text: "8" },
          ],
          answer: "a",
        },
        {
          id: 3,
          text: "Convert the binary number 011 to decimal.",
          options: [
            { key: "a", text: "6" },
            { key: "b", text: "7" },
            { key: "c", text: "2" },
            { key: "d", text: "3" },
          ],
          answer: "d",
        },
      ],
    },
    {
      title: "if condition",
      explain: {
        paragraphs: [
          "The if condition is used when you want to run code under a specific condition only.",
          'For example: print "Hello" if gender is girl only — so our program will say hello for girls only.',
          "How to use if?",
          "Example: say hello for girls only",
        ],
        code:
          'let gender = "girl";\n\nif (gender == "girl") {\n  console.log("hello");\n}',
      },
      questions: [
        {
          id: 4,
          type: "code",
          text: 'Initialize a variable called "gender" and say hello for boys only. Expected output if gender = boy → "hello". Expected output if gender ≠ boy → nothing.',
          starterCode: 'let gender = "boy";\n\n// Write your if condition below\n',
          solution:
            'let gender = "boy";\n\nif (gender == "boy") {\n  console.log("hello");\n}',
          tests: [
            { setup: 'let gender = "boy";\n', expectedOutput: "hello", label: "gender = boy" },
            { setup: 'let gender = "girl";\n', expectedOutput: "", label: "gender = girl" },
          ],
        },
        {
          id: 5,
          type: "code",
          text: "A driver is caught by a speed camera. Determine if they get a fine. maximum_speed = 120, fee = maximum_speed × 1.5 when over the limit, then print fee. Expected: speed = 90 → 0, speed = 140 → 210.",
          starterCode:
            "let speed = 90;\nlet maximum_speed = 120;\nlet fee = 0;\n\n// Write your if condition below, then console.log(fee)\n",
          solution:
            "let speed = 90;\nlet maximum_speed = 120;\nlet fee = 0;\n\nif (speed > maximum_speed) {\n  fee = speed * 1.5;\n}\nconsole.log(fee);",
          tests: [
            {
              setup: "let speed = 90;\nlet maximum_speed = 120;\nlet fee = 0;\n",
              expectedOutput: "0",
              label: "speed = 90",
            },
            {
              setup: "let speed = 140;\nlet maximum_speed = 120;\nlet fee = 0;\n",
              expectedOutput: "210",
              label: "speed = 140",
            },
          ],
        },
        {
          id: 6,
          type: "code",
          text: "We sell cinema tickets. Calculate the cost based on age: 1–5 → can't enter, 6–10 → 0, 11–15 → 50, 16–18 → 100, more than 18 → 200. Initialize cost and print it.",
          starterCode:
            "let age = 10;\nlet cost = 0;\n\n// Write your if/else conditions below, then console.log(cost)\n",
          solution:
            "let age = 10;\nlet cost = 0;\n\nif (age >= 1 && age <= 5) {\n  console.log(\"can't enter\");\n} else if (age >= 6 && age <= 10) {\n  cost = 0;\n  console.log(cost);\n} else if (age >= 11 && age <= 15) {\n  cost = 50;\n  console.log(cost);\n} else if (age >= 16 && age <= 18) {\n  cost = 100;\n  console.log(cost);\n} else if (age > 18) {\n  cost = 200;\n  console.log(cost);\n}",
          tests: [
            {
              setup: "let age = 3;\nlet cost = 0;\n",
              expectedOutput: "can't enter",
              label: "age = 3",
            },
            {
              setup: "let age = 8;\nlet cost = 0;\n",
              expectedOutput: "0",
              label: "age = 8",
            },
            {
              setup: "let age = 13;\nlet cost = 0;\n",
              expectedOutput: "50",
              label: "age = 13",
            },
            {
              setup: "let age = 17;\nlet cost = 0;\n",
              expectedOutput: "100",
              label: "age = 17",
            },
            {
              setup: "let age = 20;\nlet cost = 0;\n",
              expectedOutput: "200",
              label: "age = 20",
            },
          ],
        },
      ],
    },
  ],
};
