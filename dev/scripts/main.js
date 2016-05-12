window.onload = function () {
    'use strict';
    var firstImage = document.getElementById('one'),
        secondImage = document.getElementById('two');
    var container = document.getElementById('container');

    function translateCircles() {
        var offset = (Math.min(-120, pageYOffset - container.offsetTop));

        firstImage.style.transform = 'translate('+ Math.abs(offset) +'px)';
        secondImage.style.transform = 'translate('+ offset +'px)';
    }

    document.addEventListener(
        'scroll',
        translateCircles,
        false
    );

    var body = document.getElementsByTagName('body')[0];
   //TRANSPARENT LAYER
    var transparentLayer = document.createElement('div');
    transparentLayer.id = 'transparentLayer';
    body.appendChild(transparentLayer);

    var modalButton = document.getElementById('modalbutton');

    //OPEN MODAL BOX FUNCTION
    function openModal () {
        transparentLayer.style.display = 'block';
    }

    //CHANGE DATA TEXT
    function eraseText (){
        document.getElementById('youbecome').innerHTML = '        ';
        document.getElementById('modalbutton').style.color = '#353535';
    }
    function originalText (){
        document.getElementById('youbecome').innerHTML = 'YOU ARE A ';
        document.getElementById('addedText').innerHTML = '';
        document.getElementById('modalbutton').style.color = '#C0CF3A';
        document.getElementById('modalbutton').hover.style.color = 'black';
    }
    function addText(){
        document.getElementById('addedText').innerHTML = 
        'A SINGLE NODE IN A NETWORK';
    }
    modalButton.addEventListener('click', function(e){
        e.preventDefault();
        openModal();
        eraseText();
        addText();
    },false);

    //EXIT MODAL BOX FUNCTION
    function exitModal () {
        transparentLayer.style.display = 'none';
        originalText();
    }
    transparentLayer.addEventListener('click',exitModal,false);
    
    //EXIT BY esc
    window.onkeydown = function(e){
        if (e.keyCode == 27){
            exitModal();
        }
    };

    var deathCount = document.getElementById('deathYear');
    var counterFunction = null;

    function incrementDeathCount() {

        if (!isElementInViewport(deathCount)) {
            clearTimeout(counterFunction);
            counterFunction = null;
            return;
        }else if (isElementInViewport(deathCount) && counterFunction == null) {
            counterFunction = setInterval(function(){addDeathCount();}, 100);
        }
    }

    function addDeathCount() {
        var currentCount = parseInt(deathCount.innerHTML);
        if (currentCount < 2065) {
            deathCount.innerHTML = currentCount + 2;
        } else {
            clearTimeout(counterFunction);
            counterFunction = null;
        }
    }

    // checks if 'el' is visible in current window
    // source: 
    function isElementInViewport(el) { 
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || 
            document.documentElement.clientHeight) && 
            rect.right <= (window.innerWidth 
            || document.documentElement.clientWidth) 
        );
    }

    document.addEventListener(
        'scroll', 
        incrementDeathCount,
        false
    );

    //OBITUARY GENERATE
    var tryit = document.getElementById('tryit');
    var name = document.getElementsByClassName('name');
    var last_login = document.getElementsByClassName('last_login');
    var education = document.getElementsByClassName('education');
    var achievement = document.getElementsByClassName('achievement');
    var blank = document.getElementsByClassName('blank');
    var partner = document.getElementsByClassName('partner');

    function generateName(){
        for (var i=0; i< name.length; i++){
            name[i].style.color = 'white';
            name[i].style.backgroundColor = 'black';
            name[i].innerHTML = 'Jasmine Oh';
        }
    }
    function generateLogindate(){
        for (var i=0; i< last_login.length; i++){ 
            last_login[i].style.color = 'white';
            last_login[i].style.backgroundColor = 'black';
            last_login[i].innerHTML = 'May 12,2016';
        } 
    }
    function replaceWords(){
        document.getElementById('number_of_friends').innerHTML = 'over 2,000';
        document.getElementById('birthday').innerHTML = 'June 16, 1992';
        document.getElementById('obituaryName').innerHTML = 
        'CELEBRATING THE LIFE OF JASMINE OH';
        document.getElementById('hometown').innerHTML = 'Seoul, South Korea';
        document.getElementById('location').innerHTML = 'New York, NY';
        document.getElementById('moveDate').innerHTML = 'June, 3, 2015';
        document.getElementById('major').innerHTML = 
        'Design and Technology';
        document.getElementById('group').innerHTML = 
        'MFADT Class of 2017, NYC Gypsy Housing, MPK Summer Design Intern Group';
        document.getElementById('work').innerHTML = 
        'Strategic Partnership Intern at Christies Auctions House';
        document.getElementById('industry').innerHTML = 'Arts';
        document.getElementById('event').innerHTML = 'Parsons Gala 2016';
        document.getElementById('friends').innerHTML = 
        'Shikha Singh and Priyal Parikh';
        document.getElementById('eventDate').innerHTML = 'May 5, 2016';
        document.getElementById('ad').innerHTML = 'traveling';
        document.getElementById('visited').innerHTML = 'Greece, China, and London';
        document.getElementById('hobby').innerHTML = 'velcro, cleaning, cooking';
        document.getElementById('relationship_status').innerHTML = 
        'domestic partnership';  
        document.getElementById('relationship_duration').innerHTML = 
        '6 years';
        document.getElementById('family').innerHTML = 
        'brother Robin Oh';       


    }
    
    function changeStyle(){
        for (var i=0; i< blank.length; i++){ 
            blank[i].style.color = 'white';
            blank[i].style.backgroundColor = 'black';    
        } 
    }
    function generateEducation(){
        for (var i=0; i< education.length; i++){ 
            education[i].innerHTML = 'Parsons School of Design';
        } 
    }
    function generateAcheivement(){
        for (var i=0; i< achievement.length; i++){ 
            achievement[i].innerHTML = 'Candy Crush';
        } 
    }
    function generatePartnername(){
        for (var i=0; i< partner.length; i++){ 
            partner[i].innerHTML = 'Sophia Garrow';
        } 
    }
    tryit.addEventListener('click', function(e){
        e.preventDefault();
        replaceWords();
        generateName();
        generateLogindate();
        generateEducation();
        generateAcheivement();
        generatePartnername();
        changeStyle();
    },false);

    
};


