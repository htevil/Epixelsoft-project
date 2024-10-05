import facebook from "../../asset/icon-facebook.svg";
import instagram from "../../asset/icon-instagram.svg";
import twitter from "../../asset/icon-twitter.svg";
import youtube from "../../asset/icon-youtube.svg";
import logo2 from "../../asset/Logo2.png"

export default function Footer() {
    return (
        <div style={{ width: "100%", maxWidth: "1560px", height: "fit-content", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#333", color: "white", padding: "25px 0px" }}>
            <div style={{ width: "90%", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #444", paddingBottom: "50px" }}>

                <img src={logo2} alt="Logo" style={{ width: "150px" }} />
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "150px" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "75px" }}>
                        <div>
                            <h4 style={{ fontSize: "14px", fontWeight: "bold" }}>Mobile app</h4>
                            <div style={{ fontSize: "14px" }}>
                                <span style={{ color: "white", textDecoration: "none", marginBottom: "8px" }}>Features</span><br />
                                <span style={{ color: "white", textDecoration: "none", marginBottom: "8px" }}>Live share</span><br />
                                <span style={{ color: "white", textDecoration: "none" }}>Video record</span>
                            </div>
                        </div>
                        <div>
                            <h4 style={{ fontSize: "14px", fontWeight: "bold" }}>Community</h4>
                            <div style={{ fontSize: "14px", marginTop: "10px" }}>
                                <span style={{ color: "white", textDecoration: "none", marginBottom: "8px" }}>Featured artists</span><br />
                                <span style={{ color: "white", textDecoration: "none", marginBottom: "8px" }}>The Portal</span><br />
                                <span style={{ color: "white", textDecoration: "none" }}>Live events</span>
                            </div>
                        </div>
                        <div>
                            <h4 style={{ fontSize: "14px", fontWeight: "bold" }}>Company</h4>
                            <div style={{ fontSize: "14px", marginTop: "10px" }}>
                                <span style={{ color: "white", textDecoration: "none", marginBottom: "5px" }}>About us</span><br />
                                <span style={{ color: "white", textDecoration: "none", marginBottom: "5px" }}>Contact us</span><br />
                                <span style={{ color: "white", textDecoration: "none" }}>History</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "15px" }}>
                        <button style={{ fontSize: "16px", fontWeight: "500", color: "White", padding: "6px 24px", backgroundColor: "#40A2E3", borderRadius: "4px", border: "none" }}>Register</button>
                        <button style={{ fontSize: "16px", fontWeight: "500", padding: "6px 32px", backgroundColor: "#ffffff", border: "2px solid #40A2E3", borderRadius: "4px", color: "#40A2E3" }}>Login</button>
                    </div>
                </div>
            </div>


            <div style={{ width: "90%", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "25px" }}>
                <p style={{ fontSize: "14px", marginTop: "20px" }}>© Photo, Inc. 2019. We love our users!</p>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                    <p style={{ marginBottom: "10px", fontSize:"14px", fontWeight:"300" }}>Follow us:</p>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                        <img src={facebook} alt="Facebook" style={{ width: "30px" }} />
                        <img src={instagram} alt="Twitter" style={{ width: "30px" }} />
                        <img src={twitter} alt="LinkedIn" style={{ width: "30px" }} />
                        <img src={youtube} alt="Instagram" style={{ width: "30px" }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
