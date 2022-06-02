export const getFilteredBooks = (filter, items) => {
    if (!filter) {
        return items;
    }
    const filterStr = filter.toLowerCase()
    const result = items.filter(item => {
        const title = item.title.toLowerCase();
        return title.includes(filterStr);
    });
    return result;
}