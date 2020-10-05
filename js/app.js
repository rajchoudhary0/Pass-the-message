const frm = document.querySelector('#message-form')

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    let msg = document.getElementById('message');
    if (msg.value == "") {
        const feedback = document.querySelector('.feedback');
        feedback.classList.add('show');
        setTimeout(() => {
            feedback.classList.remove('show')
        }, 2000);

    } else {
        let msgContent = document.querySelector('.message-content');
        msgContent.textContent = msg.value;
        msg.value = '';
    }
})