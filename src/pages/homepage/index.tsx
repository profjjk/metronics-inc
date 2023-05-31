export const HomePage = () => {
    return (
        <main id={'home-page'}>
            <div>
                <div className={'left-side'}>
                    <h1>
                        A/C Recovery & Recycling
                        <span>REPAIR SPECIALISTS</span>
                    </h1>

                    <p>
                        Servicing automotive repair facilities in the San Francisco Bay and surrounding areas since 1980.
                    </p>
                    <img src={'assets/img/logos/robinair-sc-red.png'} alt={'Authorized Service Center'} height={'60px'} />
                </div>

                <div className={'right-side'}>
                    <img src={'assets/img/robinair_17800C.png'} alt={'Authorized Service Center'} height={'600px'} />
                </div>
            </div>
        </main>
    )
}