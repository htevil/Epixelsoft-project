import logo from "../../asset/logo.jpg";
import desktop from "../../asset/desktop5.jpg";
export default function () {
    return (
        <div className="header" style={{ width: "100%", maxWidth: "1560px", height: "fit-content",  display: "flex", flexDirection:"column", alignItems: "center", paddingBottom:"50px" }}>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",margin:"5px 0px 5px 0px"}}>
                <div style={{marginLeft:"50px"}}>
                    < img src={logo} alt="logo" style={{ width: "140px" }} />
                </div>
                <div style={{ display: "flex", gap: "25px", color: "#000000" }}>
                    <span id="btn" style={{ cursor: "pointer" }} >Feater</span>
                    <span id="btn" style={{ cursor: "pointer" }} >Pricing</span>
                    <span id="btn" style={{ cursor: "pointer" }} >Community</span>
                    <span id="btn" style={{ cursor: "pointer" }} >Support</span>
                </div>
                <div style={{ display: "flex", gap: "20px", textDecoration: "none", marginRight:"50px" }}>
                    <button style={{ fontSize: "16px", fontWeight: "500", padding: "6px 24px", backgroundColor: "#ffffff", border: "2px solid #40A2E3", borderRadius: "4px", color:"#40A2E3" }}>Login</button>
                    <button style={{ fontSize: "16px", fontWeight: "500", color: "White", padding: "6px 24px", backgroundColor: "#40A2E3", borderRadius: "4px", border: "none" }}>Register</button>
                </div>
            </div>
            <div style={{ width: "100%", height: "fit-content" }}>
                <img src={desktop} alt="no_desktop" style={{ width: "100%", height: "fit-content" }} />
            </div>
                <div style={{ position: "absolute", left: "45%", top: "70%", cursor: "pointer", zIndex: 9 }}>
                    <button style={{ border: "none", color: "White", padding: "12px 32px", backgroundColor: "#40A2E3", borderRadius: "4px", fontSize: "16px" }}>
                        Join Today
                    </button>
                </div>
        </div>
    );
}