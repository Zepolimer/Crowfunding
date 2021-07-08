// Drop down menu when you click on the hamburger
let dropDownBtn = document.querySelector('.dropbtn');
let wrapperMenu = document.querySelector('.menu');
let hamburger = document.querySelector('.burger');
let cross = document.querySelector('.close')

// Radio btn for toggle
const radioOne = document.querySelector('.radio1');
const radioTwo = document.querySelector('.radio2');
const radioThree = document.querySelector('.radio3');
const pledgeOne = document.querySelector('.pledge1');
const pledgeTwo = document.querySelector('.pledge2');
const pledgeThree = document.querySelector('.pledge3');
const modalOne = document.querySelector('.modal1');
const modalTwo = document.querySelector('.modal2');
const modalThree = document.querySelector('.modal3');

// Show and hide "Pledge part"
const backProject = document.querySelector('.project');
const modalContainer = document.querySelector('.select-modal');
const grayClose = document.querySelector('.crossgray');

const selectReward = document.querySelectorAll('.reward')

// Validate pledge amount
const btnPledge = document.querySelectorAll('.pledge-btn');
const thanks = document.querySelector('.thanks')

// Close "thanks" part
const btnthanks = document.querySelector('.gotit');


// DROPDOWN MENU 
dropDownBtn.addEventListener('click', () => {
    if (wrapperMenu.style.display=="block") {
        wrapperMenu.style.display="none";
        hamburger.style.display="block";
        cross.style.display="none";
    } else {
        wrapperMenu.style.display="block";
        hamburger.style.display="none";
        cross.style.display="block";
    }
})



// Back this project : show pledge's choices 
backProject.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if(modalContainer.style.display==="block") {
        modalContainer.style.display="none";
    } else {
        modalContainer.style.display="block";
    }
})


// Back this project : close the window with the cross
grayClose.addEventListener('click', () => {
    if(modalContainer.style.display=="block") {
        modalContainer.style.display="none";
    } else {
        modalContainer.style.display="block";
    }
})


// Radio buttons : show "Enter your pledge"
radioOne.addEventListener('click', () => {
    if(radioOne.checked) {
        pledgeOne.classList.add('show');
        pledgeTwo.classList.remove('show');
        pledgeThree.classList.remove('show');
        modalOne.style.borderColor = '#3cb4ac'
        modalTwo.style.borderColor = 'rgba(122, 122, 122, 0.4)'
        modalThree.style.borderColor = 'rgba(122, 122, 122, 0.4)'
    } else {
        pledgeOne.classList.remove('show');
        modalOne.style.borderColor = 'unset'
    }
})

radioTwo.addEventListener('click', () => {
    if(radioTwo.checked) {
        pledgeTwo.classList.add('show');
        pledgeOne.classList.remove('show');
        pledgeThree.classList.remove('show');
        modalTwo.style.borderColor = '#3cb4ac'
        modalOne.style.borderColor = 'rgba(122, 122, 122, 0.4)'
        modalThree.style.borderColor = 'rgba(122, 122, 122, 0.4)'
    } else {
        pledgeTwo.classList.remove('show');
    }
})

radioThree.addEventListener('click', () => {
    if(radioThree.checked) {
        pledgeThree.classList.add('show');
        pledgeTwo.classList.remove('show');
        pledgeOne.classList.remove('show');
        modalThree.style.borderColor = '#3cb4ac'
        modalTwo.style.borderColor = 'rgba(122, 122, 122, 0.4)'
        modalOne.style.borderColor = 'rgba(122, 122, 122, 0.4)'
    } else {
        pledgeThree.classList.remove('show');
    }
})


// Open "Thanks" part & close "Back this project"
btnPledge.forEach(btn => btn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if (modalContainer.style.display === "block") {
        modalContainer.style.display="none";
        thanks.style.display="block";
    } else {
        modalContainer;style.display="block";
        thanks.style.display="none"
    }
}))

// Close "Thanks for your support!"
btnthanks.addEventListener('click', () => {
    if (thanks.style.display==="block") {
        thanks.style.display="none";
    } else {
        thanks.style.display="block";
    }
})

selectReward.forEach(btn => btn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if(modalContainer.style.display=="block") {
        modalContainer.style.display="none";
    } else {
        modalContainer.style.display="block";
    }
}))