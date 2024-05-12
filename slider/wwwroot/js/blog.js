$(function () {

    $(document).on("click", ".show-more button", function () {
        let skip = parseInt($(".blog-area").children().length);
       
        let blogsCount = parseInt($(".blog-area").attr("data-count"));
        let parentElem = $(".blog-area");
        let parentElemContent = $(".blog-area").html();

        console.log(parentElemContent)
        $.ajax({
            url: `blog/SHowMore?skip=${skip}`,
            type: 'GET',
            success: function (res) {
                parentElemContent += res;
                $(parentElem).html(parentElemContent);
                skip = parseInt($(".blog-area").children().length);
                if (skip >= blogsCount) {
                    $(".show-more button").addClass("d-none");
                }
            }
        });


    })


})
