package StepDef;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.asserts.SoftAssert;

import Utility.ReusableFunctions;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDef2 extends ReusableFunctions {
	SoftAssert softassert;
	Scenario scenario;
	@Before
	public void beforeScenario(Scenario scenario) {
		softassert = new SoftAssert();
		this.scenario = scenario;
	}

	@After
	public void afterscenario() {
		softassert.assertAll();
		driver.close();
	}

	@Given("^User navigates to URL$")
	public void user_navigates_to_URL() throws Throwable {
		try {
			ReusableFunctions.browserInitiation();

		} catch (Exception e) {
			System.out.println(e);
		}
	}

	@When("^User clicks on enter$")
	public void user_clicks_on_enter() throws Throwable {
		try {
			driver.get("https://openweathermap.org/");
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		} catch (Exception e) {
			System.out.println(e);
		}
	}

	@Then("^User should land in home page$")
	public void user_should_land_in_home_page() throws Throwable {
		try {
			softassert.assertEquals(driver.getTitle(), "Сurrent weather and forecast - OpenWeatherMap");
		} catch (Exception e) {
			System.out.println(e);
		}
	}


	@Given("^User is available in home page$")
	public void user_is_available_in_home_page() throws Throwable {
		try {
			softassert.assertEquals(driver.getTitle(), "Сurrent weather and forecast - OpenWeatherMap");
		} catch (Exception e) {
			System.out.println(e);
		}
	}

	@Then("^User enters \"([^\"]*)\"$")
	public void user_enters(String cityName) throws Throwable {
		getElement("cityNameInputField").sendKeys(cityName);
	}

	@Then("^User click on search$")
	public void user_click_on_search() throws Throwable {
		ReusableFunctions.getElement("searchButton").click();
	}

	@Then("^The user is navigated to search details page$")
	public void the_user_is_navigated_to_search_details_page() throws Throwable {
		// verifying if result list page is opened successfully.
		softassert.assertEquals(driver.getTitle(), "Find - OpenWeatherMap");

	}

	@Then("^NOT FOUND message should be displayed$")
	public void not_FOUND_message_should_be_displayed() throws Throwable {
		String actualCityName = getElement("NOTFoundMessage").getText();
		softassert.assertTrue(actualCityName.contains("Not found"));
	}

	@Then("^The searched \"([^\"]*)\" data should be displayed$")
	public void the_searched_data_should_be_displayed(String cityName) throws Throwable {
		String actualCityName = getElement("cityNameLocator").getText();
		softassert.assertTrue(actualCityName.contains(cityName));
	}

	@Then("^current location information should be displayed$")
	public void current_location_information_should_be_displayed() throws Throwable {
		String actualCityName = getElement("currentLocation").getText();
		softassert.assertTrue(actualCityName.contains("London"));

	}

	@Then("^Celsius should be selected by default$")
	public void celsius_should_be_selected_by_default() throws Throwable {
		boolean celsiusSelect = getElement("celsius").isDisplayed();
		softassert.assertTrue(celsiusSelect);
	}

	@Then("^City input field should be displayed$")
	public void city_input_field_should_be_displayed() throws Throwable {
		boolean cityNameInputField = getElement("cityNameInputField").isEnabled();
		softassert.assertTrue(cityNameInputField);
	}

	@Then("^search button should be displayed$")
	public void search_button_should_be_displayed() throws Throwable {
		boolean searchButton = getElement("searchButton").isEnabled();
		softassert.assertTrue(searchButton);
	}

	@Then("^Broken links should not be there$")
	public void broken_links_should_not_be_there() throws Throwable {
		try {

			// Storing all links in a list object
			List<WebElement> link = driver.findElements(By.xpath("//a"));
			int size = link.size();

			// Iterating through the List for each link
			for (int i = 0; i < size; i++) {
				// getting href path
				String linkpath = link.get(i).getAttribute("href");

				// calling verifyBrokenLinks function with each href path and verifying if it
				// return status code 200 for OK
				if (linkpath != null) {
					System.out.println(i);
					Object obj = verifyBrokenLinks(linkpath);
					if (obj != null) {
						int responseCode = (Integer) obj;
						if (responseCode == 200) {
							softassert.assertTrue(true, "The response code for link: " + linkpath + " is 200(OK)");
							scenario.write("The response code for link: " + linkpath + " is 200(OK)");
						} else {
							System.out.println(linkpath);
							System.out.println(responseCode);
							softassert.assertTrue(false,
									"The response from hitting link: " + linkpath + " is not correct. Response Code: "+responseCode);
						}
					}
				}
			}

		} catch (Exception e) {
			System.out.println(e);
		}
	}
}
