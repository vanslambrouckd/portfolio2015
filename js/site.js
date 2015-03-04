var site = {
	init: function() {
		site.getProjects().done(function(projects) {
			_.each(projects, site.addProject);
			//_.each(projects, site.addToGallery);
		});
		site.getProjects().fail(function(jqXHR, textStatus) {});


		$('#image-gallery-button').on('click', function(event) {
			event.preventDefault();
			blueimp.Gallery($('.col-md-7 a'), $('#blueimp-gallery').data());
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
	addProject: function(project) {
		console.log(project);
		var screenshot = project.screenshots[0];
		console.log(screenshot);
		project.screenshot = 'img/projecten/600/' + screenshot;

		var proj = ich.projectRow(project);
		$('#projects').append(proj);
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