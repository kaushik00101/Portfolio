// ---- Video Setup ----
const video = document.getElementById('bgVideo');
video.playbackRate = 0.5;

// ---- Mobile Navigation ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('nav-btns');

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navLinks.classList.toggle('open', !isOpen);
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation');
    navLinks.classList.remove('open');
  });
});

// ---- Typewriter for Name ----
const nameText = "Kaushik Kumar Mohanta";
const nameTarget = document.getElementById('Kaushik');
let nameIndex = 0;
let nameTimer = null;

function type() {
  if (nameIndex < nameText.length) {
    nameTarget.textContent += nameText[nameIndex];
    nameIndex++;
    nameTimer = setTimeout(type, 100);
  }
}

function restartType() {
  clearTimeout(nameTimer);
  nameTarget.textContent = '';
  nameIndex = 0;
  type();
}

// ---- Go Up Button ----
const goUp = document.getElementById('goUp');
goUp.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  restartType();
  restartEditor();
});

// ---- Project Card Navigation ----
document.querySelectorAll('.project-card').forEach((card) => {
  const siteUrl = card.dataset.siteUrl;

  const openSite = () => window.location.assign(siteUrl);

  card.addEventListener('click', (event) => {
    if (!event.target.closest('a')) openSite();
  });

  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openSite();
    }
  });
});

// ---- Editor Lines ----
const editorLines = [
  { ln: '1',  text: '# Welcome to my Portfolio' },
  { ln: '2',  text: '' },
  { ln: '3',  text: "import Developer from universe" },
  { ln: '4',  text: '' },
  { ln: '5',  text: 'Portfolio = {'},
  { ln: '6',  text: '      name : "Kaushik Kumar Mohanta",' },
  { ln: '7',  text: '      status : "BCA Student",' },
  { ln: '8',  text: '      passion : "Software Development"' },
  { ln: '9',  text: '  }' },
];

const CHAR_DELAY = 45;
const LINE_PAUSE = 180;

// ---- Syntax Highlighter ----
function highlight(str) {
  if (str.trim() === '') return '';

  if (str.trimStart().startsWith('//')) {
    return '<span class="cm">' + str + '</span>';
  }

  if (str.trimStart().startsWith('import')) {
    return str
      .replace(/\b(import|from)\b/g, '<span class="kw">$1</span>')
      .replace(/\{([^}]*)\}/, '{ <span class="fn">$1</span>}')
      .replace(/'([^']*)'/g, "<span class='str'>'$1'</span>");
  }

  if (str.includes('= () =>')) {
    return str
      .replace(/\b(const)\b/, '<span class="kw">const</span>')
      .replace(/([A-Z][a-zA-Z0-9]+)/, '<span class="fn">$1</span>')
      .replace(/=>/, '<span class="op">=></span>')
      .replace(/\{/, '<span class="op">{</span>');
  }

  if (str.trim() === 'return (') {
    return '  <span class="kw">return</span> <span class="op">(</span>';
  }

  if (str.trim().startsWith('<') && /^<[A-Z]/.test(str.trim())) {
    return str.replace(
      /<([A-Z][a-zA-Z0-9]*)/,
      '<span class="tag">&lt;$1</span>'
    );
  }

  if (/^\s+[a-z][a-zA-Z0-9]*="/.test(str)) {
    return str.replace(
      /([a-z][a-zA-Z0-9]*)="([^"]*)"/,
      '<span class="attr">$1</span>=<span class="str">"$2"</span>'
    );
  }

  if (str.trim() === '/>') {
    return '    <span class="tag">/></span>';
  }

  if (str.trim() === ');') {
    return '  <span class="op">);</span>';
  }

  if (str.trim() === '};') {
    return '<span class="op">};</span>';
  }

  return str;
}

// ---- Build Editor DOM ----
const cursorEl = document.createElement('span');
cursorEl.className = 'cursor';

const editorArea = document.getElementById('codeArea');

editorLines.forEach((l, idx) => {
  const row = document.createElement('div');
  row.className = 'line';
  row.id = 'eline-' + idx;

  const ln = document.createElement('span');
  ln.className = 'ln';
  ln.textContent = l.ln;

  const code = document.createElement('span');
  code.className = 'code';
  code.id = 'ecode-' + idx;

  row.appendChild(ln);
  row.appendChild(code);
  editorArea.appendChild(row);
});

// ---- Type Single Line ----
let editorTimer = null;

function typeLine(idx, done) {
  const text = editorLines[idx].text;
  const codeSpan = document.getElementById('ecode-' + idx);
  let pos = 0;

  codeSpan.innerHTML = '';
  codeSpan.appendChild(cursorEl);

  if (text === '') {
    editorTimer = setTimeout(done, LINE_PAUSE);
    return;
  }

  function next() {
    if (pos <= text.length) {
      if (pos === text.length) {
        codeSpan.innerHTML = highlight(text);
      } else {
        codeSpan.textContent = text.slice(0, pos);
      }
      codeSpan.appendChild(cursorEl);
      pos++;
      editorTimer = setTimeout(next, CHAR_DELAY);
    } else {
      editorTimer = setTimeout(done, LINE_PAUSE);
    }
  }

  next();
}

// ---- Chain All Lines ----
function typeAll(idx) {
  if (idx >= editorLines.length) {
    const last = document.getElementById('ecode-' + (editorLines.length - 1));
    last.appendChild(cursorEl);
    return;
  }
  typeLine(idx, () => typeAll(idx + 1));
}

// ---- Restart Editor ----
function restartEditor() {
  clearTimeout(editorTimer);
  editorLines.forEach((_, idx) => {
    const codeSpan = document.getElementById('ecode-' + idx);
    if (codeSpan) codeSpan.innerHTML = '';
  });
  setTimeout(() => typeAll(0), 300);
}

// ---- Skill Bar Animation on Scroll ----
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.getAttribute('data-width');
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-editor-wrap').forEach(el => skillObserver.observe(el));

// ---- Single Load Event ----
window.addEventListener('load', () => {
  type();

  const editor = document.getElementById('editor');
  if (!editor) return;

  setTimeout(() => {
    editor.classList.add('visible');
    setTimeout(() => typeAll(0), 500);
  }, 600);
});