package com.selenium.framework.pages;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {
    private final WebDriver driver;
    private final WebDriverWait wait;

    @FindBy(xpath = "//input[@id='username']")
    private WebElement usernameInput;

    @FindBy(xpath = "//input[@id='password' or @name='pw']")
    private WebElement passwordInput;

    @FindBy(xpath = "//input[@type='submit' and @value='Log In'] | //input[@id='Login']")
    private WebElement loginButton;

    @FindBy(xpath = "//input[@id='rememberUn']")
    private WebElement rememberMe;

    @FindBy(xpath = "//*[contains(text(),'Please check your username and password') or contains(@class,'error') or contains(@class,'loginError')]")
    private WebElement loginError;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(20));
        PageFactory.initElements(driver, this);
    }

    public void open() {
        try {
            driver.get("https://login.salesforce.com/?locale=in");
            wait.until(ExpectedConditions.visibilityOf(usernameInput));
        } catch (RuntimeException e) {
            throw new IllegalStateException("Salesforce login page did not load successfully.", e);
        }
    }

    public void enterUsername(String username) {
        try {
            wait.until(ExpectedConditions.visibilityOf(usernameInput));
            usernameInput.clear();
            usernameInput.sendKeys(username);
        } catch (RuntimeException e) {
            throw new IllegalStateException("Unable to enter username.", e);
        }
    }

    public void enterPassword(String password) {
        try {
            wait.until(ExpectedConditions.visibilityOf(passwordInput));
            passwordInput.clear();
            passwordInput.sendKeys(password);
        } catch (RuntimeException e) {
            throw new IllegalStateException("Unable to enter password.", e);
        }
    }

    public void selectRememberMe() {
        try {
            wait.until(ExpectedConditions.visibilityOf(rememberMe));
            if (!rememberMe.isSelected()) {
                rememberMe.click();
            }
        } catch (RuntimeException e) {
            throw new IllegalStateException("Unable to interact with the Remember Me checkbox.", e);
        }
    }

    public void clickLoginButton() {
        try {
            wait.until(ExpectedConditions.elementToBeClickable(loginButton));
            loginButton.click();
        } catch (RuntimeException e) {
            throw new IllegalStateException("Unable to click the login button.", e);
        }
    }

    public void login(String username, String password) {
        try {
            enterUsername(username);
            clickLoginButton();
            wait.until(ExpectedConditions.visibilityOf(passwordInput));
            enterPassword(password);
            clickLoginButton();
        } catch (RuntimeException e) {
            throw new IllegalStateException("Login flow failed.", e);
        }
    }

    public boolean isErrorDisplayed() {
        try {
            return !driver.findElements(By.xpath("//*[contains(text(),'Please check your username and password') or contains(@class,'error') or contains(@class,'loginError')]")).isEmpty();
        } catch (RuntimeException e) {
            return false;
        }
    }

    public boolean isLoginSuccessful() {
        try {
            wait.until(driver1 -> !driver.getCurrentUrl().contains("login.salesforce.com")
                    || driver.getCurrentUrl().contains("lightning.force.com")
                    || driver.getCurrentUrl().contains("salesforce.com"));
            return !driver.getCurrentUrl().contains("login.salesforce.com");
        } catch (RuntimeException e) {
            return false;
        }
    }
}
