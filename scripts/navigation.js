$(document).ready(function () {

    let currentViewIndex = 0;

    toggleViews(currentViewIndex);

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
                $('#enterInGame').removeClass("none");
                $('#nextPageButton').addClass("none")
                break;
            case 9:
                $('#reserve').removeClass("none");
                // $('#nextPageButton').addClass("none")
                break;
            case 10:
                $('#putAside').removeClass("none");
                break;
            case 11:
                $('#whatYouThrill').removeClass("none");
                break;
            case 12:
                $('#tags').removeClass("none");
                // $('#nextPageButton').addClass("none")
                break;
            case 13:
                $('#cantWaitToThrill').removeClass("none");
                break;
            case 14:
                $('#whatBadge').removeClass("none");
                // $('#nextPageButton').addClass("none")
                break;
            case 15:
                $('#goodChoice').removeClass("none");
                break;
            case 16:
                $('#whatMail').removeClass("none");
                // $('#nextPageButton').addClass("none")
                break;
            case 17:
                $('#prepareProfile').removeClass("none");
                break;
            case 18:
                $('#followUs').removeClass("none");
                $('#nextPageButton').addClass("none")
                break;
            default:
                break;
        }
    }

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