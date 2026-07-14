# Loop — Next Steps

## Checklist for every feature change

- [ ] Audit the tutorial, parser tips, placeholders, Settings descriptions, tooltips, empty states, and toasts for outdated claims.
- [ ] Remove or rewrite instructions for anything that was removed or renamed.
- [ ] Test every remaining instruction through the visible UI.
- [ ] Report exactly which outdated wording was found and what replaced it.

## Next edit: completion animation

- [x] Make the upward task reflow after completion completely smooth.
- [x] Remove any jump at the beginning or end of the movement.
- [x] Keep the immediate cross-out and short completion batching delay.
- [x] Make rapidly completed tasks leave together, then move remaining rows once.
- [x] Test single completion, several rapid completions, bulk Complete, Undo, long lists, and reduced-motion mode in the desktop Electron app.

## Before merging the current GitHub draft

- [x] Run the actual Electron desktop app, not only the browser preview.
- [x] Re-test task creation, editing, parsing, completion, Undo, navigation, Settings, and persistence after restarting.
- [ ] Add the animation refinement to the existing draft pull request.
- [ ] Review and merge the draft only after those checks pass.

## Later product work

- [ ] Real time, reminders, and notifications.
- [ ] Calendar mode.
- [ ] Classes and timetable integrations.
- [ ] User-selectable theme colours.
- [ ] Vertical Today-to-Upcoming overscroll/navigation.
- [ ] Broader parser intelligence and carefully tested typo scenarios.
- [ ] Packaging, signing, installer, backup strategy, privacy information, and public-release testing.
