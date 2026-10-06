package com.selenium.framework.tests;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.selenium.framework.base.BaseTest;
import com.selenium.framework.pages.LoginPage;

public class LoginInvalidTest extends BaseTest {
    @Test
    public void invalidLoginShouldDisplayErrorMessage() {
        try {
            LoginPage loginPage = new LoginPage(driver);
            loginPage.open();
            loginPage.login("invalid.user@example.com", "IncorrectPassword123");
            Assert.assertTrue(loginPage.isErrorDisplayed(), "Expected the invalid login form to show an error message.");
        } catch (Exception e) {
            throw new AssertionError("Invalid login scenario failed.", e);
        }
    }
}
