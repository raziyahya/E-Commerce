var express = require('express');
const { response } = require('../app');
var router = express.Router();
var productHelper=require('../helpers/product-helpers');
const productHelpers = require('../helpers/product-helpers');
/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"IPHONE 13",
      category:'Mobile',
      description:"An ios based mobile phone",
      image:"https://imgs.search.brave.com/oH1cVQGjXytQIHPb25rCbKNcrEd0FG0D3dvlv0NiblY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM3/MTI4MzY0Ni9waG90/by9pcGhvbmUtMTMt/cHJvLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1Ca2RCZ0V3/N3BrQmRWeUItRnhy/U2phQnl3QWpieUJN/T2pSR3IyZUlKS09B/PQ"
    },
    {
      name:"IPHONE 14",
      category:'Mobile',
      description:"An ios based mobile phone",
      image:"https://imgs.search.brave.com/vCGkq3lsh7wb4dZRFP0YVE4qaWr5_6wxrvjHbVmt_Zw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWFjcnVtb3Jz/LmNvbS90L2doSTZO/TnpBUFBJUF94MVMt/SjFxZ3N2dlBkST0v/NDAweDAvYXJ0aWNs/ZS1uZXcvMjAyMS8w/OS9pcGhvbmUtMTQt/c2l6ZXMuanBnP2xv/c3N5"
    },
    {
      name:"IPHONE 15",
      category:'Mobile',
      description:"An ios based mobile phone",
      image:"https://imgs.search.brave.com/5asCchqPCdFDp8YeRAmzpo2lJ9n_FWGteEr-rBnGO04/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3ZH/ZlRKNU5KSFZNanlC/WDd4V2pkZFctMzIw/LTgwLmpwZWc"
    },
    {
      name:"Samsung Galaxy S20",
      category:'Mobile',
      description:"An android os based mobile phone",
      image:"https://imgs.search.brave.com/B1ip7tmP_OxkXfuB49Do4ydbw9r4tOpwH6gS9gigV4E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9vLmFv/bGNkbi5jb20vaW1h/Z2VzL2RpbXNlLzU4/NDVjYWRmZWNkOTk2/ZTAzNzJmL2M3OGVl/ZDcxNTU2ZjdiOWZl/MTUwOGU3ZjBkM2Vl/YTQwMDUyOWE5MjAv/WTNKdmNEMHhOakF3/SlRKRE1UQTJPQ1V5/UXpBbE1rTXdKbkYx/WVd4cGRIazlPRFVt/Wm05eWJXRjBQV3B3/WnlaeVpYTnBlbVU5/TVRZd01DVXlRekV3/TmpnbWFXMWhaMlZm/ZFhKcFBXaDBkSEJ6/SlROQkpUSkdKVEpH/Y3k1NWFXMW5MbU52/YlNVeVJtOXpKVEpH/WTNKbFlYUnlMWFZ3/Ykc5aFpHVmtMV2x0/WVdkbGN5VXlSakl3/TWpBdE1ETWxNa1l3/T0RWbU1tRmtNQzAy/TjJFNUxURXhaV0V0/WWpkalppMHpZV1Jt/TlRJMU5UWXlNMkVt/WTJ4cFpXNTBQV0V4/WVdOaFl6TmxNV0l6/TWprd09URTNaRGt5/Sm5OcFoyNWhkSFZ5/WlQxaVpHTmpNRFZo/T1dJek0yTXlNakE0/WkRBM01HRm1NelE1/WldRd056WTJZakUw/T1dJMllUVXg.jpeg"
    }

    
  ]
  res.render('admin/view-products',{admin:true,products})
});
router.get('/add-product',function(req,res){
  res.render('admin/add-product')
})

router.post('/add-product',(req,res)=>{


  productHelpers.addProduct(req.body,(id)=>{
    let image=req.files.Image
    console.log(id)
    image.mv('./public/product-images/'+id+'.jpg',(err)=>{
      if(!err){
        res.render("admin/add-product")
      }else{
        console.log(err)
      }
    })
   
  })
})
module.exports = router;
