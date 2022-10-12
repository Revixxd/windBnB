export default function filter(data, formInfo) {
    const maxGuests = formInfo.adults + formInfo.kids
    let tempArray = data.filter((element) => element.city === formInfo.city)
    if (formInfo.adults === 0 && formInfo.kids === 0) {
        return tempArray
    } else {
        tempArray = tempArray.filter(
            (element) => element.maxGuests >= maxGuests
        )
    }
    return tempArray
}
