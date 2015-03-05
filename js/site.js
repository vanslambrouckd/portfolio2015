var site = {
	init: function() {
		site.getProjects().done(function(projects) {
			_.each(projects, site.addProject);
			//_.each(projects, site.addToGallery);
			$(document).on('click', '.projectRow .jsGallery', function(event) {
				event.preventDefault();

				var projectId = $(this).closest('.projectRow').attr('id');
				projectId = projectId.replace('project-', '');
				projectId = parseInt(projectId);
				var result = _.findWhere(projects, {
					id: projectId
				});

				if (!_.isUndefined(result)) {
					var galleryItems = [];
					$.each(result.screenshots, function(index, screenshot) {
						var item = {};
						item.title = result.title;
						item.href = 'img/projecten/960/' + screenshot;
						item.type = 'image/jpeg';
						//item.thumbnail = 'https://example.org/thumbnails/banana.jpg';
						galleryItems.push(item);
					});
					//console.log(galleryItems);
					blueimp.Gallery(galleryItems);
				}
			});
		});
		site.getProjects().fail(function(jqXHR, textStatus) {});
	},
	addProject: function(project, index) {
		var screenshot = project.screenshots[0];
		project.index = index;
		project.screenshot = 'img/projecten/600/' + screenshot;
		project.hasLink = (project.url == '') ? false : true;

		var proj = ich.projectRow(project);
		$('#projects').append(proj);

	},

	getProjects: function() {
		var referenties = $.ajax({
			type: 'GET',
			cache: false,
			url: './js/sites.json',
			dataType: "json",
			data: {}
		});
		return referenties;
	}
};