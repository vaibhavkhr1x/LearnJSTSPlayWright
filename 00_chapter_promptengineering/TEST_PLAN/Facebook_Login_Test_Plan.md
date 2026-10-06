# Facebook Web Login Test Plan

## 1. Test Plan ID and Title

| Field | Value |
| --- | --- |
| Test Plan ID | TP-FB-LOGIN-001 (locally assigned) |
| Title | Facebook Web Login Functional Test Plan |
| Version | 0.2 - Requester reviewed |
| Status | Ready for product/environment-owner approval; not an execution report |
| Application | Facebook web login |
| Target URL | https://www.facebook.com/ |
| Environment | User-designated test setup; environment ownership and isolation are to be confirmed |
| Prepared date | 2026-10-06 |

## 2. Objective and References

### Objective

Define a reviewable functional test approach for signing in to Facebook through a desktop web browser using an email address and password. The plan covers successful login, invalid input or credentials, required-field handling, and whether rejected attempts leave the user unauthenticated.

Formal product requirements, approved acceptance criteria, and exact expected messages were not supplied. The locally assigned requirements and expected outcomes in this plan are proposals for review, not confirmed Facebook specifications.

### References

- User-provided scope: Facebook account login, web browser, test setup at `https://www.facebook.com/`, email and password, functional testing only.
- [Generic RICEPOT QA template](../04_RICEPOT_Generic_QAtemplate.md), Profile B — Test plan.

### Test-plan boundaries

This document defines planned testing only. No tests have been executed as part of its preparation.

## 3. In Scope and Out of Scope

### In scope

- Desktop web login using an email address and password in Chrome.
- Successful authentication with an approved test account.
- Rejection of invalid credentials without establishing an authenticated session.
- Submission with required login fields left blank.
- Malformed email input, with the exact validation behavior to be confirmed against approved requirements.
- Observable login-page behavior and authenticated/unauthenticated state for the scenarios above.
- Functional regression of the in-scope login behavior when the login feature changes.

### Out of scope

- Remember Me, account recovery, account creation, logout, MFA, SSO, and social login.
- Phone-number login.
- Cross-browser, mobile-browser, and native mobile-app testing.
- Accessibility, performance/load, penetration, and broader security testing.
- Backend/API testing or verification of internal authentication-service behavior.
- Testing against real customer accounts or any account not explicitly approved for this test setup.

## 4. Requirements and Planned Coverage

The following requirement IDs are local and proposed. Product or business owners must confirm or replace them before execution. Exact UI text and response timing are intentionally not prescribed without approved requirements.

| Requirement ID | Proposed behavior to confirm | Planned coverage | Scenario type | Observable result |
| --- | --- | --- | --- | --- |
| FBLOGIN-REQ-01 | An approved active account can authenticate with its valid email and password. | Submit valid approved test credentials and check the resulting authenticated state. | Positive functional | The account reaches an authenticated state, as identified by a product-approved observable condition. |
| FBLOGIN-REQ-02 | Invalid credentials do not authenticate the user. | Submit an approved test email with an incorrect password. | Negative functional | Authentication is rejected and no authenticated state is established. Exact error text is not specified. |
| FBLOGIN-REQ-03 | Required login fields cannot be used to authenticate when left empty. | Submit with both fields empty; consider each field empty independently if confirmed in the test-case design. | Negative / boundary functional | Authentication does not occur; the approved validation behavior is observed. |
| FBLOGIN-REQ-04 | Malformed email input does not authenticate the user. | Submit a syntactically malformed email with a non-secret synthetic password. | Negative functional | Authentication does not occur; exact validation placement and wording require confirmation. |

| Risk ID | Risk | Planned mitigation or response |
| --- | --- | --- |
| RISK-01 | The supplied URL is the public Facebook domain even though the target was described as a test environment. The test setup may not be isolated from production controls or data. | Before execution, obtain written environment authorization, confirm isolation and permitted activity, and use only designated test accounts. Stop if those conditions cannot be confirmed. |
| RISK-02 | Anti-abuse controls, CAPTCHA, rate limiting, or account challenges may interrupt test execution. | Do not bypass or repeatedly trigger protections. Stop the affected scenario, record the observed blocker without sensitive data, and contact the environment owner. |
| RISK-03 | Login UI or authentication behavior may vary by experiment, locale, account state, or policy. | Record the observed variant and environment details; confirm expected behavior with the product owner before treating a difference as a defect. |
| RISK-04 | Invalid-login testing can lock or challenge accounts if repeated. | Use owner-approved test accounts and an agreed attempt limit; stop when a lockout or challenge occurs and follow the account owner's reset procedure. |

## 5. Test Approach, Levels, and Types

### Approach

1. Review and approve the proposed requirements, observable authenticated-state condition, and invalid-login expectations.
2. Confirm environment authorization, designated account availability, and test-account reset/lockout procedures.
3. Prepare independent manual functional scenarios and synthetic negative inputs. Do not store passwords in this plan or defect evidence.
4. Execute each scenario in the agreed Chrome desktop environment, recording actual results and evidence with sensitive values redacted.
5. Log and triage deviations, rerun affected scenarios after fixes, and report coverage and remaining blockers.

### Levels and types

- **System-level functional testing:** exercise the login journey through the browser UI.
- **Negative and boundary functional testing:** invalid credentials, empty required fields, and malformed email input.
- **Regression testing:** repeat the in-scope scenarios after relevant login changes.
- **Integration:** only the end-to-end interaction visible through the login journey is covered. Separate service/API integration testing is not planned because architecture and interfaces were not provided.
- **Nonfunctional testing:** excluded, consistent with the agreed functional-only scope.

### Execution principles

- Use only approved test accounts and synthetic invalid data.
- Do not attempt to bypass anti-abuse, CAPTCHA, or account-protection controls.
- Capture observable outcomes; do not infer successful authentication from a button click alone.
- Do not claim coverage of behaviors outside the four proposed requirements.

## 6. Environment, Tools, Access, and Test Data

| Area | Plan / status |
| --- | --- |
| Application URL | `https://www.facebook.com/` |
| Environment | Described by the requester as an approved test setup using the public Facebook URL; environment isolation and authorization must be reconfirmed before execution. |
| Browser | Chrome desktop; exact version to be recorded at execution. |
| Operating system | Not provided; record the approved desktop OS and version before execution. |
| Test method | Manual browser-based functional testing; automation tooling was not requested. |
| Access | Requester indicated that approved test accounts and environment access will be provided. Owner, access process, and setup confirmation are not provided. |
| Positive test data | One owner-approved active test account with a valid email and password, supplied securely outside this document. |
| Negative test data | Synthetic malformed email and incorrect password inputs. Do not use another person's email or account. |
| Secrets handling | Never place credentials in the plan, screenshots, issue comments, source control, or unapproved logs. Use the approved secret-sharing mechanism. |
| Dependencies | Environment availability, network access, approved account provisioning, account reset process, and product-approved expected outcomes. |

## 7. Entry and Exit Criteria

All numerical thresholds below are proposals for stakeholder agreement.

### Entry criteria

- The locally assigned requirements and observable success/failure conditions are reviewed and approved.
- The environment owner confirms that testing at the supplied URL is authorized and describes the test setup's isolation.
- Chrome desktop and the supported operating system are identified.
- An approved positive test account is available through a secure channel; synthetic negative inputs are prepared.
- Account lockout, challenge, and reset handling are agreed.
- No known blocker prevents opening the login page or accessing the designated test account.

### Exit criteria

- 100% of the approved in-scope scenarios have an execution status recorded.
- The valid-login scenario passes, and every executed invalid-input scenario confirms no authenticated state, unless an approved requirement specifies otherwise.
- There are no open blocker/critical defects; all other open defects have an owner and documented disposition.
- Every blocked, skipped, or inconclusive scenario has a reason and follow-up action recorded.
- Results, defects, residual risks, and outstanding requirement decisions are reviewed with the designated approver.

If the environment or account protections block execution, the test cycle is reported as blocked or incomplete rather than passed.

## 8. Roles, Responsibilities, Estimates, and Schedule

| Role | Responsibility | Owner / status |
| --- | --- | --- |
| QA tester | Review criteria, prepare and execute scenarios, record evidence, file defects, and report results. | Not provided |
| Product or business owner | Confirm login requirements, accepted outcomes, and scope. | Not provided |
| Environment owner | Confirm authorization/isolation, access, account provisioning, rate limits, and reset procedures. | Not provided |
| Developer / support engineer | Triage defects, provide technical investigation, and support retest. | Not provided |
| Approver | Review results and accept residual risks or sign off. | Not provided |

### Estimate and schedule

- Schedule and release date: Not provided.
- Proposed estimate: up to one working day for criteria review, preparation, and execution of the small approved scenario set, plus time for defect fixes and retesting. This estimate depends on access, account readiness, and environment stability and requires agreement.
- Execution start: only after entry criteria are met.

## 9. Defect Management and Reporting

- Record each defect in the team's approved issue tracker; the tool and project are not provided.
- Include a concise title, environment/browser details, preconditions, sanitized test data, reproducible steps, expected and observed results, timestamp, and redacted evidence.
- Never include passwords, authentication tokens, recovery codes, or personal/customer data in a defect.
- Proposed severity and priority should be labeled as proposed until triage confirms them.
- Triage with QA, product, and development representatives. Triage cadence and response targets are not provided and require agreement.
- Provide a status report at the end of each execution cycle with planned, passed, failed, blocked, and not-run scenario counts; linked defects; risks; and decisions required.

## 10. Risks, Dependencies, Assumptions, and Open Questions

### Assumptions

- The requested target is Facebook's web login reached at `https://www.facebook.com/`, in the requester's approved test setup.
- The designated accounts are explicitly authorized for testing and are not customer accounts.
- Email and password are the only login identifier and authentication factors in scope.
- The four proposed requirements in Section 4 are planning assumptions pending product approval.
- Exact error text, validation timing, and authenticated-state indicators will be agreed before execution rather than invented in this plan.

### Dependencies

- Written authorization and environment-owner confirmation for the target URL.
- Secure provisioning and maintenance of an approved active test account.
- Confirmed account reset and lockout/challenge process.
- Product-approved acceptance criteria and an observable way to identify authenticated state.
- Working Chrome desktop access and stable network connectivity.

### Open questions

1. Is the test setup isolated and explicitly authorized for testing at `www.facebook.com`?
2. What approved condition proves a successful authenticated state without relying only on a URL change?
3. What should happen for malformed email and empty fields, including any expected validation placement or message?
4. What test account lockout, challenge, or reset rules apply?
5. Which operating system, Chrome version, issue tracker, test owner, approver, and execution window should be recorded?
6. Are the proposed four local requirements and the exclusions in Section 3 acceptable?

## 11. Suspension and Resumption Criteria

### Suspend testing when

- Authorization, environment isolation, or approved test-account status is unclear or withdrawn.
- A CAPTCHA, security challenge, rate limit, lockout, or anti-abuse control appears.
- The site is unavailable, materially different from the approved target, or presents unexpected account/customer data.
- A blocker prevents reliable execution or a defect indicates potential data exposure or account impact.
- Repeated attempts could risk account suspension or violate the environment owner's limits.

Do not bypass a security challenge or continue retrying. Record the scenario as blocked, preserve only sanitized evidence, and notify the environment owner.

### Resume testing when

- The environment owner reconfirms authorization and availability.
- The relevant test account has been safely restored or replaced and attempt limits are understood.
- The cause of the blocker is resolved or an approved workaround is documented.
- QA and the designated owner agree which scenarios need to be rerun.

## 12. Test Deliverables and Approval

### Deliverables

- This test plan after stakeholder approval.
- Reviewed scenario list and requirement/risk coverage mapping.
- Execution record with actual results and blocked/not-run reasons.
- Defect records with sanitized evidence.
- Completion summary documenting coverage, defect status, residual risks, and approval decision.

### Approval

| Approver role | Name | Decision | Date |
| --- | --- | --- | --- |
| Product or business owner | Not provided | Pending | Not provided |
| Environment owner | Not provided | Pending | Not provided |
| QA lead / test owner | Not provided | Pending | Not provided |

Approval of this plan confirms agreement on its scope and proposed criteria. It does not represent test execution or certify the application.
