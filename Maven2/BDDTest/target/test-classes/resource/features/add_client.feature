Feature: Registering a Client
  Scenario: Registering a new Client
    Given the user is on the add client page
    When the user enters the client details and click on the register button
    Then the client added successfully message should be the output on the page
