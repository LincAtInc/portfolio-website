---
name: ynab
description: YNAB (You Need A Budget) guru — manage budgets, categories, transactions, accounts, and scheduled transactions via the YNAB API. Use when the user mentions YNAB, budgets, budget categories, transactions, spending, or financial tracking.
user-invocable: true
---

# YNAB Guru Skill

You are a YNAB expert. You understand YNAB's methodology and can manage budgets via the API.

## YNAB Methodology (The Four Rules)

1. **Give Every Dollar a Job** — every pound/dollar/dollar gets assigned to a category before it's spent
2. **Embrace Your True Expenses** — break large, infrequent expenses into monthly amounts (car insurance, holidays, etc.)
3. **Roll With the Punches** — when you overspend, move money from another category. No guilt, just adjust.
4. **Age Your Money** — aim to spend money that's at least 30 days old. This breaks the paycheck-to-paycheck cycle.

## Key YNAB Concepts

- **Budget** = a plan (YNAB API calls these "budgets", OpenAPI spec calls them "plans")
- **Category Groups** = folders that organise categories (e.g., "Bills", "Needs", "Wants")
- **Categories** = individual budget lines (e.g., "Groceries", "Rent")
- **Targets** = goals set on categories (monthly savings, by-date, spending target)
- **Transactions** = money in/out, always assigned to a category
- **Scheduled Transactions** = recurring or future transactions
- **Age of Money** = how many days old the money you're spending is
- **Ready to Assign** = unbudgeted money waiting to be assigned to categories
- **Overspent** = category has more spending than budgeted (red = cash overspent, orange = credit overspent)

## Lincoln's YNAB Budgets

| Budget | ID | Currency |
|--------|-----|----------|
| Mitch Mob AirBnbs | 48713e01-1c69-4f17-9c14-60c5251574c1 | GBP |
| Linc's Plan UK | a1b68ced-951f-45bd-92e7-1ea53f2f989f | GBP |
| Lincoln's Plan | 9232e377-c1c7-4b31-bc73-32f578c004b5 | AUD |

## API Reference

**Base URL:** `https://api.ynab.com/v1`
**Auth:** Bearer token in Authorization header
**Rate limit:** 200 requests/hour
**Note:** The API uses "budgets" in URLs but the OpenAPI spec uses "plans". Use "budgets" in actual API calls.

### Authentication

```bash
curl -s -H "Authorization: Bearer $YNAB_TOKEN" "https://api.ynab.com/v1/budgets"
```

**IMPORTANT:** Never store the token in files. Always ask the user for it or use environment variable `$YNAB_TOKEN`. If the user has provided it in the current session, reuse it.

### Amounts

YNAB uses **milliunits** (1000 = £1.00 / $1.00). Always divide by 1000 for display, multiply by 1000 when writing.

- £50.00 = 50000 milliunits
- -£25.50 = -25500 milliunits
- Income is positive, spending is negative

### Date Format

All dates use **ISO 8601**: `YYYY-MM-DD` (e.g., `2026-03-13`)

### Common Operations

#### List Budgets
```bash
curl -s -H "Authorization: Bearer $TOKEN" "https://api.ynab.com/v1/budgets"
```

#### Get Budget Summary
```bash
curl -s -H "Authorization: Bearer $TOKEN" "https://api.ynab.com/v1/budgets/{budget_id}"
```

#### List Categories
```bash
curl -s -H "Authorization: Bearer $TOKEN" "https://api.ynab.com/v1/budgets/{budget_id}/categories"
```

#### Create Category Group
```bash
curl -s -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  "https://api.ynab.com/v1/budgets/{budget_id}/category_groups" \
  -d '{"category_group": {"name": "Group Name"}}'
```

#### Create Category
```bash
curl -s -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  "https://api.ynab.com/v1/budgets/{budget_id}/categories" \
  -d '{"category": {"name": "Category Name", "category_group_id": "group-uuid"}}'
```

#### Update Category
```bash
curl -s -X PATCH -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  "https://api.ynab.com/v1/budgets/{budget_id}/categories/{category_id}" \
  -d '{"category": {"name": "New Name"}}'
```

#### Update Category Budget for a Month
```bash
curl -s -X PATCH -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  "https://api.ynab.com/v1/budgets/{budget_id}/months/{month}/categories/{category_id}" \
  -d '{"category": {"budgeted": 50000}}'
```
Month format: `YYYY-MM-01` (always first of month)

#### List Accounts
```bash
curl -s -H "Authorization: Bearer $TOKEN" "https://api.ynab.com/v1/budgets/{budget_id}/accounts"
```

#### Create Account
```bash
curl -s -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  "https://api.ynab.com/v1/budgets/{budget_id}/accounts" \
  -d '{"account": {"name": "Account Name", "type": "checking", "balance": 0}}'
```
Account types: `checking`, `savings`, `cash`, `creditCard`, `lineOfCredit`, `otherAsset`, `otherLiability`, `mortgage`, `autoLoan`, `studentLoan`, `personalLoan`, `medicalDebt`, `otherDebt`

#### List Transactions
```bash
curl -s -H "Authorization: Bearer $TOKEN" "https://api.ynab.com/v1/budgets/{budget_id}/transactions?since_date=2026-01-01"
```

#### Create Transaction
```bash
curl -s -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  "https://api.ynab.com/v1/budgets/{budget_id}/transactions" \
  -d '{"transaction": {
    "account_id": "account-uuid",
    "date": "2026-03-13",
    "amount": -50000,
    "payee_name": "Bunnings",
    "category_id": "category-uuid",
    "memo": "Renovation supplies",
    "cleared": "cleared",
    "approved": true
  }}'
```
Cleared values: `cleared`, `uncleared`, `reconciled`

#### Create Multiple Transactions
```bash
curl -s -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  "https://api.ynab.com/v1/budgets/{budget_id}/transactions" \
  -d '{"transactions": [
    {"account_id": "...", "date": "2026-03-13", "amount": -25000, "payee_name": "Store", "category_id": "..."},
    {"account_id": "...", "date": "2026-03-13", "amount": -15000, "payee_name": "Other", "category_id": "..."}
  ]}'
```

#### Update Transaction
```bash
curl -s -X PUT -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  "https://api.ynab.com/v1/budgets/{budget_id}/transactions/{transaction_id}" \
  -d '{"transaction": {"category_id": "new-category-uuid", "memo": "Updated memo"}}'
```

#### Delete Transaction
```bash
curl -s -X DELETE -H "Authorization: Bearer $TOKEN" \
  "https://api.ynab.com/v1/budgets/{budget_id}/transactions/{transaction_id}"
```

#### List Scheduled Transactions
```bash
curl -s -H "Authorization: Bearer $TOKEN" "https://api.ynab.com/v1/budgets/{budget_id}/scheduled_transactions"
```

#### Create Scheduled Transaction
```bash
curl -s -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  "https://api.ynab.com/v1/budgets/{budget_id}/scheduled_transactions" \
  -d '{"scheduled_transaction": {
    "account_id": "account-uuid",
    "date": "2026-04-01",
    "amount": -5500000,
    "payee_name": "Mortgage",
    "category_id": "category-uuid",
    "frequency": "monthly",
    "memo": "AUS mortgage payment"
  }}'
```
Frequency values: `never`, `daily`, `weekly`, `everyOtherWeek`, `twiceAMonth`, `every4Weeks`, `monthly`, `everyOtherMonth`, `every3Months`, `every4Months`, `twiceAYear`, `yearly`, `everyOtherYear`

#### Get Monthly Budget
```bash
curl -s -H "Authorization: Bearer $TOKEN" "https://api.ynab.com/v1/budgets/{budget_id}/months/2026-03-01"
```

#### List Payees
```bash
curl -s -H "Authorization: Bearer $TOKEN" "https://api.ynab.com/v1/budgets/{budget_id}/payees"
```

### Delta Requests (Efficient Polling)

Most GET endpoints support `last_knowledge_of_server` parameter. The response includes `server_knowledge` — pass this value on the next request to only get changes since then.

```bash
curl -s -H "Authorization: Bearer $TOKEN" \
  "https://api.ynab.com/v1/budgets/{budget_id}/transactions?last_knowledge_of_server=1234"
```

### Error Handling

YNAB returns standard HTTP status codes:
- `200` — Success
- `201` — Created
- `400` — Bad request (check your JSON)
- `401` — Unauthorized (bad/expired token)
- `404` — Not found
- `409` — Conflict (e.g., duplicate import_id)
- `429` — Rate limited (200 requests/hour max)
- `500` — Server error

### Tips for Using This Skill

1. Always pipe `2>/dev/null` to suppress the "Using keyring backend" message from gws
2. Use python3 one-liners to parse JSON responses for clean output
3. When creating multiple categories, loop and create sequentially
4. Always confirm destructive operations (delete) with the user
5. Display amounts in human-readable format (divide milliunits by 1000)
6. When showing budget status, highlight overspent categories
7. For monthly budgeting, use the first of the month format: `YYYY-MM-01`
