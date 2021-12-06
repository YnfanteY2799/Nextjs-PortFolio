module.exports = {
  images: {
    domains: [
      'pexels.com', 
      'images.pexels.com', 
      'www.codewars.com', 
      'img.shields.io',
    ],
  },
  reactStrictMode: true,
  async redirects(){

    return [
      {source:"/PlayMe", destination: "/CodePlayGround", permanent:true },
      {source:"/ppp", destination: "/CodePlayGround", permanent:true },
      {source:"/", destination: "/Home", permanent:true },
      {source:"/Blogs", destination: "/Blog", permanent:true },


    ]
  }
}
