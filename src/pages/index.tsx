import type { ReactElement } from 'react'
import Layout from '../components/layout'

export default function Page() {
  return <div>1111</div>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <div>{page}</div>
    </>
  )
}
