import React from 'react'
import { Link } from 'react-router-dom'
import './NigeriaStyle.css'

const photos = [
  {
    title: 'African fashion, in full color',
    category: 'Women',
    path: '/womens',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/VICTORIA_NWOGU%27S_AFRICAN_FASHION.jpg',
    alt: 'Victoria Nwogu wearing a colorful African fashion look',
    artist: 'Victoria Nwogu',
    source: 'https://commons.wikimedia.org/wiki/File:VICTORIA_NWOGU%27S_AFRICAN_FASHION.jpg',
  },
  {
    title: 'African print on the runway',
    category: 'Women',
    path: '/womens',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/LFDW3_-129.jpg',
    alt: 'A model wearing an African print design at Lagos Fashion Week',
    artist: 'Chidi "Lex Ash" Ashimole',
    source: 'https://commons.wikimedia.org/wiki/File:LFDW3_-129.jpg',
  },
  {
    title: 'Yoruba occasion wear',
    category: 'Men',
    path: '/mens',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/A_Yoruba_man_garbed_in_traditional_clothing.png',
    alt: 'A Yoruba man dressed in traditional occasion wear',
    artist: 'Oramfe',
    source: 'https://commons.wikimedia.org/wiki/File:A_Yoruba_man_garbed_in_traditional_clothing.png',
  },
  {
    title: 'Ibibio style for little ones',
    category: 'Kids',
    path: '/kids',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Traditional_wear_looks_good_on_this_child.ibibio_culture%2C_Akwa_ibom_state_Nigeria.jpg',
    alt: 'A young boy wearing Ibibio cultural clothing in Akwa Ibom, Nigeria',
    artist: 'Orokbest1',
    source: 'https://commons.wikimedia.org/wiki/File:Traditional_wear_looks_good_on_this_child.ibibio_culture,_Akwa_ibom_state_Nigeria.jpg',
  },
]

const NigeriaStyle = () => (
  <section className="nigeria-style" aria-labelledby="nigeria-style-heading">
    <div className="nigeria-style-heading">
      <div>
        <p className="eyebrow">CULTURE, CRAFT &amp; STYLE</p>
        <h2 id="nigeria-style-heading">A little closer to home.</h2>
        <p>A celebration of the people, textiles, and traditions shaping Nigerian fashion.</p>
      </div>
      <span className="nigeria-style-mark" aria-hidden="true">NG<br/>01</span>
    </div>
    <div className="nigeria-style-grid">
      {photos.map((photo) => (
        <article className="nigeria-style-card" key={photo.title}>
          <Link className="nigeria-style-image" to={photo.path} aria-label={`Explore ${photo.category.toLowerCase()} fashion`}>
            <img src={photo.image} alt={photo.alt} loading="lazy" decoding="async" />
            <span className="nigeria-style-image-label">{photo.category} edit <span aria-hidden="true">↗</span></span>
          </Link>
          <h3>{photo.title}</h3>
          <p className="nigeria-style-credit">
            Photo: <a href={photo.source} target="_blank" rel="noreferrer">{photo.artist}</a>
            {' · '}<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0</a>
            {' · Cropped'}
          </p>
        </article>
      ))}
    </div>
  </section>
)

export default NigeriaStyle
