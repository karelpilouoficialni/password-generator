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
}

generujBtn.addEventListener('click', generujHeslo);

generujHeslo();

// https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
kopirovatBtn.addEventListener('click', function() {
  vysledekInput.select();
  document.execCommand('copy');
});
