function projectsCreation(input){
    let name = input[0]
    let numberOfProjects = input[1]
    let oneProject = numberOfProjects * 3

    console.log("The architect " + name + " will need " + oneProject + " hours to complete " + numberOfProjects + " project/s.")

}
projectsCreation(["George","4"])