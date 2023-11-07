import './App.css';

import SlideComponent from './components/SlideComponent.js';

export default function App( ) {
  return (
    <main className='container-all hidden-scrollbar'>
      <SlideComponent 
        title={ 'Title of a slide' }
        description={ 'Lorem lorem rejahb rgueahriofhajbfh oijahebfjo iuhajvebhjfiuo uhegajvnbfiuou heajvbjfiuo hkajebjhkofiu hkjbaehuoi fhjbaeiuohk fjbvnheajiuohfjb kaoeiuhj fbkiuoeahbj fkoiueahjvbnhfjiuo aeuhjvbhfiuo aehkjb' }
        imgUrl={ 'https://w0.peakpx.com/wallpaper/87/777/HD-wallpaper-hipster-cat-glasses-thumbnail.jpg' }
        bgCol={ 'rgb(50, 50, 50)' }
        textCol={ 'white' }
      />

      <SlideComponent 
        title={ 'Title of a slide' }
        description={ 'Lorem lorem rejahb rgueahriofhajbfh oijahebfjo iuhajvebhjfiuo uhegajvnbfiuou heajvbjfiuo hkajebjhkofiu hkjbaehuoi fhjbaeiuohk fjbvnheajiuohfjb kaoeiuhj fbkiuoeahbj fkoiueahjvbnhfjiuo aeuhjvbhfiuo aehkjb' }
        imgUrl={ 'https://i1.sndcdn.com/artworks-28nZ9iNGE40eOkTI-alYLyg-t500x500.jpg' }
        bgCol={ 'rgb(50, 50, 50)' }
        textCol={ 'white' }
      />

      <SlideComponent 
        title={ 'Title of a slide' }
        description={ 'Lorem lorem rejahb rgueahriofhajbfh oijahebfjo iuhajvebhjfiuo uhegajvnbfiuou heajvbjfiuo hkajebjhkofiu hkjbaehuoi fhjbaeiuohk fjbvnheajiuohfjb kaoeiuhj fbkiuoeahbj fkoiueahjvbnhfjiuo aeuhjvbhfiuo aehkjb' }
        imgUrl={ 'https://i.imgur.com/79TgQz9.jpg' }
        bgCol={ 'rgb(50, 50, 50)' }
        textCol={ 'white' }
      />
    </main>
  );
}