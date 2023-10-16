    let noSel = document.querySelector('#no');  //left side select option
    let yesSel = document.querySelector('#yes');  //right side select option

    let addBtn = document.querySelector('#add');
    let removeBtn = document.querySelector('#remove');


    // domTarget.addEventListener(event,callback)
    addBtn.addEventListener('click' , function(e) {
        e.preventDefault();
       // alert('add btn clicked')
       let selOpt = document.querySelectorAll("#no option:checked");
       console.log('selected options=', selOpt);

       let exsOpt = document.querySelectorAll('#yes option');
       yesSel.replaceChildren(...selOpt, ...exsOpt); // array -> parameter
    });

    removeBtn.addEventListener('click' , function() {
       // alert('remove btn clicked')
    });

    removeBtn.addEventListener('click', function(e) {
        e.preventDefault();
       // alert('add btn clicked')
       let selOpt = document.querySelectorAll("#no option:checked");
        noSel.replaceChildren(...exsOpt, ...selOpt);

       let exsOpt = document.querySelectorAll('#yes option');
      
    });