const addDays = require("date-fns/addDays")

const date = new Date()
date
const days = date.getDate()
days
const plusDays = 45
plusDays

const date2 = new Date().toLocaleDateString()
date2
const date3 = new Date(date2)
date3

// Add 5 days
const newDate = new Date()
newDate
newDate.setDate(newDate.getDate() - 1)
newDate

// Add 5 days using milliseconds
const addMs = 1000 * 60 * 60 * 24 * 5
addMs
const newDateMs = new Date(date.getTime() + addMs)
newDateMs
const newDateFns = addDays(date, 5)
newDateFns
