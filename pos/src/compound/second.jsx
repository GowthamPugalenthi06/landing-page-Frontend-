import sales from "../images/sales.jpg";
import { Button, } from '@mui/material';

function Second(){
    return (
        <>
          <h1  style={{marginLeft:'5%',marginTop:'5%'}}>Transaction Processing</h1>
          <p style={{marginLeft:'5%',width:'40%',fontSize:'16px',marginTop:'3%'}}>Purpose: POS software handles sales transactions, calculates totals, and tracks inventory.</p>
          <Button variant="outline" style={{color:'#c89b78',border:'2px solid #c89b78',marginTop:'2%',borderRadius:'40px',marginLeft:'5%',padding:'20px 85px '}}><b>Learn More</b></Button>
          <img src={sales} style={{marginTop:-300,marginLeft:650,width:500}}></img>
          </>
    )
}
export default Second;