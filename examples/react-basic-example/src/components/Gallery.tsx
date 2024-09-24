import { Avatar } from './Avatar';

export const Gallery = () => {
  return (
    <div>
      <section className='profile'>
        <h2>Maria Skłodowska-Curie</h2>
        <Avatar
          size={70}
          person={{
            name: 'Lin Lanying',
            imageId: '1bX5QH6',
          }}
        />
        <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
            Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section>
      <section className='profile'>
        <h2>Katsuko Saruhashi</h2>
        <Avatar
          size={70}
          person={{
            name: 'Aklilu Lemma',
            imageId: 'OKS67lh',
          }}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
};
