//Task1
const images = [
    {
        preview: 'https://picsum.photos/id/1015/300/200',
        original: 'https://picsum.photos/id/1015/1200/800',
        description: 'Гірська річка',
    },
    {
        preview: 'https://picsum.photos/id/1025/300/200',
        original: 'https://picsum.photos/id/1025/1200/800',
        description: 'Собака в полі',
    },
    {
        preview: 'https://picsum.photos/id/1003/300/200',
        original: 'https://picsum.photos/id/1003/1200/800',
        description: 'Тварина в лісі',
    },
    {
        preview: 'https://picsum.photos/id/1043/300/200',
        original: 'https://picsum.photos/id/1043/1200/800',
        description: 'Ліс',
    },
    {
        preview: 'https://picsum.photos/id/1062/300/200',
        original: 'https://picsum.photos/id/1062/1200/800',
        description: 'Собака в ліжку',
    },
    {
        preview: 'https://picsum.photos/id/1069/300/200',
        original: 'https://picsum.photos/id/1069/1200/800',
        description: 'Медуза в морі',
    },
    {
        preview: 'https://picsum.photos/id/1076/300/200',
        original: 'https://picsum.photos/id/1076/1200/800',
        description: 'Будівля',
    },
    {
        preview: 'https://picsum.photos/id/1084/300/200',
        original: 'https://picsum.photos/id/1084/1200/800',
        description: 'Морж',
    },
    {
        preview: 'https://picsum.photos/id/1080/300/200',
        original: 'https://picsum.photos/id/1080/1200/800',
        description: 'Полуниця',
    },
];

const galleryEl = document.querySelector('.gallery');
const markup = images
    .map(({ preview, original, description }) => {
        return `
        <li class="gallery-item">
          <img
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </li>
      `;
    })
    .join('');
galleryEl.innerHTML = markup;

galleryEl.addEventListener('click', (event) => {
    event.preventDefault();

    const target = event.target;
    if (target.nodeName !== 'IMG') return;

    const largeImageURL = target.dataset.source;
    const description = target.alt;

    const instance = basicLightbox.create(`
      <img src="${largeImageURL}" alt="${description}" />
      <p style="color: white; text-align: center; margin-top: 10px;">${description}</p>
    `);

    instance.show();
});
//Task2
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;

const STORAGE_KEY = 'feedback-form-state';

let formData = {
    email: '',
    message: ''
};

// Завантажити дані з localStorage при старті
loadFormData();

// Делегування: onInput
form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Сабміт
form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formData.email.trim() === '' || formData.message.trim() === '') {
        alert('Fill please all fields');
        return;
    }

    console.log('Form submitted:', formData);

    // Очистити все
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: '', message: '' };
});

// Відновити дані з локального сховища
function loadFormData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        formData = JSON.parse(savedData);
        emailInput.value = formData.email || '';
        messageTextarea.value = formData.message || '';
    }
}
