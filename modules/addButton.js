const textWrapper = document.querySelector('.textWrapper');
const form = document.querySelector('form');
const line = document.querySelector('.line');
const h1 = document.querySelector('h1');
const contactInfo = document.querySelector('#contact-info');

const handleNewClick = () => {
  textWrapper.style.display = 'none';
  line.style.display = 'none';
  h1.style.display = 'none';
  form.style.display = 'flex';
  contactInfo.style.display = 'none';
};

export default handleNewClick;
