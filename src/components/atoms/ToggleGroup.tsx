import React from "react"

import { Root, Item } from "@radix-ui/react-toggle-group"

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
    className="inline-flex space-x-px rounded-sm bg-neutral-900 shadow-sm"
    type="single"
    value={value}
    aria-label="Text alignment"
    onValueChange={onValueChange}
  >
    {items.map((item, index) => (
      <Item
        key={index}
        className="
          flex items-center justify-center bg-neutral-800 px-10 py-2 text-xs/4
          first:rounded-l
          last:rounded-r
          hover:bg-neutral-700
          focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-neutral-500
          focus:outline-none
          data-[state=on]:bg-neutral-600 data-[state=on]:text-neutral-300
        "
        value={item.value}
        aria-label={item.label}
      >
        {item.label}
      </Item>
    ))}
  </Root>
)

export default ToggleGroup
