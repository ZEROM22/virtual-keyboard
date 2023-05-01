/* eslint-disable no-param-reassign */
const keyboardLayouts = {
  en: [
    [
      { lowercase: '`', uppercase: '~', class: 'Backquote' },
      { lowercase: '1', uppercase: '!', class: 'Digit1' },
      { lowercase: '2', uppercase: '@', class: 'Digit2' },
      { lowercase: '3', uppercase: '#', class: 'Digit3' },
      { lowercase: '4', uppercase: '$', class: 'Digit4' },
      { lowercase: '5', uppercase: '%', class: 'Digit5' },
      { lowercase: '6', uppercase: '^', class: 'Digit6' },
      { lowercase: '7', uppercase: '&', class: 'Digit7' },
      { lowercase: '8', uppercase: '*', class: 'Digit8' },
      { lowercase: '9', uppercase: '(', class: 'Digit9' },
      { lowercase: '0', uppercase: ')', class: 'Digit0' },
      { lowercase: '-', uppercase: '_', class: 'Minus' },
      { lowercase: '=', uppercase: '+', class: 'Equal' },
      { lowercase: 'Backspace', uppercase: 'Backspace', class: 'Backspace' },
    ],
    [
      { lowercase: 'Tab', uppercase: 'Tab', class: 'Tab' },
      { lowercase: 'q', uppercase: 'Q', class: 'KeyQ' },
      { lowercase: 'w', uppercase: 'W', class: 'KeyW' },
      { lowercase: 'e', uppercase: 'E', class: 'KeyE' },
      { lowercase: 'r', uppercase: 'R', class: 'KeyR' },
      { lowercase: 't', uppercase: 'T', class: 'KeyT' },
      { lowercase: 'y', uppercase: 'Y', class: 'KeyY' },
      { lowercase: 'u', uppercase: 'U', class: 'KeyU' },
      { lowercase: 'i', uppercase: 'I', class: 'KeyI' },
      { lowercase: 'o', uppercase: 'O', class: 'KeyO' },
      { lowercase: 'p', uppercase: 'P', class: 'KeyP' },
      { lowercase: '[', uppercase: '{', class: 'BracketLeft' },
      { lowercase: ']', uppercase: '}', class: 'BracketRight' },
      { lowercase: '\\', uppercase: '|', class: 'Backslash' },
      { lowercase: 'Delete', uppercase: 'Delete', class: 'Delete' },
    ],
    [
      { lowercase: 'Caps\nLock', uppercase: 'Caps\nLock', class: 'CapsLock' },
      { lowercase: 'a', uppercase: 'A', class: 'KeyA' },
      { lowercase: 's', uppercase: 'S', class: 'KeyS' },
      { lowercase: 'd', uppercase: 'D', class: 'KeyD' },
      { lowercase: 'f', uppercase: 'F', class: 'KeyF' },
      { lowercase: 'g', uppercase: 'G', class: 'KeyG' },
      { lowercase: 'h', uppercase: 'H', class: 'KeyH' },
      { lowercase: 'j', uppercase: 'J', class: 'KeyJ' },
      { lowercase: 'k', uppercase: 'K', class: 'KeyK' },
      { lowercase: 'l', uppercase: 'L', class: 'KeyL' },
      { lowercase: ';', uppercase: ':', class: 'Semicolon' },
      { lowercase: "'", uppercase: '"', class: 'Quote' },
      { lowercase: 'Enter', uppercase: 'Enter', class: 'Enter' },
    ],
    [
      { lowercase: 'Shift', uppercase: 'Shift', class: 'ShiftLeft' },
      { lowercase: 'z', uppercase: 'Z', class: 'KeyZ' },
      { lowercase: 'x', uppercase: 'X', class: 'KeyX' },
      { lowercase: 'c', uppercase: 'C', class: 'KeyC' },
      { lowercase: 'v', uppercase: 'V', class: 'KeyV' },
      { lowercase: 'b', uppercase: 'B', class: 'KeyB' },
      { lowercase: 'n', uppercase: 'N', class: 'KeyN' },
      { lowercase: 'm', uppercase: 'M', class: 'KeyM' },
      { lowercase: ',', uppercase: '<', class: 'Comma' },
      { lowercase: '.', uppercase: '>', class: 'Period' },
      { lowercase: '/', uppercase: '?', class: 'Slash' },
      { lowercase: '▲', uppercase: '▲', class: 'ArrowUp' },
      { lowercase: 'Shift', uppercase: 'Shift', class: 'ShiftRight' },
    ],
    [
      { lowercase: 'Ctrl', uppercase: 'Ctrl', class: 'ControlLeft' },
      { lowercase: 'Win', uppercase: 'Win', class: 'OSLeft' },
      { lowercase: 'Alt', uppercase: 'Alt', class: 'AltLeft' },
      { lowercase: ' ', uppercase: ' ', class: 'Space' },
      { lowercase: 'Alt', uppercase: 'Alt', class: 'AltRight' },
      { lowercase: '◄', uppercase: '◄', class: 'ArrowLeft' },
      { lowercase: '▼', uppercase: '▼', class: 'ArrowDown' },
      { lowercase: '►', uppercase: '►', class: 'ArrowRight' },
      { lowercase: 'Ctrl', uppercase: 'Ctrl', class: 'ControlRight' },
    ],
  ],
  ru: [
    [
      { lowercase: 'ё', uppercase: 'Ё', class: 'Backquote' },
      { lowercase: '1', uppercase: '!', class: 'Digit1' },
      { lowercase: '2', uppercase: '"', class: 'Digit2' },
      { lowercase: '3', uppercase: '№', class: 'Digit3' },
      { lowercase: '4', uppercase: ';', class: 'Digit4' },
      { lowercase: '5', uppercase: '%', class: 'Digit5' },
      { lowercase: '6', uppercase: ':', class: 'Digit6' },
      { lowercase: '7', uppercase: '?', class: 'Digit7' },
      { lowercase: '8', uppercase: '*', class: 'Digit8' },
      { lowercase: '9', uppercase: '(', class: 'Digit9' },
      { lowercase: '0', uppercase: ')', class: 'Digit0' },
      { lowercase: '-', uppercase: '_', class: 'Minus' },
      { lowercase: '=', uppercase: '+', class: 'Equal' },
      { lowercase: 'Backspace', uppercase: 'Backspace', class: 'Backspace' },
    ],
    [
      { lowercase: 'Tab', uppercase: 'Tab', class: 'Tab' },
      { lowercase: 'й', uppercase: 'Й', class: 'KeyQ' },
      { lowercase: 'ц', uppercase: 'Ц', class: 'KeyW' },
      { lowercase: 'у', uppercase: 'У', class: 'KeyE' },
      { lowercase: 'к', uppercase: 'К', class: 'KeyR' },
      { lowercase: 'е', uppercase: 'Е', class: 'KeyT' },
      { lowercase: 'н', uppercase: 'Н', class: 'KeyY' },
      { lowercase: 'г', uppercase: 'Г', class: 'KeyU' },
      { lowercase: 'ш', uppercase: 'Ш', class: 'KeyI' },
      { lowercase: 'щ', uppercase: 'Щ', class: 'KeyO' },
      { lowercase: 'з', uppercase: 'З', class: 'KeyP' },
      { lowercase: 'х', uppercase: 'Х', class: 'BracketLeft' },
      { lowercase: 'ъ', uppercase: 'Ъ', class: 'BracketRight' },
      { lowercase: '\\', uppercase: '/', class: 'Backslash' },
      { lowercase: 'Delete', uppercase: 'Delete', class: 'Delete' },
    ],
    [
      { lowercase: 'Caps\nLock', uppercase: 'Caps\nLock', class: 'CapsLock' },
      { lowercase: 'ф', uppercase: 'Ф', class: 'KeyA' },
      { lowercase: 'ы', uppercase: 'Ы', class: 'KeyS' },
      { lowercase: 'в', uppercase: 'В', class: 'KeyD' },
      { lowercase: 'а', uppercase: 'А', class: 'KeyF' },
      { lowercase: 'п', uppercase: 'П', class: 'KeyG' },
      { lowercase: 'р', uppercase: 'Р', class: 'KeyH' },
      { lowercase: 'о', uppercase: 'О', class: 'KeyJ' },
      { lowercase: 'л', uppercase: 'Л', class: 'KeyK' },
      { lowercase: 'д', uppercase: 'Д', class: 'KeyL' },
      { lowercase: 'ж', uppercase: 'Ж', class: 'Semicolon' },
      { lowercase: 'э', uppercase: 'Э', class: 'Quote' },
      { lowercase: 'Enter', uppercase: 'Enter', class: 'Enter' },
    ],
    [
      { lowercase: 'Shift', uppercase: 'Shift', class: 'ShiftLeft' },
      { lowercase: 'я', uppercase: 'Я', class: 'KeyZ' },
      { lowercase: 'ч', uppercase: 'Ч', class: 'KeyX' },
      { lowercase: 'с', uppercase: 'С', class: 'KeyC' },
      { lowercase: 'м', uppercase: 'М', class: 'KeyV' },
      { lowercase: 'и', uppercase: 'И', class: 'KeyB' },
      { lowercase: 'т', uppercase: 'Т', class: 'KeyN' },
      { lowercase: 'ь', uppercase: 'Ь', class: 'KeyM' },
      { lowercase: 'б', uppercase: 'Б', class: 'Comma' },
      { lowercase: 'ю', uppercase: 'Ю', class: 'Period' },
      { lowercase: '.', uppercase: ',', class: 'Slash' },
      { lowercase: '▲', uppercase: '▲', class: 'ArrowUp' },
      { lowercase: 'Shift', uppercase: 'Shift', class: 'ShiftRight' },
    ],
    [
      { lowercase: 'Ctrl', uppercase: 'Ctrl', class: 'ControlLeft' },
      { lowercase: 'Win', uppercase: 'Win', class: 'OSLeft' },
      { lowercase: 'Alt', uppercase: 'Alt', class: 'AltLeft' },
      { lowercase: ' ', uppercase: ' ', class: 'Space' },
      { lowercase: 'Alt', uppercase: 'Alt', class: 'AltRight' },
      { lowercase: '◄', uppercase: '◄', class: 'ArrowLeft' },
      { lowercase: '▼', uppercase: '▼', class: 'ArrowDown' },
      { lowercase: '►', uppercase: '►', class: 'ArrowRight' },
      { lowercase: 'Ctrl', uppercase: 'Ctrl', class: 'ControlRight' },
    ],
  ],
};

// Текущая раскладка
let currentLayout = localStorage.getItem('language')
  ? localStorage.getItem('language')
  : 'en';
// Текущий регистр
let caseLayout = 'lowercase';
// Текст в textarea
let textareaText = '';

// Создание div
const { body } = document;

// container
const container = document.createElement('div');
container.className = 'container';
body.appendChild(container);

// title
const header = document.createElement('header');
header.className = 'header';
const headerTitle = document.createElement('h1');
headerTitle.className = 'header__title';
headerTitle.innerText = 'RSS Виртуальная клавиатура';
header.appendChild(headerTitle);
container.appendChild(header);

// textarea
const textarea = document.createElement('textarea');
textarea.className = 'textarea';
container.appendChild(textarea);

// keyboard
const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
container.appendChild(keyboard);

// keyboard__row and keyboard__key
keyboardLayouts[currentLayout].forEach((row) => {
  const keyboardRow = document.createElement('div');
  keyboardRow.className = 'keyboard__row';

  row.forEach((key) => {
    const keyboardKey = document.createElement('div');
    keyboardKey.className = `keyboard__key ${key.class}`;
    keyboardKey.id = key.class;
    keyboardKey.innerText = key[caseLayout];
    keyboardRow.appendChild(keyboardKey);
  });

  keyboard.appendChild(keyboardRow);
});

textarea.style.width = `${keyboard.offsetWidth - 25}px`;
textarea.style.height = '256px';

// other
const description = document.createElement('p');
description.className = 'info';
description.innerHTML = 'Клавиатура создана в операционной системе Windows<br>Для переключения языка комбинация:  Ctrl + Alt';
container.appendChild(description);

// Обновление клавиатуры
let isAltPressed = false;
let isCtrlPressed = false;
let isShiftPressed = false;
let isCapsLockPressed = false;

function updateKeyboard(fn) {
  let row = 0;
  [].forEach.call(keyboard.children, (keyboardRow) => {
    let key = 0;
    [].forEach.call(keyboardRow.children, (keyboardKey) => {
      fn(keyboardKey, row, key);
      key += 1;
    });
    row += 1;
  });
}

function altControlPressed() {
  currentLayout = currentLayout === 'en' ? 'ru' : 'en';
  localStorage.setItem('language', currentLayout);
  const CharChangeCase = (keyboardKey, row, key) => {
    if (isShiftPressed) {
      if (!Number.isNaN(keyboardLayouts[currentLayout][row][key].lowercase)) {
        keyboardKey.innerText = keyboardLayouts[currentLayout][row][key].uppercase;
      } else {
        keyboardKey.innerText = keyboardLayouts[currentLayout][row][key][caseLayout];
      }
    } else if (!Number.isNaN(keyboardLayouts[currentLayout][row][key].lowercase)) {
      keyboardKey.innerText = keyboardLayouts[currentLayout][row][key].lowercase;
    } else {
      keyboardKey.innerText = keyboardLayouts[currentLayout][row][key][caseLayout];
    }
  };
  updateKeyboard(CharChangeCase);
}

function shiftPressed() {
  caseLayout = caseLayout === 'lowercase' ? 'uppercase' : 'lowercase';
  const fullChangeCase = (keyboardKey, row, key) => {
    if (/[^a-zA-Zа-яёА-ЯЁ]/.test(keyboardKey.innerText)) {
      keyboardKey.innerText = keyboardLayouts[currentLayout][row][key].uppercase;
    } else {
      keyboardKey.innerText = keyboardLayouts[currentLayout][row][key][caseLayout];
    }
  };
  updateKeyboard(fullChangeCase);
}

function shiftReleased() {
  caseLayout = caseLayout === 'lowercase' ? 'uppercase' : 'lowercase';
  const fullChangeCase = (keyboardKey, row, key) => {
    if (/[^a-zA-Zа-яёА-ЯЁ]/.test(keyboardKey.innerText)) {
      keyboardKey.innerText = keyboardLayouts[currentLayout][row][key].lowercase;
    } else {
      keyboardKey.innerText = keyboardLayouts[currentLayout][row][key][caseLayout];
    }
  };
  updateKeyboard(fullChangeCase);
}

function capsLockPressed() {
  caseLayout = caseLayout === 'lowercase' ? 'uppercase' : 'lowercase';
  const CharChangeCase = (keyboardKey, row, key) => {
    if (!/[^a-zA-Zа-яёА-ЯЁ]/.test(keyboardKey.innerText)) {
      keyboardKey.innerText = keyboardLayouts[currentLayout][row][key][caseLayout];
    }
  };
  updateKeyboard(CharChangeCase);
}

// Обработка комбинаций клавиш
function functionKeyDown(key) {
  // регистр и раскладку меняем только при нажатии конкретной клавиши, а не в слушателе
  if (key === 'Alt') {
    isAltPressed = true;
  }

  if (key === 'Control') {
    isCtrlPressed = true;
    if (isAltPressed && isCtrlPressed) {
      altControlPressed();
    }
  }

  if (key === 'Shift') {
    isShiftPressed = true;
    if (isShiftPressed) {
      shiftPressed();
    }
  }

  if (key === 'CapsLock') {
    if (!isCapsLockPressed) {
      capsLockPressed();
      isCapsLockPressed = true;
    }
  }
}

function functionKeyUp(key) {
  // регистр и раскладку меняем только при нажатии конкретной клавиши, а не в слушателе
  if (key === 'Alt') {
    isAltPressed = false;
  }

  if (key === 'Control') {
    isCtrlPressed = false;
  }

  if (key === 'Shift') {
    isShiftPressed = false;
    if (!isShiftPressed) {
      shiftReleased();
    }
  }

  if (key === 'CapsLock') {
    isCapsLockPressed = false;
  }
}

document.addEventListener('keydown', (event) => functionKeyDown(event.key));
document.addEventListener('keyup', (event) => functionKeyUp(event.key));

// Добавление символа в textarea
// Отключаем ввода в textarea
textarea.addEventListener('keydown', (event) => {
  event.preventDefault();
});

const functionKeys = [
  'Backspace',
  'Tab',
  'Delete',
  'CapsLock',
  'Enter',
  'ShiftLeft',
  'ShiftRight',
  'ControlLeft',
  'OSLeft',
  'AltLeft',
  'AltRight',
  'ControlRight',
];

function textareaTextChange(pos, pos2, char) {
  const newText = textareaText.split('');
  newText.splice(pos, pos2 - pos, char);
  return newText.join('');
}

function textareaUpdate(code, char) {
  textarea.focus();

  const pos = textarea.selectionStart;
  const pos2 = textarea.selectionEnd;
  if (!functionKeys.includes(code)) {
    const newText = textareaTextChange(pos, pos2, char);
    textareaText = newText;
    textarea.value = newText;
    textarea.setSelectionRange(pos + char.length, pos + char.length);
    return;
  }

  if (code === 'Backspace') {
    if (pos === pos2 && pos === 0) return;
    if (pos !== pos2) {
      const newText = textareaTextChange(pos, pos2, '');
      textareaText = newText;
      textarea.value = newText;
      textarea.setSelectionRange(pos, pos);
    } else {
      const newText = textareaTextChange(pos - 1, pos2, '');
      textareaText = newText;
      textarea.value = newText;
      textarea.setSelectionRange(pos - 1, pos - 1);
    }
    return;
  }

  if (code === 'Tab') {
    const tab = '    ';
    const newText = textareaTextChange(pos, pos2, tab);
    textareaText = newText;
    textarea.value = newText;
    textarea.setSelectionRange(pos + tab.length, pos + tab.length);
    return;
  }

  if (code === 'Delete') {
    if (pos !== pos2) {
      const newText = textareaTextChange(pos, pos2, '');
      textareaText = newText;
      textarea.value = newText;
      textarea.setSelectionRange(pos, pos);
    } else {
      const newText = textareaTextChange(pos, pos2 + 1, '');
      textareaText = newText;
      textarea.value = newText;
      textarea.setSelectionRange(pos, pos);
    }
    return;
  }

  if (code === 'Enter') {
    const newText = textareaTextChange(pos, pos2, '\r');
    textareaText = newText;
    textarea.value = newText;
    textarea.setSelectionRange(pos + char.length, pos + char.length);
  }
}

// Отображение нажатой клавиши на физ. клавиатуре
document.addEventListener('keydown', (event) => {
  event.preventDefault(); // убираем события по умолчанию, так как далее используется метод focus()
  const exception = ['Backspace', 'Tab', 'Delete', 'Enter'];
  const key = document.getElementsByClassName(event.code)[0];
  // Обрабатываем только клавиши с символами, нажатые с физ. клавиатуры.
  // "функциональные" кнопки обрабатываем отдельно выше, исключение - Backspace, Tab, Delete, Enter
  if (key) key.classList.add('pressed');
  if (
    (key && !functionKeys.includes(event.code))
    || (key && exception.includes(event.code))
  ) {
    textareaUpdate(event.code, key.innerHTML);
  }
});
document.addEventListener('keyup', (event) => {
  const exception = ['Backspace', 'Tab', 'Delete', 'Enter'];
  const key = document.getElementsByClassName(event.code)[0];
  // Обрабатываем только клавиши с символами, нажатые с физ. клавиатуры.
  // "функциональные" кнопки обрабатываем отдельно выше, исключение - Backspace, Tab, Delete, Enter
  if (key) key.classList.remove('pressed');
  if (
    (key && !functionKeys.includes(event.code))
    || (key && exception.includes(event.code))
  ) {
    key.classList.remove('pressed');
  }
});

// Обработка нажатых с вирт. клавиатуры кнопок
keyboard.addEventListener('click', (event) => {
  if (event.target.classList.contains('keyboard__key')) {
    textareaUpdate(event.target.id, event.target.innerHTML);
  }
});

// Обработка некоторых "функциональных" кнопок, для которых требуется mousedown и mouseup события
keyboard.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('keyboard__key')) {
    if (event.target.id === 'AltLeft' || event.target.id === 'AltRight') {
      functionKeyDown('Alt');
    }
    if (
      event.target.id === 'ControlLeft'
      || event.target.id === 'ControlRight'
    ) {
      functionKeyDown('Control');
    }
    if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') {
      functionKeyDown('Shift');
    }
    if (event.target.id === 'CapsLock') {
      functionKeyDown('CapsLock');
    }
  }
});
keyboard.addEventListener('mouseup', (event) => {
  if (event.target.classList.contains('keyboard__key')) {
    if (event.target.id === 'AltLeft' || event.target.id === 'AltRight') {
      functionKeyUp('Alt');
    }
    if (
      event.target.id === 'ControlLeft'
      || event.target.id === 'ControlRight'
    ) {
      functionKeyUp('Control');
    }
    if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') {
      functionKeyUp('Shift');
    }
    if (event.target.id === 'CapsLock') {
      functionKeyUp('CapsLock');
    }
  }
});
