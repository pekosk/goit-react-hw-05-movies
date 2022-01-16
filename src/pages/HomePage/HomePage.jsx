import PageWrapper from '../../shared/wrapper';
import PopularMovie from '../../client/PopularMovie';

const HomePage = ({title}) => {
    return (
    <PageWrapper title={title}>
        <PopularMovie />
    </PageWrapper>
    )
}

export default HomePage;