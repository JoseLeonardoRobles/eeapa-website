# Publishing eeapa.com — step by step

Your setup (detected automatically):

- **Registrar / DNS:** Namecheap (default nameservers → manage DNS in the Namecheap dashboard)
- **Email:** Microsoft 365 / Outlook — **do not change the MX records**, email must keep working
- **Target address:** `www.eeapa.com` (currently unused)

---

## Step 1 — Log in to GitHub (you do this once)

If you don't have a GitHub account yet, create a free one at https://github.com/signup.
For a company, a username like `eeapa` or `eeapa-sa` looks clean.

Then, in your Terminal, run:

```bash
gh auth login
```

Answer the prompts:

1. **What account?** → `GitHub.com`
2. **Preferred protocol?** → `HTTPS`
3. **Authenticate Git with your GitHub credentials?** → `Yes`
4. **How to authenticate?** → `Login with a web browser`
5. It shows a **one-time code** (like `ABCD-1234`). Copy it, press Enter, the browser
   opens, paste the code, click **Authorize**.

When it says "Logged in as <your-username>", you're done. Tell Claude and it does the rest.

---

## Step 2 — Publish (Claude runs this for you)

```bash
gh repo create eeapa-website --public --source . --remote origin --push
gh api -X POST repos/<owner>/eeapa-website/pages -f "source[branch]=master" -f "source[path]=/"
```

The `CNAME` file in this folder tells GitHub the site lives at `www.eeapa.com`.

---

## Step 3 — Point the domain (you do this in Namecheap)

1. Log in to **Namecheap** → **Domain List** → `eeapa.com` → **Manage** → **Advanced DNS**.
2. Under **Host Records**, click **Add New Record** and add:

   | Type          | Host  | Value                      | TTL       |
   | ------------- | ----- | -------------------------- | --------- |
   | CNAME Record  | `www` | `<your-github-username>.github.io.` | Automatic |

   (Replace `<your-github-username>` with your GitHub username. The trailing dot is fine.)

3. *(Optional, so `eeapa.com` without `www` also works)* Add four **A Records**,
   Host `@`, pointing to GitHub Pages:

   | Type     | Host | Value             |
   | -------- | ---- | ----------------- |
   | A Record | `@`  | `185.199.108.153` |
   | A Record | `@`  | `185.199.109.153` |
   | A Record | `@`  | `185.199.110.153` |
   | A Record | `@`  | `185.199.111.153` |

4. **Leave the MX records and any Microsoft/Outlook records untouched** — those run your email.

DNS changes take ~5 minutes to a few hours. GitHub then auto-issues a free HTTPS
certificate for `www.eeapa.com`.

---

## Step 4 — Verify

- Visit https://www.eeapa.com
- In GitHub repo → **Settings → Pages**, confirm "Your site is live" and
  "Enforce HTTPS" is checked (check it once the certificate is ready).

---

## Updating the site later

```bash
# after editing files in this folder:
git add -A && git commit -m "Update site" && git push
```

The live site updates in about a minute.
