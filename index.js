const body = document.querySelector('body'),
    sidebar = body.querySelector('.sidebar'),
    main = body.querySelector('.toggle-left'),
    toggle = body.querySelector('.toggle'),
    searchBtn = body.querySelector('.search-box'),
    modeSwitch = body.querySelector('.toggle-switch'),
    modeText = body.querySelector('.mode-text');


    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('close');
    });

    main.addEventListener('click', () => {
        sidebar.classList.toggle('close');
    })

    searchBtn.addEventListener('click', () => {
        sidebar.classList.remove('close');
    });

    modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');
    main.addEventListener('click', () => {
    sidebar.classList.toggle('close');
});











    // মোড টেক্সট পরিবর্তন
    if(body.classList.contains('dark')){
        modeText.innerText = 'Light Mode';
        localStorage.setItem('mode', 'dark');   // লোকালস্টোরেজে সেভ
    } else {
        modeText.innerText = 'Dark Mode';
        localStorage.setItem('mode', 'light');  // লোকালস্টোরেজে সেভ
    }
});

// পেজ লোড হলে মোড রিস্টোর করা
document.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem('mode');

    if(savedMode === 'dark'){
        body.classList.add('dark');
        modeText.innerText = 'Light Mode';
    } else {
        body.classList.remove('dark');
        modeText.innerText = 'Dark Mode';
    }
});



    