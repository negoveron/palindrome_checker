const input = document.getElementById('text-input');
const check_btn = document.getElementById('check-btn');
const result = document.getElementById('result');

const checkPalindrome = input => {
  const o_input = input; 

  if (input === '') {
    alert('Please input a value');
    return;
  }

  result.replaceChildren();

  const finalStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultTxt = `${o_input} ${
    finalStr === [...finalStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

  const p_res = document.createElement('p');
  p_res.innerText = resultTxt;
  result.appendChild(p_res);

};

check_btn.addEventListener('click', () => {
  checkPalindrome(input.value);
  input.value = '';
});
