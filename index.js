const copy = document.querySelector('button');
const text = document.querySelector("textarea");

copy.addEventListener('click' , () => {
text.select()
const value = text.value
// console.log(value);
navigator.clipboard.writeText(value)

copy.innerText = 'کپی شد'


setTimeout(() => {
    copy.innerText = "کپی کن"
}, 2000);
});