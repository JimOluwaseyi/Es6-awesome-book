const form = document.querySelector('form');
const title = document.querySelector('.title');
const h1 = document.querySelector('h1');
const contactInfo = document.querySelector('#contact-info');
const textWrapper = document.querySelector('.textWrapper');

export const info = () => {
  let information = '';
  information += `
  <h3>Contact Information</h3>
  <p> Do you have any question or you just want to say "hello"?<br>You can reach out to us!</p>
  <ul class="contactList">
  <li>Our e-mail: mail@mail.com</li>
  <li>Our phone number: 0043586534422</li>
  <li>Our address: Streetnam 22, 84503 City, Country</li>
  </ul>
  `;
  contactInfo.innerHTML = information;
};

export const showContact = () => {
  textWrapper.style.display = 'none';
  form.style.display = 'none';
  title.style.display = 'none';
  contactInfo.style.display = 'block';
  h1.style.display = 'none';
  info();
};
