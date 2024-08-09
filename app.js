let dom = document;
let textResult = dom.querySelector('#text-result');

const mapObjToEncrypt = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat',
};

const mapObjToDecrypt = {
  ai: 'a',
  enter: 'e',
  imes: 'i',
  ober: 'o',
  ufat: 'u',
};

const encryptText = () => {
  const text = dom.querySelector('#text').value;
  const encrypted = text.replace(
    /(a|e|i|o|u)/gi,
    (matched) => mapObjToEncrypt[matched]
  );

  showResult(encrypted);
};

const decryptText = () => {
  const text = dom.querySelector('#text').value;

  const decrypted = text.replace(
    /(ai|enter|imes|ober|ufat)/gi,
    (matched) => mapObjToDecrypt[matched]
  );

  showResult(decrypted);
};

const showResult = (text) => {
  textResult.textContent = text;

  dom.querySelector('.container_not_found_result').classList.add('d-none');
  dom.querySelector('.container_result').classList.remove('d-none');
};

const copyText = async () => {
  await navigator.clipboard.writeText(textResult.textContent);
};

const showAlert = async () => {
  const alert = dom.querySelector('#copy-alert');
  alert.classList.remove('d-none');
  setTimeout(() => {
    alert.classList.add('d-none');
  }, 1000);
};

function validateLowerChars(textarea) {
  const regex = /^[a-z\s]*$/;
  const value = textarea.value;

  // console.log(value);

  if (value == '') {
    dom.querySelectorAll('.container_buttons > button').forEach((e) => {
      e.classList.add('disabled');
    });
    dom.querySelector('.container_not_found_result').classList.remove('d-none');
    dom.querySelector('.container_result').classList.add('d-none');
  } else {
    dom.querySelectorAll('.container_buttons > button').forEach((e) => {
      e.classList.remove('disabled');
    });
  }
  if (!regex.test(value)) {
    textarea.value = value.replace(/[^a-z\s]/g, '');
  }
}
