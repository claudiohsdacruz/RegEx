/*********************************************************/
/* Charger les listeners                                 */
/*********************************************************/
window.onload = function() {
    listenerInputTextNomComplet();
    listenerInputNumTelephone();
    listenerInputCodePostal();
    listenerInputDateNaissance();
    listenerInputNAS();
    listenerInputCourriel();
    listenerInputCodeCours();
    listenerInputDonnation();
    listenerInputTypeCarte();
    listenerInputNumeroCarte();
    listenerInputDateExpiration();
    listenerInputMotDePasse();
    listenerInputSoumettre();
};

let quantiteCours = 0;
let don = 0;

/*********************************************************/
/* Validation des champs du formulaire                   */
/*********************************************************/
function validerChampFormulaire(regEx, champ,errorLabel) {  
    if (champ != null) {    
        if(champ.value.match(regEx) == null){
            errorLabel.style.display="block";
            champ.focus();
            champ.value = "";
        } else {
            errorLabel.style.display="none";
        }
    }  
}

/*********************************************************/
/* Validation du champ nom complet                                    */
/*********************************************************/
function listenerInputTextNomComplet() {
    let nom = document.getElementById('nomcomplet');
    let errorLabel = document.getElementById('validerNom');
    const regExpNom = /(^[A-Z]([a-z]*)[\s]|^[A-Z]([a-z]*)[-][A-Z]([a-z]*)+[\s])+([A-Z]([a-z]*)[\s]|[A-Z]([a-z]*)[-][A-Z]([a-z]*))*/gm;
    nom.addEventListener("focusout", (evt)=> {
        validerChampFormulaire(regExpNom, nom,errorLabel);
    });
}

/*********************************************************/
/* Validation du numéro de telephone                     */
/*********************************************************/
function listenerInputNumTelephone() {
    let tel = document.getElementById('telephone');
    let errorLabel = document.getElementById('validerTel');
    const regExpTel = /(^\(?\d{3}\)[\s]*\d{3}[-]+\d{4}$|^\d{3}[-]\d{3}[-]+\d{4}$|^\d{3}[.]\d{3}[.]+\d{4}$|\d{10}$)/gm;
    tel.addEventListener("focusout", (evt)=> {
        validerChampFormulaire(regExpTel, tel,errorLabel);
    });
}

/*********************************************************/
/* Validation du code postal                             */
/*********************************************************/
function listenerInputCodePostal() {
    let codepostal = document.getElementById('codepostal');
    let errorLabel = document.getElementById('validerCodePostal');
    const regExPCodePostal = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/gm;
    codepostal.addEventListener("focusout", (evt)=> {
        validerChampFormulaire(regExPCodePostal, codepostal,errorLabel);
    });
}

/*********************************************************/
/* Validation de la date de naissance                    */
/*********************************************************/
function listenerInputDateNaissance() {
    let date = document.getElementById('datenaissance');
    let errorLabel = document.getElementById('validerDateNaissance');
    const regExDate = /((\d{4})[-.\/](0[1-9]|1[0-2])[-\/]([1-9]|[1-2][0-9]|3[0-1])$)|(^([1-9]|[1-2][0-9]|3[0-1])[ ]([A-Za-z])+[ ](\d{4}))$/gm;
    date.addEventListener("focusout", (evt)=> {
        validerChampFormulaire(regExDate,date,errorLabel);
    });
}

/*********************************************************/
/* Validation du numero NAS                              */
/*********************************************************/
function listenerInputNAS() {
    let nas = document.getElementById('codenas');
    let errorLabel = document.getElementById('validerNAS')
    const regExNAS = /^(\d{3})[-](\d{3})[-](\d{3})[-]*|^(\d{3})[ ](\d{3})[ ]*(\d{3})[ ]*|\d{9}$/gm;
    nas.addEventListener("focusout", (evt)=> {
        validerChampFormulaire(regExNAS,nas,errorLabel);
    });
}


/*********************************************************/
/* Validation du courriel                              */
/*********************************************************/
function  validerCourriel(regCourriel) {
    const courriel = document.getElementById('courriel');
    
    if (courriel != null) {    
        let errorLabel = document.getElementById('validerCourriel');
        console.log("email");
        if(courriel.value.match(regCourriel) == null){
            errorLabel.style.display="block";
            courriel.focus();
            courriel.value = "";
        } else {
            errorLabel.style.display="none";
        }
    }  
}

function listenerInputCourriel() {
    let courriel = document.getElementById('courriel');
    const regCourriel = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm;
    courriel.addEventListener("focusout", (evt)=> {
        validerCourriel(regCourriel);
    });
}

/*********************************************************/
/* Validation de l'adresse internet                      */
/*********************************************************/
function listenerInputCourriel() {
    let adresseInternet = document.getElementById('adressinternet');
    let errorLabel = document.getElementById('validerAdresseInternet');
    const regAdresseInternet = /^(ftp)[:][\/][\/](25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^(http)[s]*[:]+[\/][\/][www]+[.]([a-z0-9_]+)[.]([a-z]+)/gm;
    adresseInternet.addEventListener("focusout", (evt)=> {
        validerChampFormulaire(regAdresseInternet,adresseInternet,errorLabel);
    });
}

/*********************************************************/
/* Validation du code de cours                           */
/*********************************************************/
function  validerCodeCours(regExCours) {
    let codecours = document.getElementById('cours');
    if (codecours != null) {
        arrayCours = codecours.value.split(" ");
        quantiteCours = arrayCours.length;
        let coursValide = true;
        for (let index = 0; index < arrayCours.length; index++) {
            let element = arrayCours[index];
            if(element.match(regExCours) == null){
                coursValide = false;
            }
        }

        let errorLabel = document.getElementById('validerCodeCours');
        if(!coursValide){
            errorLabel.style.display="block";
            codecours.focus();
            codecours.value = "";
        } else {
            errorLabel.style.display="none";
            let quantite = document.getElementById('nombre_cours');
            quantite.innerHTML = quantiteCours;
        }
    } 
}

function listenerInputCodeCours() {
    const courriel = document.getElementById('cours');
    const regExCours = /^\d{3}[-]([A-Z]\d{2}|\d{3})[-][A-Z]{2}/gm;
    courriel.addEventListener("focusout", (evt)=> {
        validerCodeCours(regExCours);
    });
}

/*********************************************************/
/* Validation de la donnation                            */
/*********************************************************/
function  validerFormatDonnation(regExDon) {
    let donnation = document.getElementById('donfondation');
    
    if (donnation != null) {    
        let errorLabel = document.getElementById('validerDon');

        if(donnation.value.match(regExDon) == null){
            errorLabel.style.display="block";
            donnation.focus();
            donnation.value = "";
        } else {
            errorLabel.style.display="none";
        }
    }  
    don = parseInt(donnation.value.replace(',', '.'));
    donnation.innerHTML = don;
    console.log(don);
}

function listenerInputDonnation() {
    const don = document.getElementById('donfondation');
    const regExDon = /(^\d{3}[.,]\d{2}|^\d{3})$/gm;
    
    don.addEventListener("focusout", (evt)=> {
        validerFormatDonnation(regExDon);
    });
}

/*********************************************************/
/* Validation du type de carte                           */
/*********************************************************/
function listenerInputTypeCarte() {
    let typecarte = document.getElementById('typecarte');
    let errorLabel = document.getElementById('validerTypeCarte');
    const regExTypeCarte = /((VISA)|(MASTERCARD)|(AMEX))$/gmi;
    typecarte.addEventListener("focusout", (evt)=> {
        validerChampFormulaire(regExTypeCarte, typecarte,errorLabel);
    });
}

/*********************************************************/
/* Validation du numéro de la carte credit               */
/*********************************************************/
function listenerInputNumeroCarte() {
    let carte = document.getElementById('numerocarte');
    let errorLabel = document.getElementById('validerNumeroCarte');
    const regExNumeroCarte = /^((4540)|(3520)|(5312))([-]+\d{4}[-]+\d{4}[-]+\d{4}|\d{12})$/gm;
    carte.addEventListener("focusout", (evt)=> {
        validerChampFormulaire(regExNumeroCarte, carte,errorLabel);
    });
}

/*********************************************************/
/* Validation de la date de expiration de la carte credit*/
/*********************************************************/
function listenerInputDateExpiration() {
    let dateexpiration = document.getElementById('expirationcarte');
    let errorLabel = document.getElementById('validerDateExpiration');
    const regExDateExpiration = /^(0[0-9]|1[0-2])[\/]((2[3-9])|([3-9][0-9]))$/gm;
    dateexpiration.addEventListener("focusout", (evt)=> {
        validerChampFormulaire(regExDateExpiration, dateexpiration, errorLabel);
        calculerAfficherMontant();
    });
}

function calculerAfficherMontant() {
    let montantTotal = document.getElementById('montantTotal');
    let montant = quantiteCours * 50 + don;
    montantTotal.innerHTML = montant;
}

/*********************************************************/
/* Validation du mot de passe                            */
/*********************************************************/
function listenerInputMotDePasse() {
    let mdp = document.getElementById('mpd');
    let errorLabel = document.getElementById('validerMotDePasse');
    const regExMotDePasse = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[A-Z])(?=.*[_!@#$%&*()\\\/?])[a-zA-Z0-9_!@#$%&*()\\\/?]+$/gm;
    mdp.addEventListener("focusout", (evt)=> {
        validerChampFormulaire(regExMotDePasse, mdp, errorLabel);
    });
}

/*********************************************************/
/* Validation du formulaire                              */
/*********************************************************/
function   validerformulaireComplet()  {
    let champs = document.getElementsByTagName('input');
    
    for (let index = 0; index < champs.length; index++) {
        if(champs[index].value == "") {
            alert("Le formulaire est incomplet.\nTous les champs doivent être remplit !")
            champs[index].focus();
            break;
        } 
    }
}

function listenerInputSoumettre() {
    let boutonSubmit = document.getElementById('soumetre');
    
    boutonSubmit.addEventListener('click', function(e) {
        e.preventDefault();
        validerformulaireComplet() ;
    });
}