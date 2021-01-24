let data = [];
const empName = document.querySelector('#emp-name');
const empBDay = document.querySelector('#emp-bday');
const empJDay = document.querySelector('#emp-jday');
const empSal = document.querySelector('#emp-sal');
const empNum = document.querySelector('#emp-num');
const empSalAll = document.querySelector('#emp-sal-all');
const empAdd = document.querySelector('#emp-add');
const empTableForm = document.querySelector('#emp-table-form')
const empTableBody = document.querySelector('#emp-table-body');
let empId = -1;
const empSumToShow = document.querySelector('#emp-sum-toshow');
const empFireButton = document.querySelector('#emp-fire')
const empBdayDOSButton = document.querySelector('#emp-bday-descending-order-sort');
const empBdayIOSButton = document.querySelector('#emp-bday-increasing-order-sort');
const empJdayDOSButton = document.querySelector('#emp-jday-descending-order-sort');
const empJdayIOSButton = document.querySelector('#emp-jday-increasing-order-sort');


function addData(empName, empBDay, empJDay, empSal){
    data.push({id: uniqueId(), name: empName, bday: empBDay, jday: empJDay, salary: empSal})
}

function createTable(){
    empTableBody.innerHTML = ``;
    data.forEach(arrayElement => {
        empTableBody.innerHTML += `
        <tr>
        <td><label> <input type="checkbox" id="${arrayElement.id}"></label></td>  
        <td>${arrayElement.name}</td> 
        <td>${arrayElement.bday}</td> 
        <td>${arrayElement.jday}</td> 
        <td>${arrayElement.salary}</td>
        </tr>`
    })
    empNum.innerHTML = `<p id="emp-num">Количество сотрудников: <span>${data.length}</span></p>`   
}

function uniqueId(){
    ++empId
    return empId
}

function empBDaySort(descending){

    if (descending){
        data.sort((a, b)=>{
            return b.bday - a.bday
        })
    } else {
        data.sort((a, b)=>{
            return a.bday - b.bday
        })
    }
}

function empJDaySort(descending){

    if (descending){
        data.sort((a, b)=>{
            let dateA = new Date(a.jday);
            let dateB = new Date(b.jday);
            console.log('Первая дата', dateA);
            console.log('Вторая дата', dateB);
            return dateB - dateA;
        })
    } else {
        data.sort((a, b)=>{
            let dateA = new Date(a.jday);
            let dateB = new Date(b.jday);
            console.log('Первая дата', dateA);
            console.log('Вторая дата', dateB);
            return dateA - dateB;
        })

    }
    
}

function empFireChecked(){
    let checkedCheckboxArray = [...document.querySelectorAll('input[type=checkbox]:checked')]
    checkedCheckboxArray.forEach(arrayElement =>{
        let elementToDelete = data.findIndex(item => item.id === +arrayElement.id);
        data.splice([elementToDelete], 1)
    })
}



empAdd.addEventListener('click', (event) => {
    event.preventDefault();
    addData(empName.value, empBDay.value, empJDay.value, empSal.value);
    createTable();
    empTableForm.reset()
})

empSumToShow.addEventListener('click', () =>{
    let salaryAll = 0;
    data.forEach(arrayElement =>{
        salaryAll = salaryAll + +arrayElement.salary
    })
    empSalAll.innerHTML=`<p id="emp-sal-all">Сумма заработной платы: <span>${salaryAll}</span></p>`
})

empBdayDOSButton.addEventListener('click', () =>{
    empBDaySort(true);
    createTable()
})

empBdayIOSButton.addEventListener('click', () =>{
    empBDaySort(false)
    createTable()
})


empJdayDOSButton.addEventListener('click', () =>{
    empJDaySort(true);
    createTable()
})

empJdayIOSButton.addEventListener('click', () =>{
    empJDaySort(false)
    createTable()
})

empFireButton.addEventListener('click', () =>{
    empFireChecked()
    createTable();
})













// function empFireChecked(){
//     // let uncheckedCheckboxArray = ([...document.querySelectorAll('input[type=checkbox]')]).filter(arrayElement => arrayElement.checked === false);
//     // console.log(checkedCheckboxArray)
//     // uncheckedCheckboxArray.forEach(arrayElement =>{
//     // })
    
//     let checkedCheckboxArray = [...document.querySelectorAll('input[type=checkbox]:checked')]
//     checkedCheckboxArray.forEach(arrayElement =>{
//         let elementToDelete = data.findIndex(item => item.id === +arrayElement.id);
//         data.splice([elementToDelete], 1)
//     })
//     createTable();

    

//     // let valuesToDelete = [];
//     // checkedCheckboxArray.forEach(arrayElement =>{
//     //     for(let element of data){
//     //         if (+arrayElement.id === element.id){
//     //             // console.log('match !')
//     //             valuesToDelete.push(element.id)
//     //             valuesToDelete.sort((a,b)=>{
//     //                 return a - b
//     //             })
//     //             console.log(valuesToDelete)

//     //         }
//     //     }
//     // })


    





//     // let counter = 0;
//     // for (element of valuesToDelete){
//     //     if(element === data[counter].id){
//     //         data.splice([counter], 1)
//     //         console.log('deleted')
//     //     }
//     //     counter++
//     // }
// }