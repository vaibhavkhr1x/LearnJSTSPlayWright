package com.selenium.framework.base;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;

public class BaseTest {
    protected WebDriver driver;
    protected WebDriverWait wait;

    @BeforeTest(alwaysRun = true)
    public void setUpTest() {
        initializeBrowser();
    }

    @BeforeMethod(alwaysRun = true)
    public void setUp() {
        if (driver == null) {
            initializeBrowser();
        }
    }

    @AfterMethod(alwaysRun = true)
    public void tearDownMethod() {
        if (driver != null) {
            driver.quit();
            driver = null;
        }
    }

    @AfterTest(alwaysRun = true)
    public void tearDown() {
        if (driver != null) {
            driver.quit();
            driver = null;
        }
    }

    private void initializeBrowser() {
        try {
            ChromeOptions options = new ChromeOptions();
            options.addArguments("--headless=new");
            options.addArguments("--window-size=1920,1080");
            options.addArguments("--disable-gpu");
            options.addArguments("--no-sandbox");
            options.addArguments("--disable-dev-shm-usage");
            options.addArguments("--remote-allow-origins=*");
            options.addArguments("--disable-extensions");
            driver = new ChromeDriver(options);
            driver.manage().window().maximize();
            driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
            wait = new WebDriverWait(driver, Duration.ofSeconds(20));
        } catch (Exception e) {
            throw new IllegalStateException("Failed to initialize the browser session.", e);
        }
    }

    protected String getRequiredEnv(String key) {
        String value = System.getenv(key);
        if (value == null || value.trim().isEmpty()) {
            throw new IllegalStateException("Environment variable not set: " + key);
        }
        return value;
    }
}
