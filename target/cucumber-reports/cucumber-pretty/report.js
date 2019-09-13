$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginProfile.feature");
formatter.feature({
  "line": 1,
  "name": "Login Profile",
  "description": "As an employee of the company\r\nI want to login my employee profile using my credentials\r\nIn order to collaborate with my colleagues",
  "id": "login-profile",
  "keyword": "Feature"
});
formatter.before({
  "duration": 224595,
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
  "duration": 262415921,
  "status": "passed"
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
  "duration": 102033,
  "status": "passed"
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
  "duration": 237273,
  "status": "passed"
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
  "duration": 937620,
  "status": "passed"
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
  "duration": 109278,
  "status": "passed"
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
  "duration": 469112,
  "status": "passed"
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
  "duration": 81506,
  "status": "passed"
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
  "duration": 1163422,
  "status": "passed"
});
formatter.after({
  "duration": 303081,
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
  "duration": 48904,
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
  "duration": 179916,
  "status": "passed"
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
  "duration": 77280,
  "status": "passed"
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
  "duration": 138862,
  "status": "passed"
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
  "duration": 111089,
  "status": "passed"
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
  "duration": 89958,
  "status": "passed"
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
  "duration": 79695,
  "status": "passed"
});
formatter.after({
  "duration": 35621,
  "status": "passed"
});
formatter.before({
  "duration": 38639,
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
  "duration": 171464,
  "status": "passed"
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
  "duration": 78488,
  "status": "passed"
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
  "duration": 127994,
  "status": "passed"
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
  "duration": 108071,
  "status": "passed"
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
  "duration": 720875,
  "status": "passed"
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
  "duration": 108675,
  "status": "passed"
});
formatter.after({
  "duration": 40451,
  "status": "passed"
});
formatter.before({
  "duration": 49508,
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
  "duration": 139466,
  "status": "passed"
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
  "duration": 82714,
  "status": "passed"
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
  "duration": 112901,
  "status": "passed"
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
  "duration": 116523,
  "status": "passed"
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
  "duration": 124372,
  "status": "passed"
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
  "duration": 101430,
  "status": "passed"
});
formatter.after({
  "duration": 39244,
  "status": "passed"
});
formatter.before({
  "duration": 45281,
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
  "duration": 131617,
  "status": "passed"
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
  "duration": 63997,
  "status": "passed"
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
  "duration": 151540,
  "status": "passed"
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
  "duration": 124976,
  "status": "passed"
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
  "duration": 86940,
  "status": "passed"
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
  "duration": 107467,
  "status": "passed"
});
formatter.after({
  "duration": 39847,
  "status": "passed"
});
formatter.before({
  "duration": 53734,
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
  "duration": 958751,
  "status": "passed"
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
  "duration": 88751,
  "status": "passed"
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
  "duration": 119542,
  "status": "passed"
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
  "duration": 97807,
  "status": "passed"
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
  "duration": 101430,
  "status": "passed"
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
  "duration": 91166,
  "status": "passed"
});
formatter.after({
  "duration": 33206,
  "status": "passed"
});
formatter.before({
  "duration": 54337,
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
  "duration": 164220,
  "status": "passed"
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
  "duration": 82110,
  "status": "passed"
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
  "duration": 1036031,
  "status": "passed"
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
  "duration": 173275,
  "status": "passed"
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
  "duration": 57960,
  "status": "passed"
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
  "duration": 108675,
  "status": "passed"
});
formatter.after({
  "duration": 33206,
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
  "duration": 39244,
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
  "duration": 159993,
  "status": "passed"
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
  "duration": 99014,
  "status": "passed"
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
  "duration": 804795,
  "status": "passed"
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
  "duration": 300063,
  "status": "passed"
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
  "duration": 107467,
  "status": "passed"
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
  "duration": 92373,
  "status": "passed"
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
  "duration": 74865,
  "status": "passed"
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
  "duration": 100826,
  "status": "passed"
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
  "duration": 163616,
  "status": "passed"
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
  "duration": 131617,
  "status": "passed"
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
  "duration": 812645,
  "status": "passed"
});
formatter.after({
  "duration": 32603,
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
  "duration": 43470,
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
  "duration": 146107,
  "status": "passed"
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
  "duration": 127994,
  "status": "passed"
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
  "duration": 109882,
  "status": "passed"
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
  "duration": 62187,
  "status": "passed"
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
  "duration": 100222,
  "status": "passed"
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
  "duration": 74864,
  "status": "passed"
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
  "duration": 68827,
  "status": "passed"
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
  "duration": 89958,
  "status": "passed"
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
  "duration": 114108,
  "status": "passed"
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
  "duration": 104448,
  "status": "passed"
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
  "duration": 655066,
  "status": "passed"
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
  "duration": 86939,
  "status": "passed"
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
  "duration": 82714,
  "status": "passed"
});
formatter.after({
  "duration": 39847,
  "status": "passed"
});
formatter.before({
  "duration": 42262,
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
  "duration": 140069,
  "status": "passed"
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
  "duration": 92373,
  "status": "passed"
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
  "duration": 94184,
  "status": "passed"
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
  "duration": 60978,
  "status": "passed"
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
  "duration": 86939,
  "status": "passed"
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
  "duration": 67620,
  "status": "passed"
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
  "duration": 54941,
  "status": "passed"
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
  "duration": 95392,
  "status": "passed"
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
  "duration": 122561,
  "status": "passed"
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
  "duration": 131013,
  "status": "passed"
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
  "duration": 79091,
  "status": "passed"
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
  "duration": 684650,
  "status": "passed"
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
  "duration": 72450,
  "status": "passed"
});
formatter.after({
  "duration": 42866,
  "status": "passed"
});
formatter.before({
  "duration": 44073,
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
  "duration": 131617,
  "status": "passed"
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
  "duration": 80902,
  "status": "passed"
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
  "duration": 149126,
  "status": "passed"
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
  "duration": 98410,
  "status": "passed"
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
  "duration": 799362,
  "status": "passed"
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
  "duration": 131617,
  "status": "passed"
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
  "duration": 63393,
  "status": "passed"
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
  "duration": 98411,
  "status": "passed"
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
  "duration": 100826,
  "status": "passed"
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
  "duration": 112901,
  "status": "passed"
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
  "duration": 107467,
  "status": "passed"
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
  "duration": 82110,
  "status": "passed"
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
  "duration": 56148,
  "status": "passed"
});
formatter.after({
  "duration": 48904,
  "status": "passed"
});
});