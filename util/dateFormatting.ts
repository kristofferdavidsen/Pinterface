const formatDate = (date: Date) => {
	return `Date: ${date.getDate()}.${
		date.getMonth() + 1
	}.${date.getFullYear()}, Time: ${date.getHours()}.${date.getMinutes()}`
}
export default formatDate
