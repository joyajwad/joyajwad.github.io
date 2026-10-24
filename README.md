# Joy Ajwad Portfolio — Updated October 2026

Open `index.html` in your extracted folder to preview. Publish the entire folder contents to your GitHub Pages repository.

## What changed
- Updated hero portrait, About Me, project order, Solenis experience, and contact links.
- New rocket project page (draft content, pending your full write-up).
- Original high-resolution cover photos in `assets/*-cover.jpg`; all cards use `object-fit: contain` so no image is cropped.
- Small interactive engineer in the homepage workshop; click stations to send him there, click him to jump, and use the moon to put him to bed/wake him.
- Removed dark-mode toggle.

## Next revision
The Mazda, gearbox, and rotor detail pages still include some full-page images from the previous PDF-based version. Replace those with individual photos and diagrams as you provide them. The rocket page is a starter, not your final project report.

To update images, replace the corresponding `assets/*-cover.jpg` file with a new image using the same name.


## Version 4 changes
- Removed workshop banner and all sleep/wake controls.
- Added a tiny section-aware engineer in the outer desktop margin (screens >1040px).
- He gestures at About, cycles between Mazda, gearbox, rocket, and rotor scenes at Projects, uses a desk at Experience, and a phone at Contact.
- Upward scrolling triggers a rocket ride; pausing makes him land. Click the figure to jump.
- Margin animation is hidden on narrow screens to protect readability. Reduced-motion preferences are respected.
- Project cards use a fixed aspect-ratio image frame and contain fitting for Mazda, gearbox, and rotor; CFD cover keeps its current crop.
- LinkedIn button label simplified.

Version 5: fixed engineer initialization by loading script after the character SVG; updated covers and background #EBEBEB.


## Updating your resume later

The Resume navigation currently opens `resume.html`, which contains a placeholder.
To enable simple PDF swaps, place a file named `resume.pdf` in the root
folder, replace the placeholder in `resume.html` with a PDF viewer and download
link pointing to `resume.pdf`, then commit the changes. Future resume updates
will require only replacing `resume.pdf` with a new file of the same name.


## Updating your resume
Replace `resume.pdf` in the website root with your new PDF, keeping that exact filename. The Resume page preview, download button, and direct PDF link will update automatically after you commit the change and GitHub Pages republishes.

## Adding projects after publishing
Add the project page to `projects/`, its images to `assets/`, and a matching project card/link to `index.html`; then commit and push the changes. GitHub Pages publishes the same domain with the new content.
