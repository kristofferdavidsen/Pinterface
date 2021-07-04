const formatDate = (date: Date) => {
	return `Date: ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}, Time: ${date.getHours()}.${date.getMinutes()}`
}
export default formatDate
