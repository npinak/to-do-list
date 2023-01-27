// import _ from 'lodash';
import './style.css'; // import css style sheet 
import new_project from './new_project.js';
import close_popup from './close_popup.js';
import open_popup from './open_popup.js';

// add event listener to pop-up close button 
document.getElementById("close_popup").onclick = close_popup;

// add event listener to add new project button (popup open button)
document.getElementById("add_new_button").onclick = open_popup;

document.getElementById("submit_project").onclick = new_project;


