const generateId = function(format: string, count: number): string {
    const newIdNumber = (count + 1).toString();
    
    return format.toUpperCase() + newIdNumber.padStart(4, "0");
}

export {
    generateId
}