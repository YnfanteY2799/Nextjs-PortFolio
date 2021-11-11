module.exports = {
  images: {
    domains: ['pexels.com', 'images.pexels.com'],
  },
  reactStrictMode: true,
  async redirects(){

    return [
      {source:"/PlayMe", destination: "/CodePlayGround", permanent:true },
      {source:"/pppppp", destination: "/CodePlayGround", permanent:true },
      {source:"/", destination: "/Home", permanent:true },


    ]
  }
}
