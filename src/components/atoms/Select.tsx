import * as React from "react"

import { Label as ReactLabel } from "@radix-ui/react-label"
import {
  Root,
  Trigger,
  Portal,
  Content,
  Group,
  Label,
  ScrollUpButton,
  Icon,
  Value,
  Viewport,
  Item,
  ItemText,
  ItemIndicator,
  Separator,
  ScrollDownButton,
} from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "akar-icons"

interface ITEM_TYPE {
  label: string
  value: string
  disabled?: boolean
}

interface GROUP_TYPE {
  name: string
  items: ITEM_TYPE[]
}

interface Props {
  value: string
  onValueChange: (value: string) => void
  options: GROUP_TYPE[] | ITEM_TYPE[]
  placeholder: string
  label?: string
  isGrouped?: boolean
}

const Select: React.FC<Props> = ({
  value,
  onValueChange,
  label,
  placeholder,
  options,
  isGrouped = false,
}) => (
  <ReactLabel className="w-full">
    {label && <p className="mb-2 text-sm">{label}</p>}
    <Root value={value} onValueChange={onValueChange}>
      <Trigger
        className="
          inline-flex h-[35px] w-full items-center justify-between gap-2
          rounded-sm bg-neutral-800 px-4 text-sm leading-none text-neutral-300
          outline-none
          hover:bg-neutral-700
          data-placeholder:text-neutral-300
        "
        aria-label={placeholder}
      >
        <Value placeholder={placeholder} aria-label={value} />
        <Icon className="text-neutral-600">
          <ChevronDown size={12} />
        </Icon>
      </Trigger>
      <Portal>
        <Content className="overflow-hidden rounded-sm bg-neutral-800">
          <ScrollUpButton
            className="
              flex h-6 cursor-default items-center justify-center
              text-neutral-600
            "
          >
            <ChevronUp size={12} />
          </ScrollUpButton>
          <Viewport className="p-2">
            {isGrouped
              ? (options as GROUP_TYPE[]).map((group, i) => (
                  <>
                    <Group>
                      <Label className="px-3 text-xs/6 text-neutral-500">
                        {group.name}
                      </Label>
                      {group.items.map((item, index) => (
                        <Item
                          key={index}
                          className="
                            relative flex h-[25px] items-center rounded-sm pr-9
                            pl-6 text-sm leading-none text-neutral-400
                            select-none
                            data-disabled:pointer-events-none
                            data-disabled:text-neutral-600
                            data-highlighted:bg-neutral-700
                            data-highlighted:text-neutral-300
                            data-highlighted:outline-none
                          "
                          value={item.value}
                          disabled={item.disabled}
                        >
                          <ItemText>{item.label}</ItemText>
                          <ItemIndicator
                            className="
                              absolute left-0 inline-flex w-6 items-center
                              justify-center
                            "
                          >
                            <Check size={12} />
                          </ItemIndicator>
                        </Item>
                      ))}
                    </Group>
                    {i !== options.length - 1 && (
                      <Separator className="mx-1 my-2 h-px bg-neutral-600" />
                    )}
                  </>
                ))
              : (options as ITEM_TYPE[]).map((item, index) => (
                  <Item
                    key={index}
                    className="
                      relative flex h-[25px] items-center rounded-sm pr-9 pl-6
                      text-sm leading-none text-neutral-400 select-none
                      data-disabled:pointer-events-none
                      data-disabled:text-neutral-600
                      data-highlighted:bg-neutral-700
                      data-highlighted:text-neutral-300
                      data-highlighted:outline-none
                    "
                    value={item.value}
                    disabled={item.disabled}
                  >
                    <ItemText>{item.label}</ItemText>
                    <ItemIndicator
                      className="
                        absolute left-0 inline-flex w-6 items-center
                        justify-center
                      "
                    >
                      <Check size={12} />
                    </ItemIndicator>
                  </Item>
                ))}
          </Viewport>
          <ScrollDownButton
            className="
              flex h-6 cursor-default items-center justify-center
              text-neutral-600
            "
          >
            <ChevronDown size={12} />
          </ScrollDownButton>
        </Content>
      </Portal>
    </Root>
  </ReactLabel>
)

export default Select
