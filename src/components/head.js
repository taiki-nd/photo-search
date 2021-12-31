import React from 'react';
import { Helmet } from 'react-helmet';
import BackImage from '../images/back.jpg';

export const Head = () => {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Photo Search</title>
        <meta
          name="Photo Search"
          content="無料で高品質な商用利用可能の写真を探す"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0"></meta>

        <head prefix="og: http://ogp.me/ns#" />
        <meta property="og:url" content="https://photo-search-0517.herokuapp.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Photo Search" />
        <meta property="og:description" content="無料で高品質な商用利用可能の写真を探す" />
        <meta property="og:site_name" content="Photo Search" />
        <meta property="og:image" content="https://raw.githubusercontent.com/taiki-nd/photo-search/master/src/images/back.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Kii_Program" />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/taiki-nd/photo-search/master/src/images/back.jpg" />
      </Helmet>
    </>
  )

}