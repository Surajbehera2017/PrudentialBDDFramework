package Utility;

import java.io.FileReader;
import java.net.URL;

import java.net.HttpURLConnection;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class ReusableFunctions {
	public static WebDriver driver;

	//browser initiation
	public static void browserInitiation() {
		try {
			System.setProperty("webdriver.chrome.driver", "./src/main/java/Resource/chromedriver.exe");
			driver = new ChromeDriver();

		} catch (Exception e) {
			System.out.println(e);
		}
	}

	//Getting WebElement
	public static WebElement getElement(String locator) {
		WebElement element = null;
		try {
			String xpathLocator = readJSON(locator);
			
			//implemented xpath retrieval, If required more locators type can also be implemented
			element = driver.findElement(By.xpath(xpathLocator));
			
			
		}catch(Exception e) {
			System.out.println(e);
		}
		return element;
	}

	//Reading JSON file data
	public static String readJSON(String key) {
		String value = null;
		try {
			Thread.sleep(1000);
			JSONParser parser = new JSONParser();
			JSONObject jsonObj = (JSONObject) parser.parse(new FileReader("./src/main/java/Pages/locators.json"));
			return value = (String) jsonObj.get(key);

		} catch (Exception e) {
			System.out.println(e);
		}
		return value;
	}
	
	//Verify broken links
	public Object verifyBrokenLinks(String link) {
		try {
			URL url = new URL(link);

			// creating object of HttpURLConnection
			HttpURLConnection httpUrlConnect = (HttpURLConnection) url.openConnection();

			// Setting the timeout
			httpUrlConnect.setConnectTimeout(3000);
			httpUrlConnect.connect();

			// returning the response code for the URL
			return httpUrlConnect.getResponseCode();

		} catch (Exception e) {
			System.out.println(e);
			return null;
		}
	}
}
