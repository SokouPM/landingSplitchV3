$(document).ready(function () {
    let currentViewIndex = 0;
    let lastScrollTop = 0;


    $(window).scroll(function () {
        let curentScrollTop = $(this).scrollTop();
        if (curentScrollTop > lastScrollTop) {
            currentViewIndex++
        } else {
            currentViewIndex--
        }
        console.log(currentViewIndex);
        lastScrollTop = curentScrollTop;
    });

   function toggleViewsUp(currentViewIndex) {

    }

    $('.bordBtn').click(function () {
        console.log("click")
        currentViewIndex++
        // toggleViews(currentViewIndex);
    })
});