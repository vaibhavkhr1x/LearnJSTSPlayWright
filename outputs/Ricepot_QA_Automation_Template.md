# Ricepot QA Task, Test Plan, Test Case, and Automation Template

Use this reusable template to define a Ricepot QA task and its test coverage. Replace every bracketed field with project details. Treat the Salesforce login values below as a worked example only; do not carry them into Ricepot requirements unless Ricepot uses that same application.

## How to use

1. Complete the project and feature inputs.
2. Write the QA task and acceptance criteria.
3. Build the test plan and test case matrix from those criteria.
4. If automation is in scope, complete the automation request and output contract.
5. Keep assumptions visible. Do not invent UI behavior, error text, URLs, selectors, or acceptance criteria.

## 1. Project and feature inputs

| Field | Value |
|---|---|
| Project | Ricepot |
| Product / application | [Application name] |
| Feature under test | [Feature name] |
| Requirement / story IDs | [IDs and links] |
| Environment | [QA / staging / other] |
| Application URL | [URL] |
| Release / build | [Version or build ID] |
| Supported browsers | [Browser and version range] |
| Supported operating systems | [OS and version range] |
| QA owner | [Name or team] |
| Product / business contact | [Name or team] |
| Dependencies | [Services, accounts, test data, or N/A] |
| Credentials and secrets | [Secret store reference; never paste credentials] |

## 2. QA task template

### Task title

[Verb] [feature or behavior] for [application / release]

### Objective

[Describe the quality question this task must answer and the user or business outcome.]

### Background

[Summarize the feature, recent changes, known defects, and relevant product behavior.]

### Scope

**In scope**

- [Behavior, platform, browser, integration, or risk]
- [Behavior, platform, browser, integration, or risk]

**Out of scope**

- [Explicitly excluded behavior or platform]
- [Explicitly excluded behavior or platform]

### Acceptance criteria

- [Observable, measurable result linked to a requirement ID]
- [Observable, measurable result linked to a requirement ID]

### Deliverables

- [ ] QA findings and execution summary
- [ ] Test plan
- [ ] Test cases with requirement traceability
- [ ] Automation source and project configuration, if requested
- [ ] Defects with reproducible steps and supporting evidence

### Constraints and assumptions

- [Technical, access, schedule, data, or compliance constraint]
- [Assumption that needs confirmation, with owner]

## 3. Test plan template

### Plan summary

| Field | Value |
|---|---|
| Plan ID / version | [ID / version] |
| Feature and release | [Feature / release] |
| Requirements covered | [Requirement IDs] |
| Test owner | [Name or team] |
| Planned execution window | [Dates or sprint] |
| Environment and build | [Environment / build] |

### Test objectives

- [What must be verified]
- [Important risks to reduce]

### Test scope and approach

| Area | Included coverage | Approach |
|---|---|---|
| Functional behavior | [Requirements and user journeys] | [Manual, automated, or both] |
| UI and usability | [Layouts, labels, focus, responsive behavior] | [Browsers / viewports] |
| Validation and errors | [Required and invalid inputs, recovery] | [Positive and negative cases] |
| Integration | [Connected services and dependencies] | [Stubs, test services, or end-to-end] |
| Regression | [Impacted areas] | [Regression suite / targeted checks] |
| Non-functional | [Performance, accessibility, security, if in scope] | [Approved method and limits] |

### Test levels and test types

Select only the levels and types relevant to the feature.

- [ ] Smoke / build verification
- [ ] Component or API
- [ ] Integration
- [ ] End-to-end functional
- [ ] Negative and boundary
- [ ] Cross-browser / responsive
- [ ] Accessibility
- [ ] Performance
- [ ] Security
- [ ] Regression

### Test data

| Data set | Purpose | Source / setup | Cleanup |
|---|---|---|---|
| [Data label] | [Scenario] | [Approved test account or fixture] | [Cleanup step] |

Use synthetic or approved test data. Store credentials in the approved secret manager or environment variables. Never hard-code secrets in source files or commit them.

### Environment and tools

- Application URL: [URL]
- Build / deployment: [Build ID and deployment date]
- Browser / OS matrix: [Matrix]
- Automation and reporting tools: [Tools and versions]
- Feature flags / configuration: [Required values]
- External dependencies: [Status, test endpoint, or stub]

### Entry criteria

- [Build is deployed and available]
- [Requirements and acceptance criteria are reviewable]
- [Accounts and test data are ready]
- [Dependencies and feature flags are configured]

### Exit criteria

- [All critical planned cases have a recorded result]
- [No open release-blocking defects, or approved exception is documented]
- [Failed and blocked cases have owners and next steps]
- [Coverage and execution summary are recorded]

### Defect handling

For each defect, record: title, environment/build, severity, priority, requirement or case ID, prerequisites, reproducible steps, actual result, expected result, frequency, and evidence. Follow the Ricepot team's severity and triage rules: [link or summary].

### Risks, dependencies, and mitigations

| Risk or dependency | Impact | Likelihood | Mitigation / owner |
|---|---|---|---|
| [Risk] | [Impact] | [Low / medium / high] | [Mitigation / owner] |

### Execution reporting

Report the planned, passed, failed, blocked, and not-run case counts; requirement coverage; open defects by severity; environment/build; and any release risks or follow-up actions.

## 4. Test case template

Create one row or case per independently verifiable behavior. Keep expected results observable and trace each case to a requirement or acceptance criterion.

| Field | Value |
|---|---|
| Test case ID | [TC-RICEPOT-AREA-001] |
| Title | [Action and behavior] |
| Requirement / acceptance criterion | [ID] |
| Priority | [P0 / P1 / P2 / P3] |
| Type | [Positive / negative / boundary / UI / regression] |
| Automation | [Candidate / automated / manual / not suitable] |
| Preconditions | [State, account, permissions, feature flags] |
| Test data | [Non-secret fixture or secret-store reference] |
| Steps | 1. [Action] 2. [Action] 3. [Action] |
| Expected result | [Observable result for each important step] |
| Actual result | [Fill during execution] |
| Status | [Not run / pass / fail / blocked] |
| Evidence / defect | [Link or reference] |

### Login example scenarios

Use these only if the Ricepot feature is a login page. Replace expected outcomes with approved product requirements; do not guess exact error copy or post-login routes.

| Example ID | Scenario | Expected result to define from requirements |
|---|---|---|
| TC-LOGIN-001 | Submit valid username and password | Authentication succeeds and the documented next state is shown, including any approved MFA step. |
| TC-LOGIN-002 | Submit a valid username with an incorrect password | Authentication is rejected, a safe and documented error is shown, and the user can retry. |
| TC-LOGIN-003 | Submit an unknown username | Authentication is rejected according to the product's account-enumeration and error-message policy. |
| TC-LOGIN-004 | Leave username blank | Required-field behavior is shown and authentication is not attempted. |
| TC-LOGIN-005 | Leave password blank | Required-field behavior is shown and authentication is not attempted. |
| TC-LOGIN-006 | Leave both fields blank | Required-field behavior is shown for all applicable fields. |
| TC-LOGIN-007 | Submit malformed username input | Client/server validation follows the documented input rules without an unexpected failure. |
| TC-LOGIN-008 | Toggle Remember me on and off | The control state is usable and persistence matches the documented behavior; passwords must not be persisted. |
| TC-LOGIN-009 | Submit using the keyboard | Keyboard interaction submits or focuses controls according to the documented accessibility behavior. |
| TC-LOGIN-010 | Repeat invalid attempts to a defined limit | Lockout, throttling, or recovery behavior matches the approved security requirement in a safe test environment. |

## 5. Selenium Java automation request template

Copy this section when asking for implementation. Complete the configuration fields first.

### Implementation inputs

| Field | Value |
|---|---|
| Application / feature | [Ricepot feature] |
| Target URL | [URL] |
| Java version | [Supported version] |
| Selenium version | [Approved version] |
| Maven version | [Approved version] |
| TestNG version | [Approved version] |
| Browser and driver strategy | [Browser / Selenium Manager or approved driver strategy] |
| Environment configuration | [System properties / environment variables] |
| Test data source | [Secret store / fixtures / environment variables] |
| Reporting | [TestNG reports / approved reporter] |
| Java source-file contract | [One page object plus one or two TestNG test classes] |
| Required config files | [pom.xml, testng.xml, other approved config] |

### Required engineering standards

- Use Java, Maven, Selenium WebDriver, and TestNG with compatible, explicitly declared dependencies.
- Apply Page Object Model and PageFactory. Initialize PageFactory in the page object's constructor and use @FindBy for page elements.
- Use XPath locators only. Do not use CSS selectors.
- Keep locators, page interactions, and page-specific waits in the Page Object. Keep assertions and test intent in the TestNG test layer.
- Use explicit WebDriverWait conditions for synchronization. Do not use Thread.sleep() or arbitrary fixed delays.
- Use TestNG annotations with lifecycle semantics that match the suite. Use @Test for cases; use @BeforeMethod and @AfterMethod when each case needs an isolated browser; use @BeforeTest / @AfterTest for test-tag-level configuration and setup; add suite-level hooks only when needed. Ensure teardown closes the driver even after a failure.
- Apply clear exception handling in the Page Object and tests. Catch only when recovery or useful context is added; preserve the original cause and fail the test on unexpected errors. Do not swallow exceptions or return success-shaped defaults after failures.
- Read credentials and environment-specific values from approved configuration or secret sources. Do not hard-code credentials, tokens, or production user data.
- Keep test methods independent and deterministic. Use descriptive names, meaningful assertions, and test data that can be safely reset.
- Do not add code comments, Thread.sleep(), empty catch blocks, brittle fixed waits, or unrelated framework code.
- Generate only the configured Java source files and requested Maven/TestNG configuration files. If a source-file limit conflicts with a maintainable shared setup, state the conflict and follow the selected output contract instead of silently adding files.
- Do not claim that tests were run unless execution results are available.

### Requested output

1. [Page Object Java file]
2. [TestNG test script(s): specify valid, invalid, and other case coverage]
3. [pom.xml and testng.xml, if requested]
4. [Any additional item explicitly authorized above]

### Ready-to-use implementation prompt

> Act as an experienced QA automation engineer working on Ricepot. Create a production-quality Selenium WebDriver framework for the feature and requirements provided above using Java, Maven, and TestNG.
>
> Implement the configured number of Page Object and TestNG Java source files. Use PageFactory, constructor initialization, @FindBy with XPath locators only, reusable page actions, explicit waits, safe driver setup and teardown, and clear exception propagation in both page and test layers. Cover the approved positive, negative, boundary, and UI scenarios. Never use CSS selectors, Thread.sleep(), hard-coded credentials, empty catch blocks, or unsupported expected behavior.
>
> Use only the requested source and configuration files. Include all Maven dependencies and TestNG configuration needed to run the suite. Keep assertions in tests and page interactions in the Page Object. Report assumptions or missing requirements briefly in the requested task documentation; for code-only output, return only the requested project files. Do not claim test execution without evidence.

## 6. Worked example values from the supplied brief

These are example inputs, not Ricepot product requirements:

- Example application: Salesforce login
- Example URL: https://login.salesforce.com/?locale=in
- Example controls: username, password, submit, Remember me
- Example coverage: valid and invalid login, blank fields, malformed username, Remember me behavior
- Example locator constraint: XPath only
- Example synchronization constraint: WebDriverWait; no Thread.sleep()
- Example design constraint: Page Object Model with PageFactory
