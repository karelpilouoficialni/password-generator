const form = document.getElementById('generator-form');
const delkaInput = document.getElementById('delka');
const velkaCheckbox = document.getElementById('velka');
const malaCheckbox = document.getElementById('mala');
const cislaCheckbox = document.getElementById('cisla');
const specialniCheckbox = document.getElementById('specialni');
const vysledekInput = document.getElementById('vysledek');

const velkaPismena = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const malaPismena = 'abcdefghijklmnopqrstuvwxyz';
const cisla = '0123456789';
const specialni = '!@#$%^&*()_+-=[]{}|;:,.<>?';

function generujHeslo() {
  let znaky = '';

  if (velkaCheckbox.checked) {
    znaky = znaky + velkaPismena;
  }
  if (malaCheckbox.checked) {
    znaky = znaky + malaPismena;
  }
  if (cislaCheckbox.checked) {
    znaky = znaky + cisla;
  }
  if (specialniCheckbox.checked) {
    znaky = znaky + specialni;
  }

  if (znaky === '') {
    alert('Vyber alespoň jednu skupinu znaků!');
    return;
  }

  let heslo = '';
  const delka = Number(delkaInput.value);

  for (let i = 0; i < delka; i++) {
    const nahodnyIndex = Math.floor(Math.random() * znaky.length);
    heslo = heslo + znaky[nahodnyIndex];
  }

  vysledekInput.value = heslo;
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  generujHeslo();
});

generujHeslo();

const kopirovatBtn = document.getElementById('kopirovat');

kopirovatBtn.addEventListener('click', function() {
  vysledekInput.select();
  document.execCommand('copy');
});
