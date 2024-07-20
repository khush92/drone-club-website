document.addEventListener("DOMContentLoaded",() => {
    const contactForm =document.querySelector('section#contact form');
    const queryForm = document.querySelector('section#Our-services form#query-form');
    const registrationForm = document.querySelector('section#registration form#registration-form');
    const registrationPageForm = document.querySelector('section#registration form#registration-form');

    if (contactForm) contactForm.addEventListener('submit', handleFormSubmit);
    if (queryForm) queryForm.addEventListener('submit', handleFormSubmit);
    if (registrationForm) registrationForm.addEventListener('submit', handleFormSubmit);
    if (registrationPageForm) registrationPageForm.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const formData = newFormData(form);
        const data = Object.fromEntries(formData.entries());
        fetch('form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(data => {
            alert('Form submitted successfully!');
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again.');
        });
    }
    
});