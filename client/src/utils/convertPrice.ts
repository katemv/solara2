export const convertPrice = (minorUnitPrice: number): string => {
    const dollars = Math.floor(minorUnitPrice / 100);
    const cents = minorUnitPrice % 100;

    return `$${dollars},${cents.toString().padStart(2, "0")}`;
};
