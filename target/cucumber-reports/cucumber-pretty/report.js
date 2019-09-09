$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginProfile.feature");
formatter.feature({
  "line": 1,
  "name": "Login Profile",
  "description": "As an employee of the company\r\nI want to login my employee profile using my credentials\r\nIn order to collaborate with my colleagues",
  "id": "login-profile",
  "keyword": "Feature"
});
formatter.before({
  "duration": 213727,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should see \"Log In as Employee\" message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Company home",
      "offset": 13
    },
    {
      "val": "www.mycomany.com",
      "offset": 40
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 161971427,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefs.StepDefinitions.i_am_on_the_page_on_URL(StepDefinitions.java:15)\r\n\tat ✽.Given I am on the \"Company home\" page on URL \"www.mycomany.com\"(LoginProfile.feature:7)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In as Employee",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Successful login",
  "description": "",
  "id": "login-profile;successful-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I fill in \"Username\" with \"Test\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I fill in \"Password\" with \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on the \"Log In\" button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \"My profile\" page on URL \"www.mycompany.com/myprofile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I should see \"Welcome to your profile\" message",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the \"Log out\" button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 11
    },
    {
      "val": "Test",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 11
    },
    {
      "val": "123",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "My profile",
      "offset": 13
    },
    {
      "val": "www.mycompany.com/myprofile",
      "offset": 38
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to your profile",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Log out",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.i_should_see_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 158786,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Failed login using wrong credentials",
  "description": "",
  "id": "login-profile;failed-login-using-wrong-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I fill in \"Username\" with \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I fill in \"Password\" with \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see \"\u003cwarning\u003e\" message",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login-profile;failed-login-using-wrong-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "warning"
      ],
      "line": 24,
      "id": "login-profile;failed-login-using-wrong-credentials;;1"
    },
    {
      "cells": [
        "Test",
        "!23",
        "Incorrect credentials. Try again!"
      ],
      "line": 25,
      "id": "login-profile;failed-login-using-wrong-credentials;;2"
    },
    {
      "cells": [
        "Tset",
        "123",
        "Incorrect credentials. Try again!"
      ],
      "line": 26,
      "id": "login-profile;failed-login-using-wrong-credentials;;3"
    },
    {
      "cells": [
        "Tset",
        "!23",
        "Incorrect credentials. Try again!"
      ],
      "line": 27,
      "id": "login-profile;failed-login-using-wrong-credentials;;4"
    },
    {
      "cells": [
        "Test",
        "",
        "Please enter password."
      ],
      "line": 28,
      "id": "login-profile;failed-login-using-wrong-credentials;;5"
    },
    {
      "cells": [
        "",
        "123",
        "Please enter username."
      ],
      "line": 29,
      "id": "login-profile;failed-login-using-wrong-credentials;;6"
    },
    {
      "cells": [
        "",
        "",
        "Please enter your credentials."
      ],
      "line": 30,
      "id": "login-profile;failed-login-using-wrong-credentials;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 145503,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should see \"Log In as Employee\" message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Company home",
      "offset": 13
    },
    {
      "val": "www.mycomany.com",
      "offset": 40
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 444962,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefs.StepDefinitions.i_am_on_the_page_on_URL(StepDefinitions.java:15)\r\n\tat ✽.Given I am on the \"Company home\" page on URL \"www.mycomany.com\"(LoginProfile.feature:7)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In as Employee",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 25,
  "name": "Failed login using wrong credentials",
  "description": "",
  "id": "login-profile;failed-login-using-wrong-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I fill in \"Username\" with \"Test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I fill in \"Password\" with \"!23\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see \"Incorrect credentials. Try again!\" message",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 11
    },
    {
      "val": "Test",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 11
    },
    {
      "val": "!23",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Incorrect credentials. Try again!",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 48904,
  "status": "passed"
});
formatter.before({
  "duration": 50111,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should see \"Log In as Employee\" message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Company home",
      "offset": 13
    },
    {
      "val": "www.mycomany.com",
      "offset": 40
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 498091,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefs.StepDefinitions.i_am_on_the_page_on_URL(StepDefinitions.java:15)\r\n\tat ✽.Given I am on the \"Company home\" page on URL \"www.mycomany.com\"(LoginProfile.feature:7)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In as Employee",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 26,
  "name": "Failed login using wrong credentials",
  "description": "",
  "id": "login-profile;failed-login-using-wrong-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I fill in \"Username\" with \"Tset\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I fill in \"Password\" with \"123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see \"Incorrect credentials. Try again!\" message",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 11
    },
    {
      "val": "Tset",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 11
    },
    {
      "val": "123",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Incorrect credentials. Try again!",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 42262,
  "status": "passed"
});
formatter.before({
  "duration": 53130,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should see \"Log In as Employee\" message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Company home",
      "offset": 13
    },
    {
      "val": "www.mycomany.com",
      "offset": 40
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 1000409,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefs.StepDefinitions.i_am_on_the_page_on_URL(StepDefinitions.java:15)\r\n\tat ✽.Given I am on the \"Company home\" page on URL \"www.mycomany.com\"(LoginProfile.feature:7)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In as Employee",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "Failed login using wrong credentials",
  "description": "",
  "id": "login-profile;failed-login-using-wrong-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I fill in \"Username\" with \"Tset\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I fill in \"Password\" with \"!23\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see \"Incorrect credentials. Try again!\" message",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 11
    },
    {
      "val": "Tset",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 11
    },
    {
      "val": "!23",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Incorrect credentials. Try again!",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 39244,
  "status": "passed"
});
formatter.before({
  "duration": 38036,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should see \"Log In as Employee\" message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Company home",
      "offset": 13
    },
    {
      "val": "www.mycomany.com",
      "offset": 40
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 434697,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefs.StepDefinitions.i_am_on_the_page_on_URL(StepDefinitions.java:15)\r\n\tat ✽.Given I am on the \"Company home\" page on URL \"www.mycomany.com\"(LoginProfile.feature:7)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In as Employee",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Failed login using wrong credentials",
  "description": "",
  "id": "login-profile;failed-login-using-wrong-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I fill in \"Username\" with \"Test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I fill in \"Password\" with \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see \"Please enter password.\" message",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 11
    },
    {
      "val": "Test",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 11
    },
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter password.",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 41658,
  "status": "passed"
});
formatter.before({
  "duration": 46489,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should see \"Log In as Employee\" message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Company home",
      "offset": 13
    },
    {
      "val": "www.mycomany.com",
      "offset": 40
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 461262,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefs.StepDefinitions.i_am_on_the_page_on_URL(StepDefinitions.java:15)\r\n\tat ✽.Given I am on the \"Company home\" page on URL \"www.mycomany.com\"(LoginProfile.feature:7)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In as Employee",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "Failed login using wrong credentials",
  "description": "",
  "id": "login-profile;failed-login-using-wrong-credentials;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I fill in \"Username\" with \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I fill in \"Password\" with \"123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see \"Please enter username.\" message",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 11
    },
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 11
    },
    {
      "val": "123",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter username.",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 89958,
  "status": "passed"
});
formatter.before({
  "duration": 57356,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should see \"Log In as Employee\" message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Company home",
      "offset": 13
    },
    {
      "val": "www.mycomany.com",
      "offset": 40
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 506544,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefs.StepDefinitions.i_am_on_the_page_on_URL(StepDefinitions.java:15)\r\n\tat ✽.Given I am on the \"Company home\" page on URL \"www.mycomany.com\"(LoginProfile.feature:7)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In as Employee",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 30,
  "name": "Failed login using wrong credentials",
  "description": "",
  "id": "login-profile;failed-login-using-wrong-credentials;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I fill in \"Username\" with \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I fill in \"Password\" with \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see \"Please enter your credentials.\" message",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 11
    },
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 11
    },
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter your credentials.",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 44677,
  "status": "passed"
});
formatter.uri("UpdateProfile.feature");
formatter.feature({
  "line": 1,
  "name": "Update Profile",
  "description": "As an employee of the company\r\nI want to be able to update my name, projects, email, and phone numbers on my profile\r\nIn order to share my contact information with my colleagues",
  "id": "update-profile",
  "keyword": "Feature"
});
formatter.before({
  "duration": 36829,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User logs in to profile",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I fill in \"Username\" with \"Test\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I fill in \"Password\" with \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the \"Log In\" button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \"My profile\" page on URL \"www.mycompany.com/myprofile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should see \"Welcome to your profile\" message",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the \"Log out\" button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Company home",
      "offset": 13
    },
    {
      "val": "www.mycomany.com",
      "offset": 40
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 828341,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefs.StepDefinitions.i_am_on_the_page_on_URL(StepDefinitions.java:15)\r\n\tat ✽.Given I am on the \"Company home\" page on URL \"www.mycomany.com\"(UpdateProfile.feature:7)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 11
    },
    {
      "val": "Test",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 11
    },
    {
      "val": "123",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "My profile",
      "offset": 13
    },
    {
      "val": "www.mycompany.com/myprofile",
      "offset": 38
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to your profile",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Log out",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.i_should_see_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Update name",
  "description": "",
  "id": "update-profile;update-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I click on the \"Edit Personal Info\" button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I fill in \"Your name\" with \"Thilina Ashen Gamage\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on the \"Save Changes\" button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see \"Your personal info has been successfully updated\" message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Edit Personal Info",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your name",
      "offset": 11
    },
    {
      "val": "Thilina Ashen Gamage",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Save Changes",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your personal info has been successfully updated",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 37432,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Add new projects",
  "description": "",
  "id": "update-profile;add-new-projects",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I click on the \"Add Project\" button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I fill in \"Project Name\" with \"\u003cproject\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I fill in \"Duration\" with \"\u003cduration\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I fill in \"Description\" with \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on the \"Save Changes\" button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see \"Your personal info has been successfully updated\" message",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "update-profile;add-new-projects;",
  "rows": [
    {
      "cells": [
        "project",
        "duration",
        "description"
      ],
      "line": 29,
      "id": "update-profile;add-new-projects;;1"
    },
    {
      "cells": [
        "Z-Mob",
        "3 months",
        "QA"
      ],
      "line": 30,
      "id": "update-profile;add-new-projects;;2"
    },
    {
      "cells": [
        "WJ5-Web UI",
        "1 month",
        "UI Testing"
      ],
      "line": 31,
      "id": "update-profile;add-new-projects;;3"
    },
    {
      "cells": [
        "Q-Med",
        "5 months",
        "UI Testing"
      ],
      "line": 32,
      "id": "update-profile;add-new-projects;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 489638,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User logs in to profile",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I fill in \"Username\" with \"Test\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I fill in \"Password\" with \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the \"Log In\" button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \"My profile\" page on URL \"www.mycompany.com/myprofile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should see \"Welcome to your profile\" message",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the \"Log out\" button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Company home",
      "offset": 13
    },
    {
      "val": "www.mycomany.com",
      "offset": 40
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 405718,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefs.StepDefinitions.i_am_on_the_page_on_URL(StepDefinitions.java:15)\r\n\tat ✽.Given I am on the \"Company home\" page on URL \"www.mycomany.com\"(UpdateProfile.feature:7)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 11
    },
    {
      "val": "Test",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 11
    },
    {
      "val": "123",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "My profile",
      "offset": 13
    },
    {
      "val": "www.mycompany.com/myprofile",
      "offset": 38
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to your profile",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Log out",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.i_should_see_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 30,
  "name": "Add new projects",
  "description": "",
  "id": "update-profile;add-new-projects;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I click on the \"Add Project\" button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I fill in \"Project Name\" with \"Z-Mob\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I fill in \"Duration\" with \"3 months\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I fill in \"Description\" with \"QA\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on the \"Save Changes\" button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see \"Your personal info has been successfully updated\" message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Add Project",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Project Name",
      "offset": 11
    },
    {
      "val": "Z-Mob",
      "offset": 31
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Duration",
      "offset": 11
    },
    {
      "val": "3 months",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 11
    },
    {
      "val": "QA",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Save Changes",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your personal info has been successfully updated",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 158785,
  "status": "passed"
});
formatter.before({
  "duration": 147918,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User logs in to profile",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I fill in \"Username\" with \"Test\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I fill in \"Password\" with \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the \"Log In\" button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \"My profile\" page on URL \"www.mycompany.com/myprofile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should see \"Welcome to your profile\" message",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the \"Log out\" button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Company home",
      "offset": 13
    },
    {
      "val": "www.mycomany.com",
      "offset": 40
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 993163,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefs.StepDefinitions.i_am_on_the_page_on_URL(StepDefinitions.java:15)\r\n\tat ✽.Given I am on the \"Company home\" page on URL \"www.mycomany.com\"(UpdateProfile.feature:7)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 11
    },
    {
      "val": "Test",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 11
    },
    {
      "val": "123",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "My profile",
      "offset": 13
    },
    {
      "val": "www.mycompany.com/myprofile",
      "offset": 38
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to your profile",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Log out",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.i_should_see_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 31,
  "name": "Add new projects",
  "description": "",
  "id": "update-profile;add-new-projects;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I click on the \"Add Project\" button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I fill in \"Project Name\" with \"WJ5-Web UI\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I fill in \"Duration\" with \"1 month\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I fill in \"Description\" with \"UI Testing\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on the \"Save Changes\" button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see \"Your personal info has been successfully updated\" message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Add Project",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Project Name",
      "offset": 11
    },
    {
      "val": "WJ5-Web UI",
      "offset": 31
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Duration",
      "offset": 11
    },
    {
      "val": "1 month",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 11
    },
    {
      "val": "UI Testing",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Save Changes",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your personal info has been successfully updated",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 67619,
  "status": "passed"
});
formatter.before({
  "duration": 82109,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User logs in to profile",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I fill in \"Username\" with \"Test\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I fill in \"Password\" with \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the \"Log In\" button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \"My profile\" page on URL \"www.mycompany.com/myprofile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should see \"Welcome to your profile\" message",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the \"Log out\" button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Company home",
      "offset": 13
    },
    {
      "val": "www.mycomany.com",
      "offset": 40
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 2542379,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefs.StepDefinitions.i_am_on_the_page_on_URL(StepDefinitions.java:15)\r\n\tat ✽.Given I am on the \"Company home\" page on URL \"www.mycomany.com\"(UpdateProfile.feature:7)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 11
    },
    {
      "val": "Test",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 11
    },
    {
      "val": "123",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "My profile",
      "offset": 13
    },
    {
      "val": "www.mycompany.com/myprofile",
      "offset": 38
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to your profile",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Log out",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.i_should_see_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 32,
  "name": "Add new projects",
  "description": "",
  "id": "update-profile;add-new-projects;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I click on the \"Add Project\" button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I fill in \"Project Name\" with \"Q-Med\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I fill in \"Duration\" with \"5 months\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I fill in \"Description\" with \"UI Testing\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on the \"Save Changes\" button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see \"Your personal info has been successfully updated\" message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Add Project",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Project Name",
      "offset": 11
    },
    {
      "val": "Q-Med",
      "offset": 31
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Duration",
      "offset": 11
    },
    {
      "val": "5 months",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 11
    },
    {
      "val": "UI Testing",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Save Changes",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your personal info has been successfully updated",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 50111,
  "status": "passed"
});
});