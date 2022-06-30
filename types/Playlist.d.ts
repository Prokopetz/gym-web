import { Exercise } from "./Exercise"

export type Playlist = {
  id: string
  name: string
  icon: string,
  exercises: Exercise[]
}