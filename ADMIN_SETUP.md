# Admin Panel Setup Guide

This adds a `/admin` page to the site where your client can add, edit, and
delete patents and presentations/publications themselves, without editing
code. Content is stored in Firebase (Google's backend platform) and the
public site reads it live.

Everything below is a one-time setup. Once it's done, your client just logs
in at `yoursite.com/admin` and edits.

## 1. Create a Firebase project

1. Go to https://console.firebase.google.com and click **Add project**.
2. Name it something like `jw-portfolio` and finish the wizard (Google
   Analytics is optional, you can turn it off).
3. In the project, click the **</>** (web) icon to register a web app. Give
   it any nickname. Firebase will show you a config object with values like
   `apiKey`, `authDomain`, etc. - copy `.env.example` to `.env.local` in the
   project root and paste each value in. Restart `npm start` after.

## 2. Turn on Authentication

1. In the Firebase console, go to **Build > Authentication > Get started**.
2. Enable the **Email/Password** sign-in provider.
3. Go to the **Users** tab and click **Add user**. Enter your client's email
   and a password (or one you'll send them and ask them to change - Firebase
   doesn't have a built-in "invite" flow for email/password auth, so the
   simplest path is: you set a temporary password and tell them to change it
   the first time they log in; there's no self-service "forgot password" UI
   built into this admin panel, so if they get locked out you'll reset it
   for them from this Users tab).

There's no public sign-up page in this app - the only way to create an admin
account is through this Firebase console screen, so only people you
explicitly add here can log in.

## 3. Turn on Firestore (the database)

1. Go to **Build > Firestore Database > Create database**.
2. Choose a location close to your client and start in **production mode**.
3. Once created, go to the **Rules** tab and replace the contents with what's
   in `firestore.rules` in this repo, then click **Publish**. This makes
   patents and presentations publicly readable (so the site works) but only
   editable by someone logged in.

## 4. Seed the database with your current content

This is optional but saves your client from re-entering everything from
scratch - it loads the patents and presentations already on the site into
Firestore.

1. In the Firebase console: **Project settings (gear icon) > Service
   accounts > Generate new private key**. Save the downloaded file as
   `scripts/serviceAccountKey.json` in this repo. **Never commit this file**
   - it's already in `.gitignore`.
2. From the project root: `npm install firebase-admin --save-dev`
3. Run: `node scripts/migrate-to-firestore.js`
4. You should see a confirmation that patents and presentations were seeded.

**One thing to check afterward:** the "Engineering with Computers" journal
entry didn't have a date anywhere in the original site data, so the
migration gave it today's date as a placeholder just so it sorts near the
top. Open the admin panel, find that entry under Presentations, and correct
its date if you know it.

After this step you can delete `scripts/serviceAccountKey.json` if you'd
rather not leave it on disk - it's only needed when you re-run the migration
script.

## 5. Deploy

The `/admin` route is part of the same React app - no separate hosting
needed. Whatever you use to deploy the site today (Netlify, Vercel, GitHub
Pages, etc.) will pick it up automatically once you:

- Add the same `REACT_APP_FIREBASE_*` values from `.env.local` as
  environment variables in your hosting provider's dashboard (they won't
  read `.env.local` from the repo - it's gitignored on purpose since it's
  effectively a client-side config, but best practice is still to set it via
  your host's environment variable settings rather than committing it).
- Make sure your host redirects all unknown paths to `index.html` (a "SPA
  rewrite" rule), otherwise a hard refresh on `/admin` will 404. Netlify:
  add a `public/_redirects` file containing `/*  /index.html  200`. Vercel:
  add a `vercel.json` with a rewrite rule. GitHub Pages doesn't support this
  natively - Netlify or Vercel are a much better fit for this project.

## Using the admin panel

- Go to `yoursite.com/admin` (there's no link to it from the public nav on
  purpose, to keep it out of the way - bookmark it or send your client the
  direct URL).
- Log in with the email/password you created in step 2.
- Two tabs: **Patents** and **Invited Presentations & Peer Review
  Publications**. Each has a form to add a new entry and a list of existing
  ones with Edit/Delete buttons.
- For patents: set **Status** to "Granted" to show the full description on
  the public site, or "Pending / Applied" to list it without one (this
  matches how the site currently distinguishes the two).
- Every entry has two date fields: a **Display Date** (free text - exactly
  what shows on the site, so it can be a range like "Oct 13-16, 2026") and a
  **Sort Date** (a real date, used only to decide ordering - newest first).
- Changes show up on the public site within a second or two, no rebuild or
  redeploy needed.

## What changed in the codebase

- `src/firebase.js`, `src/context/AuthContext.js` - Firebase setup and login
  state.
- `src/components/Admin/` - the admin panel itself (login page, layout,
  patents editor, presentations editor).
- `src/App.js`, `src/index.js` - added routing (`react-router-dom`) for
  `/admin/login` and `/admin`.
- `src/components/Patents/patents.js` and
  `src/components/Presentations/presentations.js` - now read live from
  Firestore instead of the static `patentsArray.js` /
  `presentationsArray.js` files. Those two files are no longer used by the
  site (nothing imports them) but are left in place as a reference/backup -
  safe to delete once you've confirmed the migration worked.
