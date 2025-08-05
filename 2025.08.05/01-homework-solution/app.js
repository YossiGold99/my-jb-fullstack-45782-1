"use strict";

(async () => {
    const getDate = url => fetch(url).then(Response => Response.json())


    const { users } = await getDate('https://dummyjson.com/users')

    const extractMonth = dateString => {
        const parts = dateString.split('-')
        return parts[1]
    }

    console.log(
        Object.entries(
            users.reduce((cumulative, { birthDate }) => {
                const current = { ...cumulative }
                const month = extractMonth(birthDate)

                if (current[month]) current[month]++
                else current[month] = 1

                return current
            }, {})

        ).map(([month, count]) => ({ month, count }))
            .sort((a, b) => b.count - a.count)
    )




})()