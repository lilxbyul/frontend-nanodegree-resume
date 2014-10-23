//var name = "Soo Jin Oh";
//var role = "Web Developer";
var bio = 
{
	"name" : "Soo Jin Oh",
	"role" : "Web Developer",
	"contacts" : {
		'mobile': '909-292-7014',
		'email' : 'soo.jin.o@gmail.com',
		'github' : 'lilxbyul',
		'twitter' : '@lilxbyul',
		'location' : 'Long Beach, California'
	},
	'bioPic' : 'images/soo.jpg',
	'welcomeMsg' : 'lorem ipsum dolor sit amet etc etc etc.',
	'skills' : 
	['CSS', 'HTML', 'Javascript', 'Making Pastries']
}

bio.display = function()
{
	var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%', bio.welcomeMsg);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	$('#header').append(formattedBioPic);
	$('#header').append(formattedWelcomeMsg);

	var formattedContacts = HTMLcontactGeneric.replace('%data%', bio.contacts); 
	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

	$('#footerContacts').append(formattedMobile);
	$('#footerContacts').append(formattedEmail);
	$("#footerContacts").append(formattedGitHub);
	$('#footerContacts').append(formattedTwitter);
	$('#footerContacts').append(formattedLocation);

	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGitHub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);
}

bio.displaySkills = function ()
{
	if (bio.skills.length > 0)
	{
		$('#header').append(HTMLskillsStart);
		var formattedSkill;

		for (i = 0; i<bio.skills.length; i++)
		{
			formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$('#skills').append(formattedSkill);
		}

	}
}

var education = 
{
	"schools": 
	[
		{
			'name': 'California Polytechnic University, Pomona',
			'location': 'Pomona, CA',
			'degree': "Bachelor's of Science",
			'majors': ["Computer Science"],
			'dates': 2007,
			'url': 'http://csupomona.edu'
		}
	],
	"onlineCourses": 
	[
		{
			"title": "Javascript Basics",
			'school': 'Udacity',
			'dates': 2014,
			'url': 'http://udacity.com/course/ud804'
		}
	]
};

education.display = function() 
{
	for (s in education.schools)
	{
		$('#education').append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace('%data%', education.schools[s].name);
		var formattedDates = HTMLschoolDates.replace('%data%', education.schools[s].dates);
		var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[s].degree);
		var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[s].location);
		var formattedURL = HTMLschoolURL.replace('%data%', education.schools[s].url);
		var formattedMajor = "";
		for (m in education.schools[s].majors)
		{
			var major = HTMLschoolMajor.replace('%data%', education.schools[s].majors[m]);
			formattedMajor = formattedMajor + ", " + major;
		}

		$('.education-entry:last').append(formattedName);
		$('.education-entry:last').append(formattedDates);
		$('.education-entry:last').append(formattedDegree);
		$('.education-entry:last').append(formattedLocation);
		$('.education-entry:last').append(formattedMajor);
		$('.education-entry:last').append(formattedURL);
	}
	for (oc in education.onlineCourses)
	{
		$('#education').append(HTMLonlineClasses);
		$('#education').append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[oc].title);
		var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[oc].school);
		var formattedDate = HTMLonlineDates.replace('%data%', education.onlineCourses[oc].dates);
		var formattedUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[oc].url);

		$('.education-entry:last').append(formattedTitle);
		$('.education-entry:last').append(formattedSchool);
		$('.education-entry:last').append(formattedDate);
		$('.education-entry:last').append(formattedUrl);
	}
}

//work.position = 'Pastry Chef';
//work.employer = 'Mo-Chica';
//work.yearsWorked = '2';
//work.city = 'Los Angeles';
var work = 
{
	'jobs':
	[
		{
			'employer': 'Mo-Chica',
			'title': 'Pastry Chef',
			'location': "Los Angeles, CA",
			'dates': 'May 2012 - Current',
			'description': "Who moved my cheese cheesy feet cauliflower cheese, Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		},
		{
			'employer': 'Wirtshaus',
			'title': 'Pastry Chef',
			'location': "Los Angeles, CA",
			'dates': 'January 2012 - July 2012',
			'description':  "Who moved my cheese cheesy feet cauliflower cheese, Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		},
		{
			'employer': 'The Churchill',
			'title': 'Pastry Sous Chef',
			'location': "Los Angeles, CA",
			'dates': 'July 2011 - December 2011',
			'description':  "Who moved my cheese cheesy feet cauliflower cheese, Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		}
	]
};

work.display = function ()
{
	for(job in work.jobs)
	{
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		var formattedCity = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		$('.work-entry:last').append(formattedEmployerTitle);
		$('.work-entry:last').append(formattedDates);
		$('.work-entry:last').append(formattedCity);
		$('.work-entry:last').append(formattedDescription);
	}	
}

var projects = 
{
	'projects': 
	[
		{
			'title': 'Sample Project 1',
			'dates': '2014',
			'description': 'cheesey cheese.',
			'images': 
			[
				'https://example.com',
				'http://example.com'
			]
		}
	]
}

//function inName(name)
//{
//	name = name.trim().split(" ");
//	name[1] = name[1].toUpperCase();
//	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//	return name[0] + " " + name[1];
//}
//$('#main').append(internationalizeButton);

projects.display = function ()
{
	for (p in projects.projects)
	{
		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[p].title);
		var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[p].dates);
		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[p].description);
		var formattedImage = "";
		for (i in projects.projects[p].images)
		{
			var projectImage = HTMLprojectImage.replace('%data%', projects.projects[p].images[i]);
			formattedImage = formattedImage + projectImage;
		}

		$('.project-entry:last').append(formattedTitle);
		$('.project-entry:last').append(formattedDates);
		$('.project-entry:last').append(formattedDescription);
		$('.project-entry:last').append(formattedImage);
	}
}

bio.display();
bio.displaySkills();
education.display();
work.display();
projects.display();

$('#mapDiv').append(googleMap);
