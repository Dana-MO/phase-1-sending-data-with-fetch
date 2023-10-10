// Add your code here

function submitData(userName, userEmail) {

    const userData = {
        name: userName,
        email: userEmail,
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(userData),
    };

    return (fetch("http://localhost:3000/users", configurationObject)
                .then(response => response.json())
                .then(json => {
                        const objId= json.id;

                        // Append the new id value to the DOM
                        const idElement = document.createElement("p");
                        idElement.textContent = `New ID: ${objId}`;
                        document.body.appendChild(idElement);
                    }
                    ))
                .catch(message => {
                    const errorElement = document.createElement("p");
                    errorElement.textContent = `Error: ${message}`;
                    document.body.appendChild(errorElement);
                });
}
