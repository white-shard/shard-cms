import { cn } from '@/lib/utils'
import type { CSSProperties } from 'react'

type Props = {
  className?: string
  style?: CSSProperties
  delay?: number
}

export function StagesBlockAnimation({ className = "", style, delay = 0 }: Props) {
  const pathId = "stages-path"
  const delayStr = delay > 0 ? `${delay}s` : "0s"
  
  return (
    <svg width="1413" height="244" viewBox="0 0 1413 244" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("absolute hidden xl:block top-0 left-0 w-full", className)} style={style}>
      <path 
        id={pathId}
        d="M0.4375 13.2042C127.05 -15.1773 186.476 10.1686 282.438 91.2042C456.98 26.5145 553.927 2.27405 716.938 152.204C909.938 74.9962 1053.44 102.996 1151.44 221.496C1266.97 174.198 1372.94 190.996 1411.94 210.996" 
        stroke="none"
        fill="none"
      />
      <circle r="24" fill="#EC4899" opacity="0">
        <animate
          attributeName="opacity"
          values="0;1;1;0;0"
          keyTimes="0;0.05;0.45;0.5;1"
          dur="10s"
          begin={delayStr}
          repeatCount="indefinite"
          calcMode="linear"
        />
        <animateMotion 
          dur="10s" 
          begin={delayStr}
          repeatCount="indefinite"
          calcMode="linear"
          keyPoints="0;1;1"
          keyTimes="0;0.5;1"
        >
          <mpath href={`#${pathId}`} />
        </animateMotion>
      </circle>
    </svg>
  )
}