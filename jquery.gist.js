// Define a sandbox in which to create the Gist loader jQuery plugin.
// This Gist loader only works with public gists. It will load all of
// the files (in a single request) and then return an array of loaded
// files (with the ability to access by file name).
(function( $, nativeWrite ){
	// Writes out the stylesheet.
	var writeStyleSheetLink = function( value ){
		// If the stylesheet has not been written before, then append
		// it to the head. Since all the Gists use the same
		// stylesheet, we only have to do this once per page.
		if (!stylesheetIsEmbedded){
			$( "head:first" ).append( value );
			stylesheetIsEmbedded = true;
		}
		// Change the write() method for gist content production.
		document.write = writeGistContent;
	};
	// Load complete gist content and organize it in structure.
	var writeGistContent = function( value ){
		files = {};
		// List to access the files by Index
		files.ordered = [];
		// Parse the Gist HTML in a local DOM tree.
		var gistContent = $( value );
		// Get all of the files in the gist.
		gistContent.find( "div.gist-file" ).each(
			function(){
				// Reference to the current gist node.
				var gistFile = $( this );
				// Get the name of the file. For this, we will return
				// the content of the first Meta anchor that doesn't
				// contain a syntactic link.
				var metaTags = gistFile.find( "div.gist-meta a" )
					.filter(
						function(){

							// Only keep this value if it doesn't
							// contain a useless value.
							return( $( this ).text().search( new RegExp( "^\\s*(view raw|this gist|github)", "i" ) ) === -1 );

						}
					)
				;

				// Get the file name from the first filtered Meta
				// anchor tag.
				var fileName = $.trim( metaTags.first().text() );

				// Get the content of the file. Each file will need
				// to be re-wrapped in its own Gist div.
				var content = $( "<div class='gist'></div>" )
					.append( gistFile )
				;

				// Add the file the collection, indexed by name.
				files[ fileName ] = {
					fileName: fileName,
					content: content
				};

				// Add this file to the "ordered" list as well.
				files.ordered.push( files[ fileName ] );

			}
		);

		// NOTE: At this point, the [files] value has been populated
		// and will be used in the success() callback of the AJAX
		// request.

	};


	// I flag whether or not a stylesheet has been appending to the
	// current document. Since all Gist requests share the same
	// style, we can disregard all subsequent Link tags.
	var stylesheetIsEmbedded = false;

	// I am the active result for the gist content request.
	var files = null;


	// Define the actual script loader.
	$.getGist = function( gistID ){

		// Before the Script is requested, override the native
		// write() method so that we can intercept the calls
		// for the Gist stylesheet and content output.
		document.write = writeStyleSheetLink;

		// Create a deferred value for our Gist content.
		var result = $.Deferred();

		// Request the remote Script (that will write out the
		// Gist content).
		$.ajax({
			url: ("https://gist.github.com/" + gistID +".js"),
			dataType: "script",
			success: function(){
				// Resolve the promise with the compiled Gist files.
				console.log(files);
				result.resolve( files );
			},
			error: function( jqXHR, status, error ){
				// Reject the promise.
				result.reject( status, error );
			},
			complete: function(){
				// Change the write() method back to the native
				// write(). If we do it in the complete callback,
				// then we won't have to worry about HTTP issues.
				document.write = nativeWrite;

			}
		});
		// Return the promise of the gist.
		return( result.promise() );
	};
})( jQuery, document.write );

