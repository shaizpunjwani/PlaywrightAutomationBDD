Feature: Ecommerce Validation

Scenario: Placing Order

Given login to website with "john.cena@gmail.com" and "Johncena123!"
When Add product "IPHONE 13 PRO" to cart
Then Verify the product "IPHONE 13 PRO" is displayed in the cart