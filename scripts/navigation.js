$(document).ready(function () {

    let currentViewIndex = 0;

    toggleViews(currentViewIndex);

    $('#nextPageButton').click(function () {
        currentViewIndex++
        toggleViews(currentViewIndex);
    });

    $('#previousPageButton').click(function () {
        currentViewIndex--
        toggleViews(currentViewIndex);
    });

    $('.bordBtn').click(function () {
        currentViewIndex++
        toggleViews(currentViewIndex);
    });

});

//////////////////////////////// Function ////////////////////////////////

function toggleViews(currentViewIndex) {
    console.log(currentViewIndex);
    $('.mainDiv').addClass("none");
    $('#previousPageButton').removeClass("none")
    $('#nextPageButton').removeClass("none")
    switch (currentViewIndex) {
        case 0:
            $('#home').removeClass("none");
            $('#previousPageButton').addClass("none")
            $('#nextPageButton').addClass("none")
            break;
        case 1:
            $('#weSplitch').removeClass("none");
            break;
        case 2:
            $('#newSocialNetwork').removeClass("none");
            break;
        case 3:
            $('#passion').removeClass("none");
            break;
        case 4:
            $('#emotion').removeClass("none");
            break;
        case 5:
            $('#connect').removeClass("none");
            break;
        case 6:
            $('#exchange').removeClass("none");
            break;
        case 7:
            $('#beFirst').removeClass("none");
            break;
        case 8:
            $('#toGetBadge').removeClass("none");
            break;
        case 9:
            $('#enterInGame').removeClass("none");
            $('#nextPageButton').addClass("none")
            break;
        case 10:
            $('#reserve').removeClass("none");
            // $('#nextPageButton').addClass("none")
            break;
        case 11:
            $('#putAside').removeClass("none");
            break;
        case 12:
            $('#whatYouThrill').removeClass("none");
            break;
        case 13:
            $('#tags').removeClass("none");
            // $('#nextPageButton').addClass("none")
            tagAppear(500);

            $('.tags').delegate('p', 'click', function () {
                $(this).toggleClass('selectedTag');
            });

            break;
        case 14:
            $('#cantWaitToThrill').removeClass("none");
            break;
        case 15:
            $('#whatBadge').removeClass("none");
            // $('#nextPageButton').addClass("none")
            break;
        case 16:
            $('#goodChoice').removeClass("none");
            break;
        case 17:
            $('#whatMail').removeClass("none");
            // $('#nextPageButton').addClass("none")
            break;
        case 18:
            $('#prepareProfile').removeClass("none");
            break;
        case 19:
            $('#followUs').removeClass("none");
            $('#nextPageButton').addClass("none")
            break;
        default:
            break;
    }
}

function tagAppear(time) {

    const tags = document.querySelectorAll('.tags p');

    for (let i = 0; i < tags.length; i++) {
        setTimeout(function () {
            if (tags[i].classList.contains('first')) {
                tags[i].classList.add('appear');
            }
            setTimeout(function () {
                if (tags[i].classList.contains('second')) {
                    tags[i].classList.add('appear');
                }
                setTimeout(function () {
                    if (tags[i].classList.contains('third')) {
                        tags[i].classList.add('appear');
                    }
                    setTimeout(function () {
                        if (tags[i].classList.contains('fourth')) {
                            tags[i].classList.add('appear');
                        }
                    }, time);
                }, time);
            }, time);
        }, time);
    }
}