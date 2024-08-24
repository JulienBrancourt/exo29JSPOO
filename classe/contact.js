export class Contact {

    static contacts = []

	constructor(titre, nom, prenom, dateNaissance, telephone, email) {
		(this.titre = titre),
			(this.nom = nom),
			(this.prenom = prenom),
			(this.dateNaissance = dateNaissance),
			(this.telephone = telephone),
			(this.email = email);
	}

	ajouterContact() {
		Contact.contacts.push(this);
		Contact.afficherContacts();
	}

	static afficherContacts() {
		const tableau = document.querySelector("table");
		tableau.innerHTML = `
            <tr>
                <th>Titre</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Date de Naissance</th>
                <th>Téléphone</th>
                <th>Email</th>
            </tr>
        `;

		Contact.contacts.forEach((contact) => {
			const ligne = `
                <tr>
                    <td>${contact.titre}</td>
                    <td>${contact.nom}</td>
                    <td>${contact.prenom}</td>
                    <td>${contact.dateNaissance}</td>
                    <td>${contact.telephone}</td>
                    <td>${contact.email}</td>
                </tr>
            `;
			tableau.innerHTML += ligne;
			console.log(this.contacts);
		});


	}
}