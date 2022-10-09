export function decreseNumberOfGuests(prevState, accesPoint, name) {
    let newValue
    if (accesPoint > 0) {
        newValue = accesPoint - 1
    } else {
        newValue = accesPoint
    }
    const returnObject = {
        ...prevState,
        [name]: newValue,
    }
    return returnObject
}

export function increaseNumberOfGuests(prevState, accesPoint, name) {
    let newValue
    if (accesPoint !== 10) {
        newValue = accesPoint + 1
    } else {
        newValue = accesPoint
    }
    const returnObject = {
        ...prevState,
        [name]: newValue,
    }
    return returnObject
}
