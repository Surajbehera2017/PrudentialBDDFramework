package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/java/Feature/WeatherMap.feature",
		glue = "StepDef",
		dryRun=false,
		monochrome=true,
		//"@validInput,@invalidInput"@LinksValidation "@infoValidation"
		tags= {"@LinksValidation"}, 
		format = {"pretty","html:testOutput","json:jsonOutput/cucumber.json","junit:xmlOutput/cucumber.xml"}
		)
public class cucumberRunner {

}
