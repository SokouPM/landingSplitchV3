$(document).ready(function () {
    let currentViewIndex = 0;
    let lastScrollTop = 0;

    toggleViews(currentViewIndex);

    $(window).scroll(function () {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            currentViewIndex++
        } else {
            currentViewIndex--
        }
        lastScrollTop = st;
        toggleViews(currentViewIndex);
    });

    function toggleViews(currentViewIndex) {
        // $('.mainDiv').addClass("none");
        switch (currentViewIndex) {
            case 0:
                // $('#index').removeClass("none");
                break;
            case 1:
                // $('#weSplitch').removeClass("none");
                break;
            case 2:
                // $('#newSocialNetwork').removeClass("none");
                break;
            case 3:
                // $('#passion').removeClass("none");
                break;
            case 4:
                // $('#emotion').removeClass("none");
                break;
            case 5:
                // $('#connect').removeClass("none");
                break;
            case 6:
                // $('#exchange').removeClass("none");
                break;
            case 7:
                // $('#beFirst').removeClass("none");
                break;
            case 8:
                // $('#enterInGame').removeClass("none");
                break;
            case 9:
                // $('#reserve').removeClass("none");
                break;
            case 10:
                // $('#putAside').removeClass("none");
                break;
            case 11:
                // $('#whatYouThrill').removeClass("none");
                break;
            default:
                break;
        }
    }

    $('.bordBtn').click(function () {
        console.log("click")
        currentViewIndex++
        toggleViews(currentViewIndex);
    })
});