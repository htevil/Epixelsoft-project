import { useState } from "react";

export default function Section4() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const { first_name, last_name, email, phone_number, password } = formData;

        if (!first_name) {
            setErrors({ ...errors, first_name: "First name is required" });
        } else if (!last_name) {
            setErrors({ ...errors, last_name: "Last name is required" });
        } else if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            setErrors({ ...errors, email: "Invalid email format" });
        } else if (!phone_number.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
            setErrors({ ...errors, phone_number: "Invalid phone number format" });
        } else if (password.length < 8) {
            setErrors({ ...errors, password: "Password must be at least 8 characters" });
        } else {
            console.log(formData);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    return (
        <div className="container" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "75px 0px 100px", gap: "25px" }}>
            <div className="section-header" style={{ padding: "0px 150px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "12.5px", textAlign: "center", marginBottom: "50px" }}>
                <span style={{ fontSize: "46px", fontWeight: "600" }}>Ready to take a free trial?</span>
                <span style={{ fontSize: "32px", fontWeight: "400" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
            </div>

            <form className="signup-box" style={{ width: "30%", padding: "50px", border: "2px solid #B2B2B2", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "25px" }}>
                <span style={{ alignSelf: "flex-start", fontSize: "24px", fontWeight: "700", margin: "10px 0px 15px" }}>Sign up for a free account</span>
                <div style={{ width: "100%", alignSelf: "flex-start", display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}>
                    <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First name" required style={{ width: "100%", padding: "8px 10px", border: "2px solid #D8D9DA" }} />
                    {errors.first_name && <div style={{ color: "red" }}>{errors.first_name}</div>}
                    <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last name" required style={{ width: "100%", padding: "8px 10px", border: "2px solid #D8D9DA" }} />
                    {errors.last_name && <div style={{ color: "red" }}>{errors.last_name}</div>}
                </div>
                <div style={{ width: "100%", alignSelf: "flex-start", display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address" required style={{ width: "100%", padding: "8px 10px", borderColor: "#F5F5F5", border: "2px solid #D8D9DA" }} />
                    {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
                    <input type="tel" name="phone_number" value ={formData.phone_number} onChange={handleChange} placeholder="Phone Number" required style={{ width: "100%", padding: "8px 10px", border: "2px solid #D8D9DA" }} />
                    {errors.phone_number && <div style={{ color: "red" }}>{errors.phone_number}</div>}
                </div>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Create password" required style={{ alignSelf: "flex-start", width: "95%", padding: "8px 10px", color: "#D8D9DA", border: "2px solid #D8D9DA" }} />
                {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
                <button type="submit" onClick={handleSubmit} style={{ alignSelf: "flex-start", border: "none", color: "White", padding: "10px 25px", backgroundColor: "#40A2E3", borderRadius: "4px", fontSize: "14px", fontWeight: "300" }}>Register</button>
            </form>

        </div>
    );
}