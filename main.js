import { Contact } from "./classe/contact.js";

document.getElementById("formulaire").addEventListener("submit", function (e) {
	e.preventDefault();

	const titre = document.querySelector('input[name="genre"]:checked').value;
	const nom = document.getElementById("nom").value;
	const prenom = document.getElementById("prenom").value;
	const dateNaissance = document.querySelector('input[type="date"]').value;
	const telephone = document.querySelector(
		'input[placeholder="Telephone"]'
	).value;
	const email = document.querySelector('input[placeholder="Email"]').value;

	const nouveauContact = new Contact(
		titre,
		nom,
		prenom,
		dateNaissance,
		telephone,
		email
	);

	nouveauContact.ajouterContact();

	this.reset();
	
});
