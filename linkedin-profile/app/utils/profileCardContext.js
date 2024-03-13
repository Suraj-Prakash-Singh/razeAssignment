import { createContext } from "react";

const profileCardContext = createContext({
    profileObject: {
        name: "Suraj Prakash Singh",
        designation: "Former SDE Intern @Amazon",
        location: "Hyderabad, Telangana, India"
    },
    updateValue: undefined,
})

export default profileCardContext;