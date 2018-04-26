/**Javascript for my interactive resume.*/
/*JSON*/
var bio = {
    "name": "Abhay Jain",
    "role": "Front End WebDeveloper",
    "contacts" : {
    "mobile" : "+91-9466774305",
    "email": "abhayj97@gmail.com,  abhay@cybersapien.xyz",
    "github": "jabhay97",
    "twitter": "abhay1308",
    "location": "Jain Villa,#210, Ram Nagar, Ambala City, Haryana (IND)"
    },
    "welcomeMessage": "<br> Hi, Thanks for stopping by. This is my interactive resume. <br>",
    "skills": ["Javascript<br>HTML<br>CSS<br>KnockOut<br>AJAX<br>APIs"],
    "bioPic": "images/45.jpg",

    'display': function() {
    var Name = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(Name);

    var Role = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(Role);

    var Pic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(Pic);

    var bioMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(bioMessage);

    $("#header").append(HTMLskillsStart);
    var bioSkills = HTMLskills.replace("%data%", bio.skills);
    $("#skills").append(bioSkills);

    var Mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $('#topContacts').append(Mobile);

    var Email = HTMLemail.replace("%data%", bio.contacts.email);
    $('#topContacts').append(Email);

    var Github = HTMLgithub.replace("%data%", bio.contacts.github);
    $('#topContacts').append(Github);

    var Twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $('#topContacts').append(Twitter);

    var formatLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $('#topContacts').append(formatLocation);

    $('#topContacts').children().clone().appendTo('#footerContacts');

  }
};

bio.display();

var works = {
    "jobs": [
        {
            "employer": "Murlidhar DAV Public School",
            "title": "Student",
            "location": "Ambala",
            "dates": "April 2000 - May 2015",
           "description" : "Student at MDAV Public School and President Student Council"
        },
        {
            "employer": "Chitkara University",
            "title": "Student",
            "location": "Rajpura,Punjab",
            "dates": "Aug 2015 - Till Date",
            "description" : "Student at Chitkara University"
        },
    ],


    'display': function() {
	var x=works.jobs.length;
    for (var job=0;job<x;job++) {

    $('#workExperience').append(HTMLworkStart);

        var Employer = HTMLworkEmployer.replace("%data%", works.jobs[job].employer);
        var Title = HTMLworkTitle.replace("%data%", works.jobs[job].title);
        var EmployerTitle = Employer + Title;
        $(".work-entry:last").append(EmployerTitle);

        var Date = HTMLworkDates.replace("%data%", works.jobs[job].dates);
        $(".work-entry:last").append(Date);

        var Desc = HTMLworkDescription.replace("%data%", works.jobs[job].description);
        $(".work-entry:last").append(Desc);

        var formatLocation = HTMLworkLocation.replace("%data%", works.jobs[job].location);
        $(".work-entry:last").append(formatLocation);

    }
    }
};

works.display();


var projects = {
    "projects": [
        {
            "title": "Online Portfolio",
            "dates": "March 17",
            "description": "Designed Online Portfolio",
            "images": "images/Projects.png",
            "url": "https://drive.google.com/open?id=0B8enlluk8149NFpNTDJ4eGpwOTg"
        },
        {
            "title": "Classic Arcade Game",
            "dates": "April 17",
            "description": "Designed Frogger Game",
            "images": "images/game.jpg",
            "url": "https://drive.google.com/open?id=0B8enlluk8149ZTVMSGRlcmpkbEk"
        },
        {
            "title": "Neighborhood Map",
            "dates": "May 17",
            "description": "Designed Neighborhood Map",
            "images": "images/map.png",
            "url": "https://drive.google.com/open?id=0B8enlluk8149NFpNTDJ4eGpwOTg"
        },
        
    ],


    'display': function() {
    	var len=projects.projects.length;
    for (var project=0;project<len;project++){

    $('#projects').append(HTMLprojectStart);

    var Title = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
    $(".project-entry:last").append(Title);

    var Date = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(Date);

    var Desc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(Desc);

    var Img = HTMLprojectImage.replace("%data%", projects.projects[project].images);
    $(".project-entry:last").append(Img);

    }
    }
};

projects.display();

var education = {
    "schools": [
        {
            "name": "Chitkara University",
            "location": "Rajpura,Punjab",
            "degree": "Bachelor of Technology ",
            "majors":" CSE",
            "dates": "2015-2019",
            "url": "http://www.chitkara.edu.in"
        },
    ],

    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": " Udacity",
            "dates": 2017 ,
            "url": "http://www.udacity.com"
        }
    ],


    'display': function() {

    $("#education").append(HTMLschoolHeader);
    var length=education.schools.length;
    for (var sch=0;sch<length;sch++)
    {

    $("#education").append(HTMLschoolStart);


        var schoolName = HTMLschoolName.replace("%data%", education.schools[sch].name).replace("#", education.schools[sch].url);
        $(".education-entry:last").append(schoolName);

        var schoolDates = HTMLschoolDates.replace("%data%", education.schools[sch].dates);
        $(".education-entry:last").append(schoolDates);

        var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[sch].degree);
        $(".education-entry:last").append(schoolDegree);

        var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[sch].majors);
        $(".education-entry:last").append(schoolMajor);

        var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[sch].location);
        $(".education-entry:last").append(schoolLocation);

        var schoolURL = HTMLschoolURL.replace("%data%", education.schools[sch].url).replace("#", education.schools[sch].url);
        $(".education-entry:last").append(schoolURL);

    }

   $("#education").append(HTMLonlineClasses);

   for (course in education.onlineCourses) {

    $("#education").append(HTMLschoolStart);


        var lineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $(".education-entry:last").append(lineSchool);

        var lineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
        $(".education-entry:last").append(lineTitle);

        var lineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(lineDate);

        var lineschoolURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url);
        $(".education-entry:last").append(lineschoolURL);

    }

}

};

education.display();

/////////////////////////////////////////////////////////
/**
 * Protection and Google Map API
 * @constructor
 */
/////////////////////////////////////////////////////////

/** Protection module*/


var escapeChar = function(html) {
    var newHTML = html;
    newHTML = html.replace(/<|>|script/gi,"");
    return newHTML;
};
var googleMap = '<div id="map"></div>';
$("#mapDiv").append(googleMap);
