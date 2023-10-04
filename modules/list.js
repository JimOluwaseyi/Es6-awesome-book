const form = document.querySelector('form');
const title = document.querySelector('.title');
const contactInfo = document.querySelector('#contact-info');
const textWrapper = document.querySelector('.textWrapper');

const showListBook = () => {
  form.style.display = 'none';
  title.style.display = 'none';
  textWrapper.style.display = 'block';
  contactInfo.style.display = 'none';
};

export default showListBook;
