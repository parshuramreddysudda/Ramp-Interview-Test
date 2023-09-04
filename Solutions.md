## Bug 1: Dropdown Menu Doesn't Scroll with Page

**Issue**: The dropdown menu's CSS property is set to "fixed," causing it not to scroll with the rest of the page content.

**Solution**: Change the CSS `position` property from "fixed" to "absolute" for the `.RampInputSelect--dropdown-container` class to ensure the dropdown menu scrolls correctly with the page content.

---

## Bug 2: Checkbox for Approval Not Working

**Issue**: The label associated with the checkbox lacks an event handler.

**Solution**: Add an event handler to the label to ensure it responds to user clicks.

**Explanation**: Currently, the hidden checkbox has an event handler, but the associated label does not. Adding a handler to the label, such as `onClick={() => onChange(!checked)}`, will ensure that both the label and the checkbox respond correctly to user clicks.

---

## Bug 3: Unable to Select "All Employees" After Choosing a Specific Employee

**Issue**: Selecting a specific employee does not load all transaction details as expected.

**Solution**: Implement the `loadAllTransactions` function when "All Employees" is selected.

**Explanation**: In the `App.tsx` file, the code handles dropdown changes by calling `loadTransactionsByEmployee`. However, this should be modified to ensure that when "All Employees" is selected, all transactions are loaded by calling `loadAllTransactions`.

---

## Bug 4: View More Button Does Not Display Correct Data

**Issue**: Data displayed when using pagination is incorrect because the code incorrectly slices data based on the previous page number.

**Solution**: Adjust the data slicing to start from the beginning (index 0) instead of using the previous page number.

**Explanation**: When calling `PaginatedTransaction`, the code slices the result based on the previous page number, causing incorrect data display during pagination. To fix this, update the implementation to start slicing data from index 0.

---

## Bug 5: Employees Filter Not Available During Loading

**Issue**: The loader is triggered with each call to retrieve employee data.

**Solution**: Modify the loader behavior to activate it only when the employee data is not yet initialized.

**Explanation**: Currently, the loader is set to "true" with every call, even if the employee data has already been loaded. To improve this, the loader should be activated only if the employee data has not been initialized.

---

## Bug 6: "View More" Button Not Disabled at the End of Pagination

**Issue**: The "View More" button remains active even when there is no more data to load.

**Solution**: Disable the "View More" button when the `pagination.next` value is null.

---

## Bug 7: Transaction Approval Status Not Persisted

**Issue**: Transaction approval status does not persist between sessions, leading to inconsistencies.

**Solution**: Implemented data persistence, integrated `await clearCache()` in `TransactionPane.tsx`, updated the approval process to invoke `clearCache()` after approval, and ensured data consistency across sessions.

**Result**: Improved data integrity and enhanced user experience.