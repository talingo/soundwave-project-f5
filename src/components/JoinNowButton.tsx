import React from 'react'
import Button from 'react-bootstrap/Button'

type Props = {}

const JoinNowButton = (props: Props) => {
  return (
    <>
    <Button href="/join" variant="primary">Join Now</Button>{' '}
    </>
  )
}

export default JoinNowButton