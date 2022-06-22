window.addEventListener('load',()=>{
    var form = document.querySelector('#numberForm');
    form.addEventListener('submit',()=>{
        var number = form.querySelector('input').value;
        alert( number +'저장 완료');
    });
});