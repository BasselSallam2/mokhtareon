(function () {
  "use strict";

  const course = window.COURSE_WIZARD_DATA;
  if (!course) return;

  const config = {
    backUrl: course.backUrl || "/javascript-level-1",
    pdfPrefix: course.pdfPrefix || "course-report",
  };

  const state = {
    stepIndex: 0,
    studentName: "",
    studentPhone: "",
    answers: {},
    codeDrafts: {},
    submissions: {},
    started: false,
  };

  const els = {
    progressWrap: document.getElementById("cw-progress-wrap"),
    progressLabel: document.getElementById("cw-progress-label"),
    progressScore: document.getElementById("cw-progress-score"),
    progressFill: document.getElementById("cw-progress-fill"),
    stepContent: document.getElementById("cw-step-content"),
    btnBack: document.getElementById("cw-btn-back"),
    btnCheck: document.getElementById("cw-btn-check"),
    btnNext: document.getElementById("cw-btn-next"),
    actions: document.getElementById("cw-actions"),
  };

  const steps = buildSteps(course);

  function buildSteps(courseData) {
    const list = [{ type: "welcome" }];

    courseData.sections.forEach(function (section, sectionIndex) {
      list.push({ type: "explain", sectionIndex: sectionIndex });
      section.questions.forEach(function (question, questionIndex) {
        list.push({
          type: "question",
          sectionIndex: sectionIndex,
          questionIndex: questionIndex,
        });
      });
    });

    list.push({ type: "results" });
    return list;
  }

  function getAllQuestions() {
    const questions = [];
    course.sections.forEach(function (section) {
      section.questions.forEach(function (question) {
        questions.push(question);
      });
    });
    return questions;
  }

  function getQuestionByStep(step) {
    return course.sections[step.sectionIndex].questions[step.questionIndex];
  }

  function isCodeQuestion(question) {
    return question.type === "code";
  }

  function isSubmitted(questionId) {
    return Boolean(state.submissions[questionId] && state.submissions[questionId].submitted);
  }

  function getSubmittedCount() {
    return Object.keys(state.submissions).filter(function (id) {
      return state.submissions[id].submitted;
    }).length;
  }

  function getCorrectCount() {
    return Object.keys(state.submissions).filter(function (id) {
      const sub = state.submissions[id];
      return sub && sub.submitted && sub.correct;
    }).length;
  }

  function getScorePercentage() {
    const total = getAllQuestions().length;
    if (!total) return 0;
    return Math.round((getCorrectCount() / total) * 100);
  }

  function getGrade(percentage) {
    if (percentage >= 90) return "Excellent";
    if (percentage >= 75) return "Good";
    if (percentage >= 60) return "Fair";
    return "Needs Improvement";
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function normalizeOutput(text) {
    return String(text == null ? "" : text).trim();
  }

  function buildExecutableCode(studentCode, setup) {
    if (!setup) return studentCode;
    const stripped = studentCode.replace(/^\s*let\s+[a-zA-Z_$][\w$]*\s*=[^;]*;\s*\n?/gm, "");
    return setup + stripped;
  }

  function runStudentCode(code, setup) {
    let output = "";
    try {
      const executable = buildExecutableCode(code, setup);
      const fn = new Function(
        "console",
        executable + "\n//# sourceURL=student-code.js"
      );
      const mockConsole = {
        log: function () {
          const args = Array.prototype.slice.call(arguments);
          const line = args
            .map(function (arg) {
              return typeof arg === "string" ? arg : String(arg);
            })
            .join(" ");
          output += (output ? "\n" : "") + line;
        },
      };
      fn(mockConsole);
      return { output: output, error: null };
    } catch (err) {
      return { output: output, error: err.message };
    }
  }

  function runAllTests(question, code) {
    const tests = question.tests || [];
    return tests.map(function (test, index) {
      const result = runStudentCode(code, test.setup || "");
      const actual = normalizeOutput(result.output);
      const expected = normalizeOutput(test.expectedOutput);
      const passed = !result.error && actual === expected;
      return {
        index: index + 1,
        label: test.label || "Test " + (index + 1),
        expected: expected,
        actual: result.error ? "Error: " + result.error : actual || "(no output)",
        passed: passed,
        error: result.error,
      };
    });
  }

  function renderImage(src, title) {
    const safeSrc = escapeHtml(src);
    const safeTitle = escapeHtml(title || "course image");

    return (
      '<figure class="cw-image-frame">' +
      '<img src="' +
      safeSrc +
      '" alt="' +
      safeTitle +
      '" decoding="async" referrerpolicy="no-referrer" ' +
      'onerror="this.classList.add(\'cw-hidden\'); this.nextElementSibling.classList.remove(\'cw-hidden\');" />' +
      '<figcaption class="cw-image-fallback cw-hidden">' +
      "Course image could not load. " +
      '<a href="' +
      safeSrc +
      '" target="_blank" rel="noopener noreferrer">Open image</a>' +
      "</figcaption>" +
      "</figure>"
    );
  }

  function updateQuestionActions(step) {
    const question = getQuestionByStep(step);
    const submitted = isSubmitted(question.id);
    const isLastQuestion = state.stepIndex === steps.length - 2;

    if (els.btnCheck) {
      if (isCodeQuestion(question)) {
        els.btnCheck.classList.add("cw-hidden");
      } else {
        els.btnCheck.classList.remove("cw-hidden");
        els.btnCheck.textContent = submitted ? "Checked" : "Check Answer";
        els.btnCheck.disabled = submitted;
      }
    }

    els.btnNext.textContent = isLastQuestion ? "Finish" : "Next";
    els.btnNext.disabled = !submitted;
  }

  function renderWelcome() {
    els.progressWrap.classList.add("cw-hidden");
    els.actions.classList.remove("cw-hidden");
    els.btnBack.classList.remove("cw-hidden");
    els.btnBack.innerHTML = "&larr; All Sessions";
    els.btnBack.onclick = function () {
      window.location.href = config.backUrl;
    };
    if (els.btnCheck) els.btnCheck.classList.add("cw-hidden");
    els.btnNext.disabled = false;
    els.btnNext.textContent = "Start Course";

    els.stepContent.innerHTML =
      '<span class="cw-step-badge">Welcome</span>' +
      '<h2 class="cw-title">' +
      escapeHtml(course.title) +
      "</h2>" +
      '<p class="cw-welcome-lesson">' +
      escapeHtml(course.lesson || "") +
      "</p>" +
      '<p style="color:var(--text-muted);margin-bottom:1.5rem;line-height:1.7;">' +
      "Enter your details to begin. You will learn step by step, check your answers, and see your score in real time." +
      "</p>" +
      '<form class="cw-form" id="cw-welcome-form" novalidate>' +
      '<div class="cw-field">' +
      '<label for="cw-student-name">Full Name</label>' +
      '<input type="text" id="cw-student-name" name="name" placeholder="Enter your name" autocomplete="name" required />' +
      '<p class="cw-error" id="cw-name-error">Please enter your name.</p>' +
      "</div>" +
      '<div class="cw-field">' +
      '<label for="cw-student-phone">Phone Number</label>' +
      '<input type="tel" id="cw-student-phone" name="phone" placeholder="Enter your phone number" autocomplete="tel" required />' +
      '<p class="cw-error" id="cw-phone-error">Please enter your phone number.</p>' +
      "</div>" +
      "</form>";

    if (state.studentName) {
      document.getElementById("cw-student-name").value = state.studentName;
    }
    if (state.studentPhone) {
      document.getElementById("cw-student-phone").value = state.studentPhone;
    }
  }

  function renderExplain(step) {
    const section = course.sections[step.sectionIndex];
    const explain = section.explain;
    const sectionNum = step.sectionIndex + 1;

    els.progressWrap.classList.remove("cw-hidden");
    els.actions.classList.remove("cw-hidden");
    els.btnBack.classList.remove("cw-hidden");
    els.btnBack.textContent = "Back";
    els.btnBack.onclick = goBack;
    if (els.btnCheck) els.btnCheck.classList.add("cw-hidden");
    els.btnNext.disabled = false;
    els.btnNext.textContent = "Next";

    let html =
      '<span class="cw-step-badge">Section ' +
      sectionNum +
      " / " +
      course.sections.length +
      " · Explain</span>" +
      '<h2 class="cw-title">' +
      escapeHtml(section.title) +
      "</h2>" +
      '<div class="cw-explain">';

    explain.paragraphs.forEach(function (paragraph) {
      html += "<p>" + escapeHtml(paragraph) + "</p>";
    });

    if (explain.images && explain.images.length) {
      explain.images.forEach(function (src) {
        html += renderImage(src, section.title);
      });
    }

    if (explain.links && explain.links.length) {
      explain.links.forEach(function (link) {
        html +=
          '<p><a href="' +
          escapeHtml(link.url) +
          '" target="_blank" rel="noopener noreferrer">' +
          escapeHtml(link.label) +
          "</a></p>";
      });
    }

    if (explain.code) {
      html += '<pre class="cw-code">' + escapeHtml(explain.code) + "</pre>";
    }

    html += "</div>";
    els.stepContent.innerHTML = html;
    updateProgress();
  }

  function renderMcqFeedback(question, submission) {
    if (!submission || !submission.submitted) return "";

    const selected = submission.studentAnswer;
    const isCorrect = submission.correct;
    let html =
      '<div class="cw-feedback ' +
      (isCorrect ? "cw-feedback--correct" : "cw-feedback--wrong") +
      '">';

    if (isCorrect) {
      html += "<strong>Correct!</strong> Well done.";
    } else {
      html +=
        "<strong>Not quite.</strong> The correct answer is: " +
        escapeHtml(getOptionText(question, question.answer));
    }

    html += "</div>";
    return html;
  }

  function renderCodeFeedback(question, submission) {
    if (!submission || !submission.submitted) return "";

    let html =
      '<div class="cw-feedback ' +
      (submission.correct ? "cw-feedback--correct" : "cw-feedback--wrong") +
      '">';

    if (submission.correct) {
      html += "<strong>All tests passed!</strong> Great job.";
    } else {
      html += "<strong>Some tests failed.</strong> Review the results below.";
      if (question.solution) {
        html +=
          '<p class="cw-solution-label">Correct solution:</p>' +
          '<pre class="cw-code">' +
          escapeHtml(question.solution) +
          "</pre>";
      }
    }

    html += "</div>";

    if (submission.testResults && submission.testResults.length) {
      html += '<div class="cw-test-results"><table><thead><tr><th>Test</th><th>Expected</th><th>Your output</th><th>Result</th></tr></thead><tbody>';
      submission.testResults.forEach(function (test) {
        html +=
          "<tr><td>" +
          escapeHtml(test.label) +
          "</td><td>" +
          escapeHtml(test.expected || "(empty)") +
          "</td><td>" +
          escapeHtml(test.actual) +
          '</td><td class="' +
          (test.passed ? "cw-test-pass" : "cw-test-fail") +
          '">' +
          (test.passed ? "Pass" : "Fail") +
          "</td></tr>";
      });
      html += "</tbody></table></div>";
    }

    return html;
  }

  function renderQuestion(step) {
    const question = getQuestionByStep(step);
    if (isCodeQuestion(question)) {
      renderCodeQuestion(step);
    } else {
      renderMcqQuestion(step);
    }
  }

  function renderMcqQuestion(step) {
    const section = course.sections[step.sectionIndex];
    const question = getQuestionByStep(step);
    const selected = state.answers[question.id] || "";
    const submission = state.submissions[question.id];

    els.progressWrap.classList.remove("cw-hidden");
    els.actions.classList.remove("cw-hidden");
    els.btnBack.classList.remove("cw-hidden");
    els.btnBack.textContent = "Back";
    els.btnBack.onclick = goBack;
    updateQuestionActions(step);

    let optionsHtml = "";
    question.options.forEach(function (option) {
      const checked = selected === option.key ? " checked" : "";
      let optionClass = "";
      if (submission && submission.submitted) {
        if (option.key === question.answer) optionClass = " is-correct";
        else if (option.key === selected && !submission.correct) optionClass = " is-wrong";
      } else if (selected === option.key) {
        optionClass = " is-selected";
      }

      const disabled = submission && submission.submitted ? " disabled" : "";

      optionsHtml +=
        '<label class="cw-option' +
        optionClass +
        '" data-key="' +
        escapeHtml(option.key) +
        '">' +
        '<input type="radio" name="cw-question" value="' +
        escapeHtml(option.key) +
        '"' +
        checked +
        disabled +
        " />" +
        "<span><strong>" +
        escapeHtml(option.key) +
        ")</strong> " +
        escapeHtml(option.text) +
        "</span>" +
        "</label>";
    });

    els.stepContent.innerHTML =
      '<span class="cw-step-badge">Section ' +
      (step.sectionIndex + 1) +
      " / " +
      course.sections.length +
      " · Question " +
      question.id +
      "</span>" +
      '<h2 class="cw-title">' +
      escapeHtml(section.title) +
      "</h2>" +
      '<p class="cw-question-text">Question ' +
      question.id +
      ": " +
      escapeHtml(question.text) +
      "</p>" +
      '<div class="cw-options" id="cw-options">' +
      optionsHtml +
      "</div>" +
      renderMcqFeedback(question, submission) +
      '<p class="cw-error" id="cw-question-error">Please select an answer before checking.</p>';

    if (!submission || !submission.submitted) {
      document.querySelectorAll(".cw-option input").forEach(function (input) {
        input.addEventListener("change", function () {
          state.answers[question.id] = input.value;
          document.querySelectorAll(".cw-option").forEach(function (label) {
            label.classList.toggle(
              "is-selected",
              label.querySelector("input").value === input.value
            );
            label.classList.remove("is-correct", "is-wrong");
          });
          document.getElementById("cw-question-error").classList.remove("is-visible");
        });
      });
    }

    updateProgress();
  }

  function renderCodeQuestion(step) {
    const section = course.sections[step.sectionIndex];
    const question = getQuestionByStep(step);
    const code =
      state.codeDrafts[question.id] != null
        ? state.codeDrafts[question.id]
        : question.starterCode || "";
    const submission = state.submissions[question.id];
    const submitted = submission && submission.submitted;

    els.progressWrap.classList.remove("cw-hidden");
    els.actions.classList.remove("cw-hidden");
    els.btnBack.classList.remove("cw-hidden");
    els.btnBack.textContent = "Back";
    els.btnBack.onclick = goBack;
    updateQuestionActions(step);

    els.stepContent.innerHTML =
      '<span class="cw-step-badge">Section ' +
      (step.sectionIndex + 1) +
      " / " +
      course.sections.length +
      " · Coding Question " +
      question.id +
      "</span>" +
      '<h2 class="cw-title">' +
      escapeHtml(section.title) +
      "</h2>" +
      '<p class="cw-question-text">Question ' +
      question.id +
      ": " +
      escapeHtml(question.text) +
      "</p>" +
      '<div class="cw-code-workspace">' +
      '<label class="cw-code-editor-label" for="cw-code-input">Your code</label>' +
      '<textarea class="cw-code-editor" id="cw-code-input" spellcheck="false"' +
      (submitted ? " readonly" : "") +
      ">" +
      escapeHtml(code) +
      "</textarea>" +
      '<div class="cw-code-toolbar">' +
      '<button type="button" class="cw-btn cw-btn--secondary" id="cw-btn-run"' +
      (submitted ? " disabled" : "") +
      ">Run</button>" +
      '<button type="button" class="cw-btn cw-btn--primary" id="cw-btn-submit-code"' +
      (submitted ? " disabled" : "") +
      ">Submit</button>" +
      "</div>" +
      '<div class="cw-code-output-wrap">' +
      '<label class="cw-code-editor-label">Output</label>' +
      '<pre class="cw-code-output" id="cw-code-output">' +
      (submission && submission.runOutput
        ? escapeHtml(submission.runOutput)
        : "Run your code to see output here…") +
      "</pre>" +
      "</div>" +
      "</div>" +
      (submission ? renderCodeFeedback(question, submission) : "") +
      '<p class="cw-error" id="cw-question-error">Write your code and click Submit before continuing.</p>';

    if (!submitted) {
      const codeInput = document.getElementById("cw-code-input");
      codeInput.addEventListener("input", function () {
        state.codeDrafts[question.id] = codeInput.value;
      });

      document.getElementById("cw-btn-run").addEventListener("click", function () {
        const currentCode = codeInput.value;
        state.codeDrafts[question.id] = currentCode;
        const firstTest = (question.tests && question.tests[0]) || { setup: "" };
        const result = runStudentCode(currentCode, firstTest.setup || "");
        const outputEl = document.getElementById("cw-code-output");
        if (result.error) {
          outputEl.textContent = "Error: " + result.error;
        } else {
          outputEl.textContent = result.output || "(no output)";
        }
      });

      document.getElementById("cw-btn-submit-code").addEventListener("click", function () {
        submitCodeQuestion(question);
      });
    }

    updateProgress();
  }

  function submitCodeQuestion(question) {
    const codeInput = document.getElementById("cw-code-input");
    const code = codeInput ? codeInput.value : state.codeDrafts[question.id] || "";
    state.codeDrafts[question.id] = code;

    const testResults = runAllTests(question, code);
    const allPassed = testResults.length > 0 && testResults.every(function (t) {
      return t.passed;
    });

    state.submissions[question.id] = {
      submitted: true,
      correct: allPassed,
      code: code,
      testResults: testResults,
    };

    const step = steps[state.stepIndex];
    renderCodeQuestion(step);
    els.btnNext.disabled = false;
    updateProgress();
  }

  function checkMcqAnswer() {
    const step = steps[state.stepIndex];
    const question = getQuestionByStep(step);
    const error = document.getElementById("cw-question-error");

    if (!state.answers[question.id]) {
      error.classList.add("is-visible");
      return;
    }

    error.classList.remove("is-visible");

    const selected = state.answers[question.id];
    const correct = selected === question.answer;

    state.submissions[question.id] = {
      submitted: true,
      correct: correct,
      studentAnswer: selected,
    };

    renderMcqQuestion(step);
    els.btnNext.disabled = false;
    if (els.btnCheck) {
      els.btnCheck.disabled = true;
      els.btnCheck.textContent = "Checked";
    }
    updateProgress();
  }

  function renderResults() {
    const total = getAllQuestions().length;
    const correct = getCorrectCount();
    const percentage = getScorePercentage();
    const grade = getGrade(percentage);

    els.progressWrap.classList.add("cw-hidden");
    els.actions.classList.add("cw-hidden");

    els.stepContent.innerHTML =
      '<div class="cw-results">' +
      '<span class="cw-step-badge">Session Complete</span>' +
      '<div class="cw-score-circle">' +
      '<span class="cw-score-circle__value">' +
      percentage +
      "%</span>" +
      '<span class="cw-score-circle__label">Score</span>' +
      "</div>" +
      '<p class="cw-grade">' +
      escapeHtml(grade) +
      "</p>" +
      '<p class="cw-student-info"><strong>' +
      escapeHtml(state.studentName) +
      "</strong><br />" +
      escapeHtml(state.studentPhone) +
      "</p>" +
      '<div class="cw-summary-grid">' +
      '<div class="cw-summary-item"><div class="cw-summary-item__value">' +
      correct +
      '</div><div class="cw-summary-item__label">Correct</div></div>' +
      '<div class="cw-summary-item"><div class="cw-summary-item__value">' +
      (total - correct) +
      '</div><div class="cw-summary-item__label">Wrong</div></div>' +
      '<div class="cw-summary-item"><div class="cw-summary-item__value">' +
      total +
      '</div><div class="cw-summary-item__label">Total Questions</div></div>' +
      "</div>" +
      '<div class="cw-results-actions">' +
      '<button type="button" class="cw-btn cw-btn--primary" id="cw-download-pdf">Download PDF Report</button>' +
      '<a href="' +
      escapeHtml(config.backUrl) +
      '" class="cw-btn cw-btn--secondary">All Sessions</a>' +
      '<button type="button" class="cw-btn cw-btn--secondary" id="cw-restart">Start Again</button>' +
      "</div>" +
      "</div>";

    document.getElementById("cw-download-pdf").addEventListener("click", downloadPdf);
    document.getElementById("cw-restart").addEventListener("click", restartCourse);
  }

  function updateProgress() {
    const totalSteps = steps.length;
    const current = state.stepIndex + 1;
    const progress = Math.round((current / totalSteps) * 100);

    els.progressLabel.textContent = "Step " + current + " of " + totalSteps;
    els.progressFill.style.width = progress + "%";

    const submitted = getSubmittedCount();
    const totalQuestions = getAllQuestions().length;
    const correct = getCorrectCount();
    const score = getScorePercentage();
    els.progressScore.textContent =
      "Answered: " +
      submitted +
      "/" +
      totalQuestions +
      " · Correct: " +
      correct +
      " · Score: " +
      score +
      "%";
  }

  function renderStep() {
    const step = steps[state.stepIndex];

    if (step.type === "welcome") renderWelcome();
    else if (step.type === "explain") renderExplain(step);
    else if (step.type === "question") renderQuestion(step);
    else if (step.type === "results") renderResults();
  }

  function validateWelcome() {
    const nameInput = document.getElementById("cw-student-name");
    const phoneInput = document.getElementById("cw-student-phone");
    const nameError = document.getElementById("cw-name-error");
    const phoneError = document.getElementById("cw-phone-error");

    let valid = true;

    if (!nameInput.value.trim()) {
      nameInput.classList.add("is-invalid");
      nameError.classList.add("is-visible");
      valid = false;
    } else {
      nameInput.classList.remove("is-invalid");
      nameError.classList.remove("is-visible");
    }

    if (!phoneInput.value.trim()) {
      phoneInput.classList.add("is-invalid");
      phoneError.classList.add("is-visible");
      valid = false;
    } else {
      phoneInput.classList.remove("is-invalid");
      phoneError.classList.remove("is-visible");
    }

    if (valid) {
      state.studentName = nameInput.value.trim();
      state.studentPhone = phoneInput.value.trim();
      state.started = true;
    }

    return valid;
  }

  function goNext() {
    const step = steps[state.stepIndex];

    if (step.type === "welcome") {
      if (!validateWelcome()) return;
    } else if (step.type === "question") {
      const question = getQuestionByStep(step);
      if (!isSubmitted(question.id)) {
        const error = document.getElementById("cw-question-error");
        if (error) error.classList.add("is-visible");
        return;
      }
    }

    if (state.stepIndex < steps.length - 1) {
      state.stepIndex += 1;
      renderStep();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function goBack() {
    if (state.stepIndex > 0) {
      state.stepIndex -= 1;
      renderStep();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function restartCourse() {
    state.stepIndex = 0;
    state.studentName = "";
    state.studentPhone = "";
    state.answers = {};
    state.codeDrafts = {};
    state.submissions = {};
    state.started = false;
    renderStep();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function getOptionText(question, key) {
    if (!key) return "Not answered";
    const option = question.options.find(function (opt) {
      return opt.key === key;
    });
    return option ? option.key + ") " + option.text : "Not answered";
  }

  function downloadPdf() {
    const jsPdfNamespace = window.jspdf || window.jsPDF;
    const jsPDF = jsPdfNamespace && (jsPdfNamespace.jsPDF || jsPdfNamespace);

    if (!jsPDF) {
      alert("PDF library is still loading. Please wait a moment and try again.");
      return;
    }

    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const margin = 48;
    const pageWidth = doc.internal.pageSize.getWidth();
    const maxWidth = pageWidth - margin * 2;
    let y = margin;

    const total = getAllQuestions().length;
    const correct = getCorrectCount();
    const percentage = getScorePercentage();
    const grade = getGrade(percentage);
    const questions = getAllQuestions();

    function addLine(text, fontSize, fontStyle) {
      doc.setFont("helvetica", fontStyle || "normal");
      doc.setFontSize(fontSize || 11);
      const lines = doc.splitTextToSize(text, maxWidth);

      lines.forEach(function (line) {
        if (y > doc.internal.pageSize.getHeight() - margin) {
          doc.addPage();
          y = margin;
        }
        doc.text(line, margin, y);
        y += fontSize ? fontSize + 4 : 15;
      });
    }

    function addSpace(space) {
      y += space;
    }

    doc.setTextColor(19, 100, 162);
    addLine("Mokhtareon - " + course.title + " Report", 18, "bold");
    addSpace(8);
    doc.setTextColor(46, 60, 70);

    addLine("Student Name: " + state.studentName, 12, "bold");
    addLine("Phone Number: " + state.studentPhone, 12);
    addLine("Course: " + course.title, 11);
    if (course.lesson) addLine("Lesson: " + course.lesson, 11);
    addLine("Date: " + new Date().toLocaleString("en-GB"), 11);
    addSpace(10);

    addLine("Final Score: " + correct + " / " + total + " (" + percentage + "%)", 13, "bold");
    addLine("Grade: " + grade, 13, "bold");
    addSpace(16);

    addLine("Questions and Answers", 14, "bold");
    addSpace(8);

    questions.forEach(function (question) {
      const submission = state.submissions[question.id];
      const isCorrect = submission && submission.correct;

      addLine("Question " + question.id + ": " + question.text, 11, "bold");

      if (isCodeQuestion(question)) {
        addLine("Your code:", 10, "bold");
        addLine(submission && submission.code ? submission.code : "Not submitted", 9);
        addLine("Result: " + (isCorrect ? "Correct" : "Wrong"), 10, isCorrect ? "bold" : "normal");
        if (!isCorrect && question.solution) {
          addLine("Correct solution:", 10, "bold");
          addLine(question.solution, 9);
        }
      } else {
        const studentAnswer = submission && submission.studentAnswer;
        addLine("Your answer: " + getOptionText(question, studentAnswer), 10);
        addLine("Correct answer: " + getOptionText(question, question.answer), 10);
        addLine("Result: " + (isCorrect ? "Correct" : "Wrong"), 10, isCorrect ? "bold" : "normal");
      }

      addSpace(10);
    });

    const safeName = state.studentName.replace(/[^a-z0-9_-]+/gi, "_").toLowerCase();
    doc.save(config.pdfPrefix + "-" + safeName + ".pdf");
  }

  els.btnNext.addEventListener("click", goNext);
  els.btnBack.addEventListener("click", goBack);
  if (els.btnCheck) {
    els.btnCheck.addEventListener("click", checkMcqAnswer);
  }

  renderStep();
})();
