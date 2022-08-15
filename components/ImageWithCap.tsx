import NextImage from 'next/image'
import ImageCap from './ImageCap'

// import { CSSProperties, useEffect, useState } from 'react'
// import { Properties } from 'rehype-autolink-headings'

type ImageCapProps = {
  alt: string
  src: string
  cap: string
  width: number
  height: number
}

const ImageWithCap = ({ alt, src, cap, width, height }: ImageCapProps) => {
  // const newLocal: CSSProperties = {
  //   position: 'relative',
  //   height: 'unset'
  // }
  // const [style, setStyle] = useState(newLocal)
  // useEffect(() => {
  //   setStyle({
  //     position: 'relative',
  //     height: 'unset'
  //   })
  // }, [style.position, style.height])
  // const www = [...qqq.matchAll(/[\w ]+|\[([^\]]+)\]\(([^\)]+)\)/g)]
  return (
    <figure
      className={width ? "" : "override-nxtimg-parent"}
    // style={{ width: '100%' }}
    >
      {width ? <NextImage alt={alt} src={src} width={width} height={height} /> :
        <NextImage
          alt={alt}
          src={src}
          layout="fill"
          objectFit="contain"
          width="100%"
          className="override-nxtimg"
        // onLoad={e => e.currentTarget.style.position = 'relative'}
        // style={{ position: style.position, height: style.height }}
        />}
      <figcaption><ImageCap matches={[...cap.matchAll(/[\w ]+|\[([^\]]+)\]\(([^\)]+)\)/g)]} /></figcaption>
    </figure>)
}

export default ImageWithCap
