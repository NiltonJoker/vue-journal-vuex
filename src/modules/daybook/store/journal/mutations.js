// export const myMutations =  (state) => {

// }

export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};

export const updateEntry = (state, entry) => {
  const idx = state.entries.findIndex((entry) => entry.id === entry.id);

  if (idx === -1) {
    return;
  }

  state.entries[idx] = entry;
};

export const addEntry = (state, entry) => {
  state.entries = [entry, ...state.entries];
};

export const deleteEntry = (state, id) => {
  state.entries = state.entries.filter((entry) => entry.id !== id);
};
