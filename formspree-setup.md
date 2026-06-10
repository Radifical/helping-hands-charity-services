# Formspree Setup (3 forms)

The site has three forms wired to Formspree:

1. **Donation form** (home, For Donors, and every nonprofit page)
2. **Partner application** (For Non-Profits)
3. **Share Your Story / reviews** (Share Your Story page)

Until you paste in your form IDs, each form still shows a success message but
does not send anywhere, so you can preview safely.

## Steps

1. **Log in to Formspree** and create **3 forms** (`+ New form`). Name them:
   - `HHCS Donations`
   - `HHCS Partner Applications`
   - `HHCS Stories & Reviews`
   For each, set the notification email to **michael@helpinghandscharityservices.com**.

   > On a plan that limits the number of forms, you can create just **one**
   > form and use its ID for all three below. The emails are still labeled by
   > subject (`New vehicle donation`, `New nonprofit partner application`,
   > `New story / review submission`) so you can tell them apart.

2. **Copy each form's ID.** Formspree gives an endpoint like
   `https://formspree.io/f/abcdwxyz`. The ID is the part after `/f/` (here,
   `abcdwxyz`).

3. **Open `lib/forms.js`** and paste the IDs:

   ```js
   export const formspreeIds = {
     donation: "abcdwxyz",   // HHCS Donations
     partner:  "ijklmnop",   // HHCS Partner Applications
     story:    "qrstuvwx",   // HHCS Stories & Reviews
   };
   ```

4. **Save and redeploy.** That's it, no other code changes.

5. **Confirm once:** the first time each form receives a submission, Formspree
   emails you to confirm the address. Click the link once and you're live.

## Good to know

- **Reply-to is automatic.** The donor's email field is named `email`, so you
  can reply to the notification and it goes straight to the donor.
- **Spam protection** is built in: every form has a hidden honeypot field plus
  Formspree's own filtering.
- **What's captured:** the donation email includes the chosen nonprofit, the
  donor's details, full vehicle info (year, make, model, color, VIN, mileage),
  title/condition answers, damage checkboxes, and pickup address.
- **Free plan limit:** 50 submissions/month total. If volume grows, upgrade in
  Formspree, no site changes needed.
- **Reviews are not auto-published.** Story submissions land in your inbox for
  approval; to post one on the site, add it to `testimonials` in `lib/data.js`.
