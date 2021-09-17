$(document).ready(function () {

    let currentViewIndex = 0;
    toggleViews(currentViewIndex);

    $('#nextPageButton').click(function () {
        stopTimeOut();
        currentViewIndex++
        toggleViews(currentViewIndex);
    });

    $('#previousPageButton').click(function () {
        stopTimeOut();
        currentViewIndex--
        toggleViews(currentViewIndex);
    });

    $('.bordBtn').click(function () {
        currentViewIndex++
        toggleViews(currentViewIndex);
    });

    // Main tag categories buttons
    $('#Creativity').click(function () {
        currentViewIndex++
        toggleViews(currentViewIndex);
    })
    // $('#Sport').click(function () {
    //     currentViewIndex = 15;
    //     toggleViews(currentViewIndex);
    // })
    // $('#Discovery').click(function () {
    //     currentViewIndex = 16;
    //     toggleViews(currentViewIndex);
    // })

    // $('#hobby').click(function () {
    //     currentViewIndex = 17;
    //     toggleViews(currentViewIndex);
    // })
    // Tag page categories buttons
    // $('.tagsButton').click(function () {
    //     currentViewIndex = 18;
    //     toggleViews(currentViewIndex);
    // })
});

//////////////////////////////// Function ////////////////////////////////

function toggleViews(currentViewIndex) {
    $('.mainDiv').addClass("none");
    $('#previousPageButton').removeClass("none");
    $('#nextPageButton').removeClass("none");
   switch (currentViewIndex) {
        case 0:
            $('#home').removeClass("none");
            $('#previousPageButton').addClass("none");
            $('#nextPageButton').addClass("none");
            break;
        case 1:
            $('#weSplitch').removeClass("none");
            // $('#nextPageButton').addClass("none");
            break;
        case 2:
            $('#newSocialNetwork').removeClass("none");
            // $('#nextPageButton').addClass("none");
            break;
        case 3:
            $('#passion').removeClass("none");
            // $('#nextPageButton').addClass("none");
            break;
        // case 4:
             $('#howBasket').removeClass("none");
             // $('#nextPageButton').addClass("none")
             break; 
        case 4:
            $('#exchange').removeClass("none");
            // $('#nextPageButton').addClass("none");

            $('#exchangeImg1').click(function () {
                $('#gameDegrade').toggleClass("degradeH2");
            });

            $('#exchangeImg2').click(function () {
                $('#exchangeDegrade').toggleClass("degradeH2");
            });

            $('#exchangeImg3').click(function () {
                $('#purposeDegrade').toggleClass("degradeH2");
            });

            setTimeout(function () {
                $('#exchangeImg2').removeClass("exchangeImg2EntranceAnim").addClass("popupAnim");
                setTimeout(function () {
                    $('#exchangeImg3').removeClass("exchangeImg3EntranceAnim").addClass("popupAnim");
                    setTimeout(function () {
                        $('#exchangeImg1').removeClass("exchangeImg1EntranceAnim").addClass("popupAnim");
                        setTimeout(function () {
                            $('#exchangeImg1').removeClass("popupAnim");
                            $('#exchangeImg2').removeClass("popupAnim");
                            $('#exchangeImg3').removeClass("popupAnim");
                        }, 400);
                    }, 200);
                }, 200);
            }, 1000);
            break;
        case 5:
            $('#emotion').removeClass("none");

            new Splide('.splide', {
                type: 'loop',
                perPage: 5,
                perMove: 1,
                gap: 20,
                width: '85%',
                autoplay: true,
                interval: 1500,
                pagination: false,
                trimSpace: true,
                classes: {
                    arrows: 'splide__arrows',
                    arrow: 'splide__arrow',
                    next: 'nextPlus',
                },
                breakpoints: {
                    '1600': {
                        perPage: 4,
                    },
                    '1300': {
                        perPage: 3,
                    },
                    '965': {
                        perPage: 2,
                        width: '92%'
                    },
                    '620': {
                        perPage: 1,
                        width: '100%'
                    }
                }
            }).mount();
            break;
        case 6:
            $('#connect').removeClass("none");
            break;
        case 7:
            $('#beFirst').removeClass("none");

            setTimeout(function () {
                $('#bckGrndImgBefirs1').removeClass('imgBefirstEnterTopLeft').addClass('imgBefirstAnim1');
                $('#bckGrndImgBefirs2').removeClass('imgBefirstEnterTopLeft').addClass('imgBefirstAnim2');
                $('#bckGrndImgBefirs3').removeClass('imgBefirstEnterTopLeft').addClass('imgBefirstAnim4');
                $('#bckGrndImgBefirs4').removeClass('imgBefirstEnterTop').addClass('imgBefirstAnim3');
                $('#bckGrndImgBefirs5').removeClass('imgBefirstEnterTop').addClass('imgBefirstAnim4');
                $('#bckGrndImgBefirs6').removeClass('imgBefirstEnterTopRight').addClass('imgBefirstAnim2');
                $('#bckGrndImgBefirs7').removeClass('imgBefirstEnterTopRight').addClass('imgBefirstAnim1');
                $('#bckGrndImgBefirs8').removeClass('imgBefirstEnterTopRight').addClass('imgBefirstAnim3');
                $('#bckGrndImgBefirs9').removeClass('imgBefirstEnterBottomLeft').addClass('imgBefirstAnim3');
                $('#bckGrndImgBefirs10').removeClass('imgBefirstEnterBottomLeft').addClass('imgBefirstAnim4');
                $('#bckGrndImgBefirs11').removeClass('imgBefirstEnterBottomLeft').addClass('imgBefirstAnim1');
                $('#bckGrndImgBefirs12').removeClass('imgBefirstEnterBottom').addClass('imgBefirstAnim4');
                $('#bckGrndImgBefirs13').removeClass('imgBefirstEnterBottom').addClass('imgBefirstAnim2');
                $('#bckGrndImgBefirs14').removeClass('imgBefirstEnterBottomRight').addClass('imgBefirstAnim3');
                $('#bckGrndImgBefirs15').removeClass('imgBefirstEnterBottomRight').addClass('imgBefirstAnim2');
                $('#bckGrndImgBefirs16').removeClass('imgBefirstEnterBottomRight').addClass('imgBefirstAnim1');
                $('#bckGrndImgBefirs17').removeClass('imgBefirstEnterTopLeft').addClass('imgBefirstAnim1');
                $('#bckGrndImgBefirs18').removeClass('imgBefirstEnterTopRight').addClass('imgBefirstAnim2');
            }, 1000);

            break;
        case 8:
            $('#toGetBadge').removeClass("none");
            // $('#nextPageButton').addClass("none");
            break;
        case 9:
            $('#enterInGame').removeClass("none");
            // $('#nextPageButton').addClass("none");
            break;
        case 10:
            $('#reserve').removeClass("none");
            // $('#nextPageButton').addClass("none");
           break;
        case 11:
            $('#putAside').removeClass("none");
            break;
        case 12:
            $('#whatYouThrill').removeClass("none");
            // $('#nextPageButton').addClass("none");
           break;
        case 13:
            $('#CreativityTags').removeClass("none");
            // $('#nextPageButton').addClass("none");
            tagAppear(500);

            $('.tags').delegate('p', 'click', function () {
                $(this).toggleClass('selectedTag');
            });
            break;
        case 14:
            $('#SportTags').removeClass("none");
            // $('#nextPageButton').addClass("none");
            tagAppear(500);

            $('.tags').delegate('p', 'click', function () {
                $(this).toggleClass('selectedTag');
            });
            break; 
        case 15:
            $('#DiscoveryTags').removeClass("none");
            // $('#nextPageButton').addClass("none");
            tagAppear(500);

            $('.tags').delegate('p', 'click', function () {
                $(this).toggleClass('selectedTag');
            });
            break;
        case 16:
            $('#HobbyTags').removeClass("none");
            // $('#nextPageButton').addClass("none");
            tagAppear(500);

            $('.tags').delegate('p', 'click', function () {
                $(this).toggleClass('selectedTag');
            });
            break;
        case 17:
            $('#cantWaitToThrill').removeClass("none");
            // $('#nextPageButton').addClass("none");
            break;
        case 18: 
            $('#whatBadge').removeClass("none");
            // $('#nextPageButton').addClass("none");
            $('.badgeImg').click(function () {
                $('.badgeImg').removeClass('selectedBadge');
                $(this).addClass('selectedBadge');
            })
            break;
        case 19:
            $('#goodChoice').removeClass("none");
            // $('#nextPageButton').addClass("none");
            break;
        case 20:
            $('#whatMail').removeClass("none");
            // $('#nextPageButton').addClass("none");
            break;
        case 21:
            $('#prepareProfile').removeClass("none");
            break;
        case 22:
                        $('#lastThing').removeClass("none");
            // $('#nextPageButton').addClass("none");          
            break;
        case 23:

                        $('#followUs').removeClass("none");
            // $('#nextPageButton').addClass("none");
            break
        case 24:
            $('#comeOn2022').removeClass("none");
            $('#nextPageButton').addClass("none");
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

// Stop automatic transistions

let timeout = null;

function gotNextView(currentViewIndex, time) {
    timeout = setTimeout(function () {
        currentViewIndex++;
        toggleViews(currentViewIndex);
    }, time);
}

function stopTimeOut() {
    clearTimeout(timeout)
}

