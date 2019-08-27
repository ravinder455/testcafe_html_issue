# Issue in Testcafe Reporter when using `testcafe-reporter-cucumber-json`
Sample code for reported issue in testcafe-reporter-cucumber-json

* This sample code has 2 test suites that loads google homepage and assert for a link. Each suite (fixture) has 2 failing tests and 2 success tests.
* Both fixtures has exactly same tests (same url and same assertions)
* One fixtue is `.testcafe` file and another one is `.js` file which is generated from `.testcafe` (using TestCafe Studio)

# Commands
* `npm run testTc` - Run fixture in testcafe file
* `npm run testJs` - Run fixture in js file

# Problem descriptions
* When running js files, I see there is no issue. Tests run successfully and report (json) is generated.
* When running testcafe files, there are 2 kinds of behaviours.
  - Browser doesn't closes after completion of all tests and json report is not generated.
  - Tests complete successfully and report json has no failed test details (elemets array in report.json has only passed tests elements. This is resulting in HTML reports with 100% success)
  
 In my project, we run `.testcafe` files in our CI/CD pipeline and publish the html report for reporting. 
 I used `.js` files here only to demonstrate the problem and show the difference.
 
 ** Testcafe configuration **
```
{ "browsers": "chrome", 
  "reporter": [ "spec", { "name": "cucumber-json", "output": "reports/report.json" } ],
  "skipUncaughtErrors":true, 
  "src": ["./tests/*.testcafe"] 
}
```
- OS : mac (In local env), Linux (Server)
- Browser: Chrome (In local env), Chromium Headless (Server)
