export type Course = {
  name: string
  units: Unit[]
}

export type Link = {
  url: string
  title: string
}

export type Unit = {
  title: string
  assignments: Assignment[]
}

type YouTubeVideo = {
  id: string
  title: string
  alternateLink: string
}

type Materials = {
  link?: Link
  youtubeVideo?: YouTubeVideo
}

type Coursework = {
  title: string
  description: string
  maxPoints: number
  workType: string
}

export type Post = {
  creator: {
    name: object
    emailAddress: string
  }
  creationTime: string
  updateTime: string
  state: string
  assigneeMode: string
  topics: [
    {
      name: string
    }
  ]
  materials: Materials[]
  courseWork: Coursework
}
export type Assignment = {
  title: string
  topic: string
  urls: string[]
}
