export default function Section2() {
    return (
        <div class="container" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "75px 0px" }}>
            <h1 class="heading" style={{ width: "40%", fontSize: "46px", fontWeight: "600", paddingLeft:"100px", alignSelf:"flex-start" }}>Snap photos and share like never before</h1>

            <div class="grid" style={{ display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"flex-start", padding:"0px 100px"}}>
                <div style={{width:"45%", alignSelf:"flex-start", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",gap:"12.5px", paddingBottom:"25px"}}>
                    <div class="card">
                        <h2>Sed ut perspiciatis</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                        <button class="learn-more"style={{ border: "none", color: "White", padding: "8px 24px", backgroundColor: "#40A2E3", borderRadius: "4px", fontSize: "16px" }}>Learn more</button>
                    </div>
                    <div class="card">
                        <h2>Lorem ipsum dolor</h2>
                        <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                        <button class="learn-more"style={{ border: "none", color: "White", padding: "8px 24px", backgroundColor: "#40A2E3", borderRadius: "4px", fontSize: "16px" }}>Learn more</button>
                    </div>
                </div>

                <div style={{width:"45%", alignSelf:"flex-start", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",gap:"25px", paddingBottom:"25px"}}>
                    <div class="card">
                        <h2>Nemo enim ipsam</h2>
                        <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.</p>
                        <button class="learn-more" style={{ border: "none", color: "White", padding: "8px 24px", backgroundColor: "#40A2E3", borderRadius: "4px", fontSize: "16px" }}>Learn more</button>
                    </div>
                    <div class="card">
                        <h2>Tempor incididunt</h2>
                        <p>Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                        <button class="learn-more"style={{ border: "none", color: "White", padding: "8px 24px", backgroundColor: "#40A2E3", borderRadius: "4px", fontSize: "16px" }}>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}