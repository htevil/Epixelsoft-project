import img1 from "../../asset/image-currency.jpg";
import img2 from "../../asset/image-plane.jpg";
import img3 from "../../asset/image-restaurant.jpg";
export default function Section3() {
    return (
        <div class="container" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "75px 0px 100px", gap: "50px" }}>
            <div class="section-header" style={{ padding: "0px 150px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "12.5px", textAlign: "center", marginBottom:"50px" }}>
                <span style={{ fontSize: "46px", fontWeight: "600" }}>Make your photos more stylish</span>
                <span style={{ fontSize: "32px", fontWeight: "400" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</span>
            </div>

            <div class="photo-cards" style={{ height: "fit-content", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "75px", padding: "0px 100px" }}>
                <div class="card" style={{width:"30%",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                    <img src={img1} alt="no_Image 1"style={{width:"100%", height:"260px"}} />
                    <div style={{padding:"15px 50px 25px", border:"2px solid #D8D9DA", borderTop:"none"}}>
                        <h3 style={{fontSize:"24px"}}>Sed ut perspiciatis</h3>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                    </div>
                </div>

                <div class="card"  style={{width:"30%",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <img src={img2} alt="no_Image 2" style={{width:"100%", height:"260px"}} />
                    <div style={{padding:"15px 50px 25px", border:"2px solid #D8D9DA", borderTop:"none"}}>
                        <h3  style={{fontSize:"24px"}}>Lorem ipsum dolor</h3>
                        <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>

                <div class="card" style={{width:"30%",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <img src={img3} alt="no_Image 3" style={{width:"100%", height:"260px"}} />
                    <div style={{padding:"15px 50px 25px", border:"2px solid #D8D9DA", borderTop:"none"}}>
                        <h3  style={{fontSize:"24px"}}>Nemo enim ipsam</h3>
                        <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt husshw sadjf.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}