// Show/Hide and Autoscroll for Stats Buttons

// Show/Hide and Autoscroll for Distance Button/Div
// On distance-button click, toggle distance-cluster div visibility
$(document).ready(function() {
    $("#distance-button").click(function() {
        
        var arr = [ "#elevation-cluster", "#duration-cluster", "#gear-view" ];

            // If toggled to hidden, hide other visible cluster/views and autoscroll to distance-cluster div
            if ($('#distance-cluster').is(':hidden')) {
                $.each( arr, function(i, divId){
                    if ($(divId).is(':visible')) {
                        $(divId).slideToggle("fast");
                    }
                });
            }
            // else {
            //     $('html, body').animate({
            //         scrollTop: $("#distance-title").offset().top
            //     }, 800);
            // }
            
        $("#distance-cluster").slideToggle( "fast", function() {
            // $('html, body').animate({
            //         scrollTop: $("#distance-cluster").offset().top
            //     }, 800);
        });
    });
});

// Show/Hide and Autoscroll for Elevation Button/Div
// On elevation-button click, toggle elevation-cluster div visibility
$(document).ready(function() {
    $("#elevation-button").click(function() {
        
        var arr = [ "#distance-cluster", "#duration-cluster", "#gear-view" ];

            // If toggled to hidden, hide other visible cluster/views and autoscroll to distance-cluster div
            if ($('#elevation-cluster').is(':hidden')) {
                $.each( arr, function(i, divId){
                    if ($(divId).is(':visible')) {
                        $(divId).slideToggle("fast");
                    }
                });
            }
            // else {
            //     $('html, body').animate({
            //         scrollTop: $("#distance-title").offset().top
            //     }, 800);
            // }
            
        $("#elevation-cluster").slideToggle( "fast", function() {
            // $('html, body').animate({
            //         scrollTop: $("#elevation-cluster").offset().top
            //     }, 800);
        });
    });
});


// Show/Hide and Autoscroll for Duration Button/Div
// On duration-button click, toggle duration-cluster div visibility
$(document).ready(function() {
    $("#duration-button").click(function() {
        
        var arr = [ "#distance-cluster", "#elevation-cluster", "#gear-view" ];

            // If toggled to hidden, hide other visible cluster/views and autoscroll to distance-cluster div
            if ($('#duration-cluster').is(':hidden')) {
                $.each( arr, function(i, divId){
                    if ($(divId).is(':visible')) {
                        $(divId).slideToggle("fast");
                    }
                });
            }
            // else {
            //     $('html, body').animate({
            //         scrollTop: $("#distance-title").offset().top
            //     }, 800);
            // }
            
        $("#duration-cluster").slideToggle( "fast", function() {
            // $('html, body').animate({
            //         scrollTop: $("#duration-cluster").offset().top
            //     }, 800);
        });
    });
});

// Show/Hide and Autoscroll for Gear Button/Div
// On duration-button click, toggle gear-view div visibility
$(document).ready(function() {
    $("#gear-button").click(function() {
        
        var arr = [ "#distance-cluster", "#elevation-cluster", "#duration-cluster" ];

            // If toggled to hidden, hide other visible cluster/views and autoscroll to distance-cluster div
            if ($('#gear-view').is(':hidden')) {
                $.each( arr, function(i, divId){
                    if ($(divId).is(':visible')) {
                        $(divId).slideToggle("fast");
                    }
                });
            }
            // else {
            //     $('html, body').animate({
            //         scrollTop: $("#distance-title").offset().top
            //     }, 800);
            // }
            
        $("#gear-view").slideToggle( "fast", function() {
            // $('html, body').animate({
            //         scrollTop: $("#gear-view").offset().top
            //     }, 800);
        });
    });
});

// Toggle state of Stats Buttons (on or !on)

$(document).ready(function() {
    $('#distance-button').click(function() {
        var arr = ["#elevation-button", "#duration-button", "#gear-button"];

        if (!$(this).hasClass('on')) {
            $.each(arr, function(i, divId) {
                if ($(divId).hasClass('on')) {
                    $(divId).toggleClass("on");
                }
            });
        }
        $(this).toggleClass('on');
    });
});

$(document).ready(function() {
    $('#elevation-button').click(function() {
        var arr = ["#distance-button", "#duration-button", "#gear-button"];

        if (!$(this).hasClass('on')) {
            $.each(arr, function(i, divId) {
                if ($(divId).hasClass('on')) {
                    $(divId).toggleClass("on");
                }
            });
        }
        $(this).toggleClass('on');
    });
});

$(document).ready(function() {
    $('#duration-button').click(function() {
        var arr = ["#elevation-button", "#distance-button", "#gear-button"];

        if (!$(this).hasClass('on')) {
            $.each(arr, function(i, divId) {
                if ($(divId).hasClass('on')) {
                    $(divId).toggleClass("on");
                }
            });
        }
        $(this).toggleClass('on');
    });
});

$(document).ready(function() {
    $('#gear-button').click(function() {
        var arr = ["#elevation-button", "#duration-button", "#distance-button"];

        if (!$(this).hasClass('on')) {
            $.each(arr, function(i, divId) {
                if ($(divId).hasClass('on')) {
                    $(divId).toggleClass("on");
                }
            });
        }
        $(this).toggleClass('on');
    });
});

// Show/Hide Functionality for Gear-Nav Buttons

$(document).ready(function() {
    $("#bike-button").click(function() {

        var arr = ["#tool-gear-grid", "#food-gear-grid", "#camping-gear-grid", "#luggage-gear-grid", "#safety-gear-grid", "#tech-gear-grid"]

        if ($('#bike-gear-grid').is(':hidden')) {
            $.each(arr, function(i, divId) {
                if ($(divId).is(':visible')) {
                    $(divId).slideToggle("fast");
                }
            });
        }
        $('#bike-gear-grid').slideToggle("fast");
    });
});

$(document).ready(function() {
    $("#tool-button").click(function() {

        var arr = ["#bike-gear-grid", "#food-gear-grid", "#camping-gear-grid", "#luggage-gear-grid", "#safety-gear-grid", "#tech-gear-grid"]

        if ($('#tool-gear-grid').is(':hidden')) {
            $.each(arr, function(i, divId) {
                if ($(divId).is(':visible')) {
                    $(divId).slideToggle("fast");
                }
            });
        }
        $('#tool-gear-grid').slideToggle("fast");
    });
});

$(document).ready(function() {
    $("#food-button").click(function() {

        var arr = ["#tool-gear-grid", "#bike-gear-grid", "#camping-gear-grid", "#luggage-gear-grid", "#safety-gear-grid", "#tech-gear-grid"]

        if ($('#food-gear-grid').is(':hidden')) {
            $.each(arr, function(i, divId) {
                if ($(divId).is(':visible')) {
                    $(divId).slideToggle("fast");
                }
            });
        }
        $('#food-gear-grid').slideToggle("fast");
    });
});

$(document).ready(function() {
    $("#camping-button").click(function() {

        var arr = ["#tool-gear-grid", "#food-gear-grid", "#bike-gear-grid", "#luggage-gear-grid", "#safety-gear-grid", "#tech-gear-grid"]

        if ($('#camping-gear-grid').is(':hidden')) {
            $.each(arr, function(i, divId) {
                if ($(divId).is(':visible')) {
                    $(divId).slideToggle("fast");
                }
            });
        }
        $('#camping-gear-grid').slideToggle("fast");
    });
});

$(document).ready(function() {
    $("#luggage-button").click(function() {

        var arr = ["#tool-gear-grid", "#food-gear-grid", "#camping-gear-grid", "#bike-gear-grid", "#safety-gear-grid", "#tech-gear-grid"]

        if ($('#luggage-gear-grid').is(':hidden')) {
            $.each(arr, function(i, divId) {
                if ($(divId).is(':visible')) {
                    $(divId).slideToggle("fast");
                }
            });
        }
        $('#luggage-gear-grid').slideToggle("fast");
    });
});

$(document).ready(function() {
    $("#safety-button").click(function() {

        var arr = ["#tool-gear-grid", "#food-gear-grid", "#camping-gear-grid", "#luggage-gear-grid", "#bike-gear-grid", "#tech-gear-grid"]

        if ($('#safety-gear-grid').is(':hidden')) {
            $.each(arr, function(i, divId) {
                if ($(divId).is(':visible')) {
                    $(divId).slideToggle("fast");
                }
            });
        }
        $('#safety-gear-grid').slideToggle("fast");
    });
});

$(document).ready(function() {
    $("#tech-button").click(function() {

        var arr = ["#tool-gear-grid", "#food-gear-grid", "#camping-gear-grid", "#luggage-gear-grid", "#safety-gear-grid", "#bike-gear-grid"]

        if ($('#tech-gear-grid').is(':hidden')) {
            $.each(arr, function(i, divId) {
                if ($(divId).is(':visible')) {
                    $(divId).slideToggle("fast");
                }
            });
        }
        $('#tech-gear-grid').slideToggle("fast");
    });
});

// Toggle state of Gear-Nav Buttons (on or !on)

$(document).ready(function() {
    $('#bike-button').click(function() {
        var arr = ["#tool-button", "#food-button", "#camping-button", "#luggage-button", "#safety-button", "#tech-button"];

        if (!$(this).hasClass('on')) {
            $.each(arr, function(i, divId) {
                if ($(divId).hasClass('on')) {
                    $(divId).toggleClass("on");
                }
            });
        }
        $(this).toggleClass('on');
    });
});

$(document).ready(function() {
    $('#tool-button').click(function() {
        var arr = ["#bike-button", "#food-button", "#camping-button", "#luggage-button", "#safety-button", "#tech-button"];

        if (!$(this).hasClass('on')) {
            $.each(arr, function(i, divId) {
                if ($(divId).hasClass('on')) {
                    $(divId).toggleClass("on");
                }
            });
        }
        $(this).toggleClass('on');
    });
});

$(document).ready(function() {
    $('#food-button').click(function() {
        var arr = ["#tool-button", "#bike-button", "#camping-button", "#luggage-button", "#safety-button", "#tech-button"];

        if (!$(this).hasClass('on')) {
            $.each(arr, function(i, divId) {
                if ($(divId).hasClass('on')) {
                    $(divId).toggleClass("on");
                }
            });
        }
        $(this).toggleClass('on');
    });
});

$(document).ready(function() {
    $('#camping-button').click(function() {
        var arr = ["#tool-button", "#food-button", "#bike-button", "#luggage-button", "#safety-button", "#tech-button"];

        if (!$(this).hasClass('on')) {
            $.each(arr, function(i, divId) {
                if ($(divId).hasClass('on')) {
                    $(divId).toggleClass("on");
                }
            });
        }
        $(this).toggleClass('on');
    });
});

$(document).ready(function() {
    $('#luggage-button').click(function() {
        var arr = ["#tool-button", "#food-button", "#camping-button", "#bike-button", "#safety-button", "#tech-button"];

        if (!$(this).hasClass('on')) {
            $.each(arr, function(i, divId) {
                if ($(divId).hasClass('on')) {
                    $(divId).toggleClass("on");
                }
            });
        }
        $(this).toggleClass('on');
    });
});

$(document).ready(function() {
    $('#safety-button').click(function() {
        var arr = ["#tool-button", "#food-button", "#camping-button", "#luggage-button", "#bike-button", "#tech-button"];

        if (!$(this).hasClass('on')) {
            $.each(arr, function(i, divId) {
                if ($(divId).hasClass('on')) {
                    $(divId).toggleClass("on");
                }
            });
        }
        $(this).toggleClass('on');
    });
});

$(document).ready(function() {
    $('#tech-button').click(function() {
        var arr = ["#tool-button", "#food-button", "#camping-button", "#luggage-button", "#safety-button", "#bike-button"];

        if (!$(this).hasClass('on')) {
            $.each(arr, function(i, divId) {
                if ($(divId).hasClass('on')) {
                    $(divId).toggleClass("on");
                }
            });
        }
        $(this).toggleClass('on');
    });
});


// Show/Hide Functionality for Province Panorama Viewers

$(document).ready(function() {
    $("#bc-button").click(function() {

        var arr = ["#ab", "#sk", "#mb", "#on", "#qc", "#nb", "#ns"]

        if ($('#bc').is(':hidden')) {
            $.each(arr, function(i, divId) {
                if ($(divId).is(':visible')) {
                    $(divId).slideToggle("fast");
                }
            });

            $('#bc').slideToggle("fast");
        }
    });
});


$(document).ready(function() {
    $("#ab-button").click(function() {

        var arr = ["#bc", "#sk", "#mb", "#on", "#qc", "#nb", "#ns"]

        if ($('#ab').is(':hidden')) {
            $.each(arr, function(i, divId) {
                if ($(divId).is(':visible')) {
                    $(divId).slideToggle("fast");
                }
            });

            $('#ab').slideToggle("fast");
        }
    });
});

$(document).ready(function() {
    $("#sk-button").click(function() {

        var arr = ["#bc", "#ab", "#mb", "#on", "#qc", "#nb", "#ns"]

        if ($('#sk').is(':hidden')) {
            $.each(arr, function(i, divId) {
                if ($(divId).is(':visible')) {
                    $(divId).slideToggle("fast");
                }
            });

            $('#sk').slideToggle("fast");
        }
    });
});

$(document).ready(function() {
    $("#mb-button").click(function() {

        var arr = ["#bc", "#sk", "#ab", "#on", "#qc", "#nb", "#ns"]

        if ($('#mb').is(':hidden')) {
            $.each(arr, function(i, divId) {
                if ($(divId).is(':visible')) {
                    $(divId).slideToggle("fast");
                }
            });

            $('#mb').slideToggle("fast");
        }
    });
});

$(document).ready(function() {
    $("#on-button").click(function() {

        var arr = ["#bc", "#sk", "#mb", "#ab", "#qc", "#nb", "#ns"]

        if ($('#on').is(':hidden')) {
            $.each(arr, function(i, divId) {
                if ($(divId).is(':visible')) {
                    $(divId).slideToggle("fast");
                }
            });

            $('#on').slideToggle("fast");
        }
    });
});

$(document).ready(function() {
    $("#qc-button").click(function() {

        var arr = ["#bc", "#sk", "#mb", "#on", "#ab", "#nb", "#ns"]

        if ($('#qc').is(':hidden')) {
            $.each(arr, function(i, divId) {
                if ($(divId).is(':visible')) {
                    $(divId).slideToggle("fast");
                }
            });

            $('#qc').slideToggle("fast");
        }
    });
});

$(document).ready(function() {
    $("#nb-button").click(function() {

        var arr = ["#bc", "#sk", "#mb", "#on", "#qc", "#ab", "#ns"]

        if ($('#nb').is(':hidden')) {
            $.each(arr, function(i, divId) {
                if ($(divId).is(':visible')) {
                    $(divId).slideToggle("fast");
                }
            });

            $('#nb').slideToggle("fast");
        }
    });
});

$(document).ready(function() {
    $("#ns-button").click(function() {

        var arr = ["#bc", "#sk", "#mb", "#on", "#qc", "#ab", "#nb"]

        if ($('#ns').is(':hidden')) {
            $.each(arr, function(i, divId) {
                if ($(divId).is(':visible')) {
                    $(divId).slideToggle("fast");
                }
            });

            $('#ns').slideToggle("fast");
        }
    });
});

// Province Button State Change Functionality

$(document).ready(function() {
    $('#bc-button').click(function() {
        var arr = ["#ab-button", "#sk-button", "#mb-button", "#on-button", "#qc-button", "#ns-button", "#nb-button"]

        if (!$(this).hasClass('province-on')) {
            $.each(arr, function(i, divId) {
                if ($(divId).hasClass('province-on')) {
                    $(divId).toggleClass("province-on");
                }
            });
            $(this).toggleClass('province-on');
        }
    });
});

$(document).ready(function() {
    $('#ab-button').click(function() {
        var arr = ["#bc-button", "#sk-button", "#mb-button", "#on-button", "#qc-button", "#ns-button", "#nb-button"]

        if (!$(this).hasClass('province-on')) {
            $.each(arr, function(i, divId) {
                if ($(divId).hasClass('province-on')) {
                    $(divId).toggleClass("province-on");
                }
            });
            $(this).toggleClass('province-on');
        }
    });
});

$(document).ready(function() {
    $('#sk-button').click(function() {
        var arr = ["#ab-button", "#bc-button", "#mb-button", "#on-button", "#qc-button", "#ns-button", "#nb-button"]

        if (!$(this).hasClass('province-on')) {
            $.each(arr, function(i, divId) {
                if ($(divId).hasClass('province-on')) {
                    $(divId).toggleClass("province-on");
                }
            });
            $(this).toggleClass('province-on');
        }
    });
});

$(document).ready(function() {
    $('#mb-button').click(function() {
        var arr = ["#ab-button", "#sk-button", "#bc-button", "#on-button", "#qc-button", "#ns-button", "#nb-button"]

        if (!$(this).hasClass('province-on')) {
            $.each(arr, function(i, divId) {
                if ($(divId).hasClass('province-on')) {
                    $(divId).toggleClass("province-on");
                }
            });
            $(this).toggleClass('province-on');
        }
    });
});

$(document).ready(function() {
    $('#on-button').click(function() {
        var arr = ["#ab-button", "#sk-button", "#mb-button", "#bc-button", "#qc-button", "#ns-button", "#nb-button"]

        if (!$(this).hasClass('province-on')) {
            $.each(arr, function(i, divId) {
                if ($(divId).hasClass('province-on')) {
                    $(divId).toggleClass("province-on");
                }
            });
            $(this).toggleClass('province-on');
        }
    });
});

$(document).ready(function() {
    $('#qc-button').click(function() {
        var arr = ["#ab-button", "#sk-button", "#mb-button", "#on-button", "#bc-button", "#ns-button", "#nb-button"]

        if (!$(this).hasClass('province-on')) {
            $.each(arr, function(i, divId) {
                if ($(divId).hasClass('province-on')) {
                    $(divId).toggleClass("province-on");
                }
            });
            $(this).toggleClass('province-on');
        }
    });
});

$(document).ready(function() {
    $('#nb-button').click(function() {
        var arr = ["#ab-button", "#sk-button", "#mb-button", "#on-button", "#qc-button", "#ns-button", "#bc-button"]

        if (!$(this).hasClass('province-on')) {
            $.each(arr, function(i, divId) {
                if ($(divId).hasClass('province-on')) {
                    $(divId).toggleClass("province-on");
                }
            });
            $(this).toggleClass('province-on');
        }
    });
});

$(document).ready(function() {
    $('#ns-button').click(function() {
        var arr = ["#ab-button", "#sk-button", "#mb-button", "#on-button", "#qc-button", "#bc-button", "#nb-button"]

        if (!$(this).hasClass('province-on')) {
            $.each(arr, function(i, divId) {
                if ($(divId).hasClass('province-on')) {
                    $(divId).toggleClass("province-on");
                }
            });
            $(this).toggleClass('province-on');
        }
    });
});

// Panorama Panning Functionality

$(document).ready(function() {
    $("#bc").kinetic();
});

$(document).ready(function() {
    $("#ab").kinetic();
});

$(document).ready(function() {
    $("#sk").kinetic();
});

$(document).ready(function() {
    $("#mb").kinetic();
});

$(document).ready(function() {
    $("#on").kinetic();
});

$(document).ready(function() {
    $("#qc").kinetic();
});

$(document).ready(function() {
    $("#nb").kinetic();
});

$(document).ready(function() {
    $("#ns").kinetic();
});

// Sticky Resizing Header

$(document).on("scroll",function(){
$("#intro").toggleClass("small-nav", $(document).scrollTop()>100);
$("#title-left-intro").toggleClass("small-nav", $(document).scrollTop()>100);
$("#title-right-intro").toggleClass("small-nav", $(document).scrollTop()>100);
$("#bike-logo").toggleClass("small-nav", $(document).scrollTop()>100);
$("#small-nav-sections").toggleClass("small-nav", $(document).scrollTop()>100);
});

// Small-Nav Scroll Buttons

$(document).ready(function() {
    $("#map-button").click(function() {

        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
            
    });
});

$(document).ready(function() {
    $("#trip-stats-button").click(function() {

                $('html, body').animate({
                    scrollTop: $("#stats-buttons-wrapper").offset().top-80
                }, 800);
            
    });
});

$(document).ready(function() {
    $("#panoramas-button").click(function() {

                $('html, body').animate({
                    scrollTop: $("#panoramas").offset().top-50
                }, 800);
            
    });
});

$(document).ready(function() {
    $("#top-button").click(function() {

        $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
            
    });
});

$(document).ready(function() {
    $("#bottom-button").click(function() {

        $('html, body').animate({scrollTop: $(document).height()}, 'slow');
            
    });
});

// About Section Show/Hide AutoScroll
$(document).ready(function() {
    $("#about-button").click(function() {
        
        $("#down").toggle();
        $("#up").toggle();
        
        $('#about').slideToggle("fast");
        $('html, body').animate({scrollTop: $(document).height()}, 'slow');
            
    });
});
