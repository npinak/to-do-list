function new_project(){

    const pop_up_add_new = document.getElementById('add_new_details') // get the div to add elements to 

    // remove unnecessary elements from the page when first selected (Add Code!!!!)


    // create div to add new project input 
    const new_project_div = document.createElement('div')
    new_project_div.classList.add("new_project_div")
    pop_up_add_new.appendChild(new_project_div)


    // add new project input field
    const project_label = document.createElement('Label');
    project_label.setAttribute("for", "project_input");
    project_label.innerHTML = "Project Name:";
    project_label.id = "project_label"
    new_project_div.appendChild(project_label);
    
    const project_input = document.createElement('input')
    project_input.setAttribute("type", "text")
    project_input.id = "project_input"
    new_project_div.appendChild(project_input)

    // create div to add submit button
    const project_submit_button_div = document.createElement('div')
    project_submit_button_div.classList.add("project_submit_button_div")
    pop_up_add_new.appendChild(project_submit_button_div)

    // add submit button 
    const submit_project_button = document.createElement('button');
    submit_project_button.innerHTML = "Submit"
    submit_project_button.classList.add("project_submit_button")
    project_submit_button_div.appendChild(submit_project_button)




}

export default new_project;