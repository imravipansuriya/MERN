import React from 'react'

export default function Forms() {

    const [name, setName] = React.useState(""); // state hook
    const [email, setEmail] = React.useState(""); // state hook
    const [checked, setChecked] = React.useState(true); // state hook
    const [selected, setSelected] = React.useState(""); // state hook

    const selectOptions = [
        "Volvo", "Saab", "Mercedes", "Honda", "Toyota", "BMW", "Audi"
    ]

    const handleClick = () => {
        console.log("Button clicked")
        console.log({
            name,
            email,
            checked,
            selected
        })
    }

    const handleChange = (event) => {
        if (event.target.name === "name") {
            setName(event.target.value)
        } else if (event.target.name === "email") {
            setEmail(event.target.value)
        } else if (event.target.name === "checkbox") {
            console.log(event.target)
            setChecked(event.target.checked)
        } else if (event.target.name === "selected") {
            setSelected(event.target.value)
        }
    }

    return (
        <div>
            <input type={"text"} value={name} name="name" onChange={handleChange} />
            <input type={"email"} value={email} name="email" onChange={handleChange} />
            <input type={"checkbox"} checked={checked} name="checkbox" onChange={handleChange} />
            <br />
            <select value={selected} name="selected" onChange={handleChange} >
                <option value={""}>Please Select one Option</option>
                {
                    selectOptions.map((option, index) => {
                        return <option key={index} value={option}>{option}</option>
                    })
                }
            </select>
            <br />
            <button disabled={name && email && selected && checked ? false: true} onClick={handleClick}>Submit</button>
        </div>
    )
}
