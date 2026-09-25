# Certificate images

Drop certificate images or PDFs here, then link them from `sections/certifications.html`.

## Suggested filenames

| Certificate | Filename |
|---|---|
| Red Hat System Administration | `redhat-sysadmin.jpg` |
| Star Performer — Data Visualization Associate | `excelerate-star-data-visualization.jpg` |
| Star Performer — Project Management Trainee | `excelerate-star-project-management.jpg` |
| Star Performer — Innovation & Entrepreneurship | `excelerate-star-innovation.jpg` |
| AI & Data Science Bootcamp | `thinkcloudly-ai-datascience.jpg` |
| CPR / AED Certification | `cpr-aed.jpg` |

*(Databricks GenAI Fundamentals already links to its verifiable credential online — no image needed.)*

## Making a card clickable

In `sections/certifications.html`, change the card from a `<div>` to an `<a>`:

```html
<a class="cert-card" href="assets/certs/redhat-sysadmin.jpg"
   target="_blank" rel="noopener noreferrer">
  ...
</a>
```

Then delete the `cert-pending` class. The hover lift and ↗ arrow apply automatically.

## Path rule
Section files are fetched into `index.html`, so paths resolve from the **site root**.
Use `assets/certs/file.jpg` — **not** `../assets/certs/file.jpg`.

## File tips
- **JPG or PNG** for images; PDF works too and opens in the browser
- Keep each file under ~500 KB so the page stays fast
- Crop out any personal address, certificate serial number, or ID before uploading — these pages are public
- Prefer a verifiable online credential link over an image whenever one exists; it's harder to fake and reads as stronger evidence
