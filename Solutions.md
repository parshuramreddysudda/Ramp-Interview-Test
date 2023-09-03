## Bug 1: Select dropdown doesn't scroll with the rest of the page

**Issue**: CSS property was Fixed

**Solution**: Change `position` from `fixed` to `absolute`

**Explanation**: The `.RampInputSelect--dropdown-container` class has the `position` attribute set to `fixed`, which caused the dropdown not to scroll with the rest of the page. To resolve this, update the CSS to use `position: absolute` for better results.

---

## Bug 2: Approve checkbox not working

**Issue**: No Handler for label

**Solution**: Add a Handler for label

**Explanation**: The label tag lacks an event handler, while the hidden checkbox has one. To fix this, add a handler to the label, such as `onClick={() => onChange(!checked)}`, to ensure both the label and the checkbox respond to user clicks.

---

## Bug 3: Cannot select _All Employees_ after selecting an employee

**Issue**: Not getting all details as Transaction for employee is called

**Solution**: We call `loadAllTransactions`

**Explanation**: In the `App.tsx` file, the code handles the change of the dropdown by calling `loadTransactionsByEmployee`. This should be corrected to ensure that when "All Employees" is selected, all transactions are loaded by calling `loadAllTransactions`.

---

## Bug 4: Clicking on View More button not showing correct data

**Issue**: Whenever we do pagination, we are slicing start and end

**Solution**: Slice from 0 instead of the previous page number

**Explanation**: When calling `PaginatedTransaction`, the code slices the result from the previous page number, resulting in incorrect data display during pagination. To fix this, update the implementation to start slicing from index 0.

---

## Bug 5: Employees filter not available during loading more data

**Issue**: Loader is started at each call of employee

**Solution**: Start the loader only if the employee object is not initialized

**Explanation**: The loader is set to true with every call instead of checking if the employees have already been loaded. Modify the loader behavior to activate it only if the employees have not been initialized.

---

## Bug 6: View more button not working as expected

**Issue**: Button is not disabled at the end of pagination

**Solution**: Disable the button if the `pagination.next` value is null

---

## Bug 7: Approving a transaction won't persist the new value

**Issue**: Data value updates for the call but doesn't persist

**Solution**: Investigate and fix the persistence issue

**Explanation**: Despite updating the data value for the call, it's not persisting as expected. This bug requires further investigation to identify and implement a solution.
