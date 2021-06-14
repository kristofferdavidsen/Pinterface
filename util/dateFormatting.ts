const formatDate = (date: Date) => {
	return `Dato: ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}, kl. ${date.getHours()}.${date.getMinutes()}`
}
export default formatDate
