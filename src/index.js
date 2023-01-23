// import _ from 'lodash';
import './style.css'; // import css style sheet 
import new_project from './new_project.js'


// function component() {
//     const element = document.createElement('div');

//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;
// }

// document.body.appendChild(component());

function pop_up(){

    const pop_up = document.getElementById('popup')

    new_project()

    return pop_up
}

document.body.appendChild(pop_up());