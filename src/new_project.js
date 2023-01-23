function new_project(){

    

    const pop_up_add_new = document.getElementById('add_new_details') // get the div to add elements to 

    // remove unnecessary elements from the page 
    while (pop_up.firstChild) {
        pop_up.removeChild(pop_up.firstChild)
    }

    // add project name input field
    const project_label = document.createElement('Label');
    project_label.setAttribute("for", "project_input");
    project_label.innerHTML = "Project Name:";
    pop_up_add_new.appendChild(project_label);
    
    const project_input = document.createElement('input')
    project_input.setAttribute("type", "text")
    project_input.id = "project_input"
    pop_up_add_new.appendChild(project_input)

    // add submit button input field 

}

export default new_project;