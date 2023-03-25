# Portfolio

This portfolio is published on a public GitHub repository. The repository includes an `index.html` file at the root-level, and JS and CSS files.

## Getting Started

These instructions will help you set up and run the portfolio project on your local machine for development and testing purposes.

### Prerequisites

Before running the project, make sure you have the following software installed on your system:

- A modern web browser (e.g., Google Chrome, Mozilla Firefox, or Microsoft Edge)
- A code editor (e.g., Visual Studio Code, Sublime Text, or Atom)
- [Git](https://git-scm.com/) (for version control and cloning the repository)

### Installation

Follow these steps to set up the project on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/VadimDmitr/vadimdmitr.github.io.git

2.  Change the current working directory to the project folder:
   
      cd vadimdmitr.github.io

3.  Open the index.html file in your preferred web browser to view the portfolio webpage.

      Alternatively, you can use a local development server, such as Live Server for Visual Studio Code, to serve your project.

4.  Open the project folder in your preferred code editor to start making changes and customizations.

## Webpage Contents

### Header Navigation Menu

The header navigation menu contains:

- My name
- Links to:
  - About section
  - Experience section
  - Certificates section
  - Skills section
  - Projects section
  - Leave a Message section

These navigation links direct users to different sections of the page.

### About Section

The About section contains:

- A level-two heading
- Text

### Experience Section

The Experience section contains:

- A level-two heading
- A list of previous work experience in a flex layout

### Skills Section

The Skills section contains:

- A level-two heading
- A list of skills in a flex layout (inserted via JavaScript)

### Projects Section

The Projects section contains:

- A list of public repositories retrieved from the GitHub API via Fetch in a grid layout
- Working links that redirect users to my GitHub repositories

### Social Media Links

The webpage includes social media links to my LinkedIn and GitHub profiles.

### Leave a Message Section

The Leave a Message section contains:

- A level-two heading
- A form with:
  - Name field
  - Email Address field
  - Message field
  - Submit button
  - Form submit event listener that adds the message to the list
- A 'Delete' feature to remove the message

### Messages Section

The Messages section contains:

- A list of messages in a flex layout
- Each list item includes:
  - Message text
  - Name of message author with a "mailto" link to their email address
  - A "Remove" button that deletes the message from the list

### Footer

The footer contains:

- Copyright text
- Current time and year (inserted via JavaScript)
