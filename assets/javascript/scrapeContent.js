function facebookHttpGet(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );  
    var result = xmlHttp.responseText;
    result = JSON.parse(result);

    var albumNames = result.data; 
    var albums = {};
    for (index = 0; index < albumNames.length; ++index) {
        if (albumNames[index].type != 'mobile' && albumNames[index].count > 1) {
        	var album = {};
            var name = albumNames[index].name;
        	var link =  albumNames[index].link;
            var id =  albumNames[index].id;
            albumn = {
                id: id,
                name: name,
                link: link
            };
        	albums[name] = albumn;
        }
    }
    
    return albums;
}

function dropboxHttpGet(url)
{
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );  
    var result = xmlHttp.responseText;

    result = JSON.parse(result);
    var hrefs = result.query.results.a;
    var docs = [];
    for (index = 0; index < hrefs.length; ++index) {
        var link = hrefs[index].href;
        var title = link.replace('https://www.dropbox.com/sh/g5evgs62hte7169/','');
        title = title.replace('?dl=0','');  
        title = title.substring(title.indexOf('/') + 1);

        var doc = {};
        doc = {
            link: link,
            title: title
        };

        docs[index] = doc;
    }

    string = '';
    for (index = 0; index < docs.length; ++index) {
        string = string + 
            '<div class="row">' +
                '<div class="col-sm-4 col-sm-offset-4">' + 
                    '<div class="well"><a href="' + docs[index].link + '" class="lead">' + docs[index].title + '</a></div>' +
                '</div>' +
            '</div>';
    }

    return string;
}