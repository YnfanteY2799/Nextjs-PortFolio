// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
  
    name: 'John Doe', 
    $: 999, 
    $1: 999, 
    named$: 'nine hundred', 
    names$: 'nine hundred', 
  
  });
}