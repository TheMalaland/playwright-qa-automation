# playwright-qa-automation

This project demonstrates the use of Playwright as a QA automation tool to test a real website. It includes end-to-end (E2E) tests that validate functionality, content, and navigation of the webpage.

Objective
The goal of this project is to showcase how Playwright can be used to automate testing on real-world web applications, ensuring software quality through fast, reliable, and scalable tests.

Features
E2E Tests: Validation of key elements such as the logo, navigation bar, and sections like "About Me."
Page Object Model (POM): Organized and reusable code for easier maintenance.
Real Website Testing: Automation applied to a real-world environment to demonstrate practical use cases.
Support for Animations and Delays: Handles elements that appear progressively.
How to Run
Clone this repository:

Install dependencies:

Run the tests:

Project Structure
page-objects/pages: Contains classes representing the website's pages.
tests/e2e: Contains tests organized by functionality.
playwright.config.ts: Playwright configuration for browsers, timeouts, and more.
Technologies Used
Playwright: Framework for E2E automation testing.
Node.js: JavaScript runtime environment.
TypeScript: Language used for writing typed and maintainable code.
Example Test