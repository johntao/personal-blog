import { useEffect } from 'react'
import useSWR from 'swr'
import fetcher from 'lib/utils/fetcher'


type VC_Props = {
  slug: string
  className: string
  blogPage?: boolean
}

const ViewCounter = ({ slug, className, blogPage = false }: VC_Props) => {
  let { data } = useSWR<{ total: unknown }>(`/api/views/${slug}`, fetcher)
  let views = new Number(data?.total)

  useEffect(() => {
    const registerView = () => fetch(`/api/views/${slug}`, { method: 'POST', })

    if (blogPage) {
      registerView()
    }
  }, [blogPage, slug])

  return <span className={className}>{`${views > 0 ? views.toLocaleString() : '–––'}`}</span>
}

export default ViewCounter