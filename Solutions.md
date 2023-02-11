# Bug 1: Select dropdown doesn't scroll with rest of the page
`Issue` : CSS property was Fixed
#### `Solution`: Change position from fixed to Absolute
`Explanation`: .RampInputSelect--dropdown-container class has the position attribute with fixed, change it to  position: absolute for better results.

# Bug 2: Approve checkbox not working
`Issue` : No Handler for label
#### `Solution`: Add a Handler for label
`Explanation`: There is no handler for the Label tag, while the hidden checkbox has that so we can add the handler for the label separately or we can have one handler for both
Add the below handler 
 onClick={() => onChange(!checked)}

# Bug 3: Cannot select _All Employees_ after selecting an employee
- `Issue` : Not getting all details as Transaction for employee is called
#### `Solution`: We call loadAllTransactions
`Explanation`: In the App.tsx file Whenever we handle the change of dropdown we are calling loadTransactionsByEmployee which should be corrected by checking the call is made for all employees if yes we need to call all transactions

 # Bug 4: Clicking on View More button not showing correct data
`Issue` : Whenever we do pagination we are slicing start and end
#### `Solution`: We slice it from 0 instead of previous page number
`Explanation`: Whenever we call PaginatedTransaction we are slicing the result from previous result instead we can modify the implementation and slice it from 0
 
 # Bug 5: Employees filter not available during loading more data
`Issue` : Loader is started at each call of employee
#### `Solution`: We start the loader only if the employee object is not initialized 
`Explanation`: While changing the value of loader we are making it true for every call instead we can check if the employees has been loaded or not.

 # Bug 6: View more button not working as expected
`Issue` : Button is not disabled at end of pagination
#### `Solution`: Disable the button if the pagination.next value is null

# Bug 7: Approving a transaction won't persist the new value
 Whenever I try this data value is updating for the call and new array is returned but it was not persisting. Tried all the possible ways but not able to figure out the solution.