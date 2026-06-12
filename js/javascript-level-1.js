(function () {
  "use strict";

  const course = window.JAVASCRIPT_LEVEL_1_COURSE;
  if (!course) return;

  const state = {
    stepIndex: 0,
    studentName: "",
    studentPhone: "",
    answers: {},
    started: false,
  };

  const els = {
    progressWrap: document.getElementById("cw-progress-wrap"),
    progressLabel: document.getElementById("cw-progress-label"),
    progressScore: document.getElementById("cw-progress-score"),
    progressFill: document.getElementById("cw-progress-fill"),
    stepContent: document.getElementById("cw-step-content"),
    btnBack: document.getElementById("cw-btn-back"),
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

  function getAnsweredCount() {
    return Object.keys(state.answers).length;
  }

  function getCorrectCount() {
    const questions = getAllQuestions();
    return questions.filter(function (q) {
      return state.answers[q.id] === q.answer;
    }).length;
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

  function renderWelcome() {
    els.progressWrap.classList.add("cw-hidden");
    els.actions.classList.remove("cw-hidden");
    els.btnBack.classList.add("cw-hidden");
    els.btnNext.textContent = "Start Course";

    els.stepContent.innerHTML =
      '<span class="cw-step-badge">Welcome</span>' +
      '<h2 class="cw-title">JavaScript Level 1 Course</h2>' +
      '<p style="color:var(--text-muted);margin-bottom:1.5rem;line-height:1.7;">' +
      "Enter your details to begin the interactive course. You will learn step by step and answer questions at the end of each section." +
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

  function renderQuestion(step) {
    const section = course.sections[step.sectionIndex];
    const question = getQuestionByStep(step);
    const selected = state.answers[question.id] || "";

    els.progressWrap.classList.remove("cw-hidden");
    els.actions.classList.remove("cw-hidden");
    els.btnBack.classList.remove("cw-hidden");
    els.btnNext.textContent =
      state.stepIndex === steps.length - 2 ? "Finish" : "Next";

    let optionsHtml = "";
    question.options.forEach(function (option) {
      const checked = selected === option.key ? " checked" : "";
      const selectedClass = selected === option.key ? " is-selected" : "";
      optionsHtml +=
        '<label class="cw-option' +
        selectedClass +
        '" data-key="' +
        escapeHtml(option.key) +
        '">' +
        '<input type="radio" name="cw-question" value="' +
        escapeHtml(option.key) +
        '"' +
        checked +
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
      '<p class="cw-error" id="cw-question-error">Please select an answer before continuing.</p>';

    document.querySelectorAll(".cw-option input").forEach(function (input) {
      input.addEventListener("change", function () {
        state.answers[question.id] = input.value;
        document.querySelectorAll(".cw-option").forEach(function (label) {
          label.classList.toggle(
            "is-selected",
            label.querySelector("input").value === input.value
          );
        });
        document.getElementById("cw-question-error").classList.remove("is-visible");
        updateProgress();
      });
    });

    updateProgress();
  }

  function renderResults() {
    const total = getAllQuestions().length;
    const correct = getCorrectCount();
    const percentage = Math.round((correct / total) * 100);
    const grade = getGrade(percentage);

    els.progressWrap.classList.add("cw-hidden");
    els.actions.classList.add("cw-hidden");

    els.stepContent.innerHTML =
      '<div class="cw-results">' +
      '<span class="cw-step-badge">Course Complete</span>' +
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
      "</div><div class=\"cw-summary-item__label\">Correct</div></div>" +
      '<div class="cw-summary-item"><div class="cw-summary-item__value">' +
      (total - correct) +
      "</div><div class=\"cw-summary-item__label\">Wrong</div></div>" +
      '<div class="cw-summary-item"><div class="cw-summary-item__value">' +
      total +
      "</div><div class=\"cw-summary-item__label\">Total Questions</div></div>" +
      "</div>" +
      '<div class="cw-results-actions">' +
      '<button type="button" class="cw-btn cw-btn--primary" id="cw-download-pdf">Download PDF Report</button>' +
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

    const answered = getAnsweredCount();
    const totalQuestions = getAllQuestions().length;
    const correct = getCorrectCount();
    els.progressScore.textContent =
      "Answered: " + answered + "/" + totalQuestions + " · Correct so far: " + correct;
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

  function validateQuestionStep() {
    const step = steps[state.stepIndex];
    const question = getQuestionByStep(step);
    const error = document.getElementById("cw-question-error");

    if (!state.answers[question.id]) {
      error.classList.add("is-visible");
      return false;
    }

    error.classList.remove("is-visible");
    return true;
  }

  function goNext() {
    const step = steps[state.stepIndex];

    if (step.type === "welcome") {
      if (!validateWelcome()) return;
    } else if (step.type === "question") {
      if (!validateQuestionStep()) return;
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
    state.started = false;
    renderStep();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function getOptionText(question, key) {
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
    const percentage = Math.round((correct / total) * 100);
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
    addLine("Mokhtareon - JavaScript Level 1 Course Report", 18, "bold");
    addSpace(8);
    doc.setTextColor(46, 60, 70);

    addLine("Student Name: " + state.studentName, 12, "bold");
    addLine("Phone Number: " + state.studentPhone, 12);
    addLine("Course: " + course.title, 11);
    addLine("Date: " + new Date().toLocaleString("en-GB"), 11);
    addSpace(10);

    addLine("Final Score: " + correct + " / " + total + " (" + percentage + "%)", 13, "bold");
    addLine("Grade: " + grade, 13, "bold");
    addSpace(16);

    addLine("Questions and Answers", 14, "bold");
    addSpace(8);

    questions.forEach(function (question, index) {
      const studentAnswer = state.answers[question.id];
      const isCorrect = studentAnswer === question.answer;

      addLine("Question " + question.id + ": " + question.text, 11, "bold");
      addLine("Your answer: " + getOptionText(question, studentAnswer), 10);
      addLine("Correct answer: " + getOptionText(question, question.answer), 10);
      addLine("Result: " + (isCorrect ? "Correct" : "Wrong"), 10, isCorrect ? "bold" : "normal");
      addSpace(10);
    });

    const safeName = state.studentName.replace(/[^a-z0-9_-]+/gi, "_").toLowerCase();
    doc.save("javascript-level-1-" + safeName + ".pdf");
  }

  els.btnNext.addEventListener("click", goNext);
  els.btnBack.addEventListener("click", goBack);

  renderStep();
})();
