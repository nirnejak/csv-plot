import * as React from "react"
import { Root, Track, Range, Thumb } from "@radix-ui/react-slider"

interface Props {
  label: string
  max: number
  step: number
  value: number[]
  onValueChange: (val: number[]) => void
}

const Slider: React.FC<Props> = ({
  label,
  max,
  step,
  value,
  onValueChange,
}) => (
  <form>
    <Root
      className="relative flex h-5 w-full touch-none items-center select-none"
      value={value}
      max={max}
      step={step}
      aria-label={label}
      onValueChange={onValueChange}
    >
      <Track className="relative h-[3px] grow rounded-full bg-neutral-600">
        <Range className="absolute h-full rounded-full bg-neutral-300" />
      </Track>
      <Thumb
        className="
          block size-5 rounded-[10px] bg-neutral-300 shadow-md
          hover:bg-neutral-400
          focus:shadow-[0_0_0_5px] focus:shadow-neutral-100/40
          focus:outline-none
        "
      />
    </Root>
  </form>
)

export default Slider
