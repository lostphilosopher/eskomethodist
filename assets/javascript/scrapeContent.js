function httpGetFacebookAlbums(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );
    var result = xmlHttp.responseText;
    result = JSON.parse(result);

    // You must have a Facebook token in your cookies to access the albums via the graph API
    if (result.error) {
      return 0;
    }

    var albumNames = result.data;
    var albums = {};
    for (index = 0; index < albumNames.length; ++index) {
        if (albumNames[index].type != 'mobile' && albumNames[index].count > 1) {
        	var album = {};
          var name = albumNames[index].name;
        	var link = albumNames[index].link;
          var id = albumNames[index].id;
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

function formatFacebookAlbumsAsTiles(albums)
{
  if (albums == 0) {
    return '<div class="lead">Sorry, you have to be logged into Facebook to see the albums here, ' +
            'but you can still view the albums on ' +
            '<a href="https://www.facebook.com/pages/Northwood-United-Methodist-Church-Esko-MN/113344768735604?sk=photos_stream&tab=photos_albums">Facebook</a>.' +
            '</div>'
  }
  var result = '';
	var numColums = 4;
	var i = 0;
	for (key in albums) {
		if (i % numColums == 0) {
			result = result + "<div class='row'>";
		}

		result = result +
				"<div class='col-md-3'>" +
					"<div class='well'>" +
						"<h4><a href='" + albums[key].link + "' target='_blank'>" + albums[key].name + "</a></h4>" +
						"<br />" +
						"<img src='http://graph.facebook.com/" + albums[key].id + "/picture' class='img img-responsive center'/>" +
						"<br />" +
					"</div>" +
				"</div>";

		i = i + 1;

		if (i % numColums == 0) {
			result = result + "</div>";
		}
  }

  return result;
}

function httpGetDropboxFiles(url)
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
        var charLoc = link.lastIndexOf('/');
        var title = link.substring(charLoc);
        title = title.replace('?dl=0','');
        title = title.substring(title.indexOf('/') + 1);

        var doc = {};
        doc = {
            link: link,
            title: title
        };

        docs[index] = doc;
    }

    return docs;
}

function formatDropboxFilesAsBars(docs)
{
  string = '';
  for (index = 0; index < docs.length; ++index) {
      string = string +
          '<div class="row">' +
              '<div class="col-sm-8 col-sm-offset-2">' +
                  '<div class="well"><a href="' + docs[index].link + '" class="lead ellipsis">' + docs[index].title + '</a></div>' +
              '</div>' +
          '</div>';
  }

  return string;
}
