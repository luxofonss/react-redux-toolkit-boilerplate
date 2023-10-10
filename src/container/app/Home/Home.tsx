import { useState } from 'react'

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal'
}

interface IHomeProps {
  readonly page: string
  readonly children: React.ReactNode
}

const Home: React.FC<IHomeProps> = ({ page, children }) => {
  const [status, setStatus] = useState(STATUS.NORMAL)

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED)
  }

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL)
  }

  return (
    <a className={status} href={page || '#'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children} test
    </a>
  )
}

export default Home
