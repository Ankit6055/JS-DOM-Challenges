const bodySelector = document.getElementById('body');
const BulbTop = document.getElementById('bulb');
const toggleButton = document.getElementById('toggleButton');
const statusValue = document.getElementById('status');

toggleButton.addEventListener('click', () => {
    if (toggleButton.innerText === 'Turn On') {
        bodySelector.style.backgroundColor = '#2C2C2C';
        bodySelector.style.color = '#FFFFFF';
        BulbTop.style.backgroundColor = '#EEBC0F'
        statusValue.innerText = 'Status: On';
        statusValue.style.color = '#FFFFFF';
        toggleButton.innerText = 'Turn Off';
    }
    else {
        bodySelector.style.backgroundColor = '';
        bodySelector.style.color = '';
        BulbTop.style.backgroundColor = ''
        statusValue.innerText = 'Status: Off';
        statusValue.style.color = '';
        toggleButton.innerText = 'Turn On';
    }  
});