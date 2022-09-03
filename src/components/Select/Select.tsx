/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, useRef, useState } from 'react';
import clsx from 'clsx';
import { InputSize } from '../../models';
import { Size } from '../../enums';
import { InputGroup } from '../InputGroup';
import { Input } from '../Input';
import { Menu } from '../Menu';
import { SelectOption, SelectOptionProps } from './SelectOption';
import { SelectOptionModel } from './SelectOptionModel';
import { SelectContext } from './SelectContext';
import { Icon } from '../Icon';
import { Button } from '../Button';
import './Select.scss';

/**
 * Props.
 */
export interface SelectProps<T> {
    /**
     * Component children.
     */
    children: ReactElement<SelectOptionProps<T>>[] | ReactElement<SelectOptionProps<T>>;
    /**
     * Callback on select option.
     */
    onSelect?: (value: T) => void;
    /**
     * Component size.
     */
    size?: InputSize;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
    /**
     * Displays when there are nothing to select.
     */
    noItemsMessage?: string;
    /**
     * Displays when nothing is selected.
     */
    placeholder?: string;
    /**
     * Disable component.
     */
    disabled?: boolean;
    /**
     * Id.
     */
    id?: string;
    /**
     * Allows to clear selected value and adds clear icon.
     */
    clearable?: boolean;
    /**
     * Clear icon name.
     */
    clearIcon?: string;
}

/**
 * Select component.
 *
 * @param {SelectProps} props - Props.
 * @returns - React component.
 */
export const Select = <T,>({
    className,
    onSelect,
    size = Size.md,
    children,
    noItemsMessage = 'No items to select',
    placeholder = 'No items selected',
    disabled,
    id,
    clearable,
    clearIcon = 'glyphicon glyphicon-remove',
}: SelectProps<T>): ReactElement => {
    const ref = useRef<HTMLInputElement>(null);
    const selectClassName = clsx('select', className && className);

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selected, setSelected] = useState<SelectOptionModel<T>>();
    const iconName = `glyphicon glyphicon-triangle-${dropdownVisible ? 'top' : 'bottom'}`;

    const clearSelect = (): void => {
        if (!ref.current) {
            return;
        }

        if (!clearable) {
            return;
        }

        if (disabled) {
            return;
        }

        setDropdownVisible(false);
        setSelected(undefined);
    };

    const onSelectOption = (selectOption: SelectOptionModel<T>): void => {
        if (disabled) {
            return;
        }

        setSelected(selectOption);
        onSelect && onSelect(selectOption.value);
        setDropdownVisible(false);
    };

    return (
        <SelectContext.Provider value={{ selected, onSelectOption }}>
            <div className={selectClassName}>
                <InputGroup size={size}>
                    <Input
                        readOnly
                        ref={ref}
                        id={id}
                        value={selected?.title ?? ''}
                        disabled={disabled}
                        placeholder={placeholder}
                        onClick={(): void => setDropdownVisible(!dropdownVisible)}
                    />
                    <InputGroup.Buttons>
                        {clearable && !!selected && (
                            <Button
                                onClick={clearSelect}
                                disabled={disabled}
                                aria-label="Clear selected value"
                            >
                                <Icon iconName={clearIcon} />
                            </Button>
                        )}
                        <Button
                            onClick={(): void => setDropdownVisible(!dropdownVisible)}
                            disabled={disabled}
                            aria-haspopup={true}
                            aria-expanded={dropdownVisible}
                            aria-label="Toggle select menu"
                        >
                            <Icon iconName={iconName} />
                        </Button>
                    </InputGroup.Buttons>
                </InputGroup>
                <Menu
                    visible={dropdownVisible}
                    onCloseMenu={(): void => setDropdownVisible(false)}
                    role="listbox"
                    className="selectMenu"
                >
                    {!children && noItemsMessage}
                    {children}
                </Menu>
            </div>
        </SelectContext.Provider>
    );
};

/**
 * Component extensions.
 */
Select.Option = SelectOption;
