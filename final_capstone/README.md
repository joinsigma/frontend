# Final Capstone

<img src="https://raw.githubusercontent.com/T31K/WWAWO/master/bowser.png" alt="bowser">

We're now entering Bowser's Castle to fight _the final boss_.
Well, perhaps it only makes sense for those of you old enough to remember this game (looking at you Gen-Zs....), this is _the final boss_.

We've finally reached here.
The Final Boss... The Final Capstone.

This is the time to flex your coding _skillz_.

### Instructions

For your final Capstone, you may choose to create any VueJS project.

The project can vary from a simple weather app to a complex crypto trading app, it's really your call.

However, as shown in the marking guide below, you are given 30 tasks in several domains.

For each task, you can earn maximum 3 points and minimum 0 point.
They are awarded based on how well you've executed each task.

**Score Guide**

| Non Existent | Poor | Average | Excellent |
| ------------ | ---- | ------- | --------- |
| 0            | 1    | 2       | 3         |

Since, `30 tasks * 3 points = 90 points`, we're missing 10 points to 100%.
The final 10 points will are aggregated from Capstone 1-5.

### Resources

Here are some list of projects that may inspire you.

💡 Remember, it's not about the complexity of the project. It's about how well you demonstrate you can execute each of the task below.

- [the-nerdy-dev](https://the-nerdy-dev.com/8-vue-projects-every-beginner-should-try/)
- [duomly](https://www.blog.duomly.com/vue-js-project-ideas-for-beginners/)
- [themeselection](https://themeselection.com/vue-js-project-ideas/)
- [bacancytechnology](https://www.bacancytechnology.com/blog/top-21-amazing-vuejs-projects)

<br/>

### Final Capstone Marking Guide

| Domain                | Task                    | Description (student demonstrates the following: )                                      |
| --------------------- | ----------------------- | --------------------------------------------------------------------------------------- |
| Setup                 | CLI                     | Used the CLI to create Vue project & manage files                                       |
|                       | Dependencies            | Installed & utilized 3rd party packages to resolve problem                              |
| Styling               | CSS Framework           | Demonstrated the mastery of using a 3rd party CSS framework                             |
|                       | Margin/Paddinig         | Used margin/padding correctly to create whitespace                                      |
|                       | Responsive Designs      | Create responsive app that looks good on all viewports                                  |
|                       | Flexbox                 | Aligned items beautifully using Flebox                                                  |
|                       | Consistent styling      | Reused styles throughought components in entire app                                     |
| Data Mananagement     | List rendering          | Used `v-for` to iterate through arrays/objects to display data                          |
|                       | Conditionals            | Used `v-if` & `v-show` to create dynamic conditionals                                   |
|                       | Bidirectional data flow | Implemented bidirectional flow of data using props & emit                               |
|                       | Prop drilling           | Incorporated inject & provide for direct passing of daata                               |
|                       | Event rendering         | Demonstrated proper understanding of triggering & listening to events                   |
|                       | Components structure    | Created clean and modular components that is minimal and simple                         |
|                       | Components linking      | Demonstrated understanding of linking and importing components                          |
| Lifecycle Hooks       | Creating                | Used `created()` hook properly to invoke function                                       |
|                       | Mounting                | Used `mounted()` hook properly to invoke function                                       |
|                       | Updating Data           | Used `updated()` hook properly to invoke function                                       |
| State Mananagement    | Setup                   | Demonstrated mastery of store setup and imports                                         |
|                       | State                   | Used `state` in the store                                                               |
|                       | Getters                 | Used `getters` in the store                                                             |
|                       | Actions                 | Used `actions` in the store                                                             |
|                       | Store                   | Demonstrated mastery of store management and updating data                              |
| Code Mananagement     | Formatting              | Formatted code with proper identation and whitepsace management                         |
|                       | Clean code              | Written clean code that follows DRY pattern and avoids unecessary repetition            |
|                       | Comments                | Provided clear and concise comments to ease other developer's understanding             |
|                       | File structure          | Implemented modular & neat file structure to address separation of concerns             |
|                       | Naming conventions      | Standardised naming conventions (eg. `camelCase` for functions, `kebab-case` for props) |
| Deploy & Mananagement | Documentation           | Written sufficient docs to help other developers set up your app                        |
|                       | Commit patterns         | Written clear and concise commit messages with structured commit patterns               |
|                       | Deployment              | Deployed app to 3rd party hosting for easy usage of app (heroku, vercel etc.``)         |

### Some use cases for the Domains/Task above

These are some examples that should give you an idea on how to get started. For example, in a blog platform context :

| Domain           | Task                    | Use Case/Example                                                                                                                                                                          |
| ---------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Data Management  | List rendering          | In a blog platform, use `v-for` to display a list of blog posts.                                                                                                                          |
|                  | Conditionals            | Use `v-if` to display a welcome message when the user is logged in.                                                                                                                       |
|                  | Bidirectional data flow | Use `v-model` to create a two-way data binding between a text input (for a new post title) and the data property holding the title.                                                       |
|                  | Prop drilling           | Use provide/inject to make a user object available to all child components of a user profile page.                                                                                        |
|                  | Event rendering         | Emit an event from a comment form component when a new comment is submitted; the parent component listens to this event and updates the list of comments.                                 |
| Lifecycle Hooks  | Creating                | Use the `created()` lifecycle hook to fetch blog post data when the page is created.                                                                                                      |
|                  | Mounting                | Use the `mounted()` lifecycle hook before using any DOM manipulations, ensuring all page elements has been rendered before you interact with DOM i.e addEventListener(), querySelector(). |
|                  | Updating Data           | Use the `updated()` lifecycle hook to fetch new blog posts whenever the data changes.                                                                                                     |
| State Management | Setup                   | Set up a Pinia store and import it into your main Vue instance to manage the application state.                                                                                           |
|                  | State                   | Store information about whether the user is logged in or not in the Pinia store's state.                                                                                                  |
|                  | Getters                 | Use a Pinia getter to return the list of blog posts sorted by their popularity.                                                                                                           |
|                  | Actions                 | Use a Pinia action to make an API request when a new blog post is submitted, committing a mutation to update the state after the post is successfully submitted.                          |
|                  | Store                   | Use the Pinia store to manage data such as the list of blog posts and the logged-in user's info.                                                                                          |
