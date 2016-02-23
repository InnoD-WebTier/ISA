#### Introduction
Repository for the Indian Student's Association website (ISA). Built by Innovative Design Web Development Tier during Fall 2015, Spring 2016. You can find their website at <http://innovativedesign.club>

#### Application
The current application is build on MeteorJS with React. The `.meteor` folder contains information on the current Meteor distribution and the list of packages being used, along with their specific versions. OrionJS is used as a CMS and all routing is done through the iron:router package.

#### Adding Routes
The routes.js file can be found in `./client/lib/routes.js`. The application using the iron:router package. The general structure of a routing call is outlined inthe file.

#### Adding Images to Gallery
Images are organized by event name, and are stored in the `/public/img/gallery/*` directories. To add a new set of photos, create a new directory with the event name and save all the photos here. The path is outlined below, with an example directory and image name.
.
+-- public
|   +-- img
|       +-- gallery
|            +-- event_name
|                +-- image1.jpg

Next, you need to tell the application that there's images exist, and that they should be rendered. Navigate to `./client/views/gallery.js`. Under `Template.gallery.helpers`, you should see the previous events and the paths to their images stored in a data structure. Simply add another entry, and check the comments if you need help! Make sure to have commas where you need them.

#### Adding New Officers
Adding new officers is a similar process to adding new event images to the gallery. The code to render the officers lives in `./client/views/about.js`, and uses the same data structure to hold information about each officer as the gallery does with images. In order to add an image for an officer, add it to `/public/img/about/*`. The path has been outlined below, as before

.
+-- public
|   +-- img
|       +-- about
|            +-- officer.jpg

To add a new officer, simply copy->paste an existing one, and change the fields to the appropriate officer. If the image isn't showing up, double check you have the path correct.
