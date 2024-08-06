import reci from "../images/reci.jpg";
import { Button, } from '@mui/material';

function First(){
    return (
        <>
        <h1  style={{marginLeft:'5%',marginTop:'5%'}}>Receipt Printers</h1>
          <p style={{marginLeft:'5%',width:'40%',fontSize:'16px',marginTop:'3%'}}>Purpose: Receipt printers generate paper or digital receipts for customers after a transaction.</p>
          <Button variant="outlined" style={{color:'#c89b78',border:'2px solid #c89b78',marginTop:'2%',borderRadius:'40px',marginLeft:'5%',padding:'20px 85px '}}><b>Learn More</b></Button>
          <img src={reci} style={{marginTop:-300,marginLeft:600,width:500}}></img>
          </>
    )
}
export default First;