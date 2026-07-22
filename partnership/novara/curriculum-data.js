/**
 * Novara Language School partnership — professional curriculum overviews.
 * Written for proposal presentation (not raw session notes).
 *
 * To change the annual session count, update SESSIONS_PER_YEAR below and
 * adjust module `sessions` so each grade totals that number.
 * Each session = one school timetable slot (45 minutes).
 */
window.NOVARA_SESSION_CONFIG = {
  sessionsPerYear: 32,
  sessionDurationMinutes: 45,
};

window.NOVARA_CURRICULUM = {
  "1": {
    label: "Grade 1",
    focus:
      "A gentle introduction to computers, hands-on electronics, and creative block coding with Scratch Jr.",
    modules: [
      {
        name: "Computer Basics",
        sessions: 8,
        topics: [
          "Mouse control and classroom computer habits",
          "Keyboard familiarity and typing foundations",
        ],
      },
      {
        name: "Electronics Lab",
        sessions: 18,
        topics: [
          "Safe exploration of basic electronic components",
          "Simple circuits and guided lab activities",
        ],
      },
      {
        name: "Scratch Jr",
        sessions: 6,
        topics: [
          "Storytelling with characters and scenes",
          "First sequencing and event-based coding concepts",
        ],
      },
    ],
  },
  "2": {
    label: "Grade 2",
    focus:
      "Stronger computer confidence, deeper electronics practice, and a full introduction to Scratch.",
    modules: [
      {
        name: "Computer Basics",
        sessions: 4,
        topics: [
          "Mouse and keyboard fluency",
          "Ready-to-learn classroom workstation skills",
        ],
      },
      {
        name: "Electronics Lab",
        sessions: 15,
        topics: [
          "Building and testing simple circuits",
          "Hands-on electronics discovery in the school lab",
        ],
      },
      {
        name: "Scratch",
        sessions: 13,
        topics: [
          "Sprites, motion, looks, and events",
          "Creating short interactive stories and games",
        ],
      },
    ],
  },
  "3": {
    label: "Grade 3",
    focus:
      "Structured Scratch programming followed by an introduction to AI concepts through PictoBlox.",
    modules: [
      {
        name: "Scratch Programming",
        sessions: 19,
        topics: [
          "Core programming logic: variables, conditions, and loops",
          "Broadcasts, cloning, lists, and custom blocks",
          "Capstone Scratch project",
        ],
      },
      {
        name: "PictoBlox & Early AI",
        sessions: 13,
        topics: [
          "Animation, speech, and camera-based interactions",
          "Face detection, object detection, and image classification",
          "Simple machine-learning models and an AI game project",
        ],
      },
    ],
  },
  "4": {
    label: "Grade 4",
    focus:
      "An advanced Scratch year focused on game systems, clean coding habits, and a graduation project.",
    modules: [
      {
        name: "Advanced Scratch",
        sessions: 32,
        topics: [
          "Motion, coordinates, variables, operators, and control flow",
          "Game design systems: lives, levels, timers, and cloning",
          "Lists, custom functions, debugging, and optimization",
          "Final project planning and graduation showcase",
        ],
      },
    ],
  },
  "5": {
    label: "Grade 5",
    focus:
      "A complete beginner web track: HTML structure, CSS design, and interactive JavaScript projects.",
    modules: [
      {
        name: "HTML",
        sessions: 9,
        topics: [
          "How the web works and creating the first web page",
          "Text, media, links, lists, tables, and forms",
          "Semantic page structure and a mini website project",
        ],
      },
      {
        name: "CSS",
        sessions: 10,
        topics: [
          "Styling methods, colors, typography, and spacing",
          "Flexbox, buttons, cards, and visual polish",
          "Responsive layout with media queries",
        ],
      },
      {
        name: "JavaScript",
        sessions: 13,
        topics: [
          "Variables, events, functions, and conditions",
          "Loops, arrays, and DOM interaction",
          "Math utilities and a full interactive project",
        ],
      },
    ],
  },
  "6": {
    label: "Grade 6",
    focus:
      "Electronics foundations, a Scratch refresher, and a full Arduino robotics pathway with sensors and actuators.",
    modules: [
      {
        name: "Electronics Foundations",
        sessions: 5,
        topics: ["Circuit basics and safe lab practice"],
      },
      {
        name: "Scratch Refresh",
        sessions: 5,
        topics: ["Quick programming review before hardware work"],
      },
      {
        name: "Arduino & Physical Computing",
        sessions: 22,
        topics: [
          "Digital and analog signals and sensors",
          "Motor drivers, LCD displays, ultrasonic sensors, and servos",
          "Keypad input and multi-session applied projects",
        ],
      },
    ],
  },
  "7": {
    label: "Grade 7",
    focus:
      "Electronics and Arduino continue in depth, then students begin text-based programming with C++.",
    modules: [
      {
        name: "Electronics Foundations",
        sessions: 5,
        topics: ["Reinforced electronics concepts for project work"],
      },
      {
        name: "Arduino Systems",
        sessions: 12,
        topics: [
          "Sensors, actuators, displays, and input devices",
          "Integrated hardware control projects",
        ],
      },
      {
        name: "Introduction to C++",
        sessions: 15,
        topics: [
          "Development environment, syntax, variables, and data types",
          "Operators, conditions, loops, and functions",
          "Arrays, strings, and applied coding projects",
        ],
      },
    ],
  },
  "8": {
    label: "Grade 8",
    focus:
      "A full game-development year in Godot — from the editor and scenes to GDScript, gameplay systems, and a published student game.",
    modules: [
      {
        name: "Godot Editor & World Building",
        sessions: 5,
        topics: [
          "Godot interface, nodes, scenes, and the scene tree",
          "Sprites, tilemaps, cameras, lighting, and first playable levels",
        ],
      },
      {
        name: "GDScript for Games",
        sessions: 15,
        topics: [
          "Variables, signals, conditions, loops, and functions",
          "Player movement, collisions, collectibles, and checkpoints",
          "UI controls, arrays/dictionaries, reusable scripts, and scene communication",
        ],
      },
      {
        name: "Capstone Game Project",
        sessions: 12,
        topics: [
          "Game design planning, level building, and core mechanics",
          "UI, effects, audio, testing, and export",
          "Final presentation of the student game",
        ],
      },
    ],
  },
  "9": {
    label: "Grade 9",
    focus:
      "A rigorous Python programming course covering core language skills, data structures, files, OOP, and a final project.",
    modules: [
      {
        name: "Python Foundations",
        sessions: 10,
        topics: [
          "Environment setup, data types, operators, and strings",
          "Conditionals, logical operators, and applied mini projects",
          "ATM-style simulation and control-flow practice",
        ],
      },
      {
        name: "Intermediate Python",
        sessions: 13,
        topics: [
          "Loops, patterns, functions, and scope",
          "Lists, tuples, sets, and dictionaries",
          "File handling and error handling",
        ],
      },
      {
        name: "Object-Oriented Python & Capstone",
        sessions: 9,
        topics: [
          "Classes, objects, attributes, methods, and constructors",
          "Final project design, build, and presentation",
        ],
      },
    ],
  },
};
