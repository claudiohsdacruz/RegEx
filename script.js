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

let quantiteCours;
let don;

/*********************************************************/
/* Validation du nom                                     */
/*********************************************************/
function validerNomComplet(regExpNom) {
    const nom = document.getElementById('nomcomplet');
    if (nom != null) {    
        let errorLabel = document.getElementById('validerNom');
        if(nom.value.match(regExpNom) == null){
            errorLabel.style.display="block";
            nom.focus();
            nom.value = "";
        } else {
            errorLabel.style.display="none";
        }
    }  
}

function listenerInputTextNomComplet() {
    const nom = document.getElementById('nomcomplet');
    const regExpNom = /(^[A-Z]([a-z]*)[\s]|^[A-Z]([a-z]*)[-][A-Z]([a-z]*)+[\s])+([A-Z]([a-z]*)[\s]|[A-Z]([a-z]*)[-][A-Z]([a-z]*))*/gm;
    nom.addEventListener("focusout", (evt)=> {
        validerNomComplet(regExpNom);
    });
}

/*********************************************************/
/* Validation du numéro de telephone                     */
/*********************************************************/
function validerNumeroTelephone(regExpTel) {
    const tel = document.getElementById('telephone');
    
    if (tel != null) {    
        let errorLabel = document.getElementById('validerTel');
        
        if(tel.value.match(regExpTel) == null){
            errorLabel.style.display="block";
            tel.focus();
            tel.value = "";
        } else {
            errorLabel.style.display="none";
        }
    }  
}

function listenerInputNumTelephone() {
    const tel = document.getElementById('telephone');
    const regExpTel = /(^\(?\d{3}\)[\s]*\d{3}[-]+\d{4}$|^\d{3}[-]\d{3}[-]+\d{4}$|^\d{3}[.]\d{3}[.]+\d{4}$|\d{10}$)/gm;
    tel.addEventListener("focusout", (evt)=> {
        validerNumeroTelephone(regExpTel);
    });
}

/*********************************************************/
/* Validation du code postal                             */
/*********************************************************/
function validerCodePostal(regExpCodePostal) {
    const codepostal = document.getElementById('codepostal');
    console.log(codepostal.value);
    if (codepostal != null) {    
        let errorLabel = document.getElementById('validerCodePostal');
        
        if(codepostal.value.match(regExpCodePostal) == null){
            errorLabel.style.display="block";
            codepostal.focus();
            codepostal.value = "";
        } else {
            errorLabel.style.display="none";
        }
    }  
}

function listenerInputCodePostal() {
    const codepostal = document.getElementById('codepostal');
    const regCodePostal = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/gm;
    codepostal.addEventListener("focusout", (evt)=> {
        validerCodePostal(regCodePostal);
    });
}


/*********************************************************/
/* Validation de la date de naissance                    */
/*********************************************************/
function  validerDateNaissance(regDate) {
    const datenaissance = document.getElementById('datenaissance');
   
    if (datenaissance != null) {    
        let errorLabel = document.getElementById('validerDateNaissance');
        
        if(datenaissance.value.match(regDate) == null){
            errorLabel.style.display="block";
            datenaissance.focus();
            datenaissance.value = "";
        } else {
            errorLabel.style.display="none";
        }
    }  
}

function listenerInputDateNaissance() {
    const date = document.getElementById('datenaissance');
    const regDate = /((\d{4})[-.\/](0[1-9]|1[0-2])[-\/]([1-9]|[1-2][0-9]|3[0-1])$)|(^([1-9]|[1-2][0-9]|3[0-1])[ ]([A-Za-z])+[ ](\d{4}))$/gm;
    date.addEventListener("focusout", (evt)=> {
        validerDateNaissance(regDate);
    });
}

/*********************************************************/
/* Validation du numero NAS                              */
/*********************************************************/
function  validerNAS(regNAS) {
    const nas = document.getElementById('codenas');
    
    if (nas != null) {    
        let errorLabel = document.getElementById('validerNAS');
        
        if(nas.value.match(regNAS) == null){
            errorLabel.style.display="block";
            nas.focus();
            nas.value = "";
        } else {
            errorLabel.style.display="none";
        }
    }  
}

function listenerInputNAS() {
    const nas = document.getElementById('codenas');
    const regNAS = /^(\d{3})[-](\d{3})[-](\d{3})[-]*|^(\d{3})[ ](\d{3})[ ]*(\d{3})[ ]*|\d{9}$/gm;
    nas.addEventListener("focusout", (evt)=> {
        validerNAS(regNAS);
    });
}


/*********************************************************/
/* Validation du courriel                              */
/*********************************************************/
function  validerCourriel(regCourriel) {
    const courriel = document.getElementById('courriel');
    
    if (courriel != null) {    
        let errorLabel = document.getElementById('validerCourriel');
        
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
    const courriel = document.getElementById('courriel');
    const regCourriel = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm;
    courriel.addEventListener("focusout", (evt)=> {
        validerCourriel(regCourriel);
    });
}

/*********************************************************/
/* Validation de l'adresse internet                      */
/*********************************************************/
function  validerAdresseInternet(regAdresseInternet) {
    const adresseInternet = document.getElementById('adressinternet');
    
    if (adresseInternet != null) {    
        let errorLabel = document.getElementById('validerAdresseInternet');
        
        if(adresseInternet.value.match(regAdresseInternet) == null){
            errorLabel.style.display="block";
            adresseInternet.focus();
            adresseInternet.value = "";
        } else {
            errorLabel.style.display="none";
        }
    }  
}

function listenerInputCourriel() {
    const adresseInternet = document.getElementById('adressinternet');
    const regAdresseInternet = /^(ftp)[:][\/][\/](25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^(http)[s]*[:]+[\/][\/][www]+[.]([a-z0-9_]+)[.]([a-z]+)/gm;
    adresseInternet.addEventListener("focusout", (evt)=> {
        validerAdresseInternet(regAdresseInternet);
    });
}

/*********************************************************/
/* Validation du code de oours                           */
/*********************************************************/
function  validerCodeCours(regExCours) {
    const codecours = document.getElementById('cours');
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
/* Validation du type de carte                              */
/*********************************************************/
function  validerTypeCarte(regExTypeCarte) {
    const typecarte = document.getElementById('typecarte');
    
    if (typecarte != null) {    
        let errorLabel = document.getElementById('validerTypeCarte');
        
        if(typecarte.value.match(regExTypeCarte) == null){
            errorLabel.style.display="block";
            typecarte.focus();
            typecarte.value = "";
        } else {
            errorLabel.style.display="none";
        }
    }  
}

function listenerInputTypeCarte() {
    const typecarte = document.getElementById('typecarte');
    const regExTypeCarte = /((VISA)|(MASTERCARD)|(AMEX))$/gmi;
    typecarte.addEventListener("focusout", (evt)=> {
        validerTypeCarte(regExTypeCarte);
    });
}

/*********************************************************/
/* Validation du numéro de la carte credit               */
/*********************************************************/
function  validerNumeroCarte(regExNumeroCarte) {
    const carte = document.getElementById('numerocarte');
    
    if (carte != null) {    
        let errorLabel = document.getElementById('validerNumeroCarte');
        
        if(carte.value.match(regExNumeroCarte) == null){
            errorLabel.style.display="block";
            carte.focus();
            carte.value = "";
        } else {
            errorLabel.style.display="none";
        }
    }  
}

function listenerInputNumeroCarte() {
    const carte = document.getElementById('numerocarte');
    const regExNumeroCarte = /^((4540)|(3520)|(5312))([-]+\d{4}[-]+\d{4}[-]+\d{4}|\d{12})$/gm;
    carte.addEventListener("focusout", (evt)=> {
        validerNumeroCarte(regExNumeroCarte);
    });
}

/*********************************************************/
/* Validation de la date de expiration de la carte credit*/
/*********************************************************/
function  validerDateExpiration(regExDateExpiration) {
    const dateexpiration = document.getElementById('expirationcarte');
    
    if (dateexpiration != null) {    
        let errorLabel = document.getElementById('validerDateExpiration');
        
        if(dateexpiration.value.match(regExDateExpiration) == null){
            errorLabel.style.display="block";
            dateexpiration.focus();
            dateexpiration.value = "";
        } else {
            errorLabel.style.display="none";
        }
    }  
}

function listenerInputDateExpiration() {
    const dateexpiration = document.getElementById('expirationcarte');
    const regExDateExpiration = /^(0[0-9]|1[0-2])[\/]((2[3-9])|([3-9][0-9]))$/gm;
    dateexpiration.addEventListener("focusout", (evt)=> {
        validerDateExpiration(regExDateExpiration);
        calculerAfficherMontant();
    });
}

function calculerAfficherMontant() {
    //let donnation = parseInt(document.getElementById('donfondation').value);
    let montantTotal = document.getElementById('montantTotal');
    let montant = quantiteCours * 50 + don;
    montantTotal.innerHTML = montant;
}

/*********************************************************/
/* Validation du mot de passe                            */
/*********************************************************/
function   validerMotDePasse(regExMotDePasse) {
    const mdp = document.getElementById('mpd');
    
    if (mdp != null) {    
        let errorLabel = document.getElementById('validerMotDePasse');
        
        if(mdp.value.match(regExMotDePasse) == null){
            errorLabel.style.display="block";
            mdp.focus();
            mdp.value = "";
        } else {
            errorLabel.style.display="none";
        }
    }  
}

function listenerInputMotDePasse() {
    const mdp = document.getElementById('mpd');
    const regExMotDePasse = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[A-Z])(?=.*[_!@#$%&*()\\\/?])[a-zA-Z0-9_!@#$%&*()\\\/?]+$/gm;
    mdp.addEventListener("focusout", (evt)=> {
        validerMotDePasse(regExMotDePasse);
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

