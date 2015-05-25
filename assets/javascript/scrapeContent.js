function httpGetFacebookAlbums(url)
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

function formatFacebookAlbumsAsTiles(albums)
{
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
						"<h3><a href='" + albums[key].link + "' target='_blank'>" + albums[key].name + "</a></h3>" +
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

function httpGetFacebookEvents(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );
    var result = xmlHttp.responseText;
    result = JSON.parse(result);

    var eventNames = result.data;
    var events = {};
    for (index = 0; index < eventNames.length; ++index) {
        if (eventNames[index].type != 'mobile' && eventNames[index].count > 1) {
            var album = {};
            var name = eventNames[index].name;
            var link =  eventNames[index].link;
            var id =  eventNames[index].id;
            events = {
                id: id,
                name: name,
                link: link
            };
            events[name] = albumn;
        }
    }

    return events;
}

function formatFacebookEventsAsTiles(events)
{
    var result = '';
    var numColums = 4;
    var i = 0;
    for (key in events) {
        if (i % numColums == 0) {
            result = result + "<div class='row'>";
        }

        result = result +
                "<div class='col-md-3'>" +
                    "<div class='well'>" +
                        "<h3><a href='" + events[key].link + "' target='_blank'>" + events[key].name + "</a></h3>" +
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

    return docs;
}

function formatDropboxFilesAsBars(docs)
{
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
