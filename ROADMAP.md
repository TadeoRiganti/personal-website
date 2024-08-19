# Roadmap for  Personal Website Template

## A) Planification & Requirements

### Goals

1. Develop a multi-purpose website for personal branding.
   1. Easy to use template.
   2. Inclusive user experience.
      1. Accesibility compliance (Level A-AA).
      2. Navigation experience.
   3. SEO.


### Top-down breakdown brainstorming:

<!-- The idea is to brain fucking storm this list. Divergent mentality. 
IMPORTANT! Take etra time to properly identify actions derivated from objectives.
Later on I'll converge it in a much more simpler artifact-->

- #1 Goal) Easy to use template for developers.
  - Objective) Provide a simple implementation.
    - Framework) Vainilla stack:
    - Architecture) Static website.
    - Feature) Customization
        - Task) Use CSS variables.

<br><br>

<!-- TASK: Replace objectives in WCAG Perceivable for Goals and Add an objective line wich can represent its child items; tasks / features -->

- #2 Goal) Inclusive experience for final users:

  - Goal) Accesiblity compliance by __WCAG Standards__ for __Level A up to AA__:
    - Research) __[Guidelines](https://www.w3.org/WAI/WCAG22/Understanding/)__
    - Research) [WCAG web certification](https://accessible.org/wcag-certification/)
    - Resources) A11s resources.

    <br><br>

    - WCAG Principle) __[Perceivable](https://www.w3.org/WAI/WCAG22/Understanding/#perceivable)__:

      - Guideline) [1.1 Text Alternatives](https://www.w3.org/WAI/WCAG22/Understanding/text-alternatives): Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language:

        - Goal) __[1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)__ (Level A): Create a text alternative for visual and auditory content.
          - Objective: Ensure all non-text content has an alternative description. 
            - Task) Add Alt descriptions for images.
          -Objctive) Provide audiovisual transcriptions.
            - Feature) Add a component-section for Audio Transcripts.

      - Guideline) [1.2 Time-based Media](https://www.w3.org/WAI/WCAG22/Understanding/time-based-media): Provide alternatives for time-based media.

        - Goal) __[1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded)__ (Level A): Provide an alternative when content is perceivable with only one sense.
          - Objective) Provide a [descriptive transcription](https://www.w3.org/WAI/media/av/transcripts/) of any media content.
            - Feature) Add a section or a mean to access to the transcript.
            - Research) [Transcribing audio to text](https://www.w3.org/WAI/media/av/transcribing/).

        - Goal) __[1.2.2 Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded)__ (Level A): Provide synchronized text for audio content in existing videos.
            <!-- This only apply to those media wich doesn't have captions -->
            - Research) [H96: Using the track element (HTML) to provide audio descriptions](https://www.w3.org/TR/WCAG20-TECHS/H96.html).

        <!-- - Goal) [1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded) -->

        <!-- - Goal) [1.2.4 Captions (Live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live) -->
        <!-- - Objective) __[1.2.5 Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded)__: Provide a synchronized spoken description of the visual content in videos. -->

        <!-- - Goal) [1.2.6 Sign Language (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded) -->

        <!-- - Goal) [1.2.7 Extended Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded) -->

        <!-- - Goal) [1.2.8 Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded) -->

        <!-- - Goal) [1.2.9 Audio-only (Live)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live) -->

      - Gudieline) [1.3 Adaptable](https://www.w3.org/WAI/WCAG22/Understanding/adaptable): Create content that can be presented in different ways (for example simpler layout) without losing information or structure.

        - Goal) __[1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)__ (Level A): Provide semantic code to reinforce relationships and information conveyed through presentation.
          - Research) [Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/).
          - Research) [H101: Using semantic HTML elements to identify regions of a page](https://www.w3.org/WAI/WCAG22/Techniques/html/H101). 
          - Feature) Input fields on a form use both color and text to indicate required fields.
          - Task) [ARIA11: Aria Landmarks](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11).
          - Research) [Exhaustive list of techniques](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships).

        - Goal) __[1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence)__ (Level A): The order of content can be understood by more people.
          - Research) [G57: Ordering the content in a meaningful sequence](https://www.w3.org/WAI/WCAG22/Techniques/general/G57).
          - Architecture) [C27: Making the DOM order match the visual order](https://www.w3.org/WAI/WCAG22/Techniques/css/C27).
          - Style) [C6: Positioning content based on structural markup](https://www.w3.org/WAI/WCAG22/Techniques/css/C6).
          - Research) [G59: Placing the interactive elements in an order that follows sequences and relationships within the content](https://www.w3.org/WAI/WCAG22/Techniques/general/G59).

        - Goal) __[1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics)__ (Level A): Describe controls by name, not just by appearance or location.

        - Goal) [1.3.4 Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation) (Level AA): Don't lock content to either portrait or landscape presentation. 
          - Design) Movile-first.

        - Goal) __[1.3.5 Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) (Level AA): It is easier to fill out forms.
          - Objective) Use code to indicate the purpose of common inputs, where technology allows.
          - Research) [3.3 Table 3: Entering Data, Error Prevention, & Recovery](https://www.w3.org/TR/coga-gap-analysis/#table3).

        - Goal) __[1.3.6 Identify Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose)__ (Level AAA):It is easier to operate and navigate content.
          - Objective) Use code to indicate the meaning of all controls and other key information, where available.
            - Task) Implement feature in forms, icons, navi items.
            - Research) [Tips for WCAG Success Criterion 1.3.6: Identify Purpose](https://www.boia.org/blog/tips-for-wcag-success-criterion-1.3.6-identify-purpose)


      - Guideline) [1.4 Distinguishable](https://www.w3.org/WAI/WCAG22/Understanding/distinguishable): Make it easier for users to see and hear content including separating foreground from background.

        - Goal) __[1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color)__ (Level A): Color is not the only way of distinguishing information. 
          - Design) Use information in addition to color, such as shape or text, to convey meaning.
          - Technique) [G14: Ensuring that information conveyed by color differences is also available in text](https://www.w3.org/WAI/WCAG22/Techniques/general/G14).
          - Task) Use safe colors (as possible).
            - Resource) Color blind image simulator: [Coblis](https://www.color-blindness.com/coblis-color-blindness-simulator/).

        <!-- - Goal) [1.4.2 Audio Control](https://www.w3.org/WAI/WCAG22/Understanding/audio-control) (Level A) -->

        - Goal) __[1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum)__ (Level AA):Provide sufficient contrast between text and its background.
          - Task) Check color contrast.
          - Tool) [Adobe color analyzer](https://color.adobe.com/es/create/color-contrast-analyzer).

        - Goal) __[1.4.4 Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text)__ (Level AA): Ensure content is resizable (at least 200%).        
          - Feat) Offer font and size customization options.
          - Design) Avoid using small font sizes.

        - Goal) __[1.4.5 Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text)__ (Level AA): Users can adjust how text is presented.
          - Feature) Use text instead of pictures of text.
          - Technique) C13) Using named font sizes (Stylesheet).

        <!-- - Goal) [1.4.6 Contrast (Enhanced)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) (Level AAA): Text can be seen by people who need strong contrast (Contrast related to the size of the text elements). -->
        <!-- - Content) [1.4.7 Low or No Background Audio](https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio) (Level AAA) -->

        - Goal) __[1.4.8 Visual Presentation](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation)__ (Level AAA): Text appearance can be altered by users to meet preferences.
          - Example) [Wikipedia's 'Appearence menu'](https://en.wikipedia.org/wiki/MoSCoW_method).
            - Objective) Help with color sensitivty
              - Feat) High-Contrast theme.
                - Task) Configurate with preference-color-scheme.
              - Feature) Color mode scheme (dark/light).
                - Task) Check contrast ratio in dark mode.
                - Task) Configurate with preference-color-scheme.
                - Task) Add an UI switch. 
            - Objective) Users can adjust font-size:
              - Feature) Font size configuration.
            
        <!-- - Goal) [1.4.9 Images of Text (No Exception)](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception). (Level AAA) -->

        - Goal) __[1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow)__ (Level AA): Content can be enlarged without increasing line length.
          - Design) Movile-first.
          - Task) In desktop / tablet screen sizes, ensure lines of text reflow within the viewport (do not overflow horizontally).

        - Goal) [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast): Important visual information meets the same minimum contrast required for larger text.
          - Design) Ensure meaningful visual cues achieve 3:1 against the background.
          - Task) Check color contrast.
          - Tool) [Adobe color analyzer](https://color.adobe.com/es/create/color-contrast-analyzer).

        - Goal) __[1.4.12 Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing)__ (Level AA): Users can adjust text spacing to make it easier to read.
          - Feature) Ensure content adapts to user-defined text settings.
          - Style) [Text property suggested](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing#success-criterion).
          - Task) Ensure text doesn't cut off or overlapg.

        - Goal) __[1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus)__ (Level AA): More users can perceive and dismiss non-persistent (dynamic) content (Note: Custom tooltips, sub-menus, and other nonmodal popups that display on hover and focus are examples of additional content covered by this criterion.).
          - Feature) If hover or focus causes content changes, ensure interaction is predictable.
            - Task) Ensure content is fully readeable.
            - Research) [1.4.13 Content on Hover or Focus: #Intent](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus#intent).
      
    <br><br>

      <!-- TASK 1) Expand sub-items (Add all, then coment those that are apparently not relevant or out of scope) -->
      <!-- TASK 2) Add level specifity -->
    - WCAG Principle) __[Operable](https://www.w3.org/WAI/WCAG22/Understanding/#operable)__:
    
      - Guideline) __[Guideline - 2.1 Keyboard Accessible](https://www.w3.org/WAI/WCAG22/Understanding/keyboard-accessible)__: Make all functionality available from a keyboard.
      
        - Goal) __[2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard) (Level A)__: Everything can be done with a keyboard except freehand movements.
          - Objective) Ensure pointer actions have a keyboard equivalent.
            - Task) Analyze UI and take inventory.
            - Task) Assign keys / key combinations and document them.
            - Feature) Arrow map navigation for hold and drag actions.
            - Feature) Implement a key for the 'Cancel' action (eg Modals; see guideline 2.1.2).  

        - Goal) [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap) (Level A): Keyboard users don't get stuck.
          - Objective) Prevent situations where users are unable to leave a component or focusable element using the keyboard.
            - Task) Analyze UI and identify situations where users might get stuck (e.g. modals).
            - Feature) Provide a cancel button and/or an 'X' icon.
              - Task) If 'X' icon is implemented, provide semantic attributes.
              - Research) Investigate wich attributes are needed.

        - Goal) [2.1.4 Character Key Shortcuts](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts) (Level A): Reduce accidental activation of keyboard shortcuts.
          - Objective: Ensure character-only shortcut keys can be turned off or modified.
            - Feature) Key-shortcut is is only active when that component has focus (This is one of the 3 possible [Success Criterions](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts#success-criterion)). 
      

      - Objective) __[Guideline - 2.2 Enough Time]()__: Provide users enough time to read and use content.
        - Research) Investigate about the "Spoon theory".
      
        <!-- - Goal) [2.2.1 Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A): Users have adequate time to complete tasks.
          - Note) Criterion applies only to time limits that are set by the content itself.
          - Objective) Let users turn off, adjust, or extend time limits.
            - Feature) Allow to extend time. -->
        
        - Goal) [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) (Level A): Fewer users are distracted by content that updates or moves.
         - Objective: Let users control content changes that occur in parallel with other content.
            - Feature) 'No-motion-first' approach.
            - Feature) Disable auto-display content. If not possible:
              - Feature) For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential.
              - Feature) For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.

        - Goal) [2.2.3 No Timing](https://www.w3.org/WAI/WCAG22/Understanding/no-timing) (Level AAA): 
          - Objective) Users do not face time limits.
          - Tecnhique) [G5 - Allowing users to complete an activity without any time limit.](https://www.w3.org/WAI/WCAG22/Techniques/general/G5).
            - Note) If not possible see Goal 2.2.1 (Commented by default).

        <!-- - Goal) [2.2.4 Interruptions](https://www.w3.org/WAI/WCAG22/Understanding/interruptions) (Level AAA): Users are not interrupted.
          - Objective) Let people delay or turn off updates, except in emergencies.
            - Techinque) [G75: Providing a mechanism to postpone any updating of content](https://www.w3.org/WAI/WCAG22/Techniques/general/G75).
            - Technique) [SCR14: Using scripts to make nonessential alerts optional](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR14). -->

        <!-- - Goal) [2.2.5 Re-authenticating](https://www.w3.org/WAI/WCAG22/Understanding/re-authenticating) (Level AAA): Users do not lose information or context due to reauthentication.
          - Objective) Preserve users' prior activity and data through reauthentication.
          - Research) [The 6 WCAG 2.2 AA changes you need to implement right away](https://youtu.be/vOGvBuwsD8o?list=LL&t=689). -->

        <!-- - Goal) [2.2.6 Timeouts](https://www.w3.org/WAI/WCAG22/Understanding/timeouts) (Level AAA): Users do not lose data due to unknown timeouts.
          - Objective) Tell users how long their session can be inactive before they may lose information.
          - Techniques) Setting a session timeout to occur following at least 20 hours of inactivity. -->






      - Objective) __[Guideline - 2.3 Seizures and Physical Reactions](https://www.w3.org/WAI/WCAG22/Understanding/seizures-and-physical-reactions)__: Do not design content in a way that is known to cause seizures or physical reactions.
      <!-- Expand sub-items (Add all, then coment those that are apparently not relevant or out of scope) -->

      - Objective) __[Guideline - 2.4 Navigable](https://www.w3.org/WAI/WCAG22/Understanding/navigable)__: Provide ways to help users navigate, find content, and determine where they are.
      <!-- Expand sub-items (Add all, then coment those that are apparently not relevant or out of scope) -->
      
      - Objective) __[Guideline 2.5 Input Modalities](https://www.w3.org/WAI/WCAG22/Understanding/input-modalities)__: Make it easier for users to operate functionality through various inputs beyond keyboard.
      <!-- Expand sub-items (Add all, then coment those that are apparently not relevant or out of scope) -->
      

    <!-- TASK 3) Reorder following items as it correspond -->
        - Feat) Skip to main-content.
        - Feat) Keyboard accessible drop-down menus. 
        - Architecture) Use Semantic HTML (otherwise means extra-work to solve FOCUS Management issues and ARIA labelling).
        - Architecture) Logical structure.
          - Task) Add tabindex if it's not possible.
      - Objective) Avoid small size targets.

    <br><br>

    - WCAG principle) __[Understandable](https://www.w3.org/WAI/WCAG22/Understanding/#understandable)__
    <!-- TASK 4) Expand sub-items (Add all, then coment those that are apparently not relevant or out of scope) -->
      
    <br><br>

    - WCAG principle) __[Robust](https://www.w3.org/WAI/WCAG22/Understanding/#robust)__
    <!-- TASK 5) Expand sub-items (Add all, then coment those that are apparently not relevant or out of scope) -->

    <br><br>

    <!-- TASK 6) Reorder following items as it correspond -->
        <!-- - Feat) Skip to main-content.
        - Feat) Keyboard accessible drop-down menus. 
        - Architecture) Use Semantic HTML (otherwise means extra-work to solve FOCUS Management issues and ARIA labelling).
        - Architecture) Logical structure.
          - Task) Add tabindex if it's not possible.
      - Objective) Avoid small size targets.

    - Feature) Compatibility with assistive technollogy:
      - Architecture) Semantic HTML.
      - Feat) Skip to main-content.
      - Task) Apply Aria-label attributes for non semantic HTML.
        - Tip): Whenever in doubt, "NO ARIA is better than BAD ARIA". -->
     
      
        

    <!-- TASK 7) Comment all those objectives that alredy exist in another principle -->
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
       
     <br><br>
     
     <!-- TASK 9: Elaborate a structure capable to sustain research made up to this point -->
     -Objective) UX Navigation patterns
      - Resources) [The Accessibility And Usability Journey Of Drupal’s Primary Navigation](https://www.smashingmagazine.com/2022/09/accessibility-usability-drupal-primary-navigation/)
      - Resources) [Designing Navigation for Mobile: Design Patterns and Best Practices](https://www.smashingmagazine.com/2022/11/navigation-design-mobile-ux/) 
      - Resources) [A Complete Guide To Accessible Front-End Components](https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/) 


<!-- 
When above task are resolved:

Organize it in a concept map (table):
| GOALS | Objectives | Tasks | Priority (MoSCoW) |
|---|---|---|---|
| Examplifacte this goal | To provide an example | Writing an example | (Must/Should/Could/Will-not) Have |

NOTE: Commented lines are by default a Wouldn't have.

Once done, create a MoSCoW diagram (eg. Visual diagram:
https://cdn-cpbbb.nitrocdn.com/XhgHSOSscJOLnjwQnerkrAMfxQMvSkWr/assets/images/optimized/rev-a1dda4e/i0.wp.com/kecg.co/wp-content/uploads/2024/01/fb2c4be3fa389d45d9043da1d4c89299.MoSCoW-Prioritisation-by-KECG-640px-1.webp) -->

<br><br><br><br>

# Process

A) __Planification & Requirements__: ← I'm still here.

  - Scope definition:
    - Define goals. __Done!__
    - Define the target audience and their needs. __Pending__
    - Establish the functionalities and characteristics that the website will have:
      - Brainstorming __Ongoing__
      - Priorization __Awaiting__
      - MVP __Pending__

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
