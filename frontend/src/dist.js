const SeperatePrice = (price) => {
    const numberFormatter = Intl.NumberFormat('en-US');
    const formatted = numberFormatter.format(price);
    return(formatted)
}

export {SeperatePrice}