// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  res.status(200).json([
    {
      division: "NodeJs Projects ", 
      subAddOnIcon:"/node.svg" ,
      subTitle:"Projects i've made while i was learning NodeJs, i mean this is a texting test", 
      projects:[
        {
          projectName:"Test1", 
          projectDescription:"Just Some API -- TEST1 \n", 
          source:"https://github.com/YnfanteY2799/Arrayfy-javascript",
          mainImg:"https://cdn.pixabay.com/photo/2020/02/29/09/27/chain-4889531_960_720.jpg", 
          secondImg:"/node.svg"
        },
        {projectName:"Test2", projectDescription:"Just Some API -- TEST2 \n", mainImg:"", secondImg:"/node.svg"},
        {projectName:"Test3", projectDescription:"Just Some API -- TEST3 \n", mainImg:"", secondImg:"/nodexpress.svg"},
        {projectName:"Test4", projectDescription:"Just Some API -- TEST3 \n", mainImg:"", secondImg:"/nodexpress.svg"},
        {projectName:"Test5", projectDescription:"Just Some API -- TEST3 \n", mainImg:"", secondImg:"/nodexpress.svg"},
        {projectName:"Test6", projectDescription:"Just Some API -- TEST3 \n", mainImg:"", secondImg:"/nodexpress.svg"},
        {projectName:"Test7", projectDescription:"Just Some API -- TEST3 \n", mainImg:"", secondImg:"/nodexpress.svg"},
      ]
    },
    {
      division: "Deno Projects ", 
      subAddOnIcon:"/deno.svg" ,
      subTitle:"Projects i've made while i was learning DenoJs, i mean this is a texting test",
      projects:[
        {projectName:"Test1", projectDescription:"Just Some API -- TEST1", mainImg:"", secondImg:"/deno.svg"},
        {projectName:"Test2", projectDescription:"Just Some API -- TEST2", mainImg:"", secondImg:"/deno.svg"},
        {projectName:"Test3", projectDescription:"Just Some API -- TEST3", mainImg:"", secondImg:"/deno.svg"},
      ]
    },
    {
      division: "Java Projects ", 
      subAddOnIcon:"/java.svg" ,
      subTitle:"Projects i've made while i was learning Java, i mean this is a texting test",
      projects:[
        {projectName:"Test1", projectDescription:"Just Some API -- TEST1", mainImg:"", secondImg:"/spring.svg"},
        {projectName:"Test2", projectDescription:"Just Some API -- TEST2", mainImg:"", secondImg:"/spring.svg"},
        {projectName:"Test3", projectDescription:"Just Some API -- TEST3", mainImg:"", secondImg:"/spring.svg"},
      ]
    },
    {
      division: "Rust Projects ", 
      subAddOnIcon:"/rust.svg" ,
      subTitle:"Projects i've made while i was learning Rust, i mean this is a texting test",
      projects:[
        {projectName:"Test1", projectDescription:"Just Some API -- TEST1", mainImg:"", secondImg:"/rust.svg",},
        {projectName:"Test2", projectDescription:"Just Some API -- TEST2", mainImg:"", secondImg:"/rust.svg"},
        {projectName:"Test3", projectDescription:"Just Some API -- TEST3", mainImg:"", secondImg:"/rust.svg"},
      ]
    },
  ]);
}