export function decreseNumberOfGuests(prevState) {
    let newValue
    if (prevState.adults > 0) {
        newValue = prevState.adults - 1
    } else {
        newValue = prevState.adults
    }
    const returnObject = {
        ...prevState,
        adults: newValue,
    }
    return returnObject
}

export function increaseNumberOfGuests(prevState) {
    let newValue
    if (prevState.adults !== 10) {
        newValue = prevState.adults + 1
    } else {
        newValue = prevState.adults
    }
    const returnObject = {
        ...prevState,
        adults: newValue,
    }
    return returnObject
}
