import _ from 'lodash';

function component(a: number) {
    console.log(a);
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
}
  
console.log('hello');

document.body.appendChild(component(5));