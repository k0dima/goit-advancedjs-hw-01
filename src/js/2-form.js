const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

const storedData = localStorage.getItem(storageKey);
if (storedData) {
  const parsedData = JSON.parse(storedData);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  const { name, value } = event.target;
  if (name in formData) {
    formData[name] = value;
    localStorage.setItem(storageKey, JSON.stringify(formData));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = formData.email.trim();
  const message = formData.message.trim();

  if (!email || !message) {
    alert('Fill all fields');
    return;
  }

  console.log({ email, message });

  localStorage.removeItem(storageKey);
  formData.email = '';
  formData.message = '';
  form.reset();
});
