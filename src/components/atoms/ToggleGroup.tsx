import React from "react"

import { Root, Item } from "@radix-ui/react-toggle-group"

const toggleGroupItemClasses =
  "hover:bg-neutral-700 data-[state=on]:bg-neutral-600 data-[state=on]:text-neutral-300 flex py-2 px-10 text-xs items-center justify-center bg-neutral-800 text-base leading-4 first:rounded-l last:rounded-r focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"

interface ITEM {
  value: string
  label: string
}

interface Props {
  value: string
  items: ITEM[]
  onValueChange: (value: string) => void
}

const ToggleGroup: React.FC<Props> = ({ items, value, onValueChange }) => (
  <Root
    className="inline-flex space-x-px rounded bg-neutral-900 shadow-sm"
    type="single"
    value={value}
    aria-label="Text alignment"
    onValueChange={onValueChange}
  >
    {items.map((item, index) => (
      <Item
        key={index}
        className={toggleGroupItemClasses}
        value={item.value}
        aria-label={item.label}
      >
        {item.label}
      </Item>
    ))}
  </Root>
)

export default ToggleGroup
