import trans from "../images/trans.jpg";
import { Button, } from '@mui/material';

function Third(){
    return (
        <>
        <h1 style={{marginLeft:'5%',marginTop:'5%'}}>Payment Terminals</h1>
          <p style={{marginLeft:'5%',width:'40%',fontSize:'16px',marginTop:'3%'}}>Purpose: Payment terminals process credit and debit card transactions.</p>
          <Button variant="outlined" style={{color:'#c89b78',border:'2px solid #c89b78',marginTop:'2%',borderRadius:'40px',marginLeft:'5%',padding:'20px 85px '}}><b>Learn More</b></Button>
          <img src={trans} style={{marginTop:-300,marginLeft:650,width:500}}></img>
          </>
    )
}
export default Third;