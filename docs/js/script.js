var currentTime = new Date()
var timeout = 4000;
var theme = 'relax'; // metroui
var base_icon = 'zi-';
var json_file = 'Zenicons.json';
var current_version = '1.1';
var keyPressWait = 500;

function addClickBind(){
    $('.icons-list .icon').click(function(){
        console.log('Icon clicked');
        var icon = $( this ).attr('icon');
        $('.code').html(icon);
        $('.icon-title').html('<span class="' + icon + '"></span> ' + icon);
        $('#contentcopy').val( '<span class="' + icon + '"></span> ' );
        $('#iconInformation').modal({
            showClose: false,
            fadeDuration: 250
        });
        return false;
    });
}

function showNoty(t, m) {
    new Noty({
        theme: theme,
        type: t,
        text: m,
        timeout: timeout,
        killer: true
    }).show();
}

function addCopyBind(){
    $('.copy').click(function(){
        var copyText = document.getElementById("contentcopy");
        /* Select the text field */
        copyText.select();
        /* Copy the text inside the text field */
        document.execCommand("copy");
        showNoty('success', 'Code copied to clipboard!');
    });
}

function addSingleIcon( icon ){
    var icon_div = $('<div></div>');
    icon_div.addClass('icon');
    icon_div.attr('icon' ,base_icon+icon );
    // icon_div.addClass('tooltip');
    icon_div.attr('title',base_icon+icon);
    var span_div = $('<span></span>');
    span_div.addClass(base_icon+icon);
    icon_div.append( span_div );
    $('.icons-list').append(icon_div);
}

function readIcons(  ){
    $.getJSON( json_file, function( data ) {
        // console.log( 'IconSet' , data.iconSets );
        for( i = 0; i < data.iconSets.length; i++ ){
            var selection = data.iconSets[i].selection;
            // console.log( selection );
            for( j = 0 ; j < selection.length; j++ ){
                var icon = selection[j];
                if( parseInt( icon.order ) !== 0 ){
                    // console.log( icon );
                    icons_list.push( icon );
                    addSingleIcon( icon.name );
                }
            }
        }
        $('.icon_loading').hide();
        $('.wrapper-icon-list').show();
        addClickBind();
        addCopyBind();

    });
}

function downloadPack(){
    var path = 'src/';
    var name = 'ZenIcons';
    var extension = '.zip';
	var path = 'https://github.com/danilor/ZenIcons/releases/';
    // $('.download_pack').attr('href',path + name + current_version + extension  );
	$('.download_pack').attr('href',path );
}

function bindSearch(){
    var delay = (function(){
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();
    $('#search').keyup(function(){
        var term = $(this).val();
        delay(()=>{
            searchIcon( term );
        }, keyPressWait );
    });
}

function searchIcon( term ){
    console.log( 'Searching for ' + term );

    if( term === '' ){
        $( '.icons_area .icons-list .icon' ).show();
    }else{
        $( '.icons_area .icons-list .icon' ).each(function(){
            var title = $(this).attr('title');
            if( title.indexOf(term) !== -1 ){
                $( this ).show();
            }else{
                $( this ).hide();
            }
        });
    }
}

$( document ).ready(function(){
    readIcons();
    downloadPack();
    bindSearch();
    $( '#year' ).html( currentTime.getFullYear() );
});