export function tabelliere(csvLines: string[]): string[] {
    return csvLines.map(line => line.replace(/;/g, '|').concat('|'));
}


interface MaxColumLengths {
    [key: number]: number;
}

export function getMaxColumnLengths(csvLines: string[]): MaxColumLengths {
    const maxColumnLengths: MaxColumLengths = {};
    for (let i = 0; i < csvLines.length; i ++) {
        const columns = csvLines[i].split(';');
        for (let j = 0; j < columns.length; j ++) {
            if(!maxColumnLengths[j]){
                maxColumnLengths[j] = 0;
            }
            maxColumnLengths[j] = Math.max(maxColumnLengths[j], columns[j].length);
        }

    }
    return maxColumnLengths;
}