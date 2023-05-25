import fs from 'fs'
import { Post, Course } from './types'
import {
  generateAssignments,
  sortUnitAssignments,
  sortCourseUnitsByTitle,
  assignAssignmentsToUnits
} from './api'

// This function takes an array of Assignment objects and converts them to Markdown.
function convertToMarkdown(course: Course): string {
  let markdown = `# ${course.name}\n\n`
  for (const unit of course.units) {
    markdown += `## ${unit.title}\n\n`
    for (const assignment of unit.assignments) {
      markdown += `### ${assignment.title}\n\n`
      for (const url of assignment.urls) {
        markdown += `- [${url}](${url})\n`
      }
      markdown += '\n'
    }
  }
  return markdown
}

// Read the JSON file
const jsonData = fs.readFileSync('data.json', 'utf8')

// Parse the JSON data
const data = JSON.parse(jsonData)

// Convert data to an array of posts
const posts: Post[] = data.posts

// convert posts to Assignments
const allAssignments = generateAssignments(posts)

// assign Assignments to Units
const units = assignAssignmentsToUnits(allAssignments)

// sort Assignments within each unit
for (const unit of units) {
  unit.assignments = sortUnitAssignments(unit)
}

// create a Course object
const course: Course = {
  name: 'Multimedia',
  units: units
}

// sort Assignments within each unit
sortCourseUnitsByTitle(course)

// convert the Course to markdown
const markdown = convertToMarkdown(course)

// write markdown to assignments.md
fs.writeFileSync('assignments.md', markdown)
