import { Assignment, Course, Post, Unit, Link } from './types'

export function verifyLink(url: string): boolean {
  // verifyLink returns true if the link is valid and false if it is not
  const request = new XMLHttpRequest()
  request.open('GET', url, false)
  request.send()
  if (request.status === 200) {
    return true
  } else {
    return false
  }
}

export function verifyCourseLinks(course: Course) {
  // verifyCourse links and return an array of links that are broken along with the unit and assignment they are in
  const brokenLinks: Link[] = []
  for (const unit of course.units) {
    for (const assignment of unit.assignments) {
      for (const url of assignment.urls) {
        if (!verifyLink(url)) {
          const brokenLink: Link = {
            url: url,
            title: assignment.title
          }
          brokenLinks.push(brokenLink)
        }
      }
    }
  }
  return brokenLinks
}

export function generateAssignments(posts: Post[]): Assignment[] {
  const assignments: Assignment[] = []
  // if the post has a courseWork, materials, and topics array, then it is an assignment, so add it to the assignments array
  for (const post of posts) {
    if (post.courseWork && post.materials && post.topics) {
      const assignment: Assignment = {
        title: post.courseWork.title,
        topic: post.topics[0].name,
        urls: []
      }
      for (const material of post.materials) {
        if (material.link) {
          assignment.urls.push(material.link.url)
        } else if (material.youtubeVideo) {
          assignment.urls.push(material.youtubeVideo.alternateLink)
        }
      }
      assignments.push(assignment)
    }
  }
  return assignments
}

// Function sorts Assignments within each unit
export function sortUnitAssignments(unit: Unit): Assignment[] {
  const sortedAssignments: Assignment[] = []
  for (const assignment of unit.assignments) {
    sortedAssignments.push(assignment)
  }
  sortedAssignments.sort((a, b) => {
    if (a.title > b.title) {
      return 1
    } else if (a.title < b.title) {
      return -1
    } else {
      return 0
    }
  })
  return sortedAssignments
}

// Function assign each Assignment to a unit based on the topic title
export function assignAssignmentsToUnits(assignments: Assignment[]): Unit[] {
  const units: Unit[] = []
  for (const assignment of assignments) {
    let unitFound = false
    for (const unit of units) {
      if (unit.title === assignment.topic) {
        unit.assignments.push(assignment)
        unitFound = true
        break
      }
    }
    if (!unitFound) {
      const newUnit: Unit = {
        title: assignment.topic,
        assignments: [assignment]
      }

      units.push(newUnit)
    }
  }
  return units
}
// Function sorts course units
export function sortCourseUnitsByTitle(course: Course) {
  course.units.sort((a, b) => {
    if (a.title > b.title) {
      return 1
    } else if (a.title < b.title) {
      return -1
    } else {
      return 0
    }
  })
}
