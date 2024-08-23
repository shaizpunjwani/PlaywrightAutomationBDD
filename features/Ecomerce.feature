Feature: Ecommerce Validation
@Regression
Scenario: Placing Order

Given login to website with "john.cena@gmail.com" and "Johncena123!"
When Add product "IPHONE 13 PRO" to cart
Then Verify the product "IPHONE 13 PRO" is displayed in the cart

@Errorvalidation
Scenario Outline: Scenario Outline name: Checking validations

Given login to website2 with "<Username>" and "<Password>"
Then validate error

Examples:

| Username | Password |
| john.cena@gmail.com | Johncena123! |
| john@gmail.com | Johncena123 |