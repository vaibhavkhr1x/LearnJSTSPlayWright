package com.selenium.framework.tests;

import org.testng.Assert;
import org.testng.SkipException;
import org.testng.annotations.Test;

import com.selenium.framework.base.BaseTest;
import com.selenium.framework.pages.LoginPage;

public class LoginValidTest extends BaseTest {
    @Test
    public void validLoginShouldNavigateToHomePage() {
        String username = System.getenv("SALESFORCE_USERNAME");
        String password = System.getenv("SALESFORCE_PASSWORD");

        if (username == null || password == null || username.trim().isEmpty() || password.trim().isEmpty()) {
            throw new SkipException("Valid login test is skipped because SALESFORCE_USERNAME and SALESFORCE_PASSWORD are not configured.");
        }

        try {
            LoginPage loginPage = new LoginPage(driver);
            loginPage.open();
            loginPage.login(username, password);
            Assert.assertTrue(loginPage.isLoginSuccessful(), "Expected a valid Salesforce login to redirect away from the login page.");
        } catch (Exception e) {
            throw new AssertionError("Valid login scenario failed.", e);
        }
    }
}
