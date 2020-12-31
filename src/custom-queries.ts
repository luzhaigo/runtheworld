import { queryHelpers, buildQueries } from '@testing-library/react';

const queryAllByDataIcon = (...args: any[]) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  queryHelpers.queryAllByAttribute('data-icon', ...args);

const getMultipleError = <Arguments extends any[]>(
  c: HTMLElement,
  dataIconValue: Arguments,
) =>
  `Found multiple elements with the data-icon attribute of: ${dataIconValue}`;
const getMissingError = <Arguments extends any[]>(
  c: HTMLElement,
  dataIconValue: Arguments,
) =>
  `Unable to find an element with the data-icon attribute of: ${dataIconValue}`;

const [
  queryByDataIcon,
  getAllByDataIcon,
  getByDataIcon,
  findAllByDataIcon,
  findByDataIcon,
] = buildQueries(queryAllByDataIcon, getMultipleError, getMissingError);

export {
  queryByDataIcon,
  getAllByDataIcon,
  getByDataIcon,
  findAllByDataIcon,
  findByDataIcon,
  queryAllByDataIcon,
};
