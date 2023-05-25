# Google Classroom Assignment Extractor

This is a simple command-line tool that extracts assignment data from Google Classroom and creates a Markdown file that lists the topics, assignment titles, and links for each assignment.

The project is built with Node.js and TypeScript, and operates by reading data from a JSON file, generating a list of assignments, sorting the assignments into their respective units, and then converting the assignments into Markdown format.

## Prerequisites

To install and run the project, you will need to have the following installed on your system:

- Node.js
- npm (comes bundled with Node.js)

## Installation

Once you have Node.js and npm installed, you can clone the repository and install the project dependencies:

```bash
git clone https://github.com/mj-linane/google-classroom-assignment-extractor.git
cd google-classroom-assignment-extractor
npm install
```

## Usage

After installation, you can use the project as follows:

```bash
node index.js /path/to/input/file.json /path/to/output/file.md
```

Replace `/path/to/input/file.json` with the path to your input JSON file, and replace `/path/to/output/file.md` with the path where you want to save the output Markdown file.

The output file will be a Markdown file that lists the assignments sorted by unit and assignment title.

## Contributing

If you would like to contribute to the project, please fork the repository and submit a pull request. Before submitting a pull request, please ensure that your code follows the project's coding standards and that all tests pass.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Example

Here is an example of what the output Markdown file may look like:

```markdown
# Example Course Title

## Unit 1

### Assignment 1

- [Assignment Link](http://example.com)

### Assignment 2

- [Assignment Link](http://example.com)

## Unit 2

### Assignment 1

- [Assignment Link](http://example.com)

```

## Project Support and Maintenance

As of the current date, this project is provided as-is, without additional support or active maintenance. I encourage users to utilize the existing codebase and resources to troubleshoot any issues or make modifications to fit your needs. While you can still submit issues and create pull requests, please be aware that they may not receive immediate attention or updates.

Despite the lack of ongoing support, I believe the Google Classroom Assignment Extractor remains a valuable tool for my fellow educators.

Remember, the open-source nature of this project allows anyone to fork and maintain a version of it. If you're willing and able to contribute to the project, your input is always welcome and can benefit the wider community.

## Fellow Educators

I hope you find this tool useful in your classroom! If you have any questions or feedback, please feel free to reach out to me on Twitter @ [https://twitter.com/mj-linane](https://twitter.com/mj-linane).

Happy teaching!
