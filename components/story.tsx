import { ReactNode } from 'react'

const Story = ({
  children,
  time,
  className,
}: {
  children: ReactNode
  time?: string
  className?: string
}) => {
  return (
    <div className={`space-y-5 sm:space-y-0 ${className}`}>
      {time && <time className='sm:float-left sm:clear-both'>{time}</time>}
      <div className='sm: ml-[200px]'>{children}</div>
    </div>
  )
}
export default Story
