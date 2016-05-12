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

   //MODAL BOX
    // var addedText = document.createElement('div');
    // addedText.id = 'addedText';
    // // modalBox.textContent = 'This is modal.';
    // addedText.appendChild(document.createTextNode('a single node'));
    
    // body.appendChild(addedText);

    var modalButton = document.getElementById('modalbutton');
    var data_text_box = document.getElementById('data-text-box');
    //OPEN MODAL BOX FUNCTION
    function openModal () {
        transparentLayer.style.display = 'block';
        data_text_box.style.height = '100vh';
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
};


