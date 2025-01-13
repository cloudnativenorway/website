import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">Cloud Native Day Oslo - </span>The future of cloud technology.
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              At Cloud Native Day Oslo, you can expect to dive deep into the latest advancements in cloud technology. Industry leaders will share their insights on cutting-edge tools and practices that are shaping the future of cloud-native development.
            </p>
            <p>
              You&apos;ll have the opportunity to network with fellow professionals, exchange ideas, and collaborate on innovative projects. Whether you&apos;re a seasoned expert or just starting out, Cloud Native Day Oslo offers something for everyone looking to enhance their cloud-native skills.
            </p>
          </div>
          <Button href={publicRuntimeConfig.registrationLink} className="mt-10 mr-5 w-full sm:hidden">
            Get your tickets
          </Button>
          <Button href={publicRuntimeConfig.cfpLink} className="mt-10 w-full sm:hidden bg-purple-500 hover:bg-purple-400">
            Submit to CFP
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Speakers', '30'],
              ['People Attending', '~250'],
              ['Venue', 'Rebel'],
              ['Location', 'Oslo, Norway'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
