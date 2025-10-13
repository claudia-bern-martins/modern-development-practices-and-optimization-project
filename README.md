# Project: Preparing for Production

## Introduction

In this project, students will optimize and test a front-end web application called Study Night, a flashcard tool. Using the skills gained throughout this course, they will create tests to ensure product quality, install and configure necessary project dependencies, and optimize and automate the application tasks.

This project includes the prebuilt Study Night application. Students will install and configure VSCode extensions and npm dependencies. They will apply their testing skills by building unit tests with Mocha to verify logic functionality and end-to-end tests with Cypress to validate form and navigation behavior. To complete the project, students will prepare the application for production by optimizing it manually and using tools like Parcel to minify files and compress images and Gulp to automate testing and build processes.

## Environment Setup

### Local Machine Instructions

If you are using your local machine you'll need to install Node.js You can follow the instructions below or the ones provided by the Node.js documentation here: https://nodejs.org/en/download/package-manager/

**Mac or Linux**: Open your terminal and enter the following

```
curl -fsSL https://fnm.vercel.app/install | bash
source ~/.bashrc
fnm use --install-if-missing 20
node -v # This should print the latest supported version 
npm -v # This should print the latest supported version
```

**Windows**: Open PowerShell

```
winget install Schniz.fnm
fnm env --use-on-cd | Out-String | Invoke-Expression
fnm use --install-if-missing 20
node -v # This should print the latest supported version 
npm -v # This should print the latest supported version
```

### Workspace Instructions

If you are working in the Udacity provided workspace, simply start the workspace. Any dependencies you may need should be preconfigured for you.

## Instructions

### Project Instructions

To start the project, clone the [starter code](https://github.com/udacity/nd0011-c4-starter/tree/main)(opens in a new tab). If you're working in a workspace, you should have the starter code there already.

#### Start by initializing and configuring npm

- Initialize a `package.json` file with `npm init`
- `package.json` should include a name, version, description, MIT License
- Add `type : “module”` to the `package.json`, this will fix any import errors.

#### Install ESlint and Prettier through VS Code Extensions

- Navigate to VS Code Extensions and search for, then install, ESLint and Prettier.
- In the terminal, run `npm init --save-dev @eslint/config@latest` to install ESLint and generate a configuration file for your project.
- Restart VS Code to apply the extensions.
- The files `src/Shuffle.js` and `src/utilityRenderFunctions.js` contain ESLint and formatting errors. Use ESLint and Prettier to fix these issues by only addressing the underlined errors and formatting problems. Avoid making major changes to the logic, as other files depend on these functions and changes could cause errors.
- **NOTE:** No other folders in the src directory need to be changed.

#### Install Gulp and Parcel

- In the terminal enter `npm i –save-dev gulp, gulp-cli, gulp-shell`
- Install Parcel
  - In the terminal enter `npm i –save-dev parcel`
- Configure Gulp
  - Create a `gulpfile.js`
  - Import `gulp` and `gulp-shell`.
  - Create a Gulp task to build and run Parcel as the default task.
  - Running `npm run gulp` should build and serve the project.
  - Visit http://localhost:1234 in your browser to verify the application is working.
  - Navigate to the `dist` directory to verify that parcel has optimized images, minimize and concatenated files.
  - **Note:** Parcel does this automatically no further changes or configuration is necessary here. Do not make changes to the `dist` file.

#### Unit Test with Mocha

- Install mocha dependencies by entering `npm i –save-dev mocha chai` in the terminal
- Create a directory called `test` and create a test file called `shuffle.js`
- Create a `describe` block for the `shuffle` function.
- Create at least one test that verifies that the shuffle function shuffles the indexes of an array
- Extra tests for this function are encouraged but not required.
- Return to `gulpfile.js` and create a new different called `test` task that will run your new unit test.
- run the test with `npm run gulp test`

#### Create End-to-End Tests with Cypress

- In the terminal, run `npm i --save-dev cypress` to install Cypress.
- Run `npx cypress open` to open Cypress's task runner.
- Select E2E Testing. Cypress will configure and create the necessary files for testing.
- Create two new specs:
  - `navigation.cy.js`
  - `form.cy.js`
  - **Note:** The scaffold examples provided by Cypress can offer helpful hints if needed. Be sure to remove them when the project is complete
- Navigate to `cypress/e2e navigation.cy.js`
  - Create a `describe` block for the navigation tests.
  - Write tests to verify the following:
    - Clicking on "Card Set" in the side menu navigates to the page containing the card sets.
    - Clicking on "About" in the side menu navigates to the About page.
    - Clicking on "Home" in the side menu navigates to the Home page.
- Navigate to `cypress/e2e forms.cy.js`
  - Create tests to verify the functionality of both the `Create Set Form` and the `Add Card Form`:
    - Test the "happy path" for both forms (i.e., valid input and successful submission).
    - Test the "unhappy path" where the user submits an empty string for any of the inputs. An error should be rendered in these cases.
- Navigate to `gulpfile.js` and create a task that runs cypress tests with `npx cypress run`
- **Note:** Cypress tests require the server to be running. Ensure that you run your Parcel task in a separate terminal before executing the tests.

### Submission Instructions

#### Before Submitting

- Clean up your code by removing any unused code or unnecessary comments.
- Leave helpful comments. Comment intentionally to explain sections of your code as needed.
- Build and run your project in the browser to confirm it meets the project specifications.
- Review the rubric to ensure you've fully completed the project.

#### Submitting your project

GitHub Instructions:

- Push your project to a public repository.
- Ensure your project includes a `.gitignore` file in the root directory, ignoring `node_modules`.
- Push your code to the main branch.

Zip File Instructions:

- Delete the `node_modules` folder before submitting.

## Rubric

Use this project rubric to understand and assess the project criteria.

### Configuration

<table>
  <tr>
    <th>Criteria</th>
    <th>Submission Requirements</th>
  </tr>
  <tr>
    <td>The project includes all required dependencies and a properly configured package.json file.</td>
    <td>
      <p>The package.json file should include the following fields: name, description, license: "MIT", and type: "module".</p>
      <p>Additionally, it must include the following devDependencies at a minimum:</p>
      <ul>
        <li>chai</li>
        <li>cypress</li>
        <li>eslint</li>
        <li>gulp</li>
        <li>gulp-cli</li>
        <li>gulp-shell</li>
        <li>mocha</li>
        <li>parcel</li>
      </ul>
      <p>Students are free to include other packages however the project can be completed with the packages listed above.</p>
    </td>
  </tr>
  <tr>
    <td>Project has been formatted with Prettier</td>
    <td>Shuffle.js and utilityRenderFunctions.js should be easy to read and adhere to best practices.</td>
  </tr>
  <tr>
    <td>ESLint was used to identify and fix errors.</td>
    <td>Shuffle.js and utilityRenderFunctions.js should display no underlined ESLint errors.</td>
  </tr>
</table>

### Optimization

<table>
  <tr>
    <th>Criteria</th>
    <th>Submission Requirements</th>
  </tr>
  <tr>
    <td>The project should show evidence of manual CSS optimization.</td>
    <td>At minimum CSS selectors should be simplified. The project starts with long selectors like <code>body main div .aboutContainer</code> and should be manually shortened. Selectors like <code>.aboutContainer img</code> are acceptable, but anything significantly longer is too complex. Other manual optimizations are encouraged but not required.</td>
  </tr>
  <tr>
    <td>The project should be optimized using Parcel.</td>
    <td>Parcel automatically handles image optimization, minification, and file concatenation. If students have properly installed and run Parcel, there should be a dist folder containing optimized files.</td>
  </tr>
  <tr>
    <td>Gulp is used to automate tasks and build tasks</td>
    <td>The project should include a gulpfile.js with tasks to run Parcel and execute tests.</td>
  </tr>
</table>

### Testing

<table>
  <tr>
    <th>Criteria</th>
    <th>Submission Requirements</th>
  </tr>
  <tr>
    <td>The project includes unit tests written with Mocha.</td>
    <td>
      <p>The project should include a test directory with a shuffle.js file. This file must contain at least one test that verifies whether the shuffle function rearranges the indexes of an array.</p>
      <p>All tests should return passing.</p>
      <p>Additional tests are encouraged but not required</p>
    </td>
  </tr>
  <tr>
    <td>Project will have End-to-End cypress tests for forms and navigation</td>
    <td>
      <p>The project should include a cypress folder with an e2e subfolder containing two test files: one for forms and one for navigation.</p>
      <ul>
        <li>The navigation test file should include tests that click on each menu item and verify that the expected page has loaded.</li>
        <li>The forms test file should verify that the Create Set form returns an error if the user submits an empty string.</li>
      </ul>
      <p>All tests should pass successfully.</p>
    </td>
  </tr>
  <tr>
    <td>The project should adhere to testing best practices.</td>
    <td>
      <p>Tests follow best practices:</p>
      <ul>
        <li>Tests cover both happy paths (expected behavior) and unhappy paths (error cases)</li>
        <li>Cypress tests include a <code>beforeEach</code> section for repetitive setup actions</li>
        <li>Cypress elements are selected using <code>data-cy</code> attributes</li>
        <li>Unit tests are small and focused on specific functionality</li>
        <li>End-to-end tests comprehensively test complete feature workflows from start to finish</li>
      </ul>
    </td>
  </tr>
</table>

> [!TIP]
> ### Suggestions to Make Your Project Stand Out
> - Additional tests should verify full functionality and check for edge cases.
> - Further manual CSS optimization
> - Configure Gulp to run Parcel and Tests in a single task (This may take a bit of research on the students part)
