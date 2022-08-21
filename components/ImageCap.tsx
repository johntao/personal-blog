import React from 'react'


const ImageCap = ({matches}: {matches: RegExpMatchArray[]}) => (
  <>
    {matches.map(q => !q[1] ? q[0] : React.createElement('a', { href: q[2], key: q[2] }, q[1])
    )}
  </>
)

export default ImageCap