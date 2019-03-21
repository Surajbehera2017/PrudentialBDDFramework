$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Feature/WeatherMap.feature");
formatter.feature({
  "line": 1,
  "name": "openweathermap feature",
  "description": "",
  "id": "openweathermap-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8935292,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Navigate to openweathermap application and verify availability of Important information",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on enter",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should land in home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef2.user_navigates_to_URL()"
});
formatter.result({
  "duration": 6720534896,
  "status": "passed"
});
formatter.match({
  "location": "StepDef2.user_clicks_on_enter()"
});
formatter.result({
  "duration": 15736284623,
  "status": "passed"
});
formatter.match({
  "location": "StepDef2.user_should_land_in_home_page()"
});
formatter.result({
  "duration": 45007084,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Verify no broken links availaible in home page",
  "description": "",
  "id": "openweathermap-feature;verify-no-broken-links-availaible-in-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@LinksValidation"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "User is available in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "Broken links should not be there",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef2.user_is_available_in_home_page()"
});
formatter.result({
  "duration": 18696448,
  "status": "passed"
});
formatter.match({
  "location": "StepDef2.broken_links_should_not_be_there()"
});
formatter.write("The response code for link: https://openweathermap.desk.com/ is 200(OK)");
formatter.write("The response code for link: https://home.openweathermap.org/users/sign_up is 200(OK)");
formatter.write("The response code for link: https://home.openweathermap.org/users/sign_in is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/# is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/# is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/ is 200(OK)");
formatter.write("The response code for link: https://home.openweathermap.org/users/sign_in is 200(OK)");
formatter.write("The response code for link: https://home.openweathermap.org/users/sign_up is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/city is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/# is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/weathermap is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/weathermap?basemap\u003dsatellite\u0026cities\u003dfalse\u0026layer\u003dprecipitation\u0026lat\u003d30\u0026lon\u003d-20\u0026zoom\u003d3 is 200(OK)");
formatter.write("The response code for link: https://owm.io/beautiful_maps is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/guide is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/api is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/price is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/examples is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/stations is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/widgets-constructor is 200(OK)");
formatter.write("The response code for link: https://openweather.co.uk/blog/category/weather is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/weathermap?zoom\u003d8\u0026lat\u003d12.98\u0026lon\u003d77.6 is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/ is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/ is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/ is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/ is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/ is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/city is 200(OK)");
formatter.write("The response code for link: https://agromonitoring.com/api/get is 200(OK)");
formatter.write("The response code for link: https://agromonitoring.com/ is 200(OK)");
formatter.write("The response code for link: https://agromonitoring.com/ is 200(OK)");
formatter.write("The response code for link: https://openweather.co.uk/blog is 200(OK)");
formatter.write("The response code for link: https://agromonitoring.com/api/get is 200(OK)");
formatter.write("The response code for link: https://agromonitoring.com/ is 200(OK)");
formatter.write("The response code for link: https://agromonitoring.com/ is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/api/weather-map-2 is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/api/weather-map-2 is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/api/weather-map-2 is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/api/weather-map-2 is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/weathermap is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/weathermap is 200(OK)");
formatter.write("The response from hitting link: http://openweathermap.org/examples#google1 is not correct. Response Code: 301");
formatter.write("The response from hitting link: http://openweathermap.org/examples is not correct. Response Code: 301");
formatter.write("The response code for link: https://openweathermap.org/api is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/stations is 200(OK)");
formatter.write("The response code for link: https://openweathermap.desk.com/customer/portal/emails/new is 200(OK)");
formatter.write("The response code for link: https://openweather.co.uk/privacy-policy is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/find?q\u003d is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/weathermap is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/appid is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/api is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/current is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/forecast5 is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/forecast16 is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/history is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/history-bulk is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/examples is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/api/weathermaps#examples is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/api/weathermaps#legend is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/api/weathermaps#library is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/price is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/price_subscribe is 200(OK)");
formatter.write("The response code for link: https://openweathermap.desk.com/customer/portal/emails/new is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/stations is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/about is 200(OK)");
formatter.write("The response code for link: https://openweather.co.uk/team is 200(OK)");
formatter.write("The response code for link: https://openweathermap.org/technology is 200(OK)");
formatter.write("The response code for link: https://www.facebook.com/groups/270748973021342 is 200(OK)");
formatter.write("The response code for link: https://twitter.com/OpenWeatherMap is 200(OK)");
formatter.write("The response from hitting link: https://www.linkedin.com/company/9816754 is not correct. Response Code: 999");
formatter.write("The response code for link: https://www.instagram.com/openweathermap/ is 200(OK)");
formatter.write("The response code for link: https://t.me/openweathermap is 200(OK)");
formatter.write("The response code for link: https://github.com/search?q\u003dopenweathermap\u0026ref\u003dcmdform is 200(OK)");
formatter.write("The response code for link: https://openweather.co.uk/storage/app/media/Terms/Openweather_terms_and_conditions_of_sale.pdf is 200(OK)");
formatter.write("The response code for link: https://openweather.co.uk/privacy-policy is 200(OK)");
formatter.write("The response code for link: https://openweather.co.uk/storage/app/media/Terms/Openweather_website_terms_and_conditions_of_use.pdf is 200(OK)");
formatter.write("The response code for link: https://openweather.co.uk/team is 200(OK)");
formatter.result({
  "duration": 88157980394,
  "status": "passed"
});
formatter.after({
  "duration": 668246,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\tThe response from hitting link: http://openweathermap.org/examples#google1 is not correct. Response Code: 301 expected [true] but found [false],\n\tThe response from hitting link: http://openweathermap.org/examples is not correct. Response Code: 301 expected [true] but found [false],\n\tThe response from hitting link: https://www.linkedin.com/company/9816754 is not correct. Response Code: 999 expected [true] but found [false]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat StepDef.StepDef2.afterscenario(StepDef2.java:31)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
});