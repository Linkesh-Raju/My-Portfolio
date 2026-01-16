// Replace the link below with the URL you just copied
const scriptURL = 'https://script.google.com/macros/s/AKfycbyn4Ry56O-OPQcSTUh_p1VMtDjyz4lyzJSkok_peqOvk43-6eUqJxIzdRAeS9cjBhbI/exec'; 

const form = document.getElementById('contact-form');
const btn = document.getElementById('submit-btn');

form.addEventListener('submit', e => {
    e.preventDefault();
    btn.disabled = true;
    btn.innerText = "Sending...";
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            alert("Success! Your message has been saved to the spreadsheet.");
            form.reset();
            btn.disabled = false;
            btn.innerText = "Send Message";
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert("Oops, something went wrong.");
            btn.disabled = false;
            btn.innerText = "Send Message";
        });
});