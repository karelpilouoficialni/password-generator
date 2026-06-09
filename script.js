// DOM API - https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
const generujBtn = document.getElementById('generuj-btn');
const delkaInput = document.getElementById('delka');
const velkaCheckbox = document.getElementById('velka');
const malaCheckbox = document.getElementById('mala');
const cislaCheckbox = document.getElementById('cisla');
const specialniCheckbox = document.getElementById('specialni');
const vysledekInput = document.getElementById('vysledek');
const kopirovatBtn = document.getElementById('kopirovat');

const znakyVelka = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const znakyMala = 'abcdefghijklmnopqrstuvwxyz';
const znakyCisla = '0123456789';
const znakySpecial = '!@#$%^&*()_+-=[]{}|;:,.<>?';

function generujHeslo() {
  let znaky = '';

  if (velkaCheckbox.checked) {
    znaky = znaky + znakyVelka;
  }
  if (malaCheckbox.checked) {
    znaky = znaky + znakyMala;
  }
  if (cislaCheckbox.checked) {
    znaky = znaky + znakyCisla;
  }
  if (specialniCheckbox.checked) {
    znaky = znaky + znakySpecial;
  }

  if (znaky === '') {
    alert('Vyber alespoň jednu skupinu znaků!');
    return;
  }

  let heslo = '';
  const delka = Number(delkaInput.value);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  for (let i = 0; i < delka; i++) {
    const nahodnyIndex = Math.floor(Math.random() * znaky.length);
    heslo = heslo + znaky[nahodnyIndex];
  }

  vysledekInput.value = heslo;
  zobrazSilu(heslo);
}

// https://stackoverflow.com/questions/33521541/password-strength-meter
function zobrazSilu(heslo) {
  let skore = 0;

  skore = skore + Math.min(heslo.length * 4, 40);

  if (/[a-z]/.test(heslo)) skore = skore + 10;
  if (/[A-Z]/.test(heslo)) skore = skore + 10;
  if (/[0-9]/.test(heslo)) skore = skore + 10;
  if (/[^a-zA-Z0-9]/.test(heslo)) skore = skore + 15;

  if (heslo.length >= 8) skore = skore + 5;
  if (heslo.length >= 12) skore = skore + 5;
  if (heslo.length >= 16) skore = skore + 5;

  skore = Math.min(skore, 100);

  const bar = document.getElementById('sila-bar-plneni');
  const text = document.getElementById('sila-text');

  if (skore < 30) {
    bar.style.width = skore + '%';
    bar.style.backgroundColor = '#ff4444';
    text.textContent = 'Slabé';
    text.style.color = '#ff4444';
  } else if (skore < 55) {
    bar.style.width = skore + '%';
    bar.style.backgroundColor = '#ffaa00';
    text.textContent = 'Střední';
    text.style.color = '#ffaa00';
  } else if (skore < 80) {
    bar.style.width = skore + '%';
    bar.style.backgroundColor = '#44cc44';
    text.textContent = 'Silné';
    text.style.color = '#44cc44';
  } else {
    bar.style.width = skore + '%';
    bar.style.backgroundColor = '#667eea';
    text.textContent = 'Velmi silné';
    text.style.color = '#667eea';
  }
}

generujBtn.addEventListener('click', generujHeslo);

delkaInput.addEventListener('input', generujHeslo);
velkaCheckbox.addEventListener('change', generujHeslo);
malaCheckbox.addEventListener('change', generujHeslo);
cislaCheckbox.addEventListener('change', generujHeslo);
specialniCheckbox.addEventListener('change', generujHeslo);

generujHeslo();

// https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
kopirovatBtn.addEventListener('click', function() {
  vysledekInput.select();
  document.execCommand('copy');
});
