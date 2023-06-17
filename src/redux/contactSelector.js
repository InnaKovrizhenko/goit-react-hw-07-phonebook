export const getContacts = state => state.contacts.items;
export const getFilteredContact = state => {
  const filterValue = state.filter.filterValue;
  if (typeof filterValue !== 'string') {
    return '';
  }
  return filterValue;
}

export const getLoader = state => state.contacts.isLoading;