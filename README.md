Hello world! 

This will be my first [personal website](https://tadeoriganti.github.io/personal-website/). However, as that repository won't be public I'm constructing this repository as a template you can fork and use it as you please.
Once I finish up polyshing the frontend, I'll create proper documentation and licence, but for now, it is ~~a mess~~ what it is.

Althought I started this project last year (brutalist site), a few months ago I finished a "Full stack (with Python)" course, and decided to keep practicing everything I learn and more.

For this project I want to build a something I can both use for work (Freelance services) and show as a live project for my portfolio. Also I can experiment with various features and technologies otherwise wouldn't what to do. 

I choose to develop it with no frameworks (vainilla), so I can experience firsthand why I should use a framework to begin with. 
So, I challenged myself to build it with a classic front-end stack (CSS, HTML & JS), as little JS as possible, because I'll experiment with Modern CSS. 
I'll keep it deployed in github page, but I'll use my own web domain. 
Once its done I'll build the backend in another repository with flask and host it in 'Python anywhere'. 
<br>
<br>
<hr>



# TABLE OF CONTENTS
1. [Requirements](#requirements)
    
    1. [Webiste architecture](#website-architecture)
    2. [Optimization](#optimization)
    3. [Features](#features)
2. [References](#references)
3. [Discovery](#discovery)
4. [Backlog](#backlog)


<br>

## REQUIREMENTS 


### WEBSITE ARCHITECTURE


#### 1) Landing pages

_For business conversion._

1. Elevator's pitch (awareness).
2. Services / benefits (interest).
3. Social proof (with links to the portfolio)
4. Call to action.

#### 2) Portfolio

_The idea is to present my work with a similar treatment as I present them on Behance, but with the advantage of using animations to make it more dynamic._
_However, I'm not sure if separate them into 2 sections or present them in the same page with a filter system._

1. Past Works related to:
  a. Design Strategist.
  b. UX designer.

2. Side projects:
  a. AR developer
  b. Experience Developer (CX features).
  c. Game design (Wreck project)

3. Freebies or Tools I develop for the community (Most of them are the prototypes for :
   a. Quotation / budget calculator for freelancers.
   b. Interactive Fee tables.
   c. Daily Petty cash for Freelancers.


#### 3) About me 

_Ultimately this section serves job-hunting purposes._

1. About me.
2. Skill set.
3. Experience.
4. Downloadable Resume (possibly two types of profiles).

#### 4) Blog

_Professional blog, covering different areas. As a freelance designer, my area of expertise tends to be wider (I like to think is holistic; but really my profile is quite "Generalist")._
_As for the Who, what and how, I'll rely on tag system, because the final idea is to get prospects to suscribe to my newsletter, selecting those topics of their interest._


1. Blog posts.
2. Newsletter subscription (with prefered topics selection if possible).

#### 5) Documentation (Wiki)

#### 5) Resources

- Freebies
- Tools

<br>

### OPTIMIZATION

#### A) Mobile first

#### B) Accesibilty

1. 
      a. Keyboard navigation; focus elements in a logic way; first by DOM order. If not possible (for UX reasons, such as [Table of contents ubication](https://www.nngroup.com/articles/table-of-contents/)), by using a technique with ['tabindex'](https://accessibility.huit.harvard.edu/technique-focus-order-and-tabindex) tag.

      b. Add a "Skip to content" at the very start of every webpage.

2. Screen reader:

      a. Heavy usage of ARIA attributes.
      
      b. Follow good practices for alt text.
      
      c. Adecuate use of strength and emphasis tags (instead of 'b' and 'i'), etc.
3. Contrast Theme (Outline color of the focus state rather Transparent than 0 px).
4. [Contrast theme](https://blog.hubspot.es/) (configurated by browser preferences if possible).
5. Add CSS rules to include a Fallback Preference-reduced-motion.


#### C) Keyboard Navigation 

- Focus state visible when an element is selected ([but make it invisible for mouse](https://www.youtube.com/watch?v=j68WvpUX41c)).

#### D) Light-weight site

#### E) SEO

- Main content after header. 
- [Human search](https://humanstxt.org/)
- [Robot search](https://www.robotstxt.org/)

<br>

### FEATURES

#### A) Essential

- Hover navigation bar (opaque or glossy effect). 
- Themes button; dark / light / color blind / high contrast / font size.
- Variable fonts; weight, style and width.

#### B) Sections

- Landing page: [Breakout SMOL grid](https://smolcss.dev/#smol-breakout-grid) layout, maybe [Kevin Powell's variation](https://www.youtube.com/watch?v=c13gpBrnGEw).
- Blog: Secondary navigation bar, related to articles alike [MDN guides page](https://developer.mozilla.org/en-US/docs/Web/CSS). Sticky sidebars. [Table of contents](https://developer.mozilla.org/en-US/blog/exploring-the-broadcast-channel-api-for-cross-tab-communication/) with an animated indicator.
- Documentation: Secondary navigation bar; idem blog section.
- Portfolio: Header [hides when scrolling down](https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp). [Collapsable sidebar](https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp) for the table of contents.

#### B) Extras / Experimental
- Add some motion (but trying to setting up in a way that users can deactivate it; for accesibility reasons)
- [Model-viewer](https://modelviewer.dev/) (because I work on AR/3D solutions).
- "Blog post to Email HTML system subsription" (Don't know if it's a thing, yet).
- "Data visualization / interactive infography feeded with a post tag system" (idem). Now I'm thinking about an interactive infographic connected to a timeline; featuring how I went from a T to Pi-shaped skills, letting users to expand information and link projects... but, on second thought, my inner project manager & developer thinks it's a wat too much for me to handle.. 
- https://realestate-neotix.vercel.app/


<br>

## REFERENCES

### STYLE

#### A) Visual style: 

- General: [Zenbrief](https://zenbrief.com/blog/table-of-contents-for-seo/), [Model-viewer](https://modelviewer.dev/), 
- Animations: [Brittany Chang](https://brittanychiang.com/), .
- Navigation bar: [Zenbrief](https://zenbrief.com/blog/table-of-contents-for-seo/), 
- Article-bar: [MDN Guides](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)
- Variable fonts: https://codepen.io/glyphe/pen/XxZzYV
- Layout (wiki): https://rachelandrew.co.uk/
- Layout (blog): https://cloudfour.com/thinks/breaking-out-with-css-grid-layout/
- Layout (blog: [zenbrief](https://zenbrief.com/blog/table-of-contents-for-seo/)

#### B) Section:

- Principal Navigation bar: I like the way it reveals information / swap elements while scrolling down: https://blog.teamtreehouse.com/reading-files-using-the-html5-filereader-api
- Secondary Navigation bar; Only for Blog and Wiki layouts, and it will be related to the main content / articles. It will have Breadcrumbs and a hamburger menu for TOC sidebar (visible on movile).
- Blog: https://andrewhwanpark.github.io/brutalist-blog/2021/07/16/this-post-demonstrates-post-content-styles/
- About me / Skill: Infography: https://tinyurl.com/5n7unf4p

<br>

### WEBSITE ARCHITECTURE

#### A) Landing page:
- https://www.foxgr.com/
- https://matthewwoodard.com/
- https://carolgarciadelbusto.com/
- https://webflow.com/blog/landing-page-design#:~:text=Components%3A%20These%20landing%20pages%20typically,visitors%20to%20submit%20their%20details.
- https://www.cassmackenzie.com/freelance-brand-strategy-services-melbourne

#### B) About me section:

- https://brittanychiang.com/
- https://lucasestebanlps.github.io/
- https://leolarrea.com/sobre-mi/
- https://www.annefreude.com/cv

#### C) Services:
- https://www.ryangittings.co.uk/services/
- https://www.davejonesdesign.co.uk/design-process
- https://www.cassmackenzie.com/freelance-graphic-design-services
- https://www.cassmackenzie.com/freelance-brand-strategy-services-melbourne

#### D) Portfolio
- https://www.cassmackenzie.com/tilda-cacao-branding-packaging
- https://www.cassmackenzie.com/costafox-property-developer-branding
- https://www.annefreude.com/work/elli


#### E) Blog 
- https://phuctm97.com/
- https://stephvanlinden.com/

#### F) Wiki
- https://www.electronjs.org/docs/latest
- https://developer.mozilla.org/es/

#### F) Contact 
- https://adamgreenough.net/contact/ 

<br>

### FEATURES

#### A) UI

- Theme selector: https://phuctm97.com/

#### B) Addons

- 3D visualization: https://colorcube.io/

<br>

## DISCOVERY 

#### A) References sites

- https://1mb.club/
- https://512kb.club/

#### B) Minimalist style: 

- https://getpublii.com/blog/one-line-css-solution-to-prevent-anchor-links-from-scrolling-behind-a-sticky-header.html
- https://jakob.kaivo.net/ 
- https://blog.skiserv.eu/index.html/
- https://jarbus.net/
- https://0xff.nu/
- https://thewismit.com/
- https://salem.io/
- https://macwright.com/about/
- [UXHints](https://uxhints.com/ux-research/customer-journey-map-template/): I like the visual separation between content (as a window) and the aside as part of the background.

#### C) Brutalistic style: 

- https://danluu.com/
- https://datatxt.org/
- https://cleberg.net/blog/
- https://funnylookinhat.com/

#### D) Type of content
- https://www.mjvinnovation.com/blog/innovation-strategy-unleashing-growth-through-strategic-ingenuity/
- https://www.foxgr.com/insights/the-role-of-a-strategy-consultant

<br>

## ADDITIONAL RESOURCES

### USER INTERFACE:

#### Table of contents:
[UX Layout study](https://www.nngroup.com/articles/table-of-contents/)

<br>

### ACCESIBILITY:
[Technique to alter focus order](https://accessibility.huit.harvard.edu/technique-focus-order-and-tabindex)


## BACKLOG

### DEV-HEADER

Component design:

The header component will morph in shape and motion placement between pages; adapting to the user's need.

There are 3 use case scenarios, from left to right:
- Landing and regular pages (in between)
- Blog / Wiki pages
- Portfolio

#### User flow

![Header component](static\img\des-header.png)

I'll describe first this one as it is the complete version. The other case scenarios are an adaptation of this organism.

Heavily inspired on [MDN Guides](https://developer.mozilla.org/en-US/docs/Web/HTML) pages. The secondary navigation bar allows to always be possible to breadcrumb navigation bar and in movile devices it is a good place to put a hamburger menu for the Table of Components / related articles.

The only difference is that I add a progress bar for anxious readers (maybe because I want to have at least an Ultimate guide of some sorts).

#### Design exploration

![Brainstorming](static\img\des-header-exploration.png)

In this section, I'm basicaclly brainstorming options I often see in the websites I've researched. I had added a few inside notes, as a memo. 
Thanks to this quick exploration; 20-30' (in fact, I spend more time writing this update), I started to define wich options are pertinent and wich not (It's kind of obvious now, but before this excercise I was willing to spend time developing something it wouldn't be an effective solution).


___

Well, that's all for today. Thanks for reading!

