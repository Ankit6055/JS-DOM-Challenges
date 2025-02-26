const nameInput = document.getElementById('nameInput');
const jobInput = document.getElementById('jobInput');
const ageInput = document.getElementById('ageInput');
const bioInput = document.getElementById('bioInput');
const nameDisplay = document.getElementById('nameDisplay');
const jobDisplay = document.getElementById('jobDisplay');
const ageDisplay = document.getElementById('ageDisplay');
const bioDisplay = document.getElementById('bioDisplay');

nameInput.addEventListener('input', function() {
    nameDisplay.textContent = this.value || 'Not Provided';
});

jobInput.addEventListener('input', function() {
    jobDisplay.textContent = this.value || 'Not Provided';
});

ageInput.addEventListener('input', function() {
    ageDisplay.textContent = this.value || 'Not Provided';
});

bioInput.addEventListener('input', function() {
    bioDisplay.textContent = this.value || 'Not Provided';
});