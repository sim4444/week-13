let studentsArray=[]

function clickHandler(event){
    console.log(event.target);
    if (event.target.target === 'BUTTON'){
        if(event.target.id==='bgButton'){
            document.body.style.background==='green';
        }
        else if(event.target.id==='submit'){
            let firstNameinput = document.querySelector('#firstname')
            let lastNameinput = document.querySelector('#lastname')
            let programNameinput = document.querySelector('#progname')
            const student ={firstname:firstNameinput,
                lastname:lastNameinput,
                programname:programNameinput
            }
            studentsArray.push(student)
            addStudenttoList(student)
            firstNameinput.value=''
            lastNameinput.value=''
            programNameinput.value=''
        }
    }
}
document.body.addEventListener('click',clickHandler)

function addStudenttoList(newStudent){
    //create a new list
    const newLi = document.createElement('li')
    //find the correct ul based on program of newStudent
    if(document.querySelector('#'))

}