package config;
import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
@RunWith(Cucumber.class)
@CucumberOptions(
features="src/test/java/resource/features",
glue="stepdefinitions",
plugin= {"pretty","html:target/cucumber-reports"}

)
public class RunCucumberTest {

}
