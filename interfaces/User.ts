import { UserSettings } from "./UserSettings"

export interface User {
	username: string
	email?: string //for alert purposes
	devices: Array<string>
	settings: UserSettings
}
