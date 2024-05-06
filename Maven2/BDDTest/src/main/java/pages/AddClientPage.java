package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class AddClientPage {
private WebDriver driver;
public AddClientPage() {
	WebDriverManager.edgedriver().setup();
	driver=new EdgeDriver();
}
public void navigateTo() {
	driver.get("http://localhost:4200/add");
}
public void enterClientdetails() {
	driver.manage().window().maximize();
	driver.findElement(By.name("n")).sendKeys("ClientName");
	driver.findElement(By.name("em")).sendKeys("name@example");
	driver.findElement(By.name("address")).sendKeys("City-Area");
	driver.findElement(By.name("password")).sendKeys("123456789");
	driver.findElement(By.name("password")).sendKeys("123456789");
	driver.findElement(By.name("Register")).click();
//	driver.findElement(By.id("topic")).sendKeys("New Project");
//	driver.findElement(By.id("nopeople")).sendKeys("5");
//	driver.findElement(By.id("stime")).sendKeys("05/10/24");
//	driver.findElement(By.id("addmeeting")).click();
}
public String isclientAdded() {
	return driver.findElement(By.name("h1")).getText();
}
public void closeBrowser() {
	driver.quit();
}

}
