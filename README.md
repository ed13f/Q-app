# Q'd Up

## Summary
This single page application organizes Karaoke lineups for an effortless party experience. The application utilizes AJAX request to optimize performance speed on changes made to the page. The AJAX uses JavaScript and jQuery to target only specific elements that need to be changed instead of reloading the entire web page. These asynchronous requests improves the users experience because the website operates with minimal reload lag time. The server responds with smaller amounts of code so information moves from server to client much faster than if the entire page layout were to be sent.

## User Stories
User lands on the application index page and is presented with the current karaoke queue. In the header lies a button that allows user to add a new singer to the list. When a user clicks on this button, the button is hidden and a new singer form is shown in its place. This form has error handling to keep the database clean and will not save unless all form fields are completed. Upon form submission the form is hidden and the new singer button is shown again. Users can scroll through the list and edit the entries. When users click the edit button, the entry show partial is hidden and the update form is shown in its place with form fields populated. When updated form is submitted the form partial is hidden and the entry partial is shown with the updated information. Users can see details about the entry and also delete the entry all without reloading the entire index page.   

## Visual Overview
![alt text](https://github.com/ed13f/Qd-Up/blob/master/Qd-app.png "Q'd Up")
