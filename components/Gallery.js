import React from 'react';
import Link from 'next/link'
import { motion } from 'framer-motion'

import { images } from '../constants'

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
}

const frameVariants = {
  hover: { scale: 0.95 },
}

const imageVariants = {
  hover: { scale: 1.1 },
}

const Thumbnail = ({ id }) => (
  <>
    {/* variants={thumbnailVariants} */}
    <motion.div className="thumbnail" layoutId={`thumbnail-${id}`}>
      <Link href="/product/[index]" as={`/product/${id}`} scroll={false}>
        <motion.img
          src={`https://picsum.photos/seed/picsum/500/500`}
          alt="The Barbican"
          variants={imageVariants}
          transition={transition}
        />
      </Link>
    </motion.div>
    <style>
      {`
            .thumbnail {
                flex: 1 0 33%;
                margin: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }

            .frame {
                overflow: hidden;
            }

            .thumbnail img {
                width: 100%;
                height: 100%;
            }
        `}
    </style>
  </>
)

function Gallery({products}) {

  return (
    <>
      <div className="gallery">
        <motion.div
          className="thumbnails"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
        >
          {products.map((product) => (
            <Thumbnail key={product._id} id={product._id} />
          ))}
        </motion.div>
      </div>
      <style>
        {`
          
          .gallery {
              padding: 40px;
              margin: 0 auto;
              width: 100%;
              max-width: 1200px;
              position: relative;
          }

          .thumbnails {
              display: flex;
              flex-wrap: wrap;
              flex-direction: row;
              justify-content: space-between;
          }
          `}
      </style>
    </>
  );
}

export default Gallery
