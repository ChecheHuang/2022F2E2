import React from 'react'
import './page3.scss'
import { useSelector } from 'react-redux'
function Page3() {
  const file = useSelector((state) => state.file)
  console.log(file)
  return <div>Page3</div>
}

export default Page3
