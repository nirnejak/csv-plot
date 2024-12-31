import * as React from "react"

import {
  Root,
  Trigger,
  Portal,
  Content,
  Close,
  Arrow,
} from "@radix-ui/react-popover"

import { Cross } from "akar-icons"

interface Props {
  icon: React.ReactNode
  children: React.ReactNode
}

const Popover: React.FC<Props> = ({ icon, children }) => (
  <Root>
    <Trigger asChild>
      <button
        className="inline-flex size-9 cursor-default items-center justify-center rounded-full bg-neutral-800 p-3 text-neutral-300 outline-none hover:bg-neutral-600"
        aria-label="Update dimensions"
      >
        {icon}
      </button>
    </Trigger>
    <Portal>
      <Content
        className="w-[260px] rounded bg-neutral-800 p-5 will-change-[transform,opacity] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade"
        sideOffset={5}
      >
        {children}
        <Close
          className="absolute right-3 top-3 inline-flex cursor-default items-center justify-center rounded-full p-1.5 text-neutral-400 outline-none hover:bg-neutral-600"
          aria-label="Close"
        >
          <Cross size={13} />
        </Close>
        <Arrow className="fill-neutral-800" />
      </Content>
    </Portal>
  </Root>
)

export default Popover
