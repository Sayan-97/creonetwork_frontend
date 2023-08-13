import React from 'react'
import { CreativeTalents, ExploreProjects, FAQ, FindWork, ForEveryone, GettingStarted, Hero, KeyFeatures, TheJourney, TheNetwork, UnlockingTheFuture } from './components'

const Home = () => {
    return (
        <>
            <Hero />
            <ExploreProjects />
            <UnlockingTheFuture />
            <FindWork />
            <KeyFeatures />
            <TheJourney />
            <TheNetwork />
            <ForEveryone />
            <GettingStarted />
            <CreativeTalents />
            <FAQ />
        </>
    )
}

export default Home