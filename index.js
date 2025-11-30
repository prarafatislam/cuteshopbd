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

        if(body.classList.contains('dark')){
            modeText.innerText = 'Light Mode'
        }else{
            modeText.innerText = 'Dark Mode'
        }
    });