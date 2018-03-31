import React from 'react';

class Draft extends React.Component{
	render(){
		return (
            <div>
            	<h4>1, upload</h4>
            	<h4>2, subject <small>eg: HW2018/G T_PLUS/C1803X7</small></h4>
            	<h4>3, e-mail</h4>
            	<table className='table table-hover table-bordered table-striped col-md-6' style={{width:"60%"}}>
            		<thead>
            			<tr className='success'>
            				<th>e-mail</th>
            				<th>right</th>
            			</tr>
            		</thead>
            		<tbody>
            			<tr>
            				<td>chris@benchmarkdesign.org</td>
            				<td>Moderator,Disabled</td>
            			</tr>
            			<tr>
            				<td>Darla Box</td>
            				<td>Moderator,Disabled</td>
            			</tr>
            			<tr>
            				<td>delandra</td>
            				<td>Reviewer,Disabled</td>
            			</tr>
            			<tr>
            				<td>miche</td>
            				<td>Reviewer,Disabled</td>
            			</tr>
            			<tr className="danger">
            				<td>D18?-->Yes, so add shawn</td>
            				<td>Reviewer,Disabled</td>
            			</tr>
            			<tr className="info">
            				<td>Primary supplier</td>
            				<td>Reviewer & Approval;Daily Summary</td>
            			</tr>
            			<tr>
            				<td>optional reviewer</td>
            				<td>Reviewer;Decision</td>
            			</tr>
            		</tbody>
            	</table>
            	<hr/>
            	<h4 className='col-md-12'>4, contex</h4>
            	<div className='message col-md-12'>
                    Dear Supplier, <br/>
<br/>
The following 13 DRAFT ARTWORK FILES are for your first approval:<br/>
<br/>
D67VAL_1707A201_SiliconePan_KQ-333074_HT_R<br/>
D67VAL_1707A202_MiniSqueezeBottle_KQ-333001_LB_R<br/>
D67VAL_1707A203_CookieCutters_KQ-333021_BC_R<br/>
D67VAL_1707A204_CookieCutters_KQ-333067_BC_R<br/>
D67VAL_1707A205_CookieCutters_KQ-333007_BC_R<br/>
D67VAL_1707A206_CookieCutters_KQ-333069_BC_R<br/>
D67VAL_1707A207_CookieCutter_KQ-333006_BC_R<br/>
D67VAL_1707A208_3CookieCutters_KQ-333004_BX_R<br/>
D67VAL_1707A209_6MiniCookieCutters_KQ-333080_BX_R<br/>
D67VAL_1707A210_6CookieCutters_KQ-333008_HT_R<br/>
D67VAL_1707A211_SiliconePan_KQ-333009_BB_R<br/>
D67VAL_1707A212_TreatContainers_KQ-333013_HC_R<br/>
D67VAL_1707A213_TreatSacks_KQ-333010_HC_R<br/>
<br/>
Program: Valentine	<br/>
Supplier: Ningbo Qtop Imp&Exp Co.,Ltd.<br/>	
Buyer: Dylan Breeding (D67)	<br/>
Artwork due date: <br/>
Packout date: <br/>
Shipdate: <br/>
In-store date: 12/26/2017	<br/>
Status: for approval	<br/>


<p><b>Supplier:</b> <br/>As a private brand supplier to Walmart, you are solely responsible for providing a safe product (including all labeling and packaging accompanying the product) that complies with all laws. As between Walmart and the Supplier, Supplier is solely responsible for the accuracy of all product labeling. When you, through your duly authorized representative(s), “approve” product labels and artwork by following the process set out below, you confirm: (1) that you have reviewed this label; (2) all information provided on the label is truthful, accurate and not misleading; and (3) your contractual defense and indemnity obligations to Walmart for all claims related to the product, including claims related to the labeling. The approval of content by Walmart does not release the Supplier from any legal responsibility.
<br/><span style={{textDecoration:'underline'}}>Please review this packaging proof and provide your feedback in proof within 2 business days (or 48 hours) of the date this email was sent.
</span>
</p>

<p>
	Supplier: Please carefully review artwork in this proof and verify that all of the following are accurate: <br/>
· UPCs and VSNs <br/>
· Item descriptions, feature copy and product claims <br/>
· Warnings, cautions, and warranties, including the placement and size of graphic elements and fonts<br/>
· Sizing information (net wt., pieces, dimensions, etc.) per FPLA, NIST, and all other federal and state regulatory guidelines

</p>
<p>
	Product Development Manager: Please review artwork in this proof to verify that the artwork meets objectives in terms of: <br/>
· VSNs<br/>
· Product name and photography<br/>
· Packaging formats/orientation<br/>
· Feature and benefit communication/hierarchy<br/>
Walmart Packaging team reviews the copy, dielines and graphic assets to ensure consistency within the brand.  <br/> 
</p>         		
            	</div>
            </div>
		);
	}
}
export default Draft;