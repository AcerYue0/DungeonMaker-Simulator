init();

// initialize
function init() {
    // starting setting 3x4
    operateCells(3, 4);
}

let flag;
let mTdElem;
$('.td-monster').on('click', function(tdElem) {
    flag = true;
    mTdElem = tdElem;
});

$('.table-room').on('click', function(tableElem) {
    if (flag) {
        if (tableElem.target.localName == 'img') {
            mTdElem.target.src = tableElem.target.src;

            flag = false;
            modalClose();
        }
    }
});

// dungeon tiles
$('.btn-dungeon').on('click', function (elem) {
    const id = elem.target.id;
    operateCells(id/10|0, id%10);
});

// specoal dungeon tiles
$('.btn-spDungeon').on('click', function (spElem){
    const id = spElem.target.id;
    switch(id){
        case "Spiderweb":
            operateCells(5, 5);
            $('.td-Sp').prop('disabled', true);
            $('.img-Sp').attr('src', './img/border_empty.png');
            break;
        case "Jormungand":
            operateCells(5, 5);
            $('.td-Jo').prop('disabled', true);
            $('.img-Jo').attr('src', './img/border_empty.png');
            break;
        case "Ant":
            operateCells(5, 5);
            $('.td-Ant').prop('disabled', true);
            $('.img-Ant').attr('src', './img/border_empty.png');
            break;
        case "Box":
            operateCells(5, 5);
            $('.td-Box').prop('disabled', true);
            $('.img-Box').attr('src', './img/border_empty.png');
            break;
        case "Pause":
            operateCells(5, 5);
            $('.td-Pa').prop('disabled', true);
            $('.img-Pa').attr('src', './img/border_empty.png');
            break;
        case "Exhibition":
            operateCells(5, 5);
            $('.td-Exh').prop('disabled', true);
            $('.img-Exh').attr('src', './img/border_empty.png');
            break;
    }
});


// camera
$('#btn-camera').on('click', function () {
    // $('#table-monster').find('td').each(function(index, elem) {
    //     elem.style.border = 'none';
    // });

    html2canvas(document.querySelector("#table-monster")).then(canvas => {
        // $('#table-monster').find('td').each(function(index, elem) {
        //     elem.style.border = '1px dashed';
        // });

        const ctx = canvas.getContext('2d');
        console.dir(canvas);

        $('#img-out').append(canvas);
        $('#img-out').append('　　');
    });
});

function modalClose() {
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    $('#myModal').modal('hide');
}

// dungeon size onChange
function operateCells(row, col) {
    $('.td-monster').prop('disabled', false);
    $('.img-monster').attr('src', './img/border_dashed.png');
    switch(row) {
        case 3:
            $('.tr-1').hide();
            $('.tr-5').hide();
            break;
        case 4:
            $('.tr-1').show();
            $('.tr-5').hide();
            break;
        case 5:
            $('.tr-1').show();
            $('.tr-5').show();
            break;
    }

    switch(col) {
        case 3:
            $('.td-4').hide();
            $('.td-5').hide();
            $('.td-6').hide();
            break;
        case 4:
            $('.td-4').show();
            $('.td-5').hide();
            $('.td-6').hide();
            break;
        case 5:
            $('.td-4').show();
            $('.td-5').show();
            $('.td-6').hide();
            break;
        case 6:
            $('.td-4').show();
            $('.td-5').show();
            $('.td-6').show();
            break;
    }
}
