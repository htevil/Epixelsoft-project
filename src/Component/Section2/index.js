import img1 from "../../asset/pexels-valdemaras-d-784301-1687678.jpg";

export default function Section2() {
    return (
        <div class="container" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "75px 0px", gap: "50px" }}>
            <div class="header" style={{ padding: "0px 150px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "12.5px", textAlign: "center" }} >
                <span style={{ fontSize: "46px", fontWeight: "600" }}>Have you ever posted any photo on social media?</span>
                <span style={{ fontSize: "32px", fontWeight: "400" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</span>
            </div>

            <div class="content" style={{ height:"fit-content",display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "100px", padding: "0px 100px" }}>
                <div class="text-section" style={{ width: "50%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",gap:"25px" }}>
                    <div>
                        <h3>Sed ut perspiciatis</h3>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                    </div>

                    <div>               
                        <h3>Lorem ipsum dolor</h3>
                        <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>


                    <div>
                        <h3>Nemo enim ipsam</h3>
                        <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
                    </div>

                </div>

                <div class="image-section" style={{ width: "60%", display:"flex", justifyContent:"flex-end", alignItems:"center" }}>
                    <img src={img1} alt="City buildings" style={{ width: "580px" }} />
                </div>
            </div>
        </div>
    );
}