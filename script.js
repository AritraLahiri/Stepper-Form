
// Warning Not at all DRY couldn't come up with something GREAT SORRY :(

const prevBtn= document.querySelector('#prev');
const nextBtn= document.querySelector('#next');
const label = document.querySelector("#label");
const input = document.querySelector("#input");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const validate = document.querySelector("#validate");
let state = 0;

prevBtn.style.display = 'none';
email.style.color = '#fff';


const nexti=() => {

prevBtn.style.display = 'inline';
email.style.color='black';

if(!state){
label.innerHTML="Password";
input.type = 'password';
pass.style.color='white';
label.style.color='white';
input.placeholder = '';
state++;
}
else{
pass.style.color = 'black'
validate.style.color='white';
validate.style.color='white';
input.placeholder = '';
label.style.display = 'none';
input.style.display= 'none';
nextBtn.innerHTML = 'Submit';
state++;
}
}

const previous = () => {

nextBtn.innerHTML = 'Next';
nextBtn.style.display = 'inline';
label.style.display = 'inline';
input.style.display= 'inline';

if(state===1){
label.innerHTML="Username";
input.type = 'text';
email.style.color='white';
label.style.color='white';
pass.style.color='black';
input.placeholder = 'amesh@gmail.com';
state--;
prevBtn.style.display = 'none';
}
if(state===2){
label.innerHTML="Password";
input.type = 'password';
pass.style.color='white';
label.style.color='white';
input.placeholder = '';
validate.style.color='black';
state--;
}
}