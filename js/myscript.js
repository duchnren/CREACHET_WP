var index = 16;

var image = JSON.parse(image);
var img_len = image['img'].length;

//var image_id =

//function shuffle(a) {
//    var k, l, m;
//    for (l = img_len; l; l--) {
//        k = Math.floor(Math.random()*l);
//        m = a[l-1];
//        a[l-1] = image[k];
//        a[k] = m;
//    }
//}
//
//image = shuffle(image);

for (var i = 0; i < index; i++) {
    j = Math.floor(Math.random()*img_len);
    $('#my-gallery-container').append(
        '<div class="item" data-order="">' +
        '<a href="#"><img class="img-responsive" src="' + image.img[j].linkSmall + '" alt=""></a>' +
        '</div>'
    );
}

var doll, animal, star, ost



for (var i = 0; i < img_len; i++) {
        if (image.img[i].cat == "doll" && image.img[i].podCat == "heidi") {
            $('#heidi').append(
//            '<div class="heidi">' +
            '<div class="item" data-order="">' +
            '<a href="#"><img class="img-responsive" src="' + image.img[i].linkSmall + '" alt=""></a>' +
            '</div>'
            );
        }
    }


for (var i = 0; i < img_len; i++) {
    if (image.img[i].cat == "doll" && image.img[i].podCat == "dip") {
            $('#diplomat-g').append(
            '<div class=" dip item" data-order="">' +
            '<a href="#"><img class="img-responsive" src="' + image.img[i].linkSmall + '" alt=""></a>' +
            '</div>'
            );
    }
}

for (var i = 0; i < img_len; i++) {
    if (image.img[i].cat == "doll" && image.img[i].podCat == "easy") {
            $('#jednoduche-g').append(
            '<div class=" dip item" data-order="">' +
            '<a href="#"><img class="img-responsive" src="' + image.img[i].linkSmall + '" alt=""></a>' +
            '</div>'
            );
    }
}

for (var i = 0; i < img_len; i++) {
    if (image.img[i].cat == "doll" && image.img[i].podCat == "ost") {
            $('#ostatni-pan-g').append(
            '<div class=" dip item" data-order="">' +
            '<a href="#"><img class="img-responsive" src="' + image.img[i].linkSmall + '" alt=""></a>' +
            '</div>'
            );
    }
}

for (var i = 0; i < img_len; i++) {
    if (image.img[i].cat == "doll" && image.img[i].podCat == "dud") {
            $('#dudak-g').append(
            '<div class=" dip item" data-order="">' +
            '<a href="#"><img class="img-responsive" src="' + image.img[i].linkSmall + '" alt=""></a>' +
            '</div>'
            );
    }
}

for (var i = 0; i < img_len; i++) {
    if (image.img[i].cat == "doll" && image.img[i].podCat == "fred") {
            $('#frederic-g').append(
            '<div class=" dip item" data-order="">' +
            '<a href="#"><img class="img-responsive" src="' + image.img[i].linkSmall + '" alt=""></a>' +
            '</div>'
            );
    }
}

