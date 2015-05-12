//var url = 'http://graph.facebook.com/113344768735604/albums'

function httpGet(url)
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