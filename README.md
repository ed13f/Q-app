# Q'd Up

## Summary
This single page application organizes party Karaoke line ups for an effortless party experience. The application utilizes AJAX request to optimize performance speed on changes make to the page. The AJAX uses JavaScript and jQuery to target only specific elements that need to be changed instead of reloading the entire web page. These asynchonus requests improves the user experience becasue the website opperates with minimal reload lag time. The server responds with smaller amounts of code so it moves from server to client much faster than if the entire page layout were to be sent.

## User Stories
User lands on the application index page and is presented with the current karaoke queue. In the header lies a nutton that allows user to add a new singer to the list. When a user clicks on this button, that button is hidden and a new singer form is shown it its place. This for has error handling to keep the data base clean will not save unless all form fields are completed. Uppon form submission the form is hidden and the new singer button is shown again. Users can scroll through the list and edit the entries. when users click the edit form the entry show partial is hidden and the update form is shown in its place with form fields populated with entries information. when updated form is submitted the form partial is hidden and the entry partial is shown with the updated information. users can see details about the entry and also delete the entry all without reloading the entire index page.   

## Visual Overview
![alt text](https://github.com/ed13f/Qd-Up/blob/master/Qd-app.png "Q'd Up")
