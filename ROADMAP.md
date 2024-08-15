# Roadmap for  Personal Website Template

## A) Planification & Requirements

### Goals

1. Develop a multi-purpose website for personal branding.
   1. Easy to use template.
   2. Inclusive user experience.
      1. Accesibility compliance.
      2. Navigation experience.
   3. SEO.


### Top-down breakdown brainstorming:

<!-- The idea is to brain fucking storm this list. Divergent mentality. 
IMPORTANT! Take etra time to properly identify actions derivated from objectives.
Later on I'll converge it in a much more simpler artifact-->

- #1 Goal) Easy to use template for developers.
  - Objective) Simple implementation
    - Framework) Vainilla stack:
      - Architecture) Static website.
      - Feature) Customization
        - Task) CSS variables.

<br><br>

- #2 Goal) Inclusive experience for final users:

  - Objective) Accesiblity compliance by WCAG Standards:
    - Research) __[Guidelines](https://www.w3.org/WAI/WCAG22/Understanding/)__
    - Resources) [WCAG web certification](https://accessible.org/wcag-certification/)
    - Resources) A11s resources.

    - WCAG Principle) __[Perceivable]()__:
      <!-- TASK 1) Add links. -->
      <!-- TASK 2) Expand sub-items (Add all, then coment those that are apparently not relevant or out of scope) -->
      - 1.1 Text Alternatives
      - 1.2 Time-based Media
      - 1.3 Adaptable
      - 1.4 Distinguishable


      <!-- TASK 3) Reorder following items into relevant sub-items --> 
      - Objective) Provide alternative descriptions for images.
        - Task) Alt descriptions.
      - Objective) Ensure content is resizable.
        - Feat) Offer font and size customization options.
        - Design) Avoid using small font sizes.
      - Objective) Use adecuate color contrast.
        - Feat) High-Contrast theme.
        - Task) Check color contrast.
        - Design) Don't depend only with color.
          - Task) Use safe colors (as possible).
      - Objective) Help with color sensitivty
        - Feature) Color mode scheme (dark/light).
          - Task) Configurate with preference-color-scheme.
          - Task) Add an UI switch. 

      - WCAG Principle) Auditive:
        -Objctive) Provide audiovisual transcriptions
        - Tasks) Add subtitles & close-captions.
        - Feature) Support Audio Transcripts.
   
    <!-- TASK 4) Expand sub-items (Add all, then coment those that are apparently not relevant or out of scope) -->
    - WCAG Principle) __Operable__:
    
      - Objective) __[Guideline - 2.1 Keyboard Accessible](https://www.w3.org/WAI/WCAG22/Understanding/keyboard-accessible)__: Make all functionality available from a keyboard.
      <!-- Expand sub-items (Add all, then coment those that are apparently not relevant or out of scope) -->
      <!-- Reorder existent derivations -->
        - Feat) Skip to main-content.
        - Feat) Keyboard accessible drop-down menus. 
        - Architecture) Use Semantic HTML (otherwise means extra-work to solve FOCUS Management issues and ARIA labelling).
        - Architecture) Logical structure.
          - Task) Add tabindex if it's not possible.
      - Objective) Avoid small size targets.

      - Objective) __[Guideline - 2.2 Enough Time]()__: Provide users enough time to read and use content.
        - Research) Investigate about the "Spoon theory".
      <!-- Expand sub-items (Add all, then coment those that are apparently not relevant or out of scope) -->

      - Objective) __[Guideline - 2.3 Seizures and Physical Reactions](https://www.w3.org/WAI/WCAG22/Understanding/seizures-and-physical-reactions)__: Do not design content in a way that is known to cause seizures or physical reactions.
      <!-- Expand sub-items (Add all, then coment those that are apparently not relevant or out of scope) -->

      - Objective) __[Guideline - 2.4 Navigable](https://www.w3.org/WAI/WCAG22/Understanding/navigable)__: Provide ways to help users navigate, find content, and determine where they are.
      <!-- Expand sub-items (Add all, then coment those that are apparently not relevant or out of scope) -->
      
      - Objective) __[Guideline 2.5 Input Modalities](https://www.w3.org/WAI/WCAG22/Understanding/input-modalities)__: Make it easier for users to operate functionality through various inputs beyond keyboard.
      <!-- Expand sub-items (Add all, then coment those that are apparently not relevant or out of scope) -->
      
    - WCAG principle) __[Understandable]()__
    <!-- TASK 5) Expand sub-items (Add all, then coment those that are apparently not relevant or out of scope) -->
      
    - WCAG principle) __[Robust]()__
    <!-- TASK 6) Expand sub-items (Add all, then coment those that are apparently not relevant or out of scope) -->


    <!-- TASK 7) Reorder following items as it correspond -->
    - Feature) Compatibility with assistive technollogy:
      - Architecture) Semantic HTML.
      - Feat) Skip to main-content.
      - Task) Apply Aria-label attributes for non semantic HTML.
        - Tip): Whenever in doubt, "NO ARIA is better than BAD ARIA".
     
      
        

    - WCAG Principle) __[Cognitive](https://www.w3.org/WAI/cognitive/#cognitive-accessibility-in-w3c-standards)__:

      - Resources) __[Cognitive Accessibility Guidance](https://www.w3.org/WAI/WCAG2/supplemental/#cognitiveaccessibilityguidance)__
      
      - Objective: __[Guideline 1.3 - Adaptable](https://www.w3.org/WAI/WCAG22/Understanding/adaptable)__: Create content that can be presented in different ways (for example simpler layout) without losing information or structure.
      <!-- Expand sub-items (Add all, then coment those that are apparently not relevant or out of scope) -->

      - Objective) __[Guideline 1.4 - Distinguishable](https://www.w3.org/WAI/WCAG22/Understanding/distinguishable)__: Make it easier for users to see and hear content including separating foreground from background.
      <!-- Expand sub-items (Add all, then coment those that are apparently not relevant or out of scope) -->
      <!-- Reorder existent derivations -->
        - Task) Check contrast values for text above images. 
        - Design) Make it clear distinction between buttons (actions) and anchors (links). 

      - Objective) __[Guideline 2.4 - Navigable](https://www.w3.org/WAI/WCAG22/Understanding/navigable)__; Provide ways to help users navigate, find content, and determine where they are.
      <!-- Expand sub-items (Add all, then coment those that are apparently not relevant or out of scope) -->
      <!-- Reorder existent derivations -->
        - Design) Give space to breath; the simpler layouts, the better. 
        - Design) Stick with familliar design patterns. 

      - Objective) __[Guideline 3.1 - Redeable](https://www.w3.org/WAI/WCAG22/Understanding/readable)__: Make text content readable and understandable.
      <!-- Expand sub-items (Add all, then coment those that are apparently not relevant or out of scope) -->
      <!-- Reorder existent derivations -->
        - Content) Use simple language.
        - Design) Avoid using small font sizes.
        - Task) Use clamp values that works proportionally on big screens. 

      - Objective) __[Guideline 3.2 - Predictable](https://www.w3.org/WAI/WCAG22/Understanding/predictable)__: Make Web pages appear and operate in predictable ways.
      <!-- Expand sub-items (Add all, then coment those that are apparently not relevant or out of scope) -->

      - Objective) __[Guideline 3.3 - Input assistance](https://www.w3.org/WAI/WCAG22/Understanding/input-assistance)__: Help users avoid and correct mistakes.
      <!-- Expand sub-items (Add all, then coment those that are apparently not relevant or out of scope) -->
        

        <!-- TASK 8) Find out wich category corresponds. This was transcripted from a Kevin Powell's interview about Accesibility -->
        - Autoplay videos:
          - Overwhelmed. ADHD. Autism.
            - Dont autoplay. de ultima, Give controls 
       - Animations: 
        - no-motion-first approach. (Kevin powell video)

     <br><br>
     <!-- TASK 9: Elaborate a structure capable to sustain research made up to this point -->
     -Objective) UX Navigation patterns
      - Resources) [The Accessibility And Usability Journey Of Drupal’s Primary Navigation](https://www.smashingmagazine.com/2022/09/accessibility-usability-drupal-primary-navigation/)
      - Resources) [Designing Navigation for Mobile: Design Patterns and Best Practices](https://www.smashingmagazine.com/2022/11/navigation-design-mobile-ux/) 
      - Resources) [A Complete Guide To Accessible Front-End Components](https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/) 



<br><br><br><br>

# Process

A) __Planification & Requirements__: ← I'm still here.

  - Scope definition:
    - Define goals. __Done!__
    - Define the target audience and their needs. __Pending__
    - Establish the functionalities and characteristics that the website will have. __Ongoing.__

B) __Analysis & design__:

  - Research

  - Architecture design
    - Create a flowchart of the web page.
    - Select the technology to use (HTML, CSS, JavaScript, frameworks).
    - Design the structure of the pages and components.

  - Visual design:
    - Development of wireframes and mockups.
    - Definition of the color palette and typography.

C) __Development__:

  - Structure:
    - Creation of the basic structure of the pages.
    - Implementation of HTML semantics.

  - Style:
    - Style the elements of the page.
    - Creation of a modular design system.

  - Components:
    - Creation of custom components to speed up development.

  - Interactivity:
    - Implementation of interactivity.
    - Integration of libraries and frameworks.

D) __Testing__:

  - Unitary:
    - Verify the correct functioning of each component in isolation.

  - Integration:
    - Ensure that the different components interact correctly.

  - Usability:
    - Evaluate the ease of use of the interface.

  - Performant test:
    - Measure the loading speed and response of the page.

E) __Launch__:

  - SEO Optimization

  - Product implementation

  - Publishing the website














<!-- ___TASK: Reorganizate information in further documentation.__

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

      c. Dropdown menus MUST be clicked (or use the key 'enter') to display the submenu. 
      This way keyboard navigation users don't have to tab all the menu. Avoid adding a hover feature as long as you don't want to do extra work with accesibility issues. More info [here](https://blog.pope.tech/2024/01/30/how-to-create-accessible-navigations-and-sub-menus/)

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

- ~~Hover~~ Focusable navigation bar. Skip to content.
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

- https://jakob.kaivo.net/ 
- https://blog.skiserv.eu/index.html/
- https://jarbus.net/
- https://0xff.nu/
- https://thewismit.com/
- https://salem.io/
- https://macwright.com/about/

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
- [Keyboard navigation - BEST PRACTICES](https://blog.pope.tech/2024/01/30/how-to-create-accessible-navigations-and-sub-menus/)
- [Technique to alter focus order](https://accessibility.huit.harvard.edu/technique-focus-order-and-tabindex)
- [Responsive and Accessible Navigation (HTML, CSS, Vanilla JS) by Andrew Ladd](https://www.youtube.com/watch?v=IdZ-ZHLyEHs)

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
 -->
