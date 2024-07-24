'use client'

import Image from 'next/image'
import logo from '@/aseets/logo.png'
import styled from 'styled-components'

export default function HomePage() {
  return (
    <>
      <Container>
        <Row className="flex items-center gap-12 h-full">
          <Image src={logo} alt="logo" />
        </Row>
      </Container>
    </>
  )
}

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 100vh;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 100%;
`
