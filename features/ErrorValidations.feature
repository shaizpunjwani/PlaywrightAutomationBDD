Feature: Error Validation
@Errorvalidation
Scenario Outline: Scenario Outline name: Checking validations

Given login to website2 with "<Username>" and "<Password>"
Then validate error

Examples:

| Username | Password |
| john.cena@gmail.com | Johncena123! |
| john@gmail.com | Johncena123 |