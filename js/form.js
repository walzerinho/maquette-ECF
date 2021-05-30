    const regex = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";
    const form = document.getElementById("my-form");
    async function handleSubmit(event) {
      event.preventDefault();
      const validText = document.getElementById("valide");
      const inputText = document.querySelector('input[type=text]');
      const inputMail = document.querySelector('input[type=email]');
      const textArea = document.querySelector('textarea');
      const data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then( function valide(response) {
        if (inputText.value == '') {
            inputText.classList.add('invalid-input');
            document.querySelector('.status-text').textContent = "Ce champ est requis";
            throw Error(response.statusText);
        }
        else {inputText.classList.remove('invalid-input');
              document.querySelector('.status-text').textContent = "";}
        if (textArea.value == '') {
            textArea.classList.add('invalid-input');
            document.querySelector('.status-area').textContent = "Ce champ est requis";
            throw Error(response.statusText);
        }
        else {
            textArea.classList.remove('invalid-input');
            document.querySelector('.status-area').textContent = "";
        }
        if (inputMail.value == '') {
            inputMail.classList.add('invalid-input');
            document.querySelector('.status-mail').textContent = "Ce champ est requis";
            throw Error(response.statusText);
        }
        if (inputMail === regex) {
          inputMail.classList.remove('invalid-input');
          document.querySelector('.status-mail').textContent = "";}
        else {
          inputMail.classList.add('invalid-input');
          document.querySelector('.status-mail').textContent = "Merci d'utiliser une adresse email valide";
          throw Error(response.statusText);}
        return response;
    }).then(response => {
        validText.textContent = "Merci, votre message à bien était transmis.";
        form.reset()
      }).catch(error => {
        validText.textContent = "Veuillez corriger vos erreurs."
      });
    }
    form.addEventListener("submit", handleSubmit);