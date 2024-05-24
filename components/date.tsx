import { ReactNode } from 'react'

const Date = ({ children, date }: { children: ReactNode; date: string }) => {
  return (
    <div className='relative clear-both border-l-2 border-l-[hsla(var(--foreground),_0.3)] pl-4'>
      <h2 className='date'>{date}</h2>
      <div className=''>{children}</div>
    </div>
  )
}
export default Date
