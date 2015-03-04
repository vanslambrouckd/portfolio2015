var site = {
	init: function() {
		site.getProjects().done(function(projects) {
			_.each(projects, site.addProject);
			//_.each(projects, site.addToGallery);
		});
		site.getProjects().fail(function(jqXHR, textStatus) {});

		/*
		$('#image-gallery-button').on('click', function(event) {
			event.preventDefault();
			blueimp.Gallery($('.col-md-7 a'), $('#blueimp-gallery').data());
		});
		*/

		$('#image-gallery-button').on('click', function(event) {
			event.preventDefault();
			blueimp.Gallery([{
				title: 'Sintel',
				href: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
				type: 'video/mp4',
				poster: 'http://media.w3.org/2010/05/sintel/poster.png'
			}, {
				title: 'Big Buck Bunny',
				href: 'http://upload.wikimedia.org/wikipedia/commons/7/75/' +
					'Big_Buck_Bunny_Trailer_400p.ogg',
				type: 'video/ogg',
				poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/7/70/' +
					'Big.Buck.Bunny.-.Opening.Screen.png/' +
					'800px-Big.Buck.Bunny.-.Opening.Screen.png'
			}, {
				title: 'Elephants Dream',
				href: 'http://upload.wikimedia.org/wikipedia/commons/transcoded/8/83/' +
					'Elephants_Dream_%28high_quality%29.ogv/' +
					'Elephants_Dream_%28high_quality%29.ogv.360p.webm',
				type: 'video/webm',
				poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/9/90/' +
					'Elephants_Dream_s1_proog.jpg/800px-Elephants_Dream_s1_proog.jpg'
			}, {
				title: 'LES TWINS - An Industry Ahead',
				href: 'http://www.youtube.com/watch?v=zi4CIXpx7Bg',
				type: 'text/html',
				youtube: 'zi4CIXpx7Bg',
				poster: 'http://img.youtube.com/vi/zi4CIXpx7Bg/0.jpg'
			}, {
				title: 'KN1GHT - Last Moon',
				href: 'http://vimeo.com/73686146',
				type: 'text/html',
				vimeo: '73686146',
				poster: 'http://b.vimeocdn.com/ts/448/835/448835699_960.jpg'
			}], $('#blueimp-gallery').data());
		});
	},
	/*
	addToGallery: function(project) {
		var linksContainer = $('#links'),
			baseUrl;
		// Add the demo images as links with thumbnails to the page:
		$.each(project.screenshots, function(index, photo) {
			console.log(photo);
			url = 'img/projecten/600/' + photo;
			$('<a/>')
				.append($('<img>').prop('src', url))
				.prop('href', url)
				.prop('title', '-')
				.attr('data-gallery', '')
				.appendTo(linksContainer);
		});
	},
	*/
	addProject: function(project, index) {
		console.log(index);
		console.log(project);
		var screenshot = project.screenshots[0];
		console.log(screenshot);
		project.index = index;
		project.screenshot = 'img/projecten/600/' + screenshot;

		var proj = ich.projectRow(project);
		$('#projects').append(proj);

		$('#project' + index + ' a ').on('click', function(event) {
			event.preventDefault();
			alert('ja');
		});
	},

	getProjects: function() {
		var referenties = $.ajax({
			type: 'GET',
			cache: false,
			url: 'js/sites.json',
			dataType: "json",
			data: {}
		});
		return referenties;
	},
};