# Employee Management System

## Setup Instructions

### Installation

**Prerequisites:**
- Node.js version `v22.2.1` (check using `node -v`)

**Steps:**

1. Clone the repository
```bash
git clone https://github.com/irone-b/employee-management-system.git
```

2. Navigate to the project directory
```bash
cd employee-management-system
```

3. Install dependencies
```bash
npm install
```

### Running the Application

**Development server:**
```bash
ng serve
```

**Alternative:** Using npm scripts
```bash
npm start
```

---

## Development Process

### Time Spent

I broke up the development sections according to my commits. It is important to note that I did not complete this during one sitting and took frequent breaks to attend to other commitments throughout the day. I did go over the recommended time to finish the project as I felt it would be good practice for me since I have not worked with Angular in over a year, and my last frame of reference is Angular 17.

---

### Commit 1: Creating Scaffolding and Base Styling (25 minutes)

I wanted to approach this project as I usually would, which means looking at the design and trying to figure out the component structure and possible base styles I can add.

#### Component Structure
I wanted to structure my components according to the flow of navigation. To me it looked like there is a main shell that has a main navigation, to the right of the main nav there is a router outlet where the pages will display. I assumed the item 5 navigation item would lead to some page that has a list of employees one can click on that then navigates to a child route. I named the component for that child route "employee payroll page". This page has a summary section, a right-side action nav bar, and a router outlet in the middle that can flip between other sections depending on which action is selected in the right-side bar. Of course, no actual router outlets were used since the project has no routing yet. Instead, I just put the component in the sections where the router outlet would have displayed them.

#### Styling Structure
I tried to make use of SASS's recommended 7-1 folder structure but ultimately put my own spin on it as I knew I was short on time, but ideally, I would have liked to research it a bit more. I added all the colours as base tokens to the file. I then started mapping those to semantic/component variables as I prefer not assigning colour tokens etc. to components directly, as it can make theming and white-labelling more difficult in future. However, as time went on I dwindled from this approach and deviated and tried to finish more quickly. I also added base typography classes using a mixin that just sets base styling for easy-to-use typography. However, I did not get a chance to fine tune this, so I know that some of the text styles still need some fine tuning to match the deisgn more closely.

> **Note:** Reusable components like buttons, nav items and tables I wanted to add as I move through the next sections.

---

### Commit 2: Add Table Section and Data Stores for JSON Retrieval (3 hours)

Within this section I wanted to identify which components are most likely to be reused and extract those so that we don't have to repeat ourselves too much in future. I identified the following as being reusable:

#### Table Component
Tables typically get used a lot in applications like these and having to recopy searching and sorting logic every time. I wanted to approach it similarly to how a component library might do. I chose to copy a structure like PrimeNG as I have worked with this library before. It looked like they took a combined component and directive approach for sorting. So, I decided to go that route.

I tried to use signals because they seemed perfect for reactive state that drives the UI - things like search queries, sort direction, and filtered data. I used writable signals (searchQuery, sortField, sortOrder) for user interactions since these get updated directly when clicking/typing. Then I used computed() to automatically derive the filtered and sorted rows - this way Angular only recalculates when dependencies change, no manual subscription management needed.

The alternative would have been BehaviorSubjects, which requires more boilerplate and manual unsubscribe logic.

However, I am new to signals so I do think that I could have studied up a bit more on this. I mixed RxJS subscriptions with signals for the API call instead of using toSignal(), which would have been cleaner. I also feel like the way I'm bridging between the Observable from the API and the signal (this.payrollRows.set(lines)) is a bit clunky - there's probably a more elegant signal-native approach. I was overusing patterns I already knew (manual subscriptions) while trying to adopt the new signal way, which created this hybrid approach that works but isn't ideal.

#### Button Component
There seem to be different buttons on this page, and I created a component for this with the different types that can be passed in.

#### Pipes
I wanted to be able to map types to a description and thought a pipe would be of good use. Also made a different pipe for formatting currency as I knew this would get reused in the summary section as well.

#### Data Stores and JSON Retrieval
I completely used AI for this as I was running out of time. I would have liked to possibly refine the models a bit more and use the current correct way of calling and retrieving data via API. But I would have to research this beforehand.

---

### Commit 3: Add Summary Section (35 minutes)

By this time, I have already gone over time, however I knew that most things have already been set up so the rest should be quicker. Here I did default to some old Angular habits/base knowledge leading to a little bit of inconsistency in how I was adding classes in my templates etc. So, I would have liked to improve this a bit. I identified the stats items as possibly being their own component for future use and therefore made a component for this. And added some helper classes for some of the text items globally.

---

### Commit 4: Added Nav Items and Final Layout (20 minutes)

I extracted navigation items into their own component as this looks like something that repeats. I however did not want to make a nav component as it looks like nav items are styled differently within nav bars. I finished off the layout of all the pages, adding padding and margins and any other missing styling to make it look like the final design. It is however not responsive, and I would have liked to make it responsive.

---

## Challenges

### Signals Knowledge Gap
I did not know much about signals and had to read up on them a while before building. This slowed me down as I was learning the pattern while implementing it, which led to odd hybrid approaches.

### Time Constraints and AI Reliance
I knew I had limited time, so I used AI to create a lot of boilerplate. While this saved time initially, it sometimes created more work when the generated code didn't integrate properly or I had to debug issues I didn't fully understand.

### Design Mismatches
There were some colours in the design that did not match up precisely - secondary colours had both green and blue values in different instances on the Figma design. I therefore just decided to use base colour tokens instead to avoid mixup. In reality I would have just double checked with the designer to make sure I know their intent and direction.

### Reusable Table Architecture
I was stuck on how I wanted to create a reusable table and debated different approaches. I ultimately decided to go with a structure similar to PrimeNG since I've worked with it before and knew it was a proven pattern, even though I would have liked more time to consider if it was the best fit for this specific use case.

### Angular Version Gap
I have not worked with Angular in over a year, and my last frame of reference is Angular 17. Some of the newer patterns and best practices took time to recall and implement correctly and sometimes I eneded up using a mix match of ways of doing things which is inconsistent and not ideal.

---

## Improvements

### Styling Refinement
I would fine tune the styling a bit more. Towards the end I deviated from my semantic variable approach and started using colour tokens directly on components to save time, which makes theming harder in future. Some typography also needs fine tuning as I didn't get to polish the text styles fully.

### Signal Usage
I would have liked to improve my signal usage and understanding a bit more. Specifically using toSignal() properly for the API calls instead of manually subscribing and setting signal values. The hybrid approach works but isn't as clean as a pure signal implementation would be.

### Custom Input Components
I would like to add custom input components using ControlValueAccessor for proper form integration instead of the basic input I used in the table toolbar.

### Code Review and Cleanup
I would like to go over any AI generated code I don't fully feel comfortable with, because in a real project I would never commit any code not fully written by myself or fully understood by myself. The compareValues() sorting method and some of the initial signal setup fall into this category.

### Memory Leaks
I later realized I forgot to unsubscribe onDestroy in all places while I was trying to finish in a hurry. This would cause memory leaks in a real application.

### Table Enhancements
The toolbar can be split into its own component and that table could have more functionality added for filtering, paging, or virtual scrolling for large datasets. I left TODO comments about this in the code.

### Responsive Design
Add mobile responsiveness - the current implementation only works on medium desktop viewports.

### Error Handling and UX
Add proper error handling and loading states. Currently if the API call fails, there's nothing which isn't user-friendly.

### Code Clarity
Comment more unclear code, especially around the signal patterns and the directive/component communication.

### Testing
Write tests where necessary. The table sorting and filtering logic in particular would benefit from unit tests to ensure edge cases are handled properly.

### Template Consistency
By the time I reached the summary section, I defaulted to some old Angular habits which led to inconsistency in how I was adding classes in templates. I would standardize this approach across all components.

---

## AI Tool Usage Reflection

I don't typically use AI tools but given the time constraints, the brief stating it was allowed and some of my knowledge gaps, I thought it might be useful in this case.

I used ChatGPT mainly to generate boilerplate I could edit. Based on what I wanted as described in the time spent section, I don't ever generate large chunks of code that integrate with each other as that usually turns out to be messy and hard to understand and often fails. So instead I usually ask it to generate a function or a smaller piece of code at a time. Here is how I used it for each section:

### Commit 1: Creating Scaffolding and Base Styling

Here I wanted to save time on any excessive typing. I realized the designer used a 4 pt/8pt soft grid system. I wanted these values in rems but at the same time wanted to easily use a variable directly from the designs without getting confused. So I asked ChatGPT to give me size variables in 4/8 px increments with their converted rem values. It performed well with this. I also had it generate a mixin I can send letter spacing, line height, colour and font weight into to help me quickly generate base text classes for quick use within templates and other classes. These manual tasks are typically great for AI as it has little nuance. AI fails as soon as nuance is present.

### Commit 2: Add Table Section and Data Stores for JSON Retrieval

I asked ChatGPT to generate my json files and set up a fake api service for me that I can integrate with and call. I was not very impressed by this but had to move on since I was already spending a lot of time.

I asked it to create currency and enum mapper pipes. It performed well here but I wish I had more time to refine and fine tune the code myself.

I asked it to help with the compareValues() sorting method since I wanted to handle dates, numbers, and strings properly with null handling - it generated a comprehensive version that covered all these cases with locale-aware string comparison, which saved time but given more time I might have been able to refine this.

I asked it to fix the way I have been using signals for my directive and the table I created and here is where I ran into a lot of trouble and took too much time trying to fix what it broke. I suggested using input signals and computed signals which was helpful, but then it tried to refactor my API subscription logic in ways that didn't work properly. The signal-RxJS integration it suggested (toSignal with various configurations) kept breaking, so I reverted to my manual subscription approach that I know works. It helped me quickly add the searching and sorting functionality but I would have wanted to rewrite that boilerplate myself - the generated code works but mixing the old subscription pattern with new signal patterns feels messy. I was already wasting too much time trying to make its suggestions work when my original hybrid approach was functional.

### Commit 3: Add Summary Section

I did not use AI here at all.

### Commit 4: Added Nav Items and Final Layout

I did not use AI here at all.
