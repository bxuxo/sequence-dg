import './SlideComponent.css';

export default function SlideComponent({ title, description, imgUrl, bgCol, textCol }) {
    return (
        <article 
            className='slide'
            style={{ 
                '--bgCol': bgCol,
                '--textCol': textCol
            }}
        >
            <h1>{ title }</h1>
            <div className='slide-content'>
                <div className='slide-description'>
                    { description }
                </div>
                <div className='slide-img-container' style={{ background: `url(${ imgUrl })`, backgroundSize: 'cover' }}>
                </div>
            </div>
        </article>
    );
}