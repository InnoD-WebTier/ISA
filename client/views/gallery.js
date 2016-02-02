Template.gallery.onRendered(function() {
    startResize();
});

Template.gallery.onDestroyed(function() {
    endResize();
});

Template.gallery.helpers({
    imageUrl: function() {
        return Session.get("imageUrl");
    },

    // Below is the photo data to render photos on the gallery page. The title field specifies the title of the album, the photo array is a list of links to the
    // different photos stored in the img/gallery/ directory. To create a new album, simply replicate the current structure e.g.
    //
    // {
    //     title: 'Event name',
    //     photos: [
    //       'link1',
    //       'link2',
    //       'link3',
    //     ]
    // },
    
    events: [
        {
            title: 'diwali banquet 2013',
            photos: [
                '/img/gallery/diwali/diwali_1.jpg',
                '/img/gallery/diwali/diwali_2.jpg',
                '/img/gallery/diwali/diwali_3.jpg',
                '/img/gallery/diwali/diwali_4.jpg',
                '/img/gallery/diwali/diwali_5.jpg',
                '/img/gallery/diwali/diwali_6.jpg',
                '/img/gallery/diwali/diwali_7.jpg',
                '/img/gallery/diwali/diwali_8.jpg',
                '/img/gallery/diwali/diwali_9.jpg',
                '/img/gallery/diwali/diwali_10.jpg',
                '/img/gallery/diwali/diwali_11.jpg',
                '/img/gallery/diwali/diwali_12.jpg',
                '/img/gallery/diwali/diwali_13.jpg',
                '/img/gallery/diwali/diwali_14.jpg',
                '/img/gallery/diwali/diwali_15.jpg',
                '/img/gallery/diwali/diwali_16.jpg',
                '/img/gallery/diwali/diwali_17.jpg',
                '/img/gallery/diwali/diwali_18.jpg',
                '/img/gallery/diwali/diwali_19.jpg',
                '/img/gallery/diwali/diwali_20.jpg',
                '/img/gallery/diwali/diwali_21.jpg',
                '/img/gallery/diwali/diwali_22.jpg',
                '/img/gallery/diwali/diwali_23.jpg'
            ]
        },
        {
            title: 'raas garba 2013',
            photos: [
                '/img/gallery/raas-garba/raas_1.jpg',
                '/img/gallery/raas-garba/raas_2.jpg',
                '/img/gallery/raas-garba/raas_3.jpg',
                '/img/gallery/raas-garba/raas_4.jpg',
                '/img/gallery/raas-garba/raas_5.jpg',
                '/img/gallery/raas-garba/raas_6.jpg',
                '/img/gallery/raas-garba/raas_7.jpg',
                '/img/gallery/raas-garba/raas_8.jpg',
                '/img/gallery/raas-garba/raas_9.jpg',
                '/img/gallery/raas-garba/raas_10.jpg',
                '/img/gallery/raas-garba/raas_11.jpg',
                '/img/gallery/raas-garba/raas_12.jpg'
            ]
        }
    ]
});

Template.gallery.events({
    'click .section-title': function(e) {
        expandGallery($(e.target));
    },
    'click .arrow': function(e) {
        expandGallery($(e.target));
    },
    'click .gallery-image': function(e) {
        var trigger = $(e.target).parent();
        var imageUrl = $(trigger).attr('image');
        showLightboxWithImage(imageUrl);
    },
    'click #lightbox': function(e) {
        $('#lightbox').fadeOut(250);
    }
});

// Gallery Helper Functions

function expandGallery(target) {
    var header = target.parent();
    var arrow = header.find('.fa-caret-up');
    var photoGrid = header.next();
    if (photoGrid.hasClass('expanded')) {
        arrow.removeClass('rotated');
        photoGrid.removeClass('expanded');
        photoGrid.slideUp();
    } else {
        arrow.addClass('rotated');
        photoGrid.addClass('expanded');
        photoGrid.slideDown();
    }
};

function sizeImageForLightbox() {
    var currentImage = new Image();
    currentImage.src = Session.get("imageUrl");

    var imageWidth = currentImage.width;
    var imageHeight = currentImage.height;
    var windowHeight = $(window).height() * 0.9;
    var windowWidth = $(window).width() * 0.9;

    var heightScale = windowHeight / imageHeight;
    var widthScale = windowWidth / imageWidth;

    if (imageWidth * heightScale < windowWidth) {
        imageWidth = imageWidth * heightScale;
        imageHeight = imageHeight * heightScale;
    } else if (imageHeight * widthScale < windowHeight) {
        imageWidth = imageWidth * widthScale;
        imageHeight = imageHeight * widthScale;
    }

    var offsetTop = ($(window).height() - imageHeight) / 2;
    var offsetLeft = ($(window).width() - imageWidth) / 2;

    $('#lightbox .lightbox-image').css({
        "height": imageHeight + "px",
        "width": imageWidth + "px",
        "top": offsetTop + "px",
        "left": offsetLeft + "px"
    });
};

function showLightboxWithImage(imageSrc) {
    Session.set("imageUrl", imageSrc);
    sizeImageForLightbox();
    $('#lightbox').fadeIn(250);
};

function shouldResizeImageForLightbox() {
    if ($('#lightbox').is(':visible')) {
        sizeImageForLightbox();
    }
};

function startResize() {
    $(window).resize(shouldResizeImageForLightbox);
};

function endResize() {
    $(window).off("resize", shouldResizeImageForLightbox);
};
