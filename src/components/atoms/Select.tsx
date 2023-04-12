import * as React from "react"
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
import classNames from "src/utils/classNames"

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
  options: GROUP_TYPE[] | ITEM_TYPE[]
  label: string
  placeholder: string
  isGrouped?: boolean
}

const Select: React.FC<Props> = ({
  label,
  placeholder,
  options,
  isGrouped = false,
}) => (
  <Root>
    <Trigger
      className={classNames(
        "inline-flex items-center justify-between gap-2 rounded bg-neutral-800 text-sm leading-none text-neutral-300 outline-none hover:bg-neutral-700 data-[placeholder]:text-neutral-300",
        "min-w-32 h-[35px] px-4"
      )}
      aria-label={label}
    >
      <Value placeholder={placeholder} />
      <Icon className="text-neutral-600">
        <ChevronDown size={12} />
      </Icon>
    </Trigger>
    <Portal>
      <Content className="overflow-hidden rounded bg-neutral-800">
        <ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-neutral-800 text-neutral-300">
          <ChevronUp size={12} />
        </ScrollUpButton>
        <Viewport className="px-2 py-3">
          {isGrouped
            ? (options as GROUP_TYPE[]).map((group, i) => (
                <>
                  <Group>
                    <Label className="px-4 text-xs leading-6 text-neutral-500">
                      {group.name}
                    </Label>
                    {group.items.map((item, index) => (
                      <Item
                        key={index}
                        className="relative flex h-[25px] select-none items-center rounded pl-[25px] pr-[35px] text-sm leading-none text-neutral-400 data-[disabled]:pointer-events-none data-[highlighted]:bg-neutral-700 data-[disabled]:text-neutral-600 data-[highlighted]:text-neutral-300 data-[highlighted]:outline-none"
                        value={item.value}
                        disabled={item.disabled}
                      >
                        <ItemText>{item.label}</ItemText>
                        <ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
                          <Check size={12} />
                        </ItemIndicator>
                      </Item>
                    ))}
                  </Group>
                  {i !== options.length - 1 && (
                    <Separator className="mx-1 my-2 h-[1px] bg-neutral-600" />
                  )}
                </>
              ))
            : (options as ITEM_TYPE[]).map((item, index) => (
                <Item
                  key={index}
                  className="relative flex h-[25px] select-none items-center rounded pl-[25px] pr-[35px] text-sm leading-none text-neutral-400 data-[disabled]:pointer-events-none data-[highlighted]:bg-neutral-700 data-[disabled]:text-neutral-600 data-[highlighted]:text-neutral-300 data-[highlighted]:outline-none"
                  value={item.value}
                  disabled={item.disabled}
                >
                  <ItemText>{item.label}</ItemText>
                  <ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
                    <Check size={12} />
                  </ItemIndicator>
                </Item>
              ))}
        </Viewport>
        <ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-neutral-800 text-blue-600">
          <ChevronDown size={12} />
        </ScrollDownButton>
      </Content>
    </Portal>
  </Root>
)

export default Select
