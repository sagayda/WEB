function selectRadio(radioId){
    var radioElement = document.getElementById(radioId);
    radioElement.checked = true;

    var blocks = document.querySelectorAll('div[id^="block"]');

    for (var i = 0; i < blocks.length; i++) {
        blocks[i].style.display = 'none';
    }

    var elementToDisplay = document.getElementById("block_"+radioId);
    elementToDisplay.style.display = 'block';
}

function selectLab(lab)
{
    var labButtons = document.querySelectorAll('button[id^="labButton"');
    for (var i = 0; i < labButtons.length; i++) {
        labButtons[i].disabled = false;
    }

    var pressedButton = document.querySelector('[id*="' + lab + '"]');
    pressedButton.disabled = true;

    var iframe = document.getElementById('labFrame');
    iframe.src = lab + '.html';
}

function selectTask(task)
{
    var labButtons = document.querySelectorAll('button[id^="taskButton"');
    for (var i = 0; i < labButtons.length; i++) {
        labButtons[i].disabled = false;
    }

    var pressedButton = document.querySelector('[id*="' + task + '"]');
    pressedButton.disabled = true;

    var blocks = document.querySelectorAll('section[id^="block"]');

    for (var i = 0; i < blocks.length; i++) {
        blocks[i].style.display = 'none';
    }

    var elementToDisplay = document.getElementById("block_" + task);
    elementToDisplay.style.display = 'block';
}