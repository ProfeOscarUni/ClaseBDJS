const users =[
    {cedula: '12345', name: 'Juan', role:'Gerente'},
    {cedula: '98745', name: 'Luisa', role:'Suberente'},
    {cedula: '45698', name: 'María', role:'Contadora'}
];
function renderuserTable() {
    const userList =document.getElementById('userList');
    userList.innerHTML='';

    users.forEach(user =>{
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${user.cedula}</td>
        <td>${user.name}</td>
        <td>${user.role}</td>
        `;
        userList.appendChild(row);
    });
}
document.addEventListener("DOMContentLoaded",renderuserTable);
document.getElementById('administadorForm').addEventListener('submit', function(event){
    event.preventDefault();

    const cedula = document.getElementById('cedula').value;
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    users.push({cedula,name,role});
    renderuserTable();
    document.getElementById('administadorForm').reset();


    }
    
    );