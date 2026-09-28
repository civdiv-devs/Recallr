# Contributing to Recallr

How we work in this repo. The short version: **nobody commits to `main` directly.** Every change goes on a branch, into a pull request (PR), gets reviewed by the other person, and is squash-merged.

We work this way on purpose. It's how most professional teams operate, and we want the practice.

## The 30-second version

1. Branch off an up-to-date `main`
2. Commit your work on that branch
3. Push it and open a PR
4. The other person reviews and approves
5. Squash and merge
6. Pull `main`, clean up, start the next task

## Rules GitHub enforces on `main`

- **No direct pushes.** A push to `main` gets rejected. That's expected, not a bug.
- **Every PR needs 1 approval** from someone other than its author.
- **New commits reset approval.** If you push more commits to a PR after it was approved, it needs approving again.
- **Squash-merge only.**
- **No force-pushes** and no deleting `main`.
- **Merged branches delete themselves** on GitHub.

Nobody bypasses these, owners included.

## Naming

### Branches

`type/short-description`, lowercase, words separated by dashes:

```
feat/vehicle-detail-page
fix/vin-validation
refactor/extract-vehicle-card
chore/add-pr-template
docs/update-readme
```

### Types

| Type | Use it for |
|---|---|
| `feat` | New functionality users can see |
| `fix` | Fixing a bug |
| `refactor` | Reorganizing code without changing behavior |
| `docs` | Documentation only |
| `chore` | Tooling, config, dependencies, housekeeping |
| `test` | Adding or changing tests |

### PR titles

Same format: `type: description`, in the imperative.

```
feat: add vehicle detail page
fix: handle null VIN in vehicle card
```

The PR title matters most, because squash merging uses it as the commit message on `main`. Commit messages on your own branch use the same style, but they get squashed away, so they matter less.

## Step by step: doing a task

### 1. Start from a fresh `main`

```bash
git checkout main
git pull origin main
git checkout -b feat/your-task-name
```

Always pull before branching. Branching from a stale `main` is the most common source of conflicts.

### 2. Work and commit

```bash
git add .
git commit -m "feat: add vehicle detail page"
```

Commit as often as you like. Small commits make mistakes easy to undo, and they get combined into one when the PR merges.

### 3. Push

```bash
git push -u origin feat/your-task-name
```

The `-u` is only needed the first time you push a new branch. After that, `git push` is enough.

### 4. Open the PR

1. On the repo page, click the yellow **Compare & pull request** banner (or **Pull requests** tab, then **New pull request**).
2. Check that **base is `main`** and **compare is your branch**.
3. Write the title in `type: description` format.
4. Fill in the description. It pre-fills from our template once the template is merged: what changed, why, how to test, screenshots for UI changes. Write `Closes #12` if there's an issue.
5. Not finished but want to share early? Choose **Create draft pull request**. Reviewers know not to review a draft. Click **Ready for review** when it's done.

### 5. Wait for review

The reviewer approves or asks for changes. To respond to requested changes, commit on the same branch and push. The PR updates automatically. Then ask for a re-review, since approval resets when new commits arrive.

### 6. Merge

Once approved, the author clicks **Squash and merge**, checks that the commit title is the PR title, and confirms. GitHub deletes the remote branch.

### 7. Clean up locally

```bash
git checkout main
git pull origin main
git branch -D feat/your-task-name
```

That's a capital `-D`. With squash merging, git can't see your branch's commits inside `main` (GitHub created one new combined commit), so lowercase `-d` refuses with a "not fully merged" message. That message is a false alarm as long as GitHub shows the PR as merged.

## Squash and merge, explained

Say you're writing one page of a story, and while drafting you scribble ten sticky notes: "fix typo," "oops, wrong word," "try again," "okay this works." Those are your commits.

- A **regular merge** glues all ten sticky notes into the storybook. The book fills up with scribbles.
- A **squash and merge** takes all ten notes, writes one clean page ("feat: add vehicle detail page"), and glues only that page into the book.

Your notes still exist on the PR page, but `main` stays a tidy list with one line per feature. It also makes a bad feature easy to undo, since it's one commit to revert instead of ten.

## Reviewing a PR

1. Open the PR and click the **Files changed** tab.
2. Hover a line and click the blue **+** to leave a comment on it.
3. Click **Review changes**, choose one of the three options, and click **Submit review**:
   - **Comment**: feedback with no verdict
   - **Approve**: you're comfortable with this being on `main`
   - **Request changes**: something needs fixing first

What to check:

- Does it do what the description says?
- Does it run? For UI changes, pull the branch and try it:
  ```bash
  git fetch origin
  git checkout feat/their-branch
  npm run dev
  ```
- Is it readable? Could you explain it to someone else?
- If you don't understand something, **ask**. Questions are among the most useful review comments, and understanding each other's code is the point of review.

Norms: be specific and kind, prefix minor style points with `nit:`, and don't rubber-stamp. An approval means "I looked at this."

## Working while waiting on review

- **Keep going.** Start the next task on a new branch from `main`, as in step 1.
- **Don't stack branches.** Don't build a new branch on top of a PR that isn't merged yet. Squash merging makes that messy. If a task truly depends on an unmerged PR, say so in the PR and wait, or ask.
- **Review the other person's open PRs** while yours wait.
- **Don't add commits to an approved PR** unless you have to, because it resets the approval.

## Time zone etiquette (about 12.5 hours apart)

A review round trip costs roughly a day, so:

- **Keep PRs small.** One focused change, and under about 300 changed lines if you can.
- **Write PR descriptions that stand alone.** The reviewer can't ask a quick question. Include screenshots for UI changes and exact steps to test.
- **Aim to review within 24 hours** of a PR being opened.
- **If you're blocked, start another independent task** instead of waiting.
- **Make review comments concrete** enough to act on without a call.

## When things go wrong

### My push to `main` was rejected

Expected, since `main` is protected. If you committed on `main` locally by accident, move the commits to a branch. Commit or stash uncommitted work first, because `reset --hard` discards it.

```bash
git branch feat/my-work        # saves your commits on a new branch
git reset --hard origin/main   # puts local main back in line with GitHub
git checkout feat/my-work
```

### GitHub says my branch has conflicts or is out of date

Someone merged a change to `main` that touches the same files. Fix it:

```bash
git checkout feat/your-task-name
git fetch origin
git merge origin/main
```

If git reports conflicts, open each listed file and look for these markers:

```
<<<<<<< HEAD
your version
=======
their version
>>>>>>> origin/main
```

Keep the correct code, delete the three marker lines, then:

```bash
git add .
git commit --no-edit
git push
```

If you're unsure which version to keep, ask before committing.

### I committed a secret (API key, password, `.env`)

The repo is public, so treat it as leaked. Tell the other person right away and **revoke or rotate the key**. Deleting the commit isn't enough, because the value stays in the history.

## Ground rules

- **Never commit `.env` files, API keys, or passwords.** `.env*` is in `.gitignore`. Keep it there.
- **One thing per PR.**
- **The author merges their own PR** after it's approved. GitHub won't let you merge before that anyway.
- **When in doubt, ask.** Nobody expects you to know all of this on day one.

## Command cheat sheet

| Goal | Command |
|---|---|
| Update local `main` | `git checkout main` then `git pull origin main` |
| New branch | `git checkout -b feat/name` |
| Stage and commit | `git add .` then `git commit -m "feat: message"` |
| First push of a branch | `git push -u origin feat/name` |
| Later pushes | `git push` |
| Bring `main` into your branch | `git fetch origin` then `git merge origin/main` |
| Try someone else's branch | `git fetch origin` then `git checkout feat/their-branch` |
| Delete a merged local branch | `git branch -D feat/name` |
| See where you are | `git status` and `git branch` |

