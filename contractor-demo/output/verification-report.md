# Verification report - synthetic-suppliers.csv

This report is produced by the same run that produced the files it
describes. Every line below is a check that was run, not a claim.

## What was checked

| Check | Result |
|---|---|
| Rows in | **8** |
| Rows out | **8** |
| Rows deleted | **0** |
| Every value changed is logged with the value it replaced | yes |
| Every flagged item keeps its original value | yes |
| The delivered file can be rebuilt from the input plus the change log | yes, it matches exactly |
| The buyer's columns, row count and row order are unchanged | yes |
| Values made safe to open in a spreadsheet | none |

## Files you were sent

- `cleaned.csv` - 677 bytes, SHA-256 `3e0a8b01c1de633cb9f6c18e2ca1812be24cf024b3755223ffe4d903c3984485`
- `changes.csv` - 216 bytes, SHA-256 `ef0cf970a920aed0d12adb1e0d09b11f6821abdee1f8c29bc08097fce87b6f5f`
- `exceptions.csv` - 911 bytes, SHA-256 `9d7f47ebc0ad789339d6d71632e965276a5cae09e035ed9b415bbade82947284`
- `summary.md` - 1567 bytes, SHA-256 `7aee87281d66b8ceb00441544f8d63e3d672224a91429e1aee8dc0c69c9ee214`
- `cleaned-exact.csv` - 677 bytes, SHA-256 `3e0a8b01c1de633cb9f6c18e2ca1812be24cf024b3755223ffe4d903c3984485`

## The file you sent me

- `synthetic-suppliers.csv` - 672 bytes, SHA-256 `9681eec15ba9d9bbe7fc5f086bd4057f2b78b364eb3447463d47c485a31545c5`

## In plain English

- 8 rows went in and 8 rows came out. Nothing was deleted.
- 3 value(s) were standardised, and every one of them is written down with the value it replaced.
- 10 thing(s) could not be read safely, so they were flagged for you to decide rather than guessed.
- 4 column(s) had missing values: Quote date (1), Quoted price (1), Trade category (1), Unit of measure (1)
- Free-text columns (no type conversion; logged cleanup may apply): Supplier name, Trade category, Material description, Unit of measure, Quoted price, Quote date
- Column 'Trade category' contains free text; no type conversion was applied. Whitespace cleanup and formula safety marking, if any, are logged.
- Column 'Material description' contains free text; no type conversion was applied. Whitespace cleanup and formula safety marking, if any, are logged.
- Column 'Unit of measure' contains free text; no type conversion was applied. Whitespace cleanup and formula safety marking, if any, are logged.
- Column 'Quoted price' contains free text; no type conversion was applied. Whitespace cleanup and formula safety marking, if any, are logged.
- Column 'Quote date' contains free text; no type conversion was applied. Whitespace cleanup and formula safety marking, if any, are logged.

Your file was processed on my own machine, was never uploaded anywhere, and is
deleted 7 days after delivery. I do not contact anyone from your data.
