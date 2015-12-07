Template.gallery.helpers({
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
            title: 'raas-garba 2013',
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
    'click .section-title': function(event) {
        var header = $(event.target).parent();
        var arrow = header.find('.fa-caret-up');
        var photoGrid = header.next();
        console.log(photoGrid);
        if (photoGrid.hasClass('expanded')) {
            arrow.removeClass('rotated');
            photoGrid.removeClass('expanded');
            photoGrid.slideUp();
        } else {
            arrow.addClass('rotated');
            photoGrid.addClass('expanded');
            photoGrid.slideDown();
        }
    }
});
