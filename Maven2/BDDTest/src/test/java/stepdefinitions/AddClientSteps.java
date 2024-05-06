package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import pages.AddClientPage;
import io.cucumber.java.en.Then;

public class AddClientSteps {
	private AddClientPage addclient=new AddClientPage();
	@Given("the user is on the add client page")
public void navigateToclientpage() {
	addclient.navigateTo();
}
@When("the user enters the client details and click on the register button")
public void enterClientdetails() {
	addclient.enterClientdetails();
}
@Then("the client added successfully message should be the output on the page")
public void addedSuccessfully() {
	addclient.isclientAdded();
	addclient.closeBrowser();

}
}
