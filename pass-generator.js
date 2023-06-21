const formEl = document.querySelector('.form');
const passwordEl = document.querySelector('.password');

formEl.addEventListener('submit', passGenerator);

function passGenerator(evt) {
    evt.preventDefault();
    const data = doData(evt.currentTarget);

    const length = Number(data.length);
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    if (data.uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (data.numbers) characters += '1234567890';
    if (data.specialCharacters) characters += '!@#$%^&*()_-?,.[]{}~';
    
    passwordEl.textContent = createPass(characters, length);
};

function doData(target) {
    const formData = new FormData(target);
    const data = {};
    formData.forEach((value, name) => {
        data[name] = value;
    });
    return data;
};
function createPass(characters, length) {
    let password = '';
    for (let i = 0; i <= length; i += 1) {
        password += characters[Math.floor(Math.random() * characters.length)];
    };
    return password;
};