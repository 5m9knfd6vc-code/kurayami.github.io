const showMore = document.querySelector('#showMore');
const moreText = document.querySelector('#moreText');

if (showMore != null && moreText != null) {
  showMore.addEventListener('click', function () {
    moreText.classList.toggle('d-none');

    if (moreText.classList.contains('d-none')) {
      showMore.textContent = 'Подробнее';
    } else {
      showMore.textContent = 'Скрыть';
    }
  });
}

// отдать душу + модалка
const giveSoul = document.querySelector('#giveSoul');
const soulsCount = document.querySelector('#soulsCount');
const modalText = document.querySelector('#modalText');
let souls = 0;

if (giveSoul != null) {
  const soulModal = new bootstrap.Modal('#soulModal');

  giveSoul.addEventListener('click', function () {
    souls = souls + 1;
    soulsCount.textContent = souls;

    if (souls == 1) {
      modalText.textContent = 'Невермор забрал твою душу. Назад её уже не вернуть.';
    } else {
      modalText.textContent = 'Душ отдано: ' + souls + '. Откуда у тебя столько?';
    }

    soulModal.show();
  });
}

// навыки героя, потом можно будет брать через fetch
const skills = [
  { icon: '≡', title: 'Shadowraze', type: 'удар тенью', text: 'Три волны тьмы на разном расстоянии от героя. Каждая наносит урон всем врагам в своей зоне.' },
  { icon: '∞', title: 'Necromastery', type: 'сбор душ', text: 'За каждого убитого врага Невермор получает душу. Чем больше душ, тем сильнее его атака.' },
  { icon: '▼', title: 'Dark Lord', type: 'аура', text: 'Одним своим видом он пугает врагов рядом, и их броня становится слабее.' },
  { icon: '◢', title: 'Requiem', type: 'реквием душ', text: 'Невермор выпускает все собранные души разом. Они разлетаются и бьют каждого, кто рядом.' }
];

const projects = document.querySelector('#projects');

if (projects != null) {
  let res = '';

  for (let i = 0; i < skills.length; i++) {
    let temp = skills[i];
    res = res + '<article class="card">';
    res = res + '<div class="pic glyph">' + temp.icon + '</div>';
    res = res + '<h3>' + temp.title + '</h3>';
    res = res + '<p class="meta"><span class="accent">//</span> ' + temp.type + '</p>';
    res = res + '<p>' + temp.text + '</p>';
    res = res + '</article>';
  }

  projects.innerHTML = res;
}

// форма на странице контактов
const form = document.querySelector('#contactForm');
const formMessage = document.querySelector('#formMessage');

if (form != null) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const comment = document.querySelector('#comment').value.trim();

    if (name == '' || comment == '') {
      formMessage.textContent = 'Заполни все поля';
      formMessage.className = 'text-danger';
      return;
    }

    if (email.includes('@') == false || email.includes('.') == false) {
      formMessage.textContent = 'Проверь email, в нём должны быть @ и точка';
      formMessage.className = 'text-danger';
      return;
    }

    formMessage.textContent = 'Спасибо, ' + name + '! Сообщение отправлено.';
    formMessage.className = 'text-success';
    form.reset();
  });
}
