export const setPlace=(city, country)=>{
    return {
        type: 'SETPLACE',
        payload: {
            city,
            country
        }
    }
}