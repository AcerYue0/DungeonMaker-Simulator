init();

// 初期化処理
function init() {
    // 初期配置は3×4にする
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

// ダンジョンマスボタン押下時の処理
$('.btn-dungeon').on('click', function (elem) {
    const id = elem.target.id;
    operateCells(id/10|0, id%10);
});

// カメラボタン押下時の処理
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

// ダンジョンマスのサイズを動的に変更
function operateCells(row, col) {
    // 行方向セルの表示・非表示設定
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

    // 列方向セルの表示・非表示設定
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
