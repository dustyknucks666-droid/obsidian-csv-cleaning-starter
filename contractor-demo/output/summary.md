# Cleaning summary - synthetic-suppliers.csv

- Rows in: **8**
- Rows out: **8** (no row was deleted)
- Normalisations logged: **3** (each one lists the original value)
- Exceptions flagged: **10**
- Seconds: **0.00**

## Exceptions by type

- conflicting-record: 5
- duplicate-row: 1
- missing-value: 4

## Missing values by column

- Quote date: 1
- Quoted price: 1
- Trade category: 1
- Unit of measure: 1

## Free-text columns (no type conversion; logged cleanup may apply)

- Supplier name, Trade category, Material description, Unit of measure, Quoted price, Quote date

## Why some columns were left alone

- Column 'Trade category' contains free text; no type conversion was applied. Whitespace cleanup and formula safety marking, if any, are logged.
- Column 'Material description' contains free text; no type conversion was applied. Whitespace cleanup and formula safety marking, if any, are logged.
- Column 'Unit of measure' contains free text; no type conversion was applied. Whitespace cleanup and formula safety marking, if any, are logged.
- Column 'Quoted price' contains free text; no type conversion was applied. Whitespace cleanup and formula safety marking, if any, are logged.
- Column 'Quote date' contains free text; no type conversion was applied. Whitespace cleanup and formula safety marking, if any, are logged.

Nothing was silently changed: the cleaned file keeps your columns, rows and order;
every normalisation is in changes.csv with its original value; everything
ambiguous, missing or broken is in exceptions.csv for you to decide.
