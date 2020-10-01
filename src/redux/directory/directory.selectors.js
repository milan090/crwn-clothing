import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySecttions = createSelector(
  [selectDirectory],
  (directory) => directory.sections
)