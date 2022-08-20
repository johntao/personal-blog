import { useEffect } from 'react'
import useSWR from 'swr'
import fetcher from 'lib/utils/fetcher'

type ViewCounterProps = {
  slug: string
  className: string
  isBlogPage?: boolean
}

const ViewCounter = ({ slug, className, isBlogPage = false }: ViewCounterProps) => {
  const { data } = useSWR<{ total: unknown }>(`/api/views/${slug}`, fetcher)
  const views = new Number(data?.total)

  useEffect(() => {
    if (isBlogPage) fetch(`/api/views/${slug}`, { method: 'POST', })
  }, [isBlogPage, slug])

  return <span className={className}>{`${views > 0 ? views.toLocaleString() : '–––'}`}</span>
}

export default ViewCounter