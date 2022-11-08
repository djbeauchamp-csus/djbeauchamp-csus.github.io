function bigger(){

    alert("Hello World!");
    document.getElementById('textbox').style.fontSize = '24px';

}

function fancify(){

    alert("fancifying text!");
    document.getElementById('textbox').style.fontWeight = 'bold';
    document.getElementById('textbox').style.color = 'blue';
    document.getElementById('textbox').style.textDecoration = 'underline';


}

function boringify(){

    alert("boringifying text!");
    document.getElementById('textbox').style.fontWeight = 'normal';
    document.getElementById('textbox').style.color = 'black';
    document.getElementById('textbox').style.textDecoration = 'none';

}

function moo(){

    document.getElementById('textbox').style.textTransform='uppercase';

    let myText =  document.getElementById('textbox').value;

    let myTextSplit = myText.split(".");

    let myMooText = myTextSplit.join("-Moo. ");

    document.getElementById('textbox').value = myMooText;


}