import React from 'react';
import styled from 'styled-components';
import Select, { SelectProps } from 'react-dropdown-select';
import { Color } from 'styles/helpers/color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

type Props<T> = Omit<SelectProps<T>, 'values'> & { selectedOption?: T };

const StyledSelect = styled(Select)`
  && {
    font-size: 16px;
    color: ${Color.charcoal};
    border-radius: 4px;
    border: 1px solid ${Color['dark-gray']};
    padding: 14px 12px;
    background: ${Color.white};
    &:hover {
      border: 1px solid ${Color['dark-gray']};
    }
    &:focus,
    &:focus-within {
      box-shadow: none;
      outline: none;
      border: 1px solid ${Color['dark-gray']};
    }
    .react-dropdown-select-dropdown {
      border-radius: 4px;
      padding: 4px 0;
    }
    .react-dropdown-select-content span {
      display: flex;
      align-items: center;
    }
    .react-dropdown-select-content input {
      color: ${Color.charcoal};
      width: 0;
      font-size: 16px;
      &::placeholder {
        color: ${Color.silver};
      }
    }
  }
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${Color['dim-gray']};
  font-size: 18px;
`;

const DropdownSelect = <T extends string | object = {}>({
  options,
  selectedOption,
  placeholder,
  name,
  onChange,
  className,
}: Props<T>): JSX.Element => {
  return (
    <StyledSelect
      clearOnBlur
      className={className}
      searchable={false}
      options={options}
      values={selectedOption ? [selectedOption] : []}
      placeholder={placeholder}
      color="#2020e5"
      name={name}
      dropdownHandleRenderer={({ state }) => {
        return state.dropdown ? (
          <Icon icon={faCaretUp} />
        ) : (
          <Icon icon={faCaretDown} />
        );
      }}
      onChange={onChange as (value: (string | object)[]) => void}
    />
  );
};

export default DropdownSelect;
