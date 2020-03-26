$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $('.up').fadeIn(300);
        } else {
            $('.up').fadeOut(300);
        }
    });
    $("a[href='#up']").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });

    function clickRenameTag(id1, id2, id3) {
        document.getElementById(id1).onclick = function () {
            let title = document.getElementById(id2).innerHTML,
                tagTitle = document.getElementById(id3);
            tagTitle.innerHTML = title;
        };
    }

    function autoRenameTag(id1, id2) {
        let title = document.getElementById(id1).innerHTML,
            tagTitle = document.getElementById(id2);
        tagTitle.innerHTML = title;
    }
    autoRenameTag('title', 'tag_title');
    clickRenameTag('next', 'title', 'tag_title');

    let active = 0;
    document.getElementById('nonHidden').onclick = function () {
        if (active == 0) {
            document.getElementById('nonHidden').classList.add('nonHidden-active');
            $('.portfolio').fadeIn(300);
            active += 1;
        } else {
            $('.nonHidden').fadeOut(0);
            document.getElementById('nonHidden').classList.remove('nonHidden-active');
            $('.portfolio').fadeOut(300);
            setInterval(function () {
                $('.nonHidden').fadeIn(500);
            }, 1500);
            active = 0;
        }
    };
});