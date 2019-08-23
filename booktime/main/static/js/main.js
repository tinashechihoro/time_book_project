

//function add(a, b)
//{
//return a + b;
//}
//
// document.write(add(12,45));
let colorInputBox =  document.getElementById('color');
let colorChangeDiv =  document.getElementById('colorChangeDiv');

let changeBackgroundColor =  document.getElementById('changeBackgroundColor');
changeBackgroundColor.addEventListener('click',() =>
{
    colorChangeDiv.style.color =  colorInputBox.value;
});

