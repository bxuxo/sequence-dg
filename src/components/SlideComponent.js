import './SlideComponent.css';

export default function SlideComponent({ title, description, imgUrl, bgCol, textCol }) {
    const imgOnly = description == '';

    return (
        <article 
            className='slide'
            style={{ 
                '--bgCol': bgCol,
                '--textCol': textCol
            }}
        >
            <h1 style={{ textAlign: imgOnly ? 'center' : 'left' }}>{ title }</h1>
            <div className='slide-content'>
                { !imgOnly &&
                    <div className='slide-description'>
                        { description }
                    </div>
                }
                <div className='slide-img'>
                    <img 
                        src={ imgUrl }
                    />
                </div>
            </div>
        </article>
    );
}