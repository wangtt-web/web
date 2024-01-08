import Link from 'next/link'

function Detail(props: any) {
  console.log('props:', props)

  return (
    <div>
      {props?.id}
      <Link href="/">返回</Link>
    </div>
  )
}

export async function getStaticPaths() {
  return { paths: [], fallback: false }
}

export async function getStaticProps({ params }: any) {
  return { props: { id: params?.id } }
}

export default Detail
