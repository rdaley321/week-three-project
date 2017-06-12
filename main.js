const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const clear = document.querySelector('#clear')
const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')
const add = document.querySelector('#add')
const subtract = document.querySelector('#subtract')
const decimal = document.querySelector('#decimal')
const answer = document.querySelector('#answer')
const all = [one,two,three,four,five,six,seven,eight,nine,multiply,divide,add,subtract,decimal]

for(let i = 0; i < all.length; i++) {
  let temp = []
  if(all[i].addEventListener('click',function(op){
    temp.push = all[i].textContent
    console.log(temp)
  })
  return temp
}
