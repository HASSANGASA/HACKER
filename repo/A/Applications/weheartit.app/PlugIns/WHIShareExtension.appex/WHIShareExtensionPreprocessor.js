
var MMExtensionClass = function() {};

MMExtensionClass.prototype = {
run: function(arguments) {
    
    var imageCount = document.images.length;
    var imageList = new Array();
    var imageSize = new Array();
    for (var i = 0; i < imageCount; i++)
    {
        var image = document.images[i];
        var width = image.naturalWidth;
        var height = image.naturalHeight;

        if (width > 200 && height > 240)
        {
            imageList[imageList.length] = image.src;
        }
    }
    
    arguments.completionFunction({ "viaURL" : document.baseURI,
                                   "images" : imageList });
},
    
finalize: function(arguments) {}
    
};

var ExtensionPreprocessingJS = new MMExtensionClass;


