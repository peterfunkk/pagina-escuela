function ValidateForm() {
    let email = document.getElementById('inputEmail').value;
    let name = document.getElementById('inputName').value;
    let phone = document.getElementById('inputPhone').value;

    if (email == "") {
        alert('El campo es requerido');
        return false;
    } else if (!email.includes('@')) {
        alert('EL correo no es valido');
        return false;
    }
    if (name == "") {
        alert('El campo es requerido');
        return false;
    }
    if (phone == "") {
        alert('El campo es requerido');
        return false;
    }

    return true;

}

function ReadData() {
    let listPeople;

    if(localStorage.getItem('listPeople') == null) {
        listPeople = [];
    }else { 
        listPeople = JSON.parse(localStorage.getItem('listPeople')); 
    }

    var html = "";


    listPeople.forEach(function(element, index) {
        html += "<tr>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.phone + "</td>";
        html += '<td><button onclick="deleteData('+ index +')" class="btn btn-danger">Eliminar Dato</button> <button onclick="editData('+ index +')" class="btn btn-warning">Editar Dato</button>';
        html += "</tr>";
    });

    document.querySelector('#tableData').innerHTML = html;

}

document.onload = ReadData();

function addData(){
    if(ValidateForm() == true) {
        let email = document.getElementById('inputEmail').value;
        let name = document.getElementById('inputName').value;
        let phone = document.getElementById('inputPhone').value;

        var listPeople;
        if(localStorage.getItem('listPeople') == null) {
            listPeople = [];

        } else {
            listPeople = JSON.parse(localStorage.getItem('listPeople')); 
        }
        

        listPeople.push({
            email: email,
            name: name,
            phone: phone
        });

        localStorage.setItem('listPeople', JSON.stringify(listPeople));

        ReadData();


        document.getElementById('inputEmail').value= "";
        document.getElementById('inputName').value= "";
        document.getElementById('inputPhone').value= "";
        console.log(listPeople)
    }
}

