//Uso de la API y elemento cada elemento dentro de la BD
const apiUrl = 'https://randomuser.me/api/?results=10';
const personsListElement = document.getElementById('persons-list');

//realiza solicitud Get a la API para obtener DATOS 
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const persons = data.results;
        persons.forEach(person => {
            //crea elemento para ser mostrados 
            const personElement = document.createElement('div');
            personElement.className = 'person';

            const imgElement = document.createElement('img');
            imgElement.src = person.picture.large;
            personElement.appendChild(imgElement);

            const infoElement = document.createElement('div');
            infoElement.className = 'info';

            const ulElement = document.createElement('ul');
            
            //MUESTRA EL GENERO
            const li1 = document.createElement('li');
            const label1 = document.createElement('label');
            label1.textContent = 'Género:';
            const span1 = document.createElement('span');
            span1.textContent = person.gender;
            li1.appendChild(label1);
            li1.appendChild(span1);
            ulElement.appendChild(li1);

            //MUESTRA NOMBRE
            const li2 = document.createElement('li');
            const label2 = document.createElement('label');
            label2.textContent = 'Nombre:';
            const span2 = document.createElement('span');
            span2.textContent = `${person.name.first} ${person.name.last}`;
            li2.appendChild(label2);
            li2.appendChild(span2);
            ulElement.appendChild(li2);

            //MUESTRA UBICACION
            const li3 = document.createElement('li');
            const label3 = document.createElement('label');
            label3.textContent = 'Ubicación:';
            const span3 = document.createElement('span');
            span3.textContent = `${person.location.city}, ${person.location.state}, ${person.location.country}`;;
            li3.appendChild(label3);
            li3.appendChild(span3);
            ulElement.appendChild(li3);

            //MUESTRA EL EMAIL
            const li4 = document.createElement('li');
            const label4 = document.createElement('label');
            label4.textContent = 'Correo electrónico:';
            const span4 = document.createElement('span');
            span4.textContent = person.email;
            li4.appendChild(label4);
            li4.appendChild(span4);
            ulElement.appendChild(li4);
            
            //MUESTRA FECHA NACIMIENTO
            const li5 = document.createElement('li');
            const label5 = document.createElement('label');
            label5.textContent = 'Fecha de nacimiento:';
            const span5 = document.createElement('span');
            span5.textContent = person.dob.date;
            li5.appendChild(label5);
            li5.appendChild(span5);
            ulElement.appendChild(li5);

            infoElement.appendChild(ulElement);
            personElement.appendChild(infoElement);
            personsListElement.appendChild(personElement);
        });
    })
    .catch(error => console.error(error));