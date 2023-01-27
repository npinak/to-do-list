const main_project_list = ['Project 1']

function new_project(){

    // create a new project and add it to "main_project_list"

    // get name of project from input field 
    const project_name = document.getElementById('project_name').value

    main_project_list.push(project_name)

    console.log(main_project_list)

}

export default new_project;