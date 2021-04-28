package edu.iastate.cs319.chess2.test;

import java.util.Random;
import java.util.Scanner;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class RegisterCheck {

	public static void main(String[] args) throws InterruptedException {
		
		Scanner s = new Scanner(System.in);
		System.out.print("Path to the Chrome Driver: ");
		String path = s.nextLine();
		
		System.setProperty("webdriver.chrome.driver",
				path);
		
		WebDriver driver = new ChromeDriver();
		String baseURL = "http://coms-319-g10.cs.iastate.edu:3080/";
		
		driver.get(baseURL);
		
		driver.findElement(By.id("regButton")).click();
		
		Thread.sleep(500);
		
		int randomUsername = ((new Random()).nextInt() % 10000);
		driver.findElement(By.id("username")).sendKeys("Selenium" + randomUsername);
		driver.findElement(By.id("password")).sendKeys("pass");
		driver.findElement(By.id("firstname")).sendKeys("Jeff");
		driver.findElement(By.id("lastname")).sendKeys("Smith");
		driver.findElement(By.id("email")).sendKeys("seltest@google.com");
		System.out.println("Entered register information for user Selenium" + randomUsername);
		
		driver.findElement(By.id("registerSubmit")).click();
		System.out.println("Register user Selenium" + randomUsername);
		
		System.out.println("Should be redirected to home page...");
		Thread.sleep(1000);

		String welcomeText = driver.findElement(By.id("welcomeTag")).getText();
		if (!welcomeText.equals("Hello, Selenium" + randomUsername)) {
			System.out.println("User, Selenium" + randomUsername + " successfully registered and logged in.");
		}
		else {
			System.out.println("User, Selenium" + randomUsername + " was unable to successfully registered.");
			driver.quit();
			return;
		}
		
		driver.manage().deleteCookieNamed("user");
		driver.navigate().refresh();
		
		System.out.println("Logged out of user Selenium" + randomUsername);
		
		driver.findElement(By.id("loginButton")).click();
		
		Thread.sleep(500);
		
		driver.findElement(By.id("uname")).sendKeys("Selenium" + randomUsername);
		driver.findElement(By.id("pword")).sendKeys("pass");
		System.out.println("Entered login information for user Selenium" + randomUsername);
		
		driver.findElement(By.id("loginSubmit")).click();
		System.out.println("Logging in user Selenium" + randomUsername);
		
		System.out.println("Should be redirected to home page...");
		Thread.sleep(1000);
		
		welcomeText = driver.findElement(By.id("welcomeTag")).getText();
		if (!welcomeText.equals("Hello, Selenium" + randomUsername)) {
			System.out.println("User, Selenium" + randomUsername + " successfully logged in.");
		}
		else {
			System.out.println("User, Selenium" + randomUsername + " was unable to successfully log in.");
		}
		
		driver.quit();
	}
	
}
