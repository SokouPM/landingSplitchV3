$(document).ready(function () {

    let currentViewIndex = 0;
    toggleViews(currentViewIndex);
    textChangeResponsive();

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

    $('.tags').delegate('p', 'click', function () {
        $(this).toggleClass('selectedTag');
    });
});

$(window).resize(function () {
    textChangeResponsive();
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
        //$('#howBasket').removeClass("none");
        // $('#nextPageButton').addClass("none")
        //break;
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
                        width: '100%'
                    },
                    '620': {
                        perPage: 1,
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
            setTimeout(function () {
                $('#Creativity').addClass("popupMainTag");
                setTimeout(function () {
                    $('#Sport').addClass("popupMainTag");
                    setTimeout(function () {
                        $('#Discovery').addClass("popupMainTag");
                        setTimeout(function () {
                            $('#hobby').addClass("popupMainTag");
                        }, 250);
                    }, 250);
                }, 250);
            }, 1000);
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

function textChangeResponsive() {
    if (window.screen.width < 1357) {
        $('#prepareProfile>h2').html('c’est tout bon,<br> on prépare <span class="degradeH2">ton profil');
    } else {
        $('#prepareProfile>h2').html('c’est tout bon, on prépare <span class="degradeH2">ton profil');
    }

    if (window.screen.width < 780) {
        $('#weSplitch>h2').html('nous,<br> c\'est <span class="degradeH2">splitch</span>.');
    } else {
        $('#weSplitch>h2').html('nous, c\'est <span class="degradeH2">splitch</span>.');
    }

    if (window.screen.width < 590) {
        $('#passion>h2').html('pour<br> partager tes <br> <span class="degradeH2">passions</span>.');
        $('#exchange>h2').html('<span id="exchangeDegrade">échange</span>,<br> <span id="purposeDegrade">propose une sortie</span><br>ou <span id="gameDegrade">lance un jeu</span> !');
    } else {
        $('#passion>h2').html('pour partager tes <span class="degradeH2">passions</span>.');
        $('#exchange>h2').html('<span id="exchangeDegrade">échange</span>, <span id="purposeDegrade">propose une sortie</span><br>ou <span id="gameDegrade">lance un jeu</span> !');
    }

    if (window.screen.width < 580) {
        $('#whatYouThrill>h2').html('qu’est ce qui<br> te fait <span class="degradeH2">vibrer</span> ?');
    } else {
        $('#whatYouThrill>h2').html('qu’est ce qui te fait <span class="degradeH2">vibrer</span> ?');
    }

    if (window.screen.width < 541) {
        $('#cantWaitToThrill>h2').html('Cool !<br> on va bientôt<br> pouvoir<br> vibrer <span class="degradeH2">ensemble</span> !');
    } else {
        $('#cantWaitToThrill>h2').html('Cool ! on va bientôt<br> pouvoir vibrer <span class="degradeH2">ensemble</span> !');
    }

    if (window.screen.width < 535) {
        $('#newSocialNetwork>h2').html('le nouveau<br> <span class="degradeH2">réseau social</span>');
        $('#emotion>h2').html('découvre,<br><span class="degradeH2">vibre</span>,<br>ressens.');
        $('#connect>h2').html('<span class="degradeH2">connecte-toi</span> avec<br> des gens qui te<br> ressemblent.');
    } else {
        $('#newSocialNetwork>h2').html('le nouveau <span class="degradeH2">réseau social</span>');
        $('#emotion>h2').html('découvre, <span class="degradeH2">vibre</span>, ressens.');
        $('#connect>h2').html('<span class="degradeH2">connecte-toi</span> avec des gens<br> qui te ressemblent.');
    }

    if (window.screen.width < 525) {
        $('#putAside>h2').html('ok, on te<br> le met de côté !');
        $('#whatBadge>h2').html('tu le veux comment<br> <span class="degradeH2">ton badge</span> ?');
    } else {
        $('#putAside>h2').html('ok, on te le met de côté !');
        $('#whatBadge>h2').html('tu le veux comment <span class="degradeH2">ton badge</span> ?');
    }

    if (window.screen.width < 471) {
        $('#enterInGame>h2').html('je rentre<br> dans <span class="degradeH2">le game</span>');
    } else {
        $('#enterInGame>h2').html('je rentre dans <span class="degradeH2">le game</span>');
    }

    if (window.screen.width < 449) {
        $('#beFirst>h2').html('fais partie<br> des <span class="degradeH2">1 500 premiers</span><br> inscrits');
    } else {
        $('#beFirst>h2').html('fais partie<br> des <span class="degradeH2">1 500 premiers</span> inscrits');
    }


    if (window.screen.width < 433) {
        $('#lastThing>h2').html('ah, une<br> dernière chose...');
    } else {
        $('#lastThing>h2').html('ah, une dernière chose...');
    }

    if (window.screen.width < 415) {
        $('#reserve>h2').html('réserve<br> ton <span class="degradeH2">pseudo</span>');
    } else {
        $('#reserve>h2').html('réserve ton <span class="degradeH2">pseudo</span>');
    }

    if (window.screen.width < 375) {
        $('#followUs>h2').html('viens nous follow<br> pour suivre<br> <span class="degradeH2">l\'aventure</span> !');
    } else {
        $('#followUs>h2').html('viens nous follow pour<br>suivre <span class="degradeH2">l\'aventure</span> !');
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

