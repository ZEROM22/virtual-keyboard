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
const currentLayout = localStorage.getItem('language')
  ? localStorage.getItem('language')
  : 'en';
// Текущий регистр
const caseLayout = 'lowercase';
// Текст в textarea
const textareaText = '';

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
