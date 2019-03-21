Feature: openweathermap feature 

Background: Navigate to openweathermap application and verify availability of Important information 

	Given User navigates to URL 
	When User clicks on enter 
	Then User should land in home page 
	
@infoValidation 
Scenario: Verify the required information are available in home page

	When User is available in home page  
	Then current location information should be displayed
	And Celsius should be selected by default
	And City input field should be displayed
	And search button should be displayed
	
	
@invalidInput 
Scenario Outline: Verify invalid city input result 

	Given User is available in home page 
	Then User enters "<Location>" 
	And User click on search 
	Then The user is navigated to search details page 
	And NOT FOUND message should be displayed 
	
	Examples: 
	|Location|
	|xyz|
	|Demo|
		
		
@validInput 
Scenario Outline: Verify valid city input result 
		
	Given User is available in home page 
	Then User enters "<Location>" 
	And User click on search 
	Then The user is navigated to search details page 
	And The searched "<Location>" data should be displayed 
			
	Examples: 
	|Location|
	|London|
	|Paris|
	
	
@LinksValidation 
Scenario: Verify no broken links availaible in home page

	Given User is available in home page 
	Then Broken links should not be there
	