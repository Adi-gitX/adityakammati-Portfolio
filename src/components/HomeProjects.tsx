"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export const products = [
  {
    title: "TRIPWHIZ",
    link: "https://tripwhizx.vercel.app/",
    thumbnail: "/courses/tripwhiz.png",
  },
  {
    title: "Quiz-appX",
    link: "https://quiz-appx.vercel.app/",
    thumbnail: "/courses/quizapp.png",
  },
  {
    title: "TwitterX-clone",
    link: "https://twitter-clonex.vercel.app/",
    thumbnail: "/courses/twitter.png",
  },

  {
    title: "2048-Game",
    link: "https://2048x.vercel.app/",
    thumbnail: "/courses/2048.png",
  },
  {
    title: "LinkedInX-clone",
    link: "https://linkedinx.vercel.app/",
    thumbnail: "/courses/linkedin.png",
  },
  {
    title: "TIC-TAC-TOE-XGAME",
    link: "https://tic-tac-toe-xgame.vercel.app/",
    thumbnail: "/courses/tictactoe.png",
  },
  {
    title: "Personal Portfolio",
    link: "https://adi-gitx.vercel.app/",
    thumbnail: "/courses/personalportfolio.png",
  },
  {
    title: "Thinkyfy App",
    link: "https://thinkyfy.vercel.app/",
    thumbnail: "/courses/thinkyfy.png",
  },

  {
    title: "ArtifyX",
    link: "https://artify-x.vercel.app/",
    thumbnail: "/courses/ARTIFY.png",
  },
  {
    title: "Adi-gitX-blog",
    link: "https://adi-gitx-blog.vercel.app/",
    thumbnail: "/courses/blogpage.png",
  },
//   {
//     title: "TwitterX-clone",
//     link: "https://twitter-clonex.vercel.app/",
//     thumbnail: "/courses/twitter.png",
//   },

//   {
//     title: "2048-Game",
//     link: "https://2048x.vercel.app/",
//     thumbnail: "/courses/2048.png",
//   },
//   {
//     title: "LinkedInX-clone",
//     link: "https://linkedinx.vercel.app/",
//     thumbnail: "/courses/linkedin.png",
//   },
//   {
//     title: "TIC-TAC-TOE-XGAME",
//     link: "https://tic-tac-toe-xgame.vercel.app/",
//     thumbnail: "/courses/tictactoe.png",
//   },
//   {
//   title: "Personal Portfolio",
//   link: "https://adi-gitx.vercel.app/",
//   thumbnail: "/courses/personalportfolio.png",
//   },
// {
//   title: "Thinkyfy App",
//   link: "https://Adityakammatiportfolio.vercel.app/",
//   thumbnail: "/courses/thinkyfy.png",
// },

];

function HomeProjects() {
  return <HeroParallax products={products} />;
}

export default HomeProjects;
